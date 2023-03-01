import { izx } from "../../framework/izx";

import proto = require("../protos/lobby-login")
import Constants from "../../common/constants";
import BaseMode from "../../framework/base/baseMode";
import { AD_EVENT } from "../../ad/adEvents"

export default class Login extends BaseMode {
  wssCacert = null
  isReconnect = false

  constructor() {
    super()
    this.autoRegHander()
    izx.on(Constants.EventName.ACCOUNT_SOCKET_PEM, this.socketPem, this)
    izx.on(izx.SOCKET_RECONNECT, this.reconnect, this)
    izx.setProto("login", proto)
  }   

  reconnect() {
    this.isReconnect = true
  }

  socketPem(msg) {
    izx.log("socketPem msg = ", msg)
    this.wssCacert = msg.wssCacert
  }
  
  login() {
    izx.log("socket login izx.socketUrl = ", izx.socketUrl)
    izx.login(this.wssCacert, izx.socketUrl)
  }

  LoginReq() {
    izx.log("LoginReq")
    izx.log("guid = ", izx.user.guid)
    izx.log("token = ", izx.user.token)
    izx.log("mid = ", izx.mid)
    izx.log("pn = ", izx.packetName)
    izx.notify("mcbeam-lobby-login-srv.Player.Login", "LoginReq", {
      guid: izx.user.guid,
      token: izx.user.token,
      mid: izx.mid,
      pn: izx.packetName,
    })
    cc.Camera.main.schedule(this.LoginReqTimerCallback, 5.0)
  }

  LoginReqTimerCallback() {
    izx.log("LoginReqTimerCallback")
    // this.LoginReq()
    izx.dispatchEvent(izx.SOCKET_CONNECT)
  }
  
  LoginRspHandler(msg) {
    izx.log("LoginRspHandler")
    cc.Camera.main.unschedule(this.LoginReqTimerCallback)

    msg = msg.packet
    if (msg.error && msg.error !== "") {
      izx.dispatchEvent(Constants.EventName.COMMON_DIALOG, {msg: msg.code})
      return 
    }

    izx.user.uid = msg.uid
    izx.user.sex = msg.sex
    izx.user.pic = msg.pic
    izx.user.money = msg.money
    izx.user.vip = msg.vip
    
    izx.item.init(msg.items)
    izx.log("this.isReconnect = ", this.isReconnect)
    if (this.isReconnect && izx.isSceneExist("lobby", "prefabs/LobbyScene")) {
      izx.dispatchEvent(Constants.EventName.GET_PLAYER_INFO)
    } else {
      izx.dispatchEvent(Constants.EventName.ACCOUNT_ON_LOGIN, msg)
    }
    // 加载广告
    izx.dispatchEvent(AD_EVENT.GET_AD_SPOT_REQ, msg)
    
    this.isReconnect = false
  }
}