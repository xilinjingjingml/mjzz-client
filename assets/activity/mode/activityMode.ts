import BaseMode from "../../framework/base/baseMode"
import { izx } from "../../framework/izx"
import { ACTIVITY_EVENT } from "../activity_events"
import Constants, { COMMON_CONSTANT } from "../../common/constants";
import { ACTIVITY_CONSTANT } from "../activity_constants"
import { AdPos, AdState } from "../../ad/adConstants";
import { EAdsResult } from "../../framework/plugin/IPluginProxy"
import { AD_EVENT } from "../../ad/adEvents"
import { activityUtil } from "../activityUtil";

const GET_ACTIVITY_PROGRESS = "mjzz-lobby-activity-srv/activity/getActivityProgress"
const UPT_BCS_AD_STATE = "mjzz-lobby-activity-srv/activity/uptBcsAdState"
const GET_ACTIVITY_AWARD = "mjzz-lobby-activity-srv/activity/getActivityAward"

export default class ActivityMode extends BaseMode{
    _progId = ""
    _callback = null

    activityProgress = null

    constructor() {        
        super()
        this.autoRegHander()
        this.init()
    }

    init() {
        izx.log("ActivityMode init")
        izx.on(Constants.EventName.PLUGIN_ADS_CALLBACK, this.onPluginAdsCallback, this)
        izx.on(ACTIVITY_EVENT.GET_ACTIVITY_PROGRESS_REQ, this.GetActivityProgressReq, this)
        izx.on(ACTIVITY_EVENT.UPT_BCS_AD_STATE_REQ, this.UptBcsAdStateReq, this)
        izx.on(ACTIVITY_EVENT.GET_ACTIVITY_AWARD_REQ, this.GetActivityAwardReq, this)
        izx.on(Constants.EventName.PRE_LOAD_ACTIVITY_PIC, this.preLoadPic, this)
    }

    unLoad() {
        izx.log("ActivityMode unLoad")
        izx.offByTag(this)
        izx.unsetProto("activity")
    }

    onPluginAdsCallback(msg) {
        izx.log("ActivityMode onPluginAdsCallback")

        if (msg == null) {
            return
        }
        let adInfo = msg.adsInfo
        if (adInfo.adArea != AdPos.BaiCaiShen) {
            return
        }
        if (msg.AdsResultCode == EAdsResult.RESULT_CODE_REWARTVIDEO_SUCCEES) {
            this.UptBcsAdStateReq({uid: izx.user.uid, state: AdState.OrderFinish})
        } else if (msg.AdsResultCode == EAdsResult.RESULT_CODE_REWARTVIDEO_FAIL){
            izx.log("ad play fail msg = ", msg.msg)
            this.UptBcsAdStateReq({uid: izx.user.uid, state: AdState.OrderCancel})
        }
    }

    GetActivityProgressReq(msg) {
        izx.log("GetActivityProgressReq")
        let url = izx.httpUrl + GET_ACTIVITY_PROGRESS
        let body = msg

        izx.log(JSON.stringify(body))

        if (msg.type == ACTIVITY_CONSTANT.AWARD_BCS && this.activityProgress && this.activityProgress.length>0) {
            let isEqual3 = function(element, index, array) {
                return (element.type == 3);
            }
            let activityItems = this.activityProgress.filter(isEqual3)
            izx.dispatchEvent(ACTIVITY_EVENT.GET_ACTIVITY_PROGRESS_RSP, activityItems)
            return
        } else {
            msg.type = 0
        }

        izx.httpPost(url, null, body, (res) => {
            izx.log(JSON.stringify(res))
            if (!res || res.err_code !== 1) {
                izx.logW("get activity progress err!", res.err_code)
                return
            }
            this.activityProgress = res.activity_items
            izx.dispatchEvent(ACTIVITY_EVENT.GET_ACTIVITY_PROGRESS_RSP, res.activity_items)
        })
    }

    UptBcsAdStateReq(msg, progId = undefined, callback = undefined) {
        izx.log("UptBcsAdStateReq msg = ", msg)
        if (progId) {
            this._progId = progId
        }
        if (callback) {
            this._callback = callback
        }
        let url = izx.httpUrl + UPT_BCS_AD_STATE
        let body = msg
        izx.log("url = ", url)
        izx.log("body = ", body)
        izx.httpPost(url, null, body, (rsp) => {
            izx.log("UptReliefAdStateRsp rsp = ", rsp)
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
                izx.dispatchEvent(AD_EVENT.SHOW_AD_ON_SPOT, {adPos: AdPos.BaiCaiShen})
            }
            else if (msg.state == AdState.OrderFinish) {
                izx.dispatchEvent(ACTIVITY_EVENT.GET_ACTIVITY_AWARD_REQ, {
                    uid: izx.user.uid,
                    progIds: this._progId,
                    type: ACTIVITY_CONSTANT.AWARD_BCS,
                    double: 1
                }, this._callback)
            }
        })
    }
    
    GetActivityAwardReq(msg, callback = undefined) {
        let url = izx.httpUrl + GET_ACTIVITY_AWARD
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.err_code !== 1) {
                izx.logW("get activity award err!", res.err_code)
                if (res.err_code == -9) {
                    izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: res.err_code, msg: "您正在游戏中，无法进行操作"})
                }
                return
            }

            if (callback) {
                callback()
            }

            let awards = new Array(res.awards.length)
            for(var i = 0; i<res.awards.length; i++) {
                let award = res.awards[i]
                let id = award.prop_id ? award.prop_id : 0
                if (id == COMMON_CONSTANT.ITEM_HEAD_FRAME) {
                    awards[i] = {index:id, num:award.min_num, headFrameIndex:award.prop_index}
                } else {
                    awards[i] = {index:id, num:award.min_num}
                }
            }
            izx.dispatchEvent(Constants.EventName.SHOW_AWARDS, {awards: awards})
        })
    }

    preLoadPic(bBcs) {        
        if (!CC_EDITOR){
            activityUtil.preLoadPic(()=> {
                izx.dispatchEvent(Constants.EventName.PRE_LOAD_TASK_PIC)
                if (bBcs) {
                    let lobby_guide_end = izx.getData(izx.imei + "lobby_guide_end")
                    if (!lobby_guide_end) {
                        return
                    }
                    if (!this.activityProgress || this.activityProgress.length === 0) {
                        return
                    }
            
                    for (let activity of this.activityProgress) {
                        if (activity.type == 3) { // 限时活动
                            if (activity.status == 2) { // 可领取
                                // 拜财神
                                let curHour = new Date().getHours()
                                let times = activity.title.split(",")
                                if ((curHour >= Number(times[0]) && curHour <= Number(times[1])) || (curHour >= Number(times[2]) && curHour <= Number(times[3]))) {
                                    if (!izx.isInGameScene) {
                                        izx.dispatchEvent(Constants.EventName.ACTIVITY_SHOW_BCS, activity)
                                    }
                                }
                                break
                            }
                        }
                    }
                }
            })
        }
    }
}