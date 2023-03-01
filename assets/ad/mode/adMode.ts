import Constants from "../../common/constants"
import BaseMode from "../../framework/base/baseMode"
import { izx } from "../../framework/izx"
import { EAdsResult } from "../../framework/plugin/IPluginProxy"
import { AdPlugin, AdPos, AdState } from "../adConstants"
import { AD_EVENT } from "../adEvents"

const INIT_AD_ORDER = "mjzz-lobby-ad-srv/Ad/InitAdOrder"
const UPDATE_AD_ORDER = "mjzz-lobby-ad-srv/Ad/UpdateAdOrder"
const GET_AD_AWARDS = "mjzz-lobby-ad-srv/Ad/GetAdAwards"

export default class AdMode extends BaseMode{
  constructor() {
    super()
    this.autoRegHander()
    this.init()
  }

  adPlugins = {
    1: "AdsTTAds",
    2: "AdsQQAds",
    3: "AdsWechat",
  }
  adRecords = null
  adEvent = []
  adSpotsReqCallback = null

  init() {
    izx.log("AdMode init")
    izx.on(Constants.EventName.PLUGIN_ADS_CALLBACK, this.onPluginAdsCallback, this)
    izx.on(AD_EVENT.GET_AD_SPOT_REQ, this.GetAdSpotsReq, this)
    izx.on(AD_EVENT.INIT_AD_ORDER_REQ, this.InitAdOrderReq, this)
    izx.on(AD_EVENT.UPDATE_AD_ORDER_REQ, this.UpdateAdOrderReq, this)
    izx.on(AD_EVENT.GET_AD_AWARDS_REQ, this.GetAdAwardsReq, this)

    izx.on(AD_EVENT.SHOW_AD_ON_SPOT, this.ShowAdOnSpot, this)
    izx.on(AD_EVENT.POP_AD_LACK_MONEY, this.PopAdLackMoney, this)
    izx.on(AD_EVENT.POP_AD_LOSE_FREE, this.PopAdLoseFree, this)
    izx.on("save_ad_callback_event", this.saveAdCallbackEvent, this)

    izx.on(Constants.EventName.FOREGROUND, this.onForeground, this)
  }

  saveAdCallbackEvent(data) {
    izx.log("saveAdCallbackEvent")
    this.adEvent.push(data)
  }

  onForeground(msg) {
    let temp = JSON.parse(JSON.stringify(this.adEvent))
    setTimeout(() => {
      temp.forEach((v) => {
        izx.dispatchEvent(Constants.EventName.PLUGIN_ADS_CALLBACK, JSON.parse(v))
      })    
    }, 4000);
    this.adEvent = []
  }

  onPluginAdsCallback(msg) {
    izx.log("onPluginAdsCallback msg = ", msg)
    izx.log("msg.AdsResultCode = ", msg.AdsResultCode)
    izx.log("msg.adsInfo = ", msg.adsInfo)
    izx.log("msg.msg = ", msg.msg)
    //msg =  {"AdsResultCode":12,"adsInfo":{"adId":"945683670","adType":"4"},"msg":"广告播放成功"}
    izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
    if (msg == null) {
      return
    }
    let adInfo = msg.adsInfo
    if (adInfo.adOid == null || adInfo.adOid == "") {
      return
    }
    if (adInfo.adArea == AdPos.ChangeStartGame) {
      return
    }
    if (msg.AdsResultCode == EAdsResult.RESULT_CODE_REWARTVIDEO_SUCCEES) {
      this.UpdateAdOrderReq({oid: adInfo.adOid, state: AdState.OrderFinish})
    // } else if (msg.AdsResultCode == EAdsResult.RESULT_CODE_REWARTVIDEO_FAIL){
    } else {
      izx.log("ad play fail msg = ", msg.msg)
      izx.dispatchEvent(Constants.EventName.SHOW_SMALL_TIPS, {msg: msg.msg ? msg.msg : "广告播放失败"})
      if (msg.AdsResultCode == EAdsResult.RESULT_CODE_REWARTVIDEO_FAIL) {
        this.UpdateAdOrderReq({oid: adInfo.adOid, state: AdState.OrderCancel})
      }
    }
  }

  ShowAdOnSpot(msg) {
    izx.log("ShowAdOnSpot msg = ", msg)
    izx.ad.showAd(msg.adPos)
  }

  GetAdSpotsReq(msg) {
    izx.log("GetAdSpotsReq")
    this.adSpotsReqCallback = msg.callback
    izx.notify("mjzz-lobby-ad-srv.Ad.GetAdSpots", "GetAdSpotsReq", {uid: izx.user.uid})
  }

