import { izx } from "../izx"
import { EPluginType, IAdInfo, EAdsType, EAdsResult } from "./IPluginProxy"
import { ToJava } from "../util/toJava"
import { Utils } from "../util/utils"
import WxWrapper from "./WxWrapper"

export enum EPlatformEvent {
    GET_CLIPBOARD_SUCCESS = 21, //获取剪切板内容成功
    GET_OPENINSTALL_PARAMS = 50, //获取openinstall参数
}

interface IPlugin {
    name: string
    type: string
    tag: string
    mid: string
}

export namespace PluginMgr {
    let _pluginProxy: any
    let _iapPluginList: IPlugin[]
    export let pluginConfig: { game: { PacketName: string }[], plugins: IPlugin[] }
    let _config: any = {}

    export function onInit(): void {
        cc.log("[PluginManager.onInit]")
        _setPluginEnv()

        _pluginProxy = izx.pluginWrapper.getInstance()
        // 登陆回调
        _pluginProxy.setSessionCallBack(onSessionCallBack)
        // 支付回调
        _pluginProxy.setIapCallBack(onIapCallBack)
        // 分享回调
        _pluginProxy.setSocialCallBack(onSocialCallBack)
        // 平台回调
        _pluginProxy.setPlatformCallBack(onPlatformCallBack)
        // 广告回调
        _pluginProxy.setAdsCallBack && _pluginProxy.setAdsCallBack(onAdsCallBack)
        // Java回调
        window['JavascriptJavaCallBack'] = _onJavascriptJavaCallBack

        if (CC_JSB) {
            izx.packetName = ToJava.callStaticMethod("org/cocos2dx/javascript/Luaj", "getChannelName", "()Ljava/lang/String;")
        }
    }

    function _setPluginEnv(): void {
        const env = parseInt(localStorage.getItem("GAME_ENV"))
        if (env != null) {
            izx.curEnv = env
        }
        izx.log("[PluginManager.setPluginEnv] CurENV", izx.curEnv)

        // const cn = localStorage.getItem("TEST_CN")
        // if (cn != null) {
        //     izxFW.gameConfig.packetName = cn
        // }
    }

    export function getConfig(name: string): string {
        return _config[name]
    }

    function _setPluginConfig(config: any): void {
        izx.log("[PluginManager.pluginConfig]", JSON.stringify(config))
        pluginConfig = config
        if (!localStorage.getItem) {
            izx.packetName = pluginConfig.game[0].PacketName
        }

        if (_pluginProxy) {
            if (!cc.sys.isBrowser && cc.sys.os == cc.sys.OS_ANDROID) {
                izx.packetName = ToJava.callStaticMethod("org/cocos2dx/javascript/Luaj", "getChannelName", "()Ljava/lang/String;")
            }
            else {
                izx.packetName = config.game[0].PacketName
            }

            _pluginProxy.setPluginConfig(JSON.stringify(pluginConfig))
            izx.log("[PluginManager.pluginConfig] packetName", izx.packetName)
            _pluginProxy.setPackageName(izx.packetName)
            izx.log("[PluginManager.pluginConfig] CurENV", izx.curEnv)
            // _pluginProxy.switchPluginXRunEnv([1, 2][izxFW.gameConfig.CurENV] || 0)
            _pluginProxy.switchPluginXRunEnv(izx.curEnv)

            for (const plugin of pluginConfig.plugins) {
                _loadPlugin(plugin.name, parseInt(plugin.type))
            }
        }
        _loadPayModeList()

        // 检测是否有广告插件
        izx.setData("noAD", hasPluginByType(EPluginType.kPluginAds))
        izx.setData("pluginFinish", true)

        izx.dispatchEvent("PLUGIN_LOAD_FINISH")
    }

    function _loadPlugin(name: string, type: EPluginType): void {
        _pluginProxy.loadPlugin(name, 0, type)
    }

    function _loadPluginByTag(tag: number, type: EPluginType): void {
        for (const plugin of pluginConfig.plugins) {
            if (parseInt(plugin.tag) == tag && parseInt(plugin.type) == type) {
                _loadPlugin(plugin.name, parseInt(plugin.type))
                break
            }
        }
    }

    function _loadPayModeList(): void {
        _iapPluginList = []
        for (const plugin of pluginConfig.plugins) {
            if (plugin.type == EPluginType.kPluginIAP.toString()) {
                _iapPluginList.push(plugin)
            }
        }
    }

