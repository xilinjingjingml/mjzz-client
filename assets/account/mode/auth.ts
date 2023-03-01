import BaseMode from "../../framework/base/baseMode"
import { izx } from "../../framework/izx"
import Constants from "../../common/constants"
import WxWrapper from "../../framework/plugin/WxWrapper"

const GUEST_LOGIN = "mcbeam-authen-srv/auth/accountLogin"

export default class Auth extends BaseMode{
  ksCallbackStr: null

  constructor() {
    super()
    this.autoRegHander()
    this.init()
  }

  init() {
    izx.on("PluginSessionCallBack", this.onSessionGuestCallback, this)
    izx.on(Constants.EventName.KUAISHOU_CALLBACK, this.ksCallback, this)
  }

  ksCallback(msg) {
    console.log("ksCallback msg = ", JSON.stringify(msg))
    if (this.ksCallbackStr == null ||  this.ksCallbackStr == "") {
      return
    }
    let url = "http://ad.partner.gifshow.com/track/activate"
    let body = {
      event_type: msg.type,
      event_time: new Date().getTime(),
      callback: this.ksCallbackStr
    }
    console.log("ks callback url = ", url)
    console.log("body = ", JSON.stringify(body))
    if (msg.type == 2) {
      let ksRegister = izx.getData("kuaishou_register" + izx.user.uid)
      console.log("ksRegister = ", ksRegister)
      if (ksRegister) {
        return
      } else {
        izx.setData("kuaishou_register" + izx.user.uid, 1)
      }
    }
    
    if (msg.type == 1 || (msg.type == 2 && msg.newUser)) {
      console.log("ksCallback = get")
      izx.httpGet(url, body, (res) => {})
    }
  }

  onAuthLoginCallback(res) {
    console.log("onAuthLoginCallback res = ", JSON.stringify(res))
    if (!res || res.code !== "00000") {
      izx.logW("auth login err!")
      return
    }

    if (res.auth_type) {
      let authType = JSON.parse(res.auth_type)
      for (let v of authType) {
        if (v.Type == 2) {
          izx.user.bindPhone = true
          izx.setData(izx.imei + "_phone_account", v.Account, true)
          izx.setData(res.guid + "_phone_account", v.Account, true)
          break
        }
      }
    }

    izx.user.guid = res.guid
    izx.user.token = res.token
    izx.user.nickname = res.nickname
    izx.user.sex = res.sex
    izx.user.pic = res.headimgurl

    izx.setData(izx.imei + "guid", res.guid)
    izx.setData(izx.imei + "token", res.token)
    izx.setData(izx.imei + "nickname", res.nickname)

    izx.dispatchEvent(Constants.EventName.ACCOUNT_WEB_AUTH)
    this.ksCallbackStr = res.ks_callback
    this.ksCallback({type:2, newUser:res.new_user})
  }

  onSessionGuestCallback(res) {
    izx.log("plugin login res")
    izx.log("SessionResultCode = ", res.SessionResultCode)
    if (res.SessionResultCode == 0) {
      izx.setData(izx.imei + "auth_type", 1, true)
      izx.setData(izx.imei + "sessionType", "SessionGuest", true)
      izx.setData("last_login", "guest", true)
      res = res.sessionInfo

      if (!res || res.code !== "00000") {
        izx.logW("auth login err!")
        izx.dispatchEvent(Constants.EventName.ACCOUNT_AUTH_FAIL, res)
        return
      }
      if (res.account) {
        izx.setData(izx.imei + "_guest_account", res.account, true)
      }
      if (res.password) {
        izx.setData(izx.imei + "_guest_password", res.password, true)
      }

      this.onAuthLoginCallback(res)
    } else {
      izx.log("onSessionGuestCallback err msg = ", res.msg)
      izx.dispatchEvent(Constants.EventName.ACCOUNT_AUTH_FAIL, res)
    }
  }

  codeLogin() {
    izx.log("codeLogin")
    let auth_type = izx.getData(izx.imei + "auth_type")
    izx.log("auth_type = ", auth_type)
    let url = izx.authUrl + GUEST_LOGIN
    let body = {
      mid: Number(izx.mid),
      pn: izx.packetName,
      imei: izx.imei,
      device: izx.device,
      auth_type: "1", //1:游客登录,2:手机密码登录,3:微信密码登录
    }
    izx.log("url = ", url)
    izx.log("izx.imei = ", izx.imei)

    let account = izx.getData(izx.imei + "_guest_account")
    let password = izx.getData(izx.imei + "_guest_password")
    izx.log(account + " : " + password)
    if (auth_type == 1) { // 游客登录
    } else if (auth_type == 2) { // 手机登录
      account = izx.getData(izx.imei + "_phone_account")
      password = izx.getData(izx.imei + "_phone_password")
    }
    if (auth_type) body["auth_type"] = auth_type.toString()
    if (account) body["account"] = account
    if (password) body["password"] = password

    console.log("body = ", body)

    izx.httpPost(url, null, body, (res) => {
      izx.log("httpPost login res = ", res)
      if (!res || res.code !== "00000") {
        izx.logW("auth login err!")
        izx.dispatchEvent(Constants.EventName.ACCOUNT_AUTH_FAIL, res)
        return
      }

      if (auth_type == null || auth_type == 1) { // 游客登录
        if (res.account) {
          izx.setData(izx.imei + "_guest_account", res.account, true)
        }
        if (res.password) {
          izx.setData(izx.imei + "_guest_password", res.password, true)
        }
      } else if (auth_type == 2) { // 手机登录
        if (res.account) {
          izx.setData(izx.imei + "_phone_account", res.account, true)
          izx.setData(res.guid + "_phone_account", res.account, true)
        }
        if (res.password) {
          izx.setData(izx.imei + "_phone_password", res.password, true)
        }
      }
      this.onAuthLoginCallback(res)
    })
  }

  authLogin() {
    izx.log("izx.authUrl = ", izx.authUrl)
    izx.log("GUEST_LOGIN = ", GUEST_LOGIN)
    let auth_type = izx.getData(izx.imei + "auth_type")
    izx.log("auth_type = ", auth_type)
    if (CC_JSB) {
      if (auth_type == 2) { // 手机号登录
        izx.log("phoneLogin")
        this.codeLogin()
      } else {
        izx.log("plugin SessionGuest")
        let params = {
          sessionType: "SessionGuest",
          auth_type: "1",
          mid: izx.mid,
          LoginHost: izx.authUrl,
        }

        let account = izx.getData(izx.imei + "_guest_account")
        let password = izx.getData(izx.imei + "_guest_password")
        if (account) params["account"] = account
        if (password) params["password"] = password

        izx.pluginMgr.login(params)
      }
    } else if (cc.sys.platform == cc.sys.WECHAT_GAME) {
      if (auth_type == 2) { // 手机号登录
        izx.log("phoneLogin")
        this.codeLogin()
      } else {
        izx.log("WxWrapper login")
        WxWrapper.login((res) => {
          izx.log("WxWrapper.login:", res)
          izx.setData("last_login", "guest", true)

          if (!res || res.code !== "00000") {
            izx.logW("auth login err!")
            izx.dispatchEvent(Constants.EventName.ACCOUNT_AUTH_FAIL, res)
            return
          }
          if (res.account) {
            izx.setData(izx.imei + "_guest_account", res.account, true)
          }
          if (res.password) {
            izx.setData(izx.imei + "_guest_password", res.password, true)
          }

          this.onAuthLoginCallback(res)
        })
      }
    } else {
      izx.log("httpPost guest login")
      this.codeLogin()
    }
  }   
}