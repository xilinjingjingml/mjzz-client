import { izx } from "../framework/izx";
import Constants from "../common/constants";
import {PHONE_EVENT} from "./phone_events";
import phoneAuth from "./mode/phoneAuth"

// bundleName
const GAME_BUNDLE_NAME = "phone"

export default class Phone {
    private static _instance: Phone
    static getInstance(): Phone {
        if (!Phone._instance) {
            Phone._instance = new Phone()
            Phone._instance._init()
        }

        return Phone._instance
    }

    _phoneAuth: phoneAuth = null

    private _init() {
        // 初始化账号系统
        this._phoneAuth = new phoneAuth()

        izx.on(Constants.EventName.SWITCH_PHONE, this.ShowSwitchPhone, this)
        izx.on(Constants.EventName.SWITCH_GUEST, this.ShowSwitchGuest, this)
        izx.on(Constants.EventName.PHONE_SHOW_MAIN, this.ShowPhoneBind, this)
        izx.on(PHONE_EVENT.SHOW_NEXT, this.ShowPhoneBindNext, this)
    }

    private ShowSwitchPhone() {
        izx.dispatchEvent(Constants.EventName.BLOCK_UI)
        izx.pushDialog(GAME_BUNDLE_NAME, "prefabs/SwitchAccount", (res) => {
            izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
        })
    }

    private ShowSwitchGuest() {
        izx.dispatchEvent(Constants.EventName.BLOCK_UI)
        izx.pushDialog(GAME_BUNDLE_NAME, "prefabs/SwitchGuest", (res) => {
            izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
        })
    }

    private ShowPhoneBind(bind) {
        izx.dispatchEvent(Constants.EventName.BLOCK_UI)
        izx.pushDialog(GAME_BUNDLE_NAME, "prefabs/PhoneBind", (res) => {
            izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
        }, {initParam: {bind: bind}})
    }

    private ShowPhoneBindNext(phone, callback, bind) {
        izx.dispatchEvent(Constants.EventName.BLOCK_UI)
        izx.pushDialog(GAME_BUNDLE_NAME, "prefabs/PhoneBindNext", (res) => {
            izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
        }, {initParam: {phone: phone, callback: callback, bind: bind}})
    }
}

let phone = Phone.getInstance()