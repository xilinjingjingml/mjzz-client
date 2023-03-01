import { izx } from "../framework/izx";
import Constants from "../common/constants";
import SignMode from "./mode/signMode";
import proto = require("./protos/sign_proto")
import { signUtil } from "./signUtil"

// bundleName
const GAME_BUNDLE_NAME = "sign"

export default class Sign {
    private static _instance: Sign
    static getInstance(): Sign {
        if (!Sign._instance) {
            Sign._instance = new Sign()
            Sign._instance._init()
        }

        return Sign._instance
    }

    private _signMode: SignMode = new SignMode()

    private _init() {
        izx.setProto("sign", proto)
        izx.on(Constants.EventName.SIGN_SHOW_MAIN, this.ShowSign, this)
    }

    private ShowSign(bBcs) {
        let initParam = {"signProgress":this._signMode.signProgress}
        if (bBcs) {
            initParam["bBcs"] = bBcs
        }
        izx.dispatchEvent(Constants.EventName.BLOCK_UI)
        signUtil.preLoadPic(() => {
            izx.pushDialog(GAME_BUNDLE_NAME, "prefabs/SignMain", (res) => {
                izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
            }, {initParam:initParam})
        })
    }
}

let sign = Sign.getInstance()