  GetAdSpotsAckHandler(msg) {
    izx.log("GetAdSpotsAck msg = ", msg)
    msg = msg.packet
    if (msg.errCode != 0) {
      return
    }
    let random = function (min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    this.adRecords = {}
    msg.records.forEach(v => {
      this.adRecords[v.area] = v
      v.mapIds = {}
      v.ids.forEach(vv => {
        v.mapIds[vv.channel] = vv
      })
      if (cc.sys.WECHAT_GAME === cc.sys.platform) {
        let item = v.mapIds[AdPlugin.AdsWechat]
        if (item != null) {
          v.plugin = this.adPlugins[AdPlugin.AdsWechat]
          v.id = item.id
        }
      } else {
        // 根据百分比随机确定播放某一个渠道的广告
        let num = random(1, 100)
        let item = v.mapIds[AdPlugin.AdsTTAds]
        if (item != null && num <= item.percentage) {
          v.plugin = this.adPlugins[AdPlugin.AdsTTAds]
          v.id = item.id
        } else {
          item = v.mapIds[AdPlugin.AdsQQAds]
          if (item != null) {
            v.plugin = this.adPlugins[AdPlugin.AdsQQAds]
            v.id = item.id
          }
        }
      }
    });
    this.adSpotsReqCallback && this.adSpotsReqCallback()
    this.adSpotsReqCallback = null
    izx.dispatchEvent(AD_EVENT.GET_AD_SPOT_ACK, {})
  }

  InitAdOrderReq(msg) {
    izx.log("InitAdOrderReq msg = ", msg)
    let adInfo = izx.ad.getAreaInfo(msg.adPos)
    izx.log("adInfo = ",  JSON.stringify(adInfo))
    if (adInfo == null || adInfo.maxNum <= adInfo.curNum) {
      msg.callback && msg.callback()
      return
    }
    let url = izx.httpUrl + INIT_AD_ORDER
    let body = {
      service: msg.service || "app.client",
      uid: izx.user.uid,
      aid: msg.adPos,
    }
    izx.log("url = ", url)
    izx.log("body = ", body)
    izx.dispatchEvent(Constants.EventName.BLOCK_UI)
    izx.httpPost(url, null, body, (ack) => {
      izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
      izx.log("InitAdOrder ack = ", ack)
      if (ack == null) {
        izx.log("unknown error")
        msg.callback && msg.callback()
        return 
      }
      if (ack.err_code && ack.err_code !== 0) {
        izx.log("ack.err_code = ", ack.err_code)
        izx.log("ack.err_msg = ", ack.err_msg)
        msg.callback && msg.callback(ack)
        return
      }
      adInfo.oid = ack.oid
      if (msg.callback) {
        msg.callback(ack)
      } else {
        izx.ad.showAd(msg.adPos)
      } 
    })
  }

  UpdateAdOrderReq(msg) {
    izx.log("UpdateAdOrderReq msg = ", msg)
    let url = izx.httpUrl + UPDATE_AD_ORDER
    let body = {
      oid: msg.oid,
      state: msg.state
    }
    izx.log("url = ", url)
    izx.log("body = ", body)
    izx.dispatchEvent(Constants.EventName.BLOCK_UI)
    izx.httpPost(url, null, body, (ack) => {
      izx.log("UpdateAdOrderReq ack = ", ack)
      izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
      if (ack == null) {
        izx.log("unknown error")
        msg.callback && msg.callback()
        return 
      }
      if (ack.err_code && ack.err_code !== 0) {
        izx.log("ack.err_code = ", ack.err_code)
        izx.log("ack.err_msg = ", ack.err_msg)
        msg.callback && msg.callback()
        return
      }
      if (ack.order) {
        let order = ack.order
        if (msg.callback) {
          order.state = msg.state
          msg.callback(order)
        } else {
          this.GetAdAwardsReq({oid: order.id})
        }
      }
    })
  }

  GetAdAwardsReq(msg) {
    izx.log("GetAdAwardsReq msg = ", msg)
    let url = izx.httpUrl + GET_AD_AWARDS
    let body = {
      oid : msg.oid
    }
    izx.log("url = ", url)
    izx.log("body = ", body)
    izx.dispatchEvent(Constants.EventName.BLOCK_UI)
    izx.httpPost(url, null, body, (ack) => {
      izx.log("GetAdAwardsReq ack = ", ack)
      izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
      if (ack == null) {
        izx.log("unknown error")
        return 
      }
      if (ack.err_code && ack.err_code !== 0) {
        izx.log("ack.err_code = ", ack.err_code)
        izx.log("ack.err_msg = ", ack.err_msg)
        return
      }
      if (ack.awards) {
        izx.log("get ad awards = ", ack.awards)
        izx.dispatchEvent(Constants.EventName.SHOW_AWARDS, {awards: ack.awards})
        this.GetAdSpotsReq({uid:izx.user.uid})
      }
    })
  }

  AdSpotDispNotiHandler(msg) {
    izx.log("AdSpotDispNotiHandler msg = ", msg)
    msg = msg.packet
    if (msg.aid == AdPos.LoseFree && izx.isInGameScene) {
      let oid = null
      let score = null
      msg.params.forEach(item => {
        izx.log("item = ", item)
        if (item.key == "oid") {
          oid = item.value
        } else if(item.key == "score") {
          score = item.value
        } 
      });
      izx.log("oid = ", oid)
      izx.log("score = ", score)
      if (oid && score) {
        this.PopAdLoseFree({oid: oid, money: parseInt(score)})
      }
    }
  }

  PopAdLackMoney(msg) {
    izx.log("PopAdLackMoney msg = ", msg)
    let adInfo = izx.ad.getAreaInfo(AdPos.LackMoney)
    izx.log("PopAdLackMoney adInfo = ", adInfo)
    if (adInfo.curNum < adInfo.maxNum) {
      izx.pushDialog("unipop","prefabs/LackMoney", null, {initParam: {}}) 
    }
  }

  PopAdLoseFree(msg) {
    izx.log("PopAdLoseFree msg = ", msg)
    izx.pushDialog("unipop","prefabs/LoseFree", null, {initParam: {money:msg.money,oid:msg.oid}}) 
  }
}