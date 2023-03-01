import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { GIFT_EVENT } from "../gift_events";
import { AdPos } from "../../ad/adConstants";
import { AD_EVENT } from "../../ad/adEvents";
import Constants, { COMMON_CONSTANT } from "../../common/constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GiftMain extends BaseUi {
    _content: cc.Node = null // 列表

    @property(cc.Prefab)
    giftItem = null;
    @property(cc.SpriteFrame)
    sptGreen = null
    @property(cc.SpriteFrame)
    sptGray = null
    @property(cc.SpriteFrame)
    sptDay1 = null
    @property(cc.SpriteFrame)
    sptDay2 = null
    @property(cc.SpriteFrame)
    sptDay3 = null
    @property(cc.SpriteFrame)
    sptDay4 = null
    @property(cc.SpriteFrame)
    sptDay5 = null
    @property(cc.SpriteFrame)
    sptDay6 = null
    @property(cc.SpriteFrame)
    sptDayTitle1 = null
    @property(cc.SpriteFrame)
    sptDayTitle2 = null
    @property(cc.SpriteFrame)
    sptDayTitle3 = null
    @property(cc.SpriteFrame)
    sptDayTitle4 = null
    @property(cc.SpriteFrame)
    sptDayTitle5 = null
    @property(cc.SpriteFrame)
    sptDayTitle6 = null
    @property(cc.SpriteFrame)
    sptLq = null
    @property(cc.SpriteFrame)
    sptYlq = null

    usedUp: boolean = false
   
    onOpen() {
        this.node.runAction(cc.scaleTo(0.35, 1).easing(cc.easeBackOut()))
        this._content = cc.find("ScrollView/view/content", this.node)

        this.initEvent()
        this.initButton()
        
        if (this.initParam && this.initParam.giftProgress && this.initParam.giftProgress.length>0) {
            this.getGiftProgressRsp(this.initParam.giftProgress)
        } else {
            izx.dispatchEvent(GIFT_EVENT.GET_GIFT_PROGRESS_REQ, {
                uid: izx.user.uid,
            })
        }
        izx.pluginMgr.logEvent("GiftMain_onOpen", {})
    }

    initEvent() {
        izx.on(GIFT_EVENT.GET_GIFT_PROGRESS_RSP, this.getGiftProgressRsp, this)
    }

    initButton() {
        izx.bindButtonClick("BtnClose", this.node, (sender, data) => {
            this.pop()
            if (this.initParam && this.initParam.bQd) {
                izx.dispatchEvent(Constants.EventName.PRE_LOAD_SIGN_PIC, this.initParam.bQd, this.initParam.bBcs)
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

    getGiftProgressRsp(msg) {
        if (!msg || msg.length === 0) {
            return
        }

        this._content.removeAllChildren()
        let dayArray = ['一','二','三','四','五','六',]
        let bTomorrow = false
        for (let gift of msg) {
            let nItem = cc.instantiate(this.giftItem)
            let lblDay = nItem.getChildByName("LblDay")
            lblDay.getComponent(cc.Label).string = "第" + dayArray[gift.index-1] + "天"
            let sptDay = nItem.getChildByName("SptDay")
            sptDay.getComponent(cc.Sprite).spriteFrame = this["sptDayTitle" + gift.index]
            let sptAward1 = nItem.getChildByName("SptAward1")
            let layoutDesc1 = nItem.getChildByName("LayoutDesc1")
            let num = Number(gift.awards[0].num)
            if (num>=10000) {
                layoutDesc1.getChildByName("LblNum").getComponent(cc.Label).string = num/10000 + "w"
            } else {
                layoutDesc1.getChildByName("LblNum").getComponent(cc.Label).string = num
            }
            if (!gift.awards[0].prop_id || gift.awards[0].prop_id == COMMON_CONSTANT.ITEM_JINBI) {
                layoutDesc1.getChildByName("SptJd").active = true
            } else if (gift.awards[0].prop_id == COMMON_CONSTANT.ITEM_DIAMOND) {
                layoutDesc1.getChildByName("SptZs").active = true
            } else if (gift.awards[0].prop_id == COMMON_CONSTANT.ITEM_VIP_EXP) {
                layoutDesc1.getChildByName("SptVipExp").active = true
            }
            // 远程 url 带图片后缀名
            if (gift.awards[0].icon) {
                cc.assetManager.loadRemote(gift.awards[0].icon, function (err, texture) {
                    if (err) {
                        sptAward1.active = true
                        return
                    }
                    sptAward1.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(<cc.Texture2D>texture)
                    sptAward1.active = true
                });
            } else {
                sptAward1.active = true
            }
            let sptAward2 = nItem.getChildByName("SptAward2")
            let layoutDesc2 = nItem.getChildByName("LayoutDesc2")
            num = Number(gift.awards[1].num)
            if (num>=10000) {
                layoutDesc2.getChildByName("LblNum").getComponent(cc.Label).string = num/10000 + "w"
            } else {
                layoutDesc2.getChildByName("LblNum").getComponent(cc.Label).string = num
            }
            if (!gift.awards[1].prop_id || gift.awards[1].prop_id == COMMON_CONSTANT.ITEM_JINBI) {
                layoutDesc2.getChildByName("SptJd").active = true
            } else if (gift.awards[1].prop_id == COMMON_CONSTANT.ITEM_DIAMOND) {
                layoutDesc2.getChildByName("SptZs").active = true
            } else if (gift.awards[1].prop_id == COMMON_CONSTANT.ITEM_VIP_EXP) {
                layoutDesc2.getChildByName("SptVipExp").active = true
            }
            // 远程 url 带图片后缀名
            if (gift.awards[1].icon) {
                if (gift.index <= 3) {
                } else {
                    sptAward2.scale = 0.45
                }
                cc.assetManager.loadRemote(gift.awards[1].icon, function (err, texture) {
                    if (err) {
                        sptAward2.active = true
                        return
                    }
                    sptAward2.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(<cc.Texture2D>texture)
                    sptAward2.active = true
                });
            } else {
                sptAward2.active = true
            }
            let btnAward = nItem.getChildByName("BtnAward")
            if (gift.status == 1) { // 明日再来
                if (bTomorrow) {
                    bTomorrow = false
                } else {
                    btnAward.getChildByName("SptStatus").getComponent(cc.Sprite).spriteFrame = this["sptDay" + gift.index]
                }
            } else if (gift.status == 2) { // 可领取
                let sptSelect = nItem.getChildByName("SptSelect")
                sptSelect.active = true
                sptSelect.runAction(cc.repeatForever(cc.sequence(
                    cc.fadeIn(0.8),
                    cc.fadeOut(0.8),
                )))
                btnAward.getComponent(cc.Button).interactable = true
                btnAward.getComponent(cc.Sprite).spriteFrame = this.sptGreen
                btnAward.getChildByName("SptStatus").getComponent(cc.Sprite).spriteFrame = this.sptLq
                btnAward.getChildByName("SptSpot").active = true
                bTomorrow = true
            } else if (gift.status == 3) { // 已领取
                btnAward.getComponent(cc.Sprite).spriteFrame = this.sptGray
                btnAward.getChildByName("SptStatus").getComponent(cc.Sprite).spriteFrame = this.sptYlq
                btnAward.getChildByName("SptSpot").active = false
                nItem.getChildByName("SptMask").active = true
                bTomorrow = true
            }
            izx.bindButtonClick(btnAward, nItem, (sender, data) => {
                izx.audioMgr.playBtn()
                izx.dispatchEvent(GIFT_EVENT.GET_GIFT_AWARD_REQ, {
                    uid: izx.user.uid,
                    id: gift.id,
                })
            })
            this._content.addChild(nItem)
        }
    }
}