    // { SessionResultCode: number, msg: string, sessionInfo: any }
    export function onSessionCallBack(data: string): void {
        cc.log("[PluginManager.onSessionCallBack] data:", data)
        izx.dispatchEvent("PluginSessionCallBack", JSON.parse(data))
    }

    // { PayResultCode: number, msg: string, payInfo: any }
    export function onIapCallBack(data: string): void {
        cc.log("[PluginManager.onIapCallBack] data:", data)
        // NetManager.Instance.onMessage({ opcode: "PluginIapCallBack", data: data })
        // pluginPayResult(data)
        izx.dispatchEvent("PluginIapCallBack", data)
    }

    // { ShareResultCode: number, msg: string, shareResultInfo: any }
    export function onSocialCallBack(data: string): void {
        cc.log("[PluginManager.onSocialCallBack] data:", data)
        // NetManager.Instance.onMessage({ opcode: "PluginSocialCallBack", data: data })
        izx.dispatchEvent("PluginSocialCallBack", JSON.parse(data))
    }

    // { PlatformResultCode: number, msg: string, url: any }
    export function onPlatformCallBack(data: string): void {
        cc.log("[PluginManager.onPlatformCallBack] data:", data)
        // NetManager.Instance.onMessage({ opcode: "PluginPlatformCallBack", data: data })
        izx.dispatchEvent("PluginPlatformCallBack", JSON.parse(data))
    }

    // { AdsResultCode: number, msg: string }
    export function onAdsCallBack(data: string): void {
        cc.log("[PluginManager.onAdsCallBack] data:", data)
        // NetManager.Instance.onMessage({ opcode: "PluginAdsCallBack", data: data })
        // pluginAdsResult(data)
        if (izx.isForeground) {
          izx.dispatchEvent("PluginAdsCallBack", JSON.parse(data))
        } else {
          izx.dispatchEvent("save_ad_callback_event", data)
        }
    }

    function _onJavascriptJavaCallBack(message: { opcode: string, data: string }): void {
        cc.log("[PluginManager.onJavascriptJavaCallBack] data:", JSON.stringify(message))
        // NetManager.Instance.onMessage(message)
        izx.dispatchEvent(message.opcode, message.data)
    }

    export function getPluginVersion(): string {
        if (_pluginProxy) {
            return _pluginProxy.getPluginVersion("PlatformWP", 1, 9)
        } else {
            return "5.0.0"
        }
    }

    export function getDeviceIMEI(): string {
        if (_pluginProxy) {
            return _pluginProxy.getDeviceIMEI()
        } else {
            return izx.urlParams["imei"]
        }
    }

    export function getMacAddress(): string {
        if (_pluginProxy) {
            return _pluginProxy.getMacAddress()
        } else {
            return "fa64d01eb8cfbdb9"
        }
    }

    export function getVersionCode(): number {
        return _pluginProxy ? parseInt(_pluginProxy.getVersionCode()) : 0
    }

    export function getDeviceName(): string {
        if (_pluginProxy) {
            return _pluginProxy.getDeviceName()
        } else {
            return "Device"
        }
    }

    export function startUpdatingLocation(): void {
        if (_pluginProxy) {
            return _pluginProxy.startUpdatingLocation()
        }
    }

    export function copyToClipboard(text: string): void {
        if (_pluginProxy) {
            _pluginProxy.copyToClipboard(text)
        } else if (cc.sys.WECHAT_GAME === cc.sys.platform) {
          cc.log("cc.sys.WECHAT_GAME === cc.sys.platform")
          WxWrapper.Copy(text)
        }
    }

    export function getClipBoardContent(): void {
        if (_pluginProxy) {
            _pluginProxy.getClipBoardContent()
        } else {
            onPlatformCallBack(JSON.stringify({ PlatformResultCode: EPlatformEvent.GET_CLIPBOARD_SUCCESS, msg: "获取剪切板内容成功", url: "" }))
        }
    }

    export function initHeadFace(url: string): void {
        cc.log("[PluginManager.initHeadFace] url:", url)
        _pluginProxy.initHeadFace(JSON.stringify({
            UpLoadURL: url
        }))
    }

