import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { SIGN_EVENT } from "../sign_events";
import { AdPos, AdState } from "../../ad/adConstants";
import Constants from "../../common/constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SignScene extends BaseUi {
    _dayMap: any = null // 7天签到
    _accumulateMap: any = null // 累计签到

    _curSignType: number = 1
    _curSignDay: number = -1
    _curAwardType: number = 1

    @property(cc.SpriteFrame)
    signAwardBg2 = null;
    @property(cc.SpriteFrame)
    signAwardBgBig2 = null;    
    @property(cc.SpriteFrame)
    signSptAwardNormal = null;
    @property(cc.SpriteFrame)
    signSptAwardBigNormal = null;
    @property(cc.SpriteFrame)
    signDay1 = null;
    @property(cc.SpriteFrame)
    signDay2 = null;
    @property(cc.SpriteFrame)
    signDay3 = null;
    @property(cc.SpriteFrame)
    signDay4 = null;
    @property(cc.SpriteFrame)
    signDay5 = null;
    @property(cc.SpriteFrame)
    signDay6 = null;
    @property(cc.SpriteFrame)
    signDay7 = null;
    @property(cc.SpriteFrame)
    signVideo = null;
    @property(cc.SpriteFrame)
    signBtnAwarded = null;
    @property(cc.SpriteFrame)
    signSptAwarded = null;

    @property(cc.SpriteFrame)
    signAccu2 = null;
    @property(cc.SpriteFrame)
    signAccu3 = null;

    @property(cc.Prefab)
    signDay = null;
    @property(cc.Prefab)
    signAccumulateDay = null;

    lastTween: cc.Tween = null
   
    onOpen() {
        this.initEvent()
        this.initButton()

        this._dayMap = new Map()
        this._accumulateMap = new Map()
        if (this.initParam && this.initParam.signProgress && this.initParam.signProgress.length>0) {
            this.getSignProgressRsp(this.initParam.signProgress)
        } else {
            izx.dispatchEvent(SIGN_EVENT.GET_SIGN_PROGRESS_REQ, {
                uid: izx.user.uid,
            }, true)
        }
        izx.pluginMgr.logEvent("SignScene_onOpen", {})
    }

    onClose() {
        console.log("Sign onClose")
        super.onClose()
      }

    initEvent() {
        izx.on(SIGN_EVENT.GET_SIGN_PROGRESS_RSP, this.getSignProgressRsp, this)
        izx.on(SIGN_EVENT.AWARD_SIGN, this.awardSign, this)
        izx.on(SIGN_EVENT.AWARD_SIGNED, this.awardSigned, this)
    }

    initButton() {
        izx.bindButtonClick("close", this.node, (sender, data) => {
            this.pop()
            if (this.initParam && this.initParam.bBcs) {
                izx.dispatchEvent(Constants.EventName.PRE_LOAD_ACTIVITY_PIC, this.initParam.bBcs)
            }
        })
    }

    touchMain() {
    }

    onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchMain, this ,true);
    }

    onDisable() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.touchMain, this,true);
    }

    getSignProgressRsp(msg) {
        if (!msg || msg.length === 0) {
            return
        }

        var curDay = new Date(Date.now()).getDay()
        var logDay= new Date(msg.daily_time * 1000).getDay()
        izx.log(logDay,curDay)

        // 每日签到
        let bPrevAward = false // 当日之前能否领取
        for (let i = msg.daily_items.length; i > 0 ; i--) {
            let item = msg.daily_items[i-1]
            let day = this._dayMap.get(item.day)
            if (!day) {
                if (item.day < 7) {
                    day = cc.instantiate(this.signDay)
                    day.active = true
                    this._dayMap.set(item.day, day)
                    let nodeDay = this.node.getChildByName("nd_day_" + item.day)
                    nodeDay.addChild(day)
                } else {
                    day = this.node.getChildByName("nd_day_7")
                    day.active = true
                    this._dayMap.set(7, day)
                }
            }
            day.getChildByName("SptDay").getComponent(cc.Sprite).spriteFrame = this["signDay" + item.day]
            day.getChildByName("LblNum").getComponent(cc.Label).string = item.awards[0].num
            let sptLight = day.getChildByName("SptLight")
            let sptJl = day.getChildByName("SptAward")
            // 远程 url 带图片后缀名
            if (item.awards[0].icon) {
                if (i <= 4) {
                    sptJl.scale = 1
                } else if (i == 5) {
                    sptJl.scale = 0.9
                } else if (i < 7) {
                    sptJl.scale = 0.55
                }
                cc.assetManager.loadRemote(item.awards[0].icon, function (err, texture) {
                    if (err) {
                        sptJl.active = true
                        return
                    }
                    sptJl.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(<cc.Texture2D>texture)
                    sptJl.active = true
                });
            }

            if (item.award_status == 1) { // 可领取
                if (logDay == curDay && item.day == curDay) { // 当天
                    let btnAward = day.getChildByName("BtnAward")
                    if (item.day < 7) {
                        btnAward.getComponent(cc.Sprite).spriteFrame = this.signAwardBg2
                    } else {
                        btnAward.getComponent(cc.Sprite).spriteFrame = this.signAwardBgBig2
                    }
                    let BtnAwardNormal = cc.find("Layout/BtnAwardNormal", this.node)
                    BtnAwardNormal.active = true

                    day.getChildByName("SptDot").active = true
                    sptLight.active = true
                    let scale = sptJl.scale
                    this.lastTween = cc.tween(sptJl).to(0.8, {scale: scale * 0.8}).to(0.8, {scale: scale}).union().repeatForever().start()
                    izx.bindButtonClick("BtnAward", day, () => {
                        izx.dispatchEvent(SIGN_EVENT.GET_SIGN_AWARD_REQ, {
                            uid: izx.user.uid,
                            sign_type: 1,
                            sign_day: item.day,
                            award_type: 1,
                        })
                    })
                    this._curSignType = 1
                    this._curSignDay = item.day
                    this._curAwardType = 2

                    izx.dispatchEvent(SIGN_EVENT.AWARD_SIGN)
                } else if (bPrevAward) { // 不是当天
                    bPrevAward = false
                    day.getChildByName("SptDay").getComponent(cc.Sprite).spriteFrame = this.signVideo
                    let btnAward = day.getChildByName("BtnAward")
                    btnAward.getComponent(cc.Sprite).spriteFrame = this.signAwardBg2

                    day.getChildByName("SptDot").active = true
                    sptLight.active = true
                    let scale = sptJl.scale
                    this.lastTween = cc.tween(sptJl).to(0.8, {scale: scale * 0.8}).to(0.8, {scale: scale}).union().repeatForever().start()
                    izx.bindButtonClick("BtnAward", day, () => {
                        izx.audioMgr.playBtn()
                        izx.dispatchEvent(SIGN_EVENT.UPT_SIGN_AD_STATE_REQ, {
                            uid: izx.user.uid,
                            state: AdState.OrderInit,
                            typ: 3,
                            sign_day: item.day
                        })
                    })
                    this._curSignType = 1
                    this._curSignDay = item.day
                    this._curAwardType = 2

                    izx.dispatchEvent(SIGN_EVENT.AWARD_SIGN)
                } else {
                    day.getChildByName("SptDay").getComponent(cc.Sprite).spriteFrame = this.signVideo
                }
                let BtnAwardDouble = cc.find("Layout/BtnAwardDouble", this.node)
                BtnAwardDouble.active = true
            } else if (item.award_status == 2) { // 已领取
                if (logDay == curDay && item.day == curDay) { // 当天
                    bPrevAward = true

                    let BtnAwardDouble = cc.find("Layout/BtnAwardDouble", this.node)
                    BtnAwardDouble.getComponent(cc.Button).interactable = false
                    let Background = cc.find("Layout/BtnAwardDouble/Background", this.node)
                    Background.getComponent(cc.Sprite).spriteFrame = this.signBtnAwarded
                    let SptStatus = cc.find("Layout/BtnAwardDouble/Background/SptStatus", this.node)
                    SptStatus.getComponent(cc.Sprite).spriteFrame = this.signSptAwarded
                    let SptDot = cc.find("Layout/BtnAwardDouble/Background/SptDot", this.node)
                    SptDot.active = false
                    BtnAwardDouble.active = true
                    let BtnAwardNormal = cc.find("Layout/BtnAwardNormal", this.node)
                    BtnAwardNormal.active = false
                }
                if (this.lastTween) {
                    this.lastTween.stop()
                }
                izx.dispatchEvent(SIGN_EVENT.AWARD_SIGNED, day)
            }
        }

        // 累计签到
        let nodeAccu = this.node.getChildByName("NodeAccu")
        for (let item of msg.accumulate_items) {
            let accumulate = this._accumulateMap.get(item.count)
            if (!accumulate) {
                accumulate = cc.instantiate(this.signAccumulateDay)
                this._accumulateMap.set(item.count, accumulate)
                let nodeAccumulate = nodeAccu.getChildByName("nd_accumulate_" + item.count)
                nodeAccumulate.addChild(accumulate)
            }
            accumulate.active = true
            // 远程 url 带图片后缀名
            if (item.awards[0].icon) {
                let sptJl = accumulate.getChildByName("SptAward")
                if (item.count == 3) {
                    sptJl.scale = 0.55
                } else if (item.count == 5) {
                    sptJl.scale = 1
                } else if (item.count == 7) {
                    sptJl.scale = 0.9
                }
                cc.assetManager.loadRemote(item.awards[0].icon, function (err, texture) {
                    if (err) {
                        sptJl.active = true
                        return
                    }
                    sptJl.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(<cc.Texture2D>texture)
                    sptJl.active = true
                });
            }
            accumulate.getChildByName("LblDay").getComponent(cc.Label).string = item.count + "天"
            accumulate.getChildByName("LblNum").getComponent(cc.Label).string = item.awards[0].num
            let BtnAccumulate = accumulate.getChildByName("BtnAccumulate")
            if (item.award_status == 1) { // 可领取
                accumulate.getChildByName("SptBg").getComponent(cc.Sprite).spriteFrame = this.signAccu2
                izx.bindButtonClick(BtnAccumulate, accumulate, () => {
                    izx.audioMgr.playBtn()
                    izx.dispatchEvent(SIGN_EVENT.GET_SIGN_AWARD_REQ, {
                        uid: izx.user.uid,
                        sign_type: 2,
                        sign_day: item.count,
                        award_type: 1,
                    })
                })
            } else if (item.award_status == 2) { // 已领取
                accumulate.getChildByName("SptBg").getComponent(cc.Sprite).spriteFrame = this.signAccu3
                accumulate.getChildByName("SptAwarded").active = true
                BtnAccumulate.getComponent(cc.Button).interactable = false
            }
        }
    }

    awardSign(obj) {
        // 底下大按钮领取
        let BtnAwardDouble = cc.find("Layout/BtnAwardDouble", this.node)
        izx.bindButtonClick(BtnAwardDouble, this.node, () => {
            izx.audioMgr.playBtn()
            izx.dispatchEvent(SIGN_EVENT.UPT_SIGN_AD_STATE_REQ, {
                uid: izx.user.uid,
                state: AdState.OrderInit,
                typ: 2,
                sign_day: this._curSignDay
            })
        })
        let BtnAwardNormal = cc.find("Layout/BtnAwardNormal", this.node)
        izx.bindButtonClick(BtnAwardNormal, this.node, () => {
            izx.audioMgr.playBtn()
            izx.dispatchEvent(SIGN_EVENT.GET_SIGN_AWARD_REQ, {
                uid: izx.user.uid,
                sign_type: 1,
                sign_day: this._curSignDay,
                award_type: 1,
            })
        })
    }

    awardSigned(obj) {
        obj.getChildByName("SptMask").active = true
        obj.getChildByName("SptYlq").active = true
        obj.getChildByName("SptLight").active = false
        obj.getChildByName("SptDot").active = false

        let btnAward = obj.getChildByName("BtnAward")
        btnAward.getComponent(cc.Button).interactable = false
        btnAward.getComponent(cc.Sprite).spriteFrame = this.signSptAwardNormal

    }
}
