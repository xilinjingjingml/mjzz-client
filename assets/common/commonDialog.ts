import { izx } from "../framework/izx";
import Constants from "./constants";

const GAME_BUNDLE_NAME = "common"

export namespace CommonDialog {
    export function init() {
        //注册通用窗体 
        izx.on(Constants.EventName.COMMON_DIALOG, showMsgBox, GAME_BUNDLE_NAME)
    }

    function showMsgBox(param) {
        izx.pushDialog(GAME_BUNDLE_NAME, "prefabs/MsgBox", (res) => {}, {initParam: param})
    }
}