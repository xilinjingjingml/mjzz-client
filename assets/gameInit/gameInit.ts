import { izx } from "../framework/izx";
import Constants from "../common/constants";
import { App } from "../common/common";
import { AD_EVENT } from "../ad/adEvents";

// bundleName
const GAME_BUNDLE_NAME = "gameInit"
// https://mcbeam.mcbeam.cc/api/mcbeam-version-api/config/get?key=zxddz.
const GET_ONLINE_PRAMA = "api/mcbeam-version-api/config/get?key=mjzz"

export default class GameInit {
  static _instance = null
  static getInstance(): GameInit {
    if (!GameInit._instance) {
      GameInit._instance = new GameInit()
      GameInit._instance._init()
    }

    return GameInit._instance
  }

  start() {
    izx.log("GameInit start")
    this._initScene()
    this._initPlugins()
  }

  onDestroy() {
    izx.offByTag(this)
  }

  private _init() {
    // 注册登录完成回调
    izx.log("GameInit _init")
    izx.on(Constants.EventName.ACCOUNT_ON_LOGIN, this._onLogin, this)
    izx.on(Constants.EventName.ACCOUNT_AUTH_FAIL, this._authFail, this)
    izx.on(Constants.EventName.GAME_CLOSE_LOADING, this._closeLoading, this)
  }

  private _initScene() {
    // 初始化场景
    izx.log("GameInit _initScene")
    let self = this
    izx.pushScene(GAME_BUNDLE_NAME, "prefabs/Loading", () => {
      cc.Camera.main.scheduleOnce(() => {
        self._getOnlineParam()
      }, 0.1)
    })
  }

  private _initPlugins() {
    // 初始化插件
    izx.log("==plugin init==")
    if (cc.sys.isNative) {
      izx.pluginMgr.onInit()
    }
  }

