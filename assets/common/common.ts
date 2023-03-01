import { izx } from "../framework/izx";
import proto = require("./protos/common_proto")
import protoRelief = require("./protos/relief")
// import { CommonDialog } from "./CommonDialog";
// import GameInit from "../gameInit/gameInit";
// import Account from "../account/account";
// import Lobby from "../lobby/lobby";
// import Servers from "../servers/servers";
import ad from "../ad/ad"
import CommonMode from "./mode/commonMode"

const GAME_BUNDLE_NAME = "common"

const HTTP_URL = {
    // [izx.OFFICIAL_ENV]: "https://mjzz.mcbeam.cc/",
    [izx.OFFICIAL_ENV]: "https://mjzz.mcbeam.pro/",
    [izx.MIRROR_ENV]: "222",
    [izx.TEST_ENV]: "https://mjzz.mcbeam.cc/"
}

const AUTH_URL = {
  // [izx.OFFICIAL_ENV]: "https://mcbeam.mcbeam.cc/",
  [izx.OFFICIAL_ENV]: "https://mcbeam.mcbeam.pro/",
  [izx.MIRROR_ENV]: "222",
  [izx.TEST_ENV]: "https://mcbeam.mcbeam.cc/"
}

const SOCKET_URL = {
    // [izx.OFFICIAL_ENV]: "mjzz.mcbeam.cc/websocket",
    [izx.OFFICIAL_ENV]: "mjzz.mcbeam.pro/websocket",
    [izx.MIRROR_ENV]: "222",
    [izx.TEST_ENV]: "mjzz.mcbeam.cc/websocket"
}

export namespace App {
    let _common: CommonMode = new CommonMode()
    export enum tips {
        GAME_INIT = "游戏初始化",
        GAME_PARAMS_REQ = "获取在线参数",
        GAME_PARAMS_SUCC = "检查更新",
        GAME_UPDATE = "正在更新",
        GAME_UPDATE_FAIL = "更新失败",
        GAME_UPDATE_FINISH = "更新完成",
        GAME_PRELOAD = "正在加载资源",
        GAME_LOGIN = "正在登陆",
        GAME_INIT_FINISH = "已经为您准备好牌局"
    }

    function initEnv() {
      izx.log("initEnv")
        izx.curEnv = izx.urlParams["env"] === "t" ? izx.TEST_ENV : parseInt(localStorage.getItem("GAME_ENV")) || izx.OFFICIAL_ENV
        izx.log(izx.curEnv)

        if (cc.sys.isNative) {
          izx.log("==native==", jsb.PluginProxyWrapper)
          if (jsb.PluginProxyWrapper) {
            izx.pluginWrapper = jsb.PluginProxyWrapper
          }
        }

        let imei = localStorage.getItem("imei")
        let device = localStorage.getItem("device")
        izx.log("imei = ", imei)
        izx.log("device = ", device)
        let reg = new RegExp("\"","");

        if (imei) {
          imei = imei.replace(reg, "")
          imei = imei.replace(reg, "")
        }
        if (device) {
          device = device.replace(reg, "")
          device = device.replace(reg, "")
        }
        izx.log("imei = ", imei)
        izx.log("device = ", device)

        izx.mid = "10002"
        izx.packetName = izx.urlParams["pn"] || localStorage.getItem("PacketName") || izx.packetName
        if (izx.packetName == null || izx.packetName.length == 0) {
          if (cc.sys.platform == cc.sys.WECHAT_GAME) {
            izx.packetName = "scmj.wechat"
          }
        }
        if (cc.sys.isNative) {
          izx.imei = izx.pluginMgr.getDeviceIMEI()
          izx.log("getDeviceIMEI imei = ", izx.imei)
        }
        izx.imei = izx.imei || izx.urlParams["imei"] || imei || (""+Math.random()*100000)
        izx.device = izx.urlParams["device"] || device || izx.device
        
        izx.gameName = "zxmj"

        izx.httpUrl = izx.urlParams["hs"] || HTTP_URL[izx.curEnv]
        izx.socketUrl = izx.urlParams["ws"] || SOCKET_URL[izx.curEnv]
        izx.authUrl = izx.urlParams["as"] || AUTH_URL[izx.curEnv]

        izx.setData("imei", izx.imei, true)
        izx.setData("device", izx.device, true)

        izx.preloadBundle.push("lobby")
        izx.preloadBundle.push("unires")
        izx.preloadBundle.push("sign")
        izx.preloadBundle.push("tips")
        izx.preloadBundle.push("unipop")
        izx.preloadBundle.push("scmj")
        izx.preloadBundle.push("personal")
        izx.preloadBundle.push("task")
        izx.preloadBundle.push("vip")
        izx.preloadBundle.push("activity")
        izx.preloadBundle.push("shop")
        izx.preloadBundle.push("phone")
        izx.preloadBundle.push("gift")
        izx.preloadBundle.push("lottery")
    }

    export function gameStart() {
        izx.log("gameStart")
        izx.setProto("common", proto)
        izx.setProto("relief", protoRelief)
    }

    export function start() {
        izx.log("common app start")
        initEnv()
        _common.load()
        // CommonDialog.init()
        cc.assetManager.loadBundle("gameInit",  (err, res) => {
          izx.log("common load gameInit success")
            this.gameStart()     
        })
    }

}