    export function getPayTypeByMid(mid: number): string {
        if (!pluginConfig) {
            return
        }

        if (!_iapPluginList) {
            _loadPayModeList()
        }
        for (const plugin of _iapPluginList) {
            if (plugin.mid == mid.toString()) {
                return plugin.name
            }
        }
        // const h5List = {
        //     "111": "IAPWeiXinH5",
        // }
        // return h5List[mid]
    }

    export function getOnlyPayType(): string | false {
        if (!pluginConfig) {
            return false
        }

        if (!_iapPluginList) {
            _loadPayModeList()
        }

        if (_iapPluginList.length == 1) {
            return _iapPluginList[0].name
        }

        return false
    }

    export function hasPluginByName(name: string): boolean {
        if (pluginConfig) {
            for (const plugin of pluginConfig.plugins) {
                if (plugin.name == name) {
                    return true
                }
            }
        }
        return false
    }

    export function hasPluginByType(eType: EPluginType): boolean {
        if (pluginConfig) {
            for (const plugin of pluginConfig.plugins) {
                if (plugin.type == eType.toString()) {
                    return true
                }
            }
        }
        return false
    }

    interface ILoginInfo {
        sessionType: string
        [key: string]: string
    }
    /**
     * 插件登陆
     */
    export function login(loginInfo: ILoginInfo): void {
        izx.logI("[PluginManager.login] sessionType:", JSON.stringify(loginInfo))
        izx.logI("[PluginManager.login] _pluginProxy:", _pluginProxy)
        if (_pluginProxy) {
            // loginInfo.LoginHost = izx.httpUrl
            // loginInfo.PlatformHost = izx.httpUrl
            _loadPlugin(loginInfo.sessionType, EPluginType.kPluginSession)
            _pluginProxy.userItemsLogin(JSON.stringify(loginInfo))
        }
    }

    /**
     * 插件登出
     */
    export function logout(): void {
        cc.log("[PluginManager.logout]")
        if (_pluginProxy) {
            _pluginProxy.logout()
        }
    }

    /**
     * 插件支付
     */
    export function pay(payType: number | string, payInfo: any): void {
        if (_pluginProxy) {
            if (typeof payType === "number")
                payType = getPayTypeByMid(payType)

            _loadPlugin(payType, EPluginType.kPluginIAP)
            // payInfo.IapHost = izx.httpUrl
            cc.log("[PluginManager.share]", JSON.stringify(payInfo))
            _pluginProxy.payForProduct(JSON.stringify(payInfo))
        } else {
            _delayCallBack(onIapCallBack, JSON.stringify({
                PayResultCode: 0,
                msg: "支付完成",
                payInfo: {}
            }))
        }
    }

    interface IShareInfo {
        ShareWay: string
        ShareTaskType: string
        ShareTitle: string
        ShareText: string
        ShareUrl: string
        ShareType: string
        gameid: string
        SharedImg?: string
    }
    /**
     * 插件分享
     */
    export function share(shareInfo: IShareInfo): void {
        if (_pluginProxy) {
            cc.log("[PluginManager.share]", JSON.stringify(shareInfo))
            _pluginProxy.shareWithItems(JSON.stringify(shareInfo))
        } else {
            _delayCallBack(onSocialCallBack, JSON.stringify({
                ShareResultCode: 0,
                msg: "分享成功",
                shareResultInfo: {}
            }))
        }
    }

    /**
     * 打开客服
     */
    // export function openKeFu(): void {
    //     _jump2ExtendMethod(3)
    // }

    export function openKeFu(): void {
      if (_pluginProxy) {
        _loadPlugin("ExtendQIYUKF", EPluginType.kPluginExend)
        let params = {}
        if (izx.user && izx.user.uid) {
          params["uid"] = izx.user.uid + ""
        }
        _pluginProxy.jump2ExtendMethod(3, JSON.stringify(params))
      }
    }

    function _jump2ExtendMethod(tag: number): void {
        cc.log("[PluginManager.jump2ExtendMethod]", tag)
        if (_pluginProxy) {
            _loadPluginByTag(tag, EPluginType.kPluginExend)
            _pluginProxy.jump2ExtendMethod(tag, JSON.stringify({}))
        }
    }

    /**
     * 登陆完成后通知推送插件 让它去注册推送
     */
    export function StartPushSDK(): void {
        cc.log("[PluginManager.StartPushSDK]")
        if (_pluginProxy) {
            _pluginProxy.StartPushSDKItem(JSON.stringify({ PushHost: izx.httpUrl }))
        }
    }

