import BaseUI from "../../framework/base/baseUI"
import { izx } from "../../framework/izx"
import Constants, { COMMON_CONSTANT, ITEM_ICON_URL } from "../../common/constants"
import { LOTTERY_EVENT } from "../lottery_events"
import { AdState } from "../../ad/adConstants"

const { ccclass } = cc._decorator

@ccclass
export default class Lottery extends BaseUI {

    _zeroIdx: number = -1

    _playAni: boolean = false

    onOpen() {        
        this._zeroIdx = 0

        this.initEvent()
        this.initButtonEvent()

        if (this.initParam && this.initParam.awards && this.initParam.awards.length>0) {
            this.updateLotteryView(this.initParam)
        } else {
            izx.dispatchEvent(LOTTERY_EVENT.GET_LOTTERY_CFG_REQ, {
                uid: izx.user.uid,
            })
        }
    }

    initEvent() {
        izx.on(LOTTERY_EVENT.GET_LOTTERY_CFG_RSP, this.updateLotteryView, this)
        izx.on(LOTTERY_EVENT.GET_LOTTERY_AWARD_RSP, this.drawLotteryAni, this)
        izx.on(Constants.EventName.LOTTERY_CLOSE_MAIN, ()=> {
            this.pop()
        }, this)
    }

    initButtonEvent() {
        izx.bindButtonClick("BtnAd", this.node, (sender, data) => {
            this.onPressDraw()
        })
        izx.bindButtonClick("BtnDraw", this.node, (sender, data) => {
            this.onPressDraw()
        })
        izx.bindButtonClick("BtnClose", this.node, (sender, data) => {
            this.pop()
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

    updateLotteryView(msg) {
        if (!msg)
            return

        let panel = this.node.getChildByName("panel")
        for (let idx in panel.children) {
            let child = panel.children[idx]
            if (msg.awards[idx]) {
                let item_index = msg.awards[idx].item_index
                if (item_index) {
                    let sptIcon = child.getChildByName("SptAward")
                    // 远程 url 带图片后缀名
                    let item_id = msg.awards[idx].item_id ? msg.awards[idx].item_id : COMMON_CONSTANT.ITEM_JINBI
                    let item_id_url = ITEM_ICON_URL["ITEM_" + item_id + "_" + item_index]
                    if (item_id_url) {
                        if (item_id == COMMON_CONSTANT.ITEM_JINBI) {
                            if (item_index <= 3) {
                            } else {
                                sptIcon.scale = 0.55
                            }
                        } else if (item_id == COMMON_CONSTANT.ITEM_DIAMOND) {
                            if (item_index <= 1) {
                            } else if (item_index == 2) {
                                sptIcon.scale = 0.75
                            } else {
                                sptIcon.scale = 0.7
                            }
                        }
                        cc.assetManager.loadRemote(item_id_url, function (err, texture) {
                            if (err) {
                                sptIcon.active = true
                                return
                            }
                            sptIcon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(<cc.Texture2D>texture)
                            sptIcon.active = true
                        });
                    } else {
                        sptIcon.active = true
                    }
                }
                let lblDesc = cc.find("Layout/LblDesc", child)
                lblDesc.getComponent(cc.Label).string = msg.awards[idx].item_min
                if (!msg.awards[idx].item_id || msg.awards[idx].item_id==COMMON_CONSTANT.ITEM_JINBI) {
                    let sptJd = cc.find("Layout/SptJd", child)
                    sptJd.active = true
                } else if (msg.awards[idx].item_id==COMMON_CONSTANT.ITEM_DIAMOND) {
                    let sptZs = cc.find("Layout/SptZs", child)
                    sptZs.active = true
                }
            }
        }
    }

    onPressDraw() {
        // izx.dispatchEvent(LOTTERY_EVENT.GET_LOTTERY_AWARD_REQ, {
        //     uid: izx.user.uid,
        // })
        izx.dispatchEvent(LOTTERY_EVENT.UPT_LOTTERY_AD_STATE_REQ, {
            uid: izx.user.uid,
            state: AdState.OrderInit
        })
    }

    drawLotteryAni(msg) {
        if (!msg) {
            return
        }
        this._playAni = true
        let award_idx = msg.award_idx ? msg.award_idx : 0
        let offset = (this._zeroIdx + 8 - award_idx) % 8 
        this._zeroIdx = award_idx
        let panel = this.node.getChildByName("panel")
        cc.tween(panel).by(2.5, { angle: -360 * 8 + (-360 / 8) * offset + 22.5}, { easing: 'sineInOut'}).call(() => {
            let awards = new Array(msg.awards.length)
            for(var i = 0; i<msg.awards.length; i++) {
                let award = msg.awards[i]
                let id = award.id ? award.id : 0
                awards[i] = {index:id, num:award.num}
            }
            izx.dispatchEvent(Constants.EventName.SHOW_AWARDS, {awards: awards})
        }).start()
    }
}