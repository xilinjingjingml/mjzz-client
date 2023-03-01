import { izx } from "../framework/izx";
import Constants from "../common/constants";
import GiftMode from "./mode/giftMode";
import proto = require("./protos/gift_proto")

// bundleName
const GAME_BUNDLE_NAME = "gift"

export default class Gift {
    private static _instance: Gift
    static getInstance(): Gift {
        if (!Gift._instance) {
            Gift._instance = new Gift()
            Gift._instance._init()
        }

        return Gift._instance
    }

    private _giftMode: GiftMode = new GiftMode()

    private _init() {
        izx.setProto("gift", proto)
        izx.on(Constants.EventName.WELCOME_GIFT_SHOW_MAIN, this.ShowGift, this)
    }

    private ShowGift(bQd, bBcs) {
        let initParam = {"giftProgress":this._giftMode.giftProgress}
        if (bQd) {
            initParam["bQd"] = bQd
        }
        if (bBcs) {
            initParam["bBcs"] = bBcs
        }
        izx.dispatchEvent(Constants.EventName.BLOCK_UI)
        izx.pushDialog(GAME_BUNDLE_NAME, "prefabs/GiftMain", (res) => {
            izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
        }, {initParam: initParam})
    }
}

let gift = Gift.getInstance()