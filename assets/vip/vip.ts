import { izx } from "../framework/izx";
import Constants from "../common/constants";
import VipMode from "./mode/vipMode";
import proto = require("./protos/vip_proto")
import { vipUtil } from "./vipUtil"

// bundleName
const GAME_BUNDLE_NAME = "vip"

export default class Vip {
    private static _instance: Vip
    static getInstance(): Vip {
        if (!Vip._instance) {
            Vip._instance = new Vip()
            Vip._instance._init()
        }

        return Vip._instance
    }

    private _vipMode: VipMode = new VipMode()

    private _init() {
        izx.setProto("vip", proto)
        izx.on(Constants.EventName.VIP_SHOW_MAIN, this.ShowVip, this)
        izx.on(Constants.EventName.SEND_VIP_SHOW_MAIN, this.ShowSendVip, this)
    }

    private ShowVip(msg) {
        izx.dispatchEvent(Constants.EventName.BLOCK_UI)
        vipUtil.preLoadPic(() => {
            izx.pushDialog(GAME_BUNDLE_NAME, "prefabs/VipMain", (res) => {
                izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
            }, {initParam:this._vipMode.vipConfigs})
        })
    }

    private ShowSendVip(msg) {
        izx.dispatchEvent(Constants.EventName.BLOCK_UI)
        vipUtil.preLoadPic(() => {
            izx.pushDialog(GAME_BUNDLE_NAME, "prefabs/SendVipMain", (res) => {
                izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
            }, {initParam:this._vipMode.sendvipConfigs})
        })
    }
}

let vip = Vip.getInstance()