import BaseMode from "../../framework/base/baseMode"
import { izx } from "../../framework/izx"
import Constants from "../../common/constants"
import { PHONE_EVENT } from "../phone_events"

const SEND_PHONE_CODE = "mcbeam-authen-srv/auth/sendPhoneCode"
const PHONE_CODE_LOGIN = "mcbeam-authen-srv/auth/phoneCodeLogin"

export default class PhoneMode extends BaseMode{
    constructor() {
        super()
        this.autoRegHander()
        this.init()
    }

    init() {
        izx.log("PhoneMode init")
        izx.on(PHONE_EVENT.SEND_PHONE_CODE_REQ, this.sendPhoneCode, this)
        izx.on(PHONE_EVENT.PHONE_CODE_LOGIN_REQ, this.phoneCodeLogin, this)
    }

    sendPhoneCode(msg) {
        let url = izx.authUrl + SEND_PHONE_CODE
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (res) {
                izx.log("发送验证码 ", res)
            } else {
                izx.log("获取验证码失败，服务器未响应")
                izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: res.code, msg: res.msg})
            }
        })
    }

    phoneCodeLogin(msg, callback) {
        let url = izx.authUrl + PHONE_CODE_LOGIN
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (callback) {
                callback()
            }
            if (!res || res.code !== "00000") {
                izx.logW("phoneauth login err!")
                if (msg.guid) {
                    izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: -1, msg: "绑定失败！"})
                }
                return
            }

            if (msg.guid) {
                izx.user.bindPhone = true
                izx.setData(izx.imei + "bind_phone", 1, true)
                izx.setData(izx.user.guid + "_phone_account", msg.phone, true)
                izx.dispatchEvent(Constants.EventName.REFRESH_BIND_PHONE)
                izx.dispatchEvent(Constants.EventName.SHOW_TIPS, {code: 1, msg: "绑定成功！"})
            } else {
                izx.dispatchEvent(Constants.EventName.CLOSE_SETTING)

                
                let auth_type = izx.getData(izx.imei + "auth_type")
                if (auth_type == null || auth_type == 1) { // 游客登录
                    izx.setData(izx.user.guid + "guest_nickname", izx.user.nickname, true)
                }

                izx.setData(izx.imei + "auth_type", 2, true)
                izx.setData(izx.imei + "sessionType", "SessionPhone", true)
                izx.setData(izx.imei + "_phone_account", msg.phone, true)
                izx.setData(res.guid + "_phone_account", msg.phone, true)

                if (res.password) {
                    izx.setData(izx.imei + "_phone_password", res.password, true)
                }

                izx.setData("last_login", "phone", true)
                izx.setData("last_guid", izx.user.guid, true)
                izx.setData("last_token", izx.user.token, true)

                izx.user.guid = res.guid
                izx.user.token = res.token
                izx.user.nickname = res.nickname
                izx.user.sex = res.sex
                izx.user.pic = res.headimgurl
                izx.user.bindPhone = true

                izx.setData(izx.imei + "guid", res.guid)
                izx.setData(izx.imei + "token", res.token)
                izx.setData(izx.imei + "nickname", res.nickname)

                izx.item.empty()

                izx.close()
                if (CC_JSB) {
                    izx.dispatchEvent(Constants.EventName.ACCOUNT_CHECK_ACCOUNT)
                } else if (cc.sys.platform == cc.sys.WECHAT_GAME) {
                } else {
                }
            }
        })
    }
}