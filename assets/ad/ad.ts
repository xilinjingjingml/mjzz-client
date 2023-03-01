import { izx } from "../framework/izx"
import AdMode from "./mode/adMode"
import { AdPlugin, AdPos } from "./adConstants"
import { IAdInfo } from "../framework/plugin/IPluginProxy"
import proto = require("./protos/pbAd")
import Constants from "../common/constants"

export default class Ad {

  static _instance: Ad = null
  static getInstance(): Ad {
      if (!Ad._instance) {
        Ad._instance = new Ad()
        Ad._instance._init()
      }

      return Ad._instance
  }    

  private _ad: AdMode = new AdMode()

  private _init() {
    izx.log("_init")
    izx.setProto("ad", proto)
    izx.ad = Ad._instance
  }

  getAreaInfo(id: AdPos) {
    izx.log("getAreaInfo id = ", id)
    let areas = this._ad.adRecords
    if (areas[id] != null) {
      return areas[id]
    }
    return null
  }

  showAd(id: AdPos) {
    izx.log("getAreaInfo id = ", id)
    let area = this.getAreaInfo(id)
    if (area) {
      let adInfo: IAdInfo = {
        adPlugin: area.plugin,
        adArea: area.area,
        adId: area.id,
        adType: area.type,
        adOid: area.oid || ""
      }
      izx.dispatchEvent(Constants.EventName.BLOCK_UI)
      izx.pluginMgr.showAds(adInfo)
    }
  }
}

let ad = Ad.getInstance()