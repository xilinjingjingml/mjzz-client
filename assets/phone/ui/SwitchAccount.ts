import BaseUi from "../../framework/base/baseUI";
import {izx} from "../../framework/izx";
import {PHONE_EVENT} from "../phone_events";
import Constants from "../../common/constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SwitchAccount extends BaseUi {
    onOpen() {
        this.initEvent()
        this.initButton()
        this.initView()
    }

    initEvent() {
    }

    initButton() {
        izx.bindButtonClick("SptClose/BtnClose", this.node, () => {
            this.pop()
        })

        izx.bindButtonClick("BtnConfirm", this.node, () => {
            izx.dispatchEvent(Constants.EventName.PHONE_SHOW_MAIN, false)
            this.pop()
        })

        izx.bindButtonClick("BtnCancel", this.node, () => {
            this.pop()
        })
    }

    initView() {
    }

    touchMain() {
    }

    onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchMain, this ,true);
    }

    onDisable() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.touchMain, this,true);
    }
}
