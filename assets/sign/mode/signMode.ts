import BaseMode from "../../framework/base/baseMode"
import { izx } from "../../framework/izx"
import { SIGN_EVENT } from "../sign_events"
import Constants from "../../common/constants";
import { AdPos, AdState } from "../../ad/adConstants";
import { EAdsResult } from "../../framework/plugin/IPluginProxy"
import { AD_EVENT } from "../../ad/adEvents"
import { signUtil } from "../signUtil";

const GET_SIGN_PROGRESS = "mjzz-lobby-sign-srv/sign/getSignProgress"
const UPT_SIGN_AD_STATE = "mjzz-lobby-sign-srv/sign/uptSignAdState"
const GET_SIGN_AWARD = "mjzz-lobby-sign-srv/sign/getSignAward"

export default class SignMode extends BaseMode{
    _curSignDay = -1
    signProgress = null

    constructor() {        
        super()
        this.autoRegHander()
        this.init()
    }

    init() {
        izx.log("SignMode init")
        izx.on(Constants.EventName.PLUGIN_ADS_CALLBACK, this.onPluginAdsCallback, this)
        izx.on(SIGN_EVENT.GET_SIGN_PROGRESS_REQ, this.GetSignProgressReq, this)
        izx.on(SIGN_EVENT.UPT_SIGN_AD_STATE_REQ, this.UptSignAdStateReq, this)
        izx.on(SIGN_EVENT.GET_SIGN_AWARD_REQ, this.GetSignAwardReq, this)
        izx.on(Constants.EventName.PRE_LOAD_SIGN_PIC, this.preLoadPic, this)
    }

    unLoad() {
        izx.log("SignMode unLoad")
        izx.offByTag(this)
        izx.unsetProto("sign")
    }
    
    onPluginAdsCallback(msg) {
        izx.log("SignMode onPluginAdsCallback")

        if (msg == null) {
            return
        }
        let adInfo = msg.adsInfo
        if (adInfo.adArea != AdPos.SignDouble && adInfo.adArea != AdPos.Signreplenish) {
            return
        }
        if (msg.AdsResultCode == EAdsResult.RESULT_CODE_REWARTVIDEO_SUCCEES) {
            this.UptSignAdStateReq({uid: izx.user.uid, state: AdState.OrderFinish, adPos: adInfo.adArea, sign_day: this._curSignDay})
        } else if (msg.AdsResultCode == EAdsResult.RESULT_CODE_REWARTVIDEO_FAIL) {
            izx.log("ad play fail msg = ", msg.msg)
            this.UptSignAdStateReq({uid: izx.user.uid, state: AdState.OrderCancel, adPos: adInfo.adArea, sign_day: this._curSignDay})
        }
    }

    GetSignProgressReq(msg, readCache) {
        let url = izx.httpUrl + GET_SIGN_PROGRESS
        let body = msg

        izx.log(body, readCache)
        if (readCache && this.signProgress) {
            izx.dispatchEvent(SIGN_EVENT.GET_SIGN_PROGRESS_RSP, this.signProgress)
            return
        }

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.err_code !== 1) {
                izx.logW("get sign progress err!", res.err_code)
                return
            }

            this.signProgress = res
            izx.dispatchEvent(SIGN_EVENT.GET_SIGN_PROGRESS_RSP, res)
        })
    }

    UptSignAdStateReq(msg) {
        izx.log("UptSignAdStateReq msg = ", msg)
        if (msg.sign_day) {
            this._curSignDay = msg.sign_day
        }
        let url = izx.httpUrl + UPT_SIGN_AD_STATE
        let typ = msg.typ
        if (typ == null && msg.adPos != null) {
            if (msg.adPos == AdPos.SignDouble) {
                typ = 2
            } else if (msg.adPos == AdPos.Signreplenish) {
                typ = 3
            }
        }
        if (typ == null) {
            izx.log("params error!")
            return 
        }
        let body = {
            uid: msg.uid,
            state: msg.state,
            typ: typ,
            sign_day: msg.sign_day
        }
        izx.log("url = ", url)
        izx.log("body = ", body)
        izx.httpPost(url, null, body, (rsp) => {
            izx.log("UptSignAdStateReq rsp = ", rsp)
            if (rsp == null) {
                izx.log("unknown error")
                return 
            }
            if (rsp.err_code && rsp.err_code !== 0) {
                izx.log("rsp.err_code = ", rsp.err_code)
                izx.log("rsp.err_msg = ", rsp.err_msg)
                if (rsp.err_code == -9) {
                    izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: rsp.err_code, msg: "您正在游戏中，无法进行操作"})
                }
                return
            }
            if (msg.state == AdState.OrderInit) {
                if (typ == 2) {
                    msg.adPos = AdPos.SignDouble
                } else if (typ == 3) {
                    msg.adPos = AdPos.Signreplenish 
                }
                izx.dispatchEvent(AD_EVENT.SHOW_AD_ON_SPOT, {adPos: msg.adPos})
            }
            else if (msg.state == AdState.OrderFinish) {
                izx.dispatchEvent(SIGN_EVENT.GET_SIGN_AWARD_REQ, {
                    uid: izx.user.uid,
                    sign_type: 1,
                    sign_day: this._curSignDay,
                    award_type: typ,
                })
            }
        })
    }

    GetSignAwardReq(msg) {
        let url = izx.httpUrl + GET_SIGN_AWARD
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.err_code !== 1) {
                izx.logW("get sign award err!", res.err_code)
                if (res.err_code == -9) {
                    izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: res.err_code, msg: "您正在游戏中，无法进行操作"})
                }
                return
            }

            let id = 0
            let num = 0
            if (res.awards[0].id) {
                id = res.awards[0].id
            }
            if (res.awards[0].num) {
                num = res.awards[0].num
            }
            izx.dispatchEvent(Constants.EventName.SHOW_AWARDS, {awards: [{index: id, num: num}]})
        })
    }

    preLoadPic(bQd, bBcs) {        
        if (!CC_EDITOR){
            signUtil.preLoadPic(()=> {
                if (bQd) {
                    izx.dispatchEvent(Constants.EventName.PRE_LOAD_ACTIVITY_PIC)
                    let lobby_guide_end = izx.getData(izx.imei + "lobby_guide_end")
                    if (!lobby_guide_end) {
                        return
                    }
                    if (!this.signProgress || this.signProgress.length === 0) {
                        return
                    }
            
                    var curDay = new Date(Date.now()).getDay()
                    var logDay= new Date(this.signProgress.daily_time * 1000).getDay()
                    izx.log(logDay,curDay)
            
                    // 每日签到
                    let bToday = false // 当日能否领取
                    this.signProgress.daily_items.forEach((v: any) => {
                        if (v.award_status == 1 && logDay == curDay && v.day == curDay) { // 当天可领取
                            bToday = true
                        }
                    })
                    if (bToday) {
                        izx.dispatchEvent(Constants.EventName.SIGN_SHOW_MAIN, bBcs)
                    }
                } else {
                    izx.dispatchEvent(Constants.EventName.PRE_LOAD_ACTIVITY_PIC, bBcs)
                }
            })
        }
    }
} 