import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { VIP_EVENT } from "../vip_events";
import {COMMON_CONSTANT} from "../../common/constants";
import { AD_EVENT } from "../../ad/adEvents";
import { AdPos } from "../../ad/adConstants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SendVipMain extends BaseUi {
    _canGetAward = true // 可领取奖励

    _sptTip: cc.Node = null
    _lblTip: cc.Label = null

    onOpen() {
        this.node.runAction(cc.scaleTo(0.35, 1).easing(cc.easeBackOut()))

        this.initEvent()
        this.initButton()
        this.updateAdCount()

        this._sptTip = this.node.getChildByName("SptTip")
        this._lblTip = this._sptTip.getChildByName("LblTip").getComponent(cc.Label)

        if (this.initParam && this.initParam.length > 0) {
            this.getSendVipConfigRsp(this.initParam)
        } else {
            izx.dispatchEvent(VIP_EVENT.GET_SEND_VIP_CONFIG_REQ, {}, true)
        }
        izx.pluginMgr.logEvent("SendVipMain_onOpen", {})
    }

    initEvent() {
        izx.on(VIP_EVENT.GET_SEND_VIP_CONFIG_RSP, this.getSendVipConfigRsp, this)
        izx.on(AD_EVENT.GET_AD_SPOT_ACK, this.updateAdCount, this)
    }

    initButton() {
        izx.bindButtonClick("BtnWatchViedo", this.node, (sender, data) => {
            izx.log("on BtnWatchViedo")
            izx.audioMgr.playBtn()
            izx.dispatchEvent(AD_EVENT.INIT_AD_ORDER_REQ, {adPos: AdPos.Vip})
        })
        izx.bindButtonClick("BtnClose", this.node, (sender, data) => {
            this.pop()
        })
    }

    updateAdCount() {
        let adInfo = izx.ad.getAreaInfo(AdPos.Vip)
        izx.log("updateAdCount adInfo = ", adInfo)
        if (adInfo.curNum >= adInfo.maxNum) {
            let sptAwarded = this.node.getChildByName("SptAwarded")
            sptAwarded.active = true
            let btnWatchViedo = this.node.getChildByName("BtnWatchViedo")
            btnWatchViedo.active = false
            btnWatchViedo.getComponent(cc.Button).interactable = false
        } else {
            let btnWatchViedo = this.node.getChildByName("BtnWatchViedo")
            btnWatchViedo.active = true
            if (adInfo.curNum == 1) { // 看升vip广告一次
                izx.dispatchEvent("upt_task_progress_by_index_req", {
                    uid: izx.user.uid,
                    id: 2,
                    inc: 1,
                })
            }
        }
    }

    touchMain() {
        if (this._sptTip) {
            this._sptTip.active = false
        }
    }

    onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchMain, this ,true);
    }

    onDisable() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.touchMain, this,true);
    }

    getSendVipConfigRsp(res) {
        for (let item of res) {
            if (item.prop_id == undefined || item.prop_id == COMMON_CONSTANT.ITEM_JINBI) {
                let lblJd = cc.find("BtnJinBi/LblJd", this.node)
                lblJd.getComponent(cc.Label).string = item.min_num/10000 + "w"

                izx.bindButtonClick("BtnJinBi", this.node, (sender, data) => {
                    izx.audioMgr.playBtn()
                    this._lblTip.string = item.tip

                    let worldPos = sender.target.parent.convertToWorldSpaceAR(sender.target.position)
                    let localPos = this.node.convertToNodeSpaceAR(worldPos)
                    this._sptTip.setPosition(localPos.x, localPos.y + sender.target.height/2)
                    this._sptTip.active = true
                })
            } else if (item.prop_id == COMMON_CONSTANT.ITEM_VIP_EXP) {
                let lblExp = cc.find("BtnExp/LblExp", this.node)
                lblExp.getComponent(cc.Label).string = item.min_num
                
                izx.bindButtonClick("BtnExp", this.node, (sender, data) => {
                    izx.audioMgr.playBtn()
                    this._lblTip.string = item.tip

                    let worldPos = sender.target.parent.convertToWorldSpaceAR(sender.target.position)
                    let localPos = this.node.convertToNodeSpaceAR(worldPos)
                    this._sptTip.setPosition(localPos.x + sender.target.width, localPos.y + sender.target.height/2)
                    this._sptTip.active = true
                })
            }
        }
    }
}
