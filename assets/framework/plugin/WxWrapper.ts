import { IAdInfo, EAdsResult } from "./IPluginProxy"
import { HttpMgr } from "../net/httpMgr"
import { izx } from "../izx"

declare const wx: any

const mWxValid: boolean = window["wx"] ? true : false
const adVideo = {}
const GET_WX_OPENID = "https://mcbeam.mcbeam.pro/mcbeam-authen-srv/auth/weChatMiniSessionKey"
const GAME_LOGIN = "https://mcbeam.mcbeam.pro/mcbeam-authen-srv/auth/weChatLogin"
// const GET_WX_OPENID = "https://mcbeam.mcbeam.cc/mcbeam-authen-srv/auth/weChatMiniSessionKey"
// const GAME_LOGIN = "https://mcbeam.mcbeam.cc/mcbeam-authen-srv/auth/weChatLogin"

namespace WxWrapper {

  function showModal(message) {
    wx.showModal({
        title: "系统提示",
        content: message,
        showCancel: false
    })
}

  function errorMsg(tag, res) {
    return tag + ":" + (res ? (res.tips || res.msg) : "unknown")
  }

  function saveKV(key :string, value :string) {
    localStorage.setItem(key, value)
    return true
  }

  function getKV(key :string) {
    let temp = localStorage.getItem(key)
    if ("" === temp || null === temp) {
      return null
    }
    return temp
  }

  function checkSession(callback) {
    izx.log("WxWrapper checkSession")
    wx.checkSession({
      success () {
        //session_key 未过期，并且在本生命周期一直有效
        izx.log("WxWrapper checkSession success")
        callback()
      },
      fail () {
        // session_key 已经失效，需要重新执行登录流程
        izx.log("WxWrapper checkSession fail")
        getOpenid(callback) //重新登录
      }
    })
  }

  function loginGame(openId, callback) {
    izx.log("WxWrapper loginGame openId = ", openId)
    let url = GAME_LOGIN
    let body = {
      mid: izx.mid,
      pn: izx.packetName,
      imei: izx.imei,
      openid: openId,
      device: izx.device,
    }
    izx.log("url = ", url)
    izx.log("body = ", body)
    HttpMgr.post(url, null, body, (res) => {
      izx.log("GAME_LOGIN res = ",res)
      callback(res)
    })
  }

  function getOpenid(callback) {
    izx.log("WxWrapper getOpenid")
    wx.login({
      success: (res) => {
        izx.log("wx.login success res = ", res)
        let url = GET_WX_OPENID
        let body = {
          mid: izx.mid,
          pn: izx.packetName,
          js_code: res.code
        }
        izx.log("url = ", url)
        izx.log("body = ", body)
        HttpMgr.post(url, null, body, (res) => {
        izx.log("GET_WX_OPENID res = ", res)
        if (res && res.code === "00000" && res.openid) {
            callback(res)
            return
          }
          showModal(res.errMsg)
        })
      },
      fail: (res) => { 
        izx.log("wx.login fail res = ", res)
        showModal(res.errMsg)
      }
    })
  }
  // 使用微信openid登录
  export function login(callback) {
    izx.log("WxWrapper login mWxValid = ", mWxValid)
    if (mWxValid) {
      let openid = getKV("WX_USER_OPENID")
      izx.log("openid = ", openid)
      if (openid) {
        checkSession((res) => {
          if (res) {
            loginGame(res.openid, callback)
          } else {
            loginGame(openid, callback)
          }
        })
      } else {
        getOpenid((res) => {
          loginGame(res.openid, callback)
        })
      }
      
    }
  }
  // 播放激励视频广告
  export function showVideoAd(adInfo:IAdInfo, callback) {
    console.log("WxWrapper showVideoAd adInfo = ", adInfo)
    let success = () => {
      callback && callback(JSON.stringify({
        AdsResultCode: EAdsResult.RESULT_CODE_REWARTVIDEO_SUCCEES,
        adsInfo: adInfo,
        msg: "广告播放成功"
      }))
    }
    let fail = (msg) => {
      console.log("fail msg = ", msg)
      callback && callback(JSON.stringify({
        AdsResultCode: EAdsResult.RESULT_CODE_REWARTVIDEO_FAIL,
        adsInfo: adInfo,
        msg: msg
      }))
    }
    if (!mWxValid) {
      console.log("fail = ", fail)
      fail("非微信小游戏环境")
      return
    }
    if (!adVideo[adInfo.adId]) {
      console.log("createRewardedVideoAd")
      let instance = wx.createRewardedVideoAd({ adUnitId: adInfo.adId, multiton: true })
      adVideo[adInfo.adId] = instance
    }

    let instance = adVideo[adInfo.adId]
    instance.onError((err) => {
      console.error("视频广告" + adInfo.adId, err)
      wx.showToast({
        title: this.videoAdErrHandle(err),
        icon: 'none'
      })
      fail("广告播放失败")
    })

    instance.onClose((status) => {
      console.log("视频广告 onClose")
      if (status && status.isEnded || status === undefined) {
        success()
      } else {
        fail("广告播放中途取消")
      }
    })
    
    console.log("视频广告 show")
    instance.show().catch((err) => {
      instance.load()
        .then(() => {
          console.log("视频广告 load show")
          instance.show().catch((err) => {
            console.log("视频广告 load show err = ", err)
          })
        })
        .catch((err) => {
          console.log("show ad fail err = ", err)
          fail("广告播放失败")
        })
    })
  }

  export function LogEvent(event, params) {
    params = params ? params : {}
    wx.aldSendEvent(event, params)
  }

  export function Copy(text) {
    wx.setClipboardData({
      data: text
    })
  }
}

export default WxWrapper