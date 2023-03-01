import { EventMgr } from "./mgr/eventMgr";
import { LogMgr } from "./mgr/logMgr";
import { AudioMgr } from "./mgr/audioMgr";
import { UiMgr } from "./mgr/uiMgr";
import { Jsons } from "./util/jsons";
import { URLParam } from "./util/urlParam";
import { HttpMgr } from "./net/httpMgr";
import { GateMgr } from "./net/gateMgr";
import { DataMgr } from "./mgr/dataMgr";
import { HotUpdate } from "./util/hotUpdate";
import { IPluginProxyWrapper } from "./plugin/IPluginProxyWrapper";
import { PluginMgr } from "./plugin/pluginMgr";
import { ProgressBar } from "./util/progressBar";
import { Items } from "./base/item";
import User from "./base/user";
import { FsmMgr } from "./mgr/fsmMgr";
import { Button } from "./util/button";
import Players from "./base/player";
import {Utils} from "./util/utils";
import { ToJava } from "./util/toJava";

const enum ENV {
    OFFICIAL_ENV,
    MIRROR_ENV,
    TEST_ENV,
}

export namespace izx {
    // env
    export const OFFICIAL_ENV = ENV.OFFICIAL_ENV
    export const MIRROR_ENV = ENV.MIRROR_ENV
    export const TEST_ENV = ENV.TEST_ENV

    // 当前环境
    export let curEnv = OFFICIAL_ENV

    // 当前PN
    export let mid: string = ""
    export let packetName: string = ""
    export let imei: string = ""
    export let device: string = ""
    
    export enum Orientation {
        Unknown,
        Portrait,
        PortraitUpsideDown,
        LandscapeLeft,
        Landscape = 3,
        LandscapeRight,
        AutoRotation
    }

    export let DEFAULT_ORIENTATION: Orientation = Orientation.Landscape

    // 游戏名称
    export let gameName: string = ""

    // http和socket地址 通过外部注入
    export let httpUrl = ""
    export let socketUrl = ""
    export let authUrl = ""

    // SOCKET
    export let SOCKET_CONNECT = "SOCKET_CONNECT"
    export let SOCKET_RECONNECT = "SOCKET_RECONNECT"
    export let SOCKET_CLOSE = "SOCKET_CLOSE"
    export let SOCKET_DISCONNECT = "SOCKET_DISCONNECT"

    // event
    export let on = EventMgr.on
    export let once = EventMgr.once
    export let off = EventMgr.off
    export let offByTag = EventMgr.offByTag
    export let dispatchEvent = EventMgr.dispatchEvent
    export let emit = EventMgr.dispatchEvent

    // log
    export let log = LogMgr.log
    export let logI = LogMgr.info
    export let logW = LogMgr.warn
    export let logE = LogMgr.error

    // audioMgr
    export let setMusicVol = AudioMgr.setMusicVolume
    export let getMusicVol = AudioMgr.getMusicVolume
    export let setEffectVol = AudioMgr.setEffectVolume
    export let getEffectVol = AudioMgr.getEffectVolume
    export let playMusic = AudioMgr.playMusic
    export let playEffect = AudioMgr.playEffect
    export let audioMgr = AudioMgr

    // uiMgr
    export let preload = UiMgr.preLoad
    export let loadUI = UiMgr.loadUI
    export let popUI = UiMgr.popUI
    export let closeUI = UiMgr.closeUI
    export let closeScene = UiMgr.closeUI
    export let isSceneExist = UiMgr.isSceneExist
    export let isDialogExist = UiMgr.isDialogExist
    export let loadPic = UiMgr.loadPic

    export let pushScene = UiMgr.PushScene
    export let popScene = UiMgr.PopScene
    export let pushDialog = UiMgr.PushDialog
    export let popDialog = UiMgr.PopDialog
    export let pushDialog2 = UiMgr.PushDialog2

    // dataMgr
    export let setData = DataMgr.setData
    export let getData = DataMgr.getData
    export let feed = DataMgr.feed
    export let dataMgr = DataMgr

    // pluginMgr
    export let pluginMgr = PluginMgr

    // machineMgr
    export let createFsm = FsmMgr.createFsm
    export let getFsm = FsmMgr.getFsm
    
    // http
    export let httpGet = HttpMgr.get
    export let httpPost = HttpMgr.post

    // socket
    export let login = GateMgr.login
    export let close = GateMgr.close
    export let notify = GateMgr.notify
    export let request = GateMgr.request
    export let setProto = GateMgr.setProto
    export let unsetProto = GateMgr.unsetProto   
    export let socketIsReady = GateMgr.isReady

    // hotupdate
    export let checkUpdate = HotUpdate.checkUpdate
    export let hotUpdate = HotUpdate.hotUpdate

    // plugins
    export let pluginWrapper:IPluginProxyWrapper = null

    // url param
    export let urlParams = URLParam.parseSearch()

    // preload prefab
    export let preloadBundle: string[] = []

    // util
    export let isJson = Jsons.isJSON
    export let versionCompare = Utils.versionCompare

    // compUtil
    export let setProgressValue = ProgressBar.setProgress
    export let bindButtonClick = Button.bindButtonClick
    export let utils = Utils

    // 基本数据
    export let user = User
    export let players = Players
    export let item = Items 
    
    // 广告
    export let ad = null
    // 锁屏
    export let prefabBlockUI = null
    // 前后台
    export let isForeground = true
    // 是否进入了游戏界面
    export let isInGameScene = false
    // 调用luaj
    export let callStaticMethod = ToJava.callStaticMethod
}