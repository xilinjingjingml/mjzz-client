import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { SHOP_EVENT } from "../shop_events";
import { AdPos } from "../../ad/adConstants";
import { AD_EVENT } from "../../ad/adEvents";
import Constants from "../../common/constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShopMain extends BaseUi {
    _layout: cc.Node = null // 详情介绍

    @property(cc.Label)
    lblJrsy = null;
    @property(cc.Prefab)
    shopBox = null;

    usedUp: boolean = false
   
    onOpen() {
        this._layout = this.node.getChildByName("Layout")

        this.initEvent()
        this.initButton()
        this.updateAdCount()

        izx.dispatchEvent(SHOP_EVENT.GET_CONFIG_REQ, {
            uid: izx.user.uid
        })
        izx.pluginMgr.logEvent("ShopMain_onOpen", {})
    }

    updateAdCount() {
        this.lblJrsy.string = ""
        let adInfo = izx.ad.getAreaInfo(AdPos.Shop)
        izx.log("updateAdCount adInfo = ", adInfo)
        if (adInfo) {
            this.lblJrsy.string = (adInfo.maxNum - adInfo.curNum) + "/" + adInfo.maxNum
            if (adInfo.maxNum == adInfo.curNum) {
                this.usedUp = true
            }
        }
    }

    initEvent() {
        izx.on(SHOP_EVENT.GET_CONFIG_RSP, this.getConfigRsp, this)
        izx.on(AD_EVENT.GET_AD_SPOT_ACK, this.updateAdCount, this)
    }

    initButton() {
        let btnJrsy = cc.find("SptAdAward/BtnJrsy", this.node)
        izx.bindButtonClick(btnJrsy, this.node, (sender, data) => {
            izx.log("On btn SptAdAward")
            izx.audioMgr.playBtn()
            if (this.usedUp) {
                izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: -1, msg: "今日免费次数已用完，请明天再来"})
            } else {
                izx.dispatchEvent(AD_EVENT.INIT_AD_ORDER_REQ, {adPos: AdPos.Shop})
            }
        })
        izx.bindButtonClick("close", this.node, (sender, data) => {
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

    getConfigRsp(msg) {
        let boxList = msg.box_list
        if (!boxList || boxList.length == 0)
            return

        let curIndex = 1
        for (let box of boxList) {
            let shopBox = cc.instantiate(this.shopBox)
            shopBox.active = true
            let lblJb = cc.find("LayoutJb/LblJb", shopBox)
            lblJb.getComponent(cc.Label).string = box.get_item.num
            let lblZs = cc.find("LayoutZs/LblZs", shopBox)
            lblZs.getComponent(cc.Label).string = box.need_item.num
            izx.bindButtonClick("BtnExchange", shopBox, (sender, data) => {
                izx.audioMgr.playBtn()
                izx.dispatchEvent(SHOP_EVENT.EXCHANGE_BOX_REQ, {
                    uid: izx.user.uid,
                    index: box.index,
                })
            })
            // 远程 url 带图片后缀名
            if (box.icon) {
                let sptJb = shopBox.getChildByName("SptJb")
                if (curIndex <= 3) {
                } else {
                    sptJb.scale = 0.5
                }
                cc.assetManager.loadRemote(box.icon, function (err, texture) {
                    if (err) {
                        sptJb.active = true
                        return
                    }
                    sptJb.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(<cc.Texture2D>texture)
                    sptJb.active = true
                });
            }
            this._layout.addChild(shopBox)
            curIndex += 1
        }
    }
}
