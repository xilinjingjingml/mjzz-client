import BaseUi from "../../framework/base/baseUI";
import {izx} from "../../framework/izx";
import {PHONE_EVENT} from "../phone_events";
import Constants from "../../common/constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SwitchGuest extends BaseUi {
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

        izx.bindButtonClick("Layout/BtnUserAgreement", this.node, () => {
            izx.pushDialog("agree", "prefabs/userAgreeDialog", (res) => {})
        })

        izx.bindButtonClick("Layout/BtnPrivacyPolicy", this.node, () => {
            izx.pushDialog("agree", "prefabs/agreeDialog", (res) => {})
        })

        izx.bindButtonClick("BtnSwitchGuest", this.node, () => {
            console.log('BtnSwitchGuest');
            this.pop()
            izx.dispatchEvent(Constants.EventName.CLOSE_SETTING)

            izx.setData(izx.imei + "auth_type", 1, true)

            izx.user.guid = izx.getData("last_guid")
            izx.user.token = izx.getData("last_token")
            izx.user.bindPhone = false
            let nickname = izx.getData(izx.user.guid + "guest_nickname")
            if (nickname) {
                izx.user.nickname = nickname
            }

            izx.item.empty()

            izx.close()
            if (CC_JSB) {
                izx.dispatchEvent(Constants.EventName.ACCOUNT_CHECK_ACCOUNT)
            } else if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            } else {
            }
        })
    }

    initView() {
        let account = izx.getData(izx.imei + "_phone_account")
        if (account) {
            let lblPhoneNum = this.node.getChildByName("LblPhoneNum").getComponent(cc.Label)
            lblPhoneNum.string = account.substring(0,3) + "****" + account.substring(7,11)
        }
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