    /**
     * 友盟 统计事件
     */
    export function logEvent(name: string, param?: any): void {
      cc.log("[PluginManager logEvent]", name, JSON.stringify(param))
      if (_pluginProxy) {
        cc.log("_loadPlugin AnalyticsUmeng start")
        _loadPlugin("AnalyticsUmeng", 2)
        cc.log("_loadPlugin AnalyticsUmeng end")
        _pluginProxy.logEvent(1, name, JSON.stringify(param) || '')
      } else if (cc.sys.WECHAT_GAME === cc.sys.platform) {
        cc.log("cc.sys.WECHAT_GAME === cc.sys.platform")
        WxWrapper.LogEvent(name, param)
      }
    }

    /**
     * 获取 OpenInstall 参数
     */
    export function getOpenInstallParms(): void {
        cc.log("[PluginManager.getOpenInstallParms]")
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            ToJava.callStaticMethod("org/cocos2dx/javascript/Luaj", "getOpenInstallParms", "()V")
        } else if (cc.sys.os == cc.sys.OS_IOS) {
            ToJava.callStaticMethod("LuaObjc", "getOpenInstallParms")
        } else if (CC_PREVIEW) {
            _delayCallBack(onPlatformCallBack, JSON.stringify({
                PlatformResultCode: EPlatformEvent.GET_OPENINSTALL_PARAMS,
                msg: "获取app安装参数",
                url: JSON.stringify({
                    inviteCode: "111474"
                }),
            }))
        }
    }

    /**
     * 展示广告
     */
    export function showAds(adInfo: IAdInfo): void {
        cc.log("[PluginManager.showAds]", adInfo)
        if (adInfo.adPlugin == null || adInfo.adPlugin.length == 0) {
          return
        }
        if (adInfo.adId == null || adInfo.adId.length == 0) {
          return
        }
        if (cc.sys.WECHAT_GAME === cc.sys.platform) {
          WxWrapper.showVideoAd(adInfo, (msg)=>{
            console.log("WxWrapper.showVideoAd callback")
            onAdsCallBack(msg)
          })
          return
        }
        if (_pluginProxy) {
            cc.log("[PluginManager.showAds]", JSON.stringify(adInfo))
            _loadPlugin(adInfo.adPlugin, EPluginType.kPluginAds)
            _pluginProxy.showAds(JSON.stringify(adInfo))
        } else {
            _delayCallBack(onAdsCallBack, JSON.stringify({
                AdsResultCode: EAdsResult.RESULT_CODE_REWARTVIDEO_SUCCEES,
                adsInfo: adInfo,
                msg: "广告播放成功"
            }), 3)
        }
    }

    /**
     * 隐藏广告
     */
    export function hideAds(adsType: EAdsType): void {
        cc.log("[PluginManager.hideAds]", adsType)
        if (_pluginProxy) {
            _pluginProxy.hideAds(adsType)
        }
    }

    function _delayCallBack(callback: Function, data: any, time: number = 0.5) {
        if (_pluginProxy) {
            return
        }

        cc.Canvas.instance.node.runAction(cc.sequence(cc.delayTime(time), cc.callFunc(() => {
            callback(data)
        })))
    }

    /**
     * 获取刘海屏刘海高度
     */
    export function getNotchHeight(): number {
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
            const version = ToJava.callStaticMethod("org/cocos2dx/javascript/Luaj", "getVersion", "()Ljava/lang/String;")
            if (Utils.versionCompare(version, '1.0.1') >= 0) {
                return ToJava.callStaticMethod("org/cocos2dx/javascript/Luaj", "getNotchHeight", "()I")
            }
        }

        return 0
    }
    
    /**
     * 获取拉起APP时传入私人房参数
     */
    export function getPrivateRoomCode(): string {
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
            const version = ToJava.callStaticMethod("org/cocos2dx/javascript/Luaj", "getVersion", "()Ljava/lang/String;")
            if (Utils.versionCompare(version, '1.0.2') >= 0) {
                return ToJava.callStaticMethod("org/cocos2dx/javascript/Luaj", "getPrivateRoomCode", "()Ljava/lang/String;")
            }
        }

        return ""
    }
}