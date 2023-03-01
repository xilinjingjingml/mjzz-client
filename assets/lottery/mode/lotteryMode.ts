import BaseMode from "../../framework/base/baseMode"
import { izx } from "../../framework/izx"
import { LOTTERY_EVENT } from "../lottery_events"
import Constants, { COMMON_CONSTANT } from "../../common/constants";
import { lotteryUtil } from "../lotteryUtil"
import { AdPos, AdState } from "../../ad/adConstants";
import { EAdsResult } from "../../framework/plugin/IPluginProxy";
import { AD_EVENT } from "../../ad/adEvents";

const GET_LOTTERY_CFG = "mjzz-lobby-activity-srv/lottery/getLotteryCfg"
const UPT_LOTTERY_AD_STATE_REQ = "mjzz-lobby-activity-srv/lottery/uptLotteryAdState"
const GET_LOTTERY_AWARD = "mjzz-lobby-activity-srv/lottery/getLotteryAward"

export default class LotteryMode extends BaseMode{
    lotteryCfg = null

    constructor() {        
        super()
        this.autoRegHander()
        this.init()
    }

    init() {
        izx.log("LotteryMode init")
        izx.on(Constants.EventName.PLUGIN_ADS_CALLBACK, this.onPluginAdsCallback, this)
        izx.on(LOTTERY_EVENT.GET_LOTTERY_CFG_REQ, this.GetLotteryCfgReq, this)
        izx.on(LOTTERY_EVENT.UPT_LOTTERY_AD_STATE_REQ, this.UptLotteryAdStateReq, this)
        izx.on(LOTTERY_EVENT.GET_LOTTERY_AWARD_REQ, this.GetLotteryAwardReq, this)
        izx.on(Constants.EventName.PRE_LOAD_LOTTERY_PIC, this.preLoadPic, this)
    }

    unLoad() {
        izx.log("LotteryMode unLoad")
        izx.offByTag(this)
        izx.unsetProto("lottery")
    }

    onPluginAdsCallback(msg) {
        izx.log("LotteryMode onPluginAdsCallback")

        if (msg == null) {
            return
        }
        let adInfo = msg.adsInfo
        if (adInfo.adArea != AdPos.Wheel) {
            return
        }
        if (msg.AdsResultCode == EAdsResult.RESULT_CODE_REWARTVIDEO_SUCCEES) {
            this.UptLotteryAdStateReq({uid: izx.user.uid, state: AdState.OrderFinish})
        } else if (msg.AdsResultCode == EAdsResult.RESULT_CODE_REWARTVIDEO_FAIL){
            izx.log("ad play fail msg = ", msg.msg)
            this.UptLotteryAdStateReq({uid: izx.user.uid, state: AdState.OrderCancel})
        }
    }

    GetLotteryCfgReq(msg) {
        izx.log("GetLotteryCfgReq")
        let url = izx.httpUrl + GET_LOTTERY_CFG
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res) {
                izx.logW("get config err!")
                return
            }
            this.lotteryCfg = res
            izx.dispatchEvent(LOTTERY_EVENT.GET_LOTTERY_CFG_RSP, res)
        })
    }

    UptLotteryAdStateReq(msg, progId = undefined, callback = undefined) {
        izx.log("UptLotteryAdStateReq msg = ", msg)
        let url = izx.httpUrl + UPT_LOTTERY_AD_STATE_REQ
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
                } else if (rsp.err_code == -3) {
                    izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: rsp.err_code, msg: "请您先玩一局游戏再来参与幸运转盘", callback:()=> {
                        izx.dispatchEvent(Constants.EventName.LOTTERY_CLOSE_MAIN)
                        izx.dispatchEvent(Constants.EventName.QUICK_START_GAME)
                    }})
                }
                return
            }
            if (msg.state == AdState.OrderInit) {
                izx.dispatchEvent(AD_EVENT.SHOW_AD_ON_SPOT, {adPos: AdPos.Wheel})
            }
            else if (msg.state == AdState.OrderFinish) {
                izx.dispatchEvent(LOTTERY_EVENT.GET_LOTTERY_AWARD_REQ, {
                    uid: izx.user.uid,
                })
            }
        })
    }

    GetLotteryAwardReq(msg) {
        let url = izx.httpUrl + GET_LOTTERY_AWARD
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.err_code != 1)
            {
                izx.logW("get lottery award err!", res.err_code)
                if (res.code == -9) {
                    izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: res.code, msg: "您正在游戏中，无法进行操作"})
                }
                return
            }

            izx.dispatchEvent(LOTTERY_EVENT.GET_LOTTERY_AWARD_RSP, res)
        })
    }

    preLoadPic() {        
        if (!CC_EDITOR){
            lotteryUtil.preLoadPic()
        }
    }
}