  private _getOnlineParam() {
    izx.log("getOnlineParam:" + izx.authUrl)
    // 获取在线参数
    let self = this
    let url = izx.authUrl + GET_ONLINE_PRAMA
    izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, { msg: App.tips.GAME_PARAMS_REQ })
    izx.dispatchEvent(Constants.EventName.GAME_RESUME_PROGRESS)
    cc.Camera.main.scheduleOnce(() => {
      izx.httpGet(url, {}, (res) => { 
        izx.log("getOnlineParam: res ", JSON.stringify(res))
        if (res) {
          izx.setData("onlineParam", res)
          izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, {msg: App.tips.GAME_PARAMS_SUCC })
          self._onGetOnlineParam(res)
        } else {
          let callback = () => {
            this._getOnlineParam()
          }
          izx.dispatchEvent(Constants.EventName.GAME_PAUSE_PROGRESS)
          izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, {abs: 0,  msg: App.tips.GAME_PARAMS_REQ })
          izx.dispatchEvent(Constants.EventName.SHOW_TIPS, {msg: "未获取到在线参数，请重试", callback: callback})
        } 
      })
    }, 0.1)
  }

  private _onGetOnlineParam(res?: any) {
    // 获取在线参数 更新.1
    cc.Camera.main.scheduleOnce(() => {
      this._checkVersion(res)
    }, 0.1)
  }

  private _checkVersion(res) {
    izx.log("_checkVersion")
    izx.dispatchEvent(Constants.EventName.GAME_RESUME_PROGRESS)
    // 手机版本更新
    let self = this
    if (CC_JSB) {
      let url = res.hotUrl
      // izx.log("localStorage.getItem(version) = ", localStorage.getItem("version"))
      // if (res && izx.versionCompare(res.version, localStorage.getItem("version")) > 0) {
      if (res && url && url.length > 0) {
        // const url = "https://download.mcbeam.cc/mjzz/android/com.yxrstudio.si.chuan.android/1.0.1/"
        izx.hotUpdate({
          remoteManifestUrl: url + "project.manifest",
          remoteVersionUrl: url + "version.manifest",
          packageUrl: url
        }, (cur: number, total: number) => {
          izx.log("cur = ", cur)
          izx.log("total = ", total)
          izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, {msg: App.tips.GAME_UPDATE + (cur/total*100).toFixed(2) + "%" })
        }, (err: string) => {
          izx.log("update err = ", err)
          if (err) {
            izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, {abs: 0, msg: App.tips.GAME_UPDATE_FAIL })
            izx.dispatchEvent(Constants.EventName.GAME_PAUSE_PROGRESS)
            let callback = () => {
              this._checkVersion(res)
            }
            izx.dispatchEvent(Constants.EventName.SHOW_TIPS, {msg: "更新失败，请重试", callback: callback})
            return
          }
          localStorage.setItem("version", res.version)
          izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, {msg: App.tips.GAME_UPDATE_FINISH})
          cc.Camera.main.scheduleOnce(() => {
            self._startPreload()
          }, 0.1)
        })
      } else {
        izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, {msg: App.tips.GAME_UPDATE_FINISH })
        cc.Camera.main.scheduleOnce(() => {
          self._startPreload()
        }, 0.1)
      }
    }
    else {
      izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, {msg: App.tips.GAME_UPDATE_FINISH })
      cc.Camera.main.scheduleOnce(() => {
        self._startPreload()
      }, 0.1)
    }
  }

  private _startPreload() {
    izx.log("GameInit _startPreload")
    if (izx.preloadBundle.length > 0) {
      izx.preload(izx.preloadBundle,
        (cur, total) => {
          izx.log("cur = ", cur)
          izx.log("total = ", total)
          izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, { msg: App.tips.GAME_PRELOAD + cur +"/" + total })
        },
        (err, res) => {
          // 账号处理
          if (err) {
            izx.log(err)
          }
          izx.log("succ")
          cc.Camera.main.scheduleOnce(() => {
            izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, { msg: App.tips.GAME_LOGIN })
            izx.dispatchEvent(Constants.EventName.ACCOUNT_CHECK_ACCOUNT)
          }, 0.1)
        })
    }
    else {
      cc.Camera.main.scheduleOnce(() => {
        izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, { msg: App.tips.GAME_LOGIN })
        izx.dispatchEvent(Constants.EventName.ACCOUNT_CHECK_ACCOUNT)
      }, 0.1)
    }
  }

  private _authFail(msg) {
    izx.dispatchEvent(Constants.EventName.GAME_PAUSE_PROGRESS)
    izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, { abs: 0, msg: App.tips.GAME_LOGIN })
    let callback = () => {
      izx.dispatchEvent(Constants.EventName.GAME_RESUME_PROGRESS)
      izx.dispatchEvent(Constants.EventName.ACCOUNT_CHECK_ACCOUNT)
    }
    let tip = "登陆失败，请重试"
    if (msg && msg.code) {
      tip = "err_code: " + msg.code + ", " + tip
    }
    izx.dispatchEvent(Constants.EventName.SHOW_TIPS, {msg: tip, callback: callback})
  }

  private _onLogin(msg) {
    izx.log("GameInit _onLogin")
    cc.Camera.main.scheduleOnce(() => {
      this._getAdSpots({callback: () => {
        izx.log("_getAdSpots callback")
        izx.dispatchEvent(Constants.EventName.GAME_PAUSE_PROGRESS)
        izx.dispatchEvent(Constants.EventName.GAME_UPDATE_PROGRESS, { abs: 1, msg: App.tips.GAME_INIT_FINISH })
        izx.dispatchEvent(Constants.EventName.LOBBY_SHOW_MAIN, msg)
      }})
    }, 0.1) 
  }

  private _getAdSpots(msg) {
    // 加载广告
    izx.dispatchEvent(AD_EVENT.GET_AD_SPOT_REQ, msg)
  }

  private _closeLoading() {
    izx.closeUI("loading")
  }
}

let gameStart = App.gameStart
App.gameStart = () => {
  izx.log("gameinit App.gameStart")
  gameStart()
  GameInit.getInstance().start()
}