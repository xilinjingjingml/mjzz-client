import BaseMode from "../../framework/base/baseMode"
import { izx } from "../../framework/izx"
import { GIFT_EVENT } from "../gift_events"
import Constants, { COMMON_CONSTANT } from "../../common/constants";
import { giftUtil } from "../giftUtil"

const GET_GIFT_PROGRESS = "mjzz-lobby-activity-srv/gift/getGiftProgress"
const GET_GIFT_AWARD = "mjzz-lobby-activity-srv/gift/getGiftAward"

export default class GiftMode extends BaseMode{
    giftProgress = null

    constructor() {        
        super()
        this.autoRegHander()
        this.init()
    }

    init() {
        izx.log("GiftMode init")
        izx.on(GIFT_EVENT.GET_GIFT_PROGRESS_REQ, this.GetGiftProgressReq, this)
        izx.on(GIFT_EVENT.GET_GIFT_AWARD_REQ, this.GetGiftAwardReq, this)
        izx.on(Constants.EventName.PRE_LOAD_GIFT_PIC, this.preLoadPic, this)
    }

    unLoad() {
        izx.log("GiftMode unLoad")
        izx.offByTag(this)
        izx.unsetProto("gift")
    }

    GetGiftProgressReq(msg) {
        izx.log("GetGiftProgressReq")
        let url = izx.httpUrl + GET_GIFT_PROGRESS
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.code !== 1) {
                izx.logW("get config err!", res.code.id)
                return
            }
            let bGetAllAwards = true
            for (let gift of res.configs) {
                if (gift.status != 3) {
                    bGetAllAwards = false
                    break
                }
            }
            if (bGetAllAwards) {
                izx.setData(izx.user.guid+"_yxl_end", true, true)
                izx.dispatchEvent(Constants.EventName.REFRESH_BTN_YXL)
            }
            this.giftProgress = res.configs
            izx.dispatchEvent(GIFT_EVENT.GET_GIFT_PROGRESS_RSP, res.configs)
        })
    }


    GetGiftAwardReq(msg) {
        let url = izx.httpUrl + GET_GIFT_AWARD
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.code !== 1) {
                izx.logW("get gift award err!", res.code)
                if (res.code == -9) {
                    izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: res.code, msg: "您正在游戏中，无法进行操作"})
                }
                return
            }

            let awards = new Array(res.awards.length)
            for(var i = 0; i<res.awards.length; i++) {
                let award = res.awards[i]
                let id = award.prop_id ? award.prop_id : 0
                if (id == COMMON_CONSTANT.ITEM_HEAD_FRAME) {
                    awards[i] = {index:id, num:award.num, headFrameIndex:award.prop_index}
                } else {
                    awards[i] = {index:id, num:award.num}
                }
            }
            izx.dispatchEvent(Constants.EventName.SHOW_AWARDS, {awards: awards})
        })
    }

    preLoadPic(bYxl, bQd, bBcs) {        
        if (!CC_EDITOR){
            giftUtil.preLoadPic(()=> {
                if (bYxl) {
                    izx.dispatchEvent(Constants.EventName.PRE_LOAD_SIGN_PIC)
                    let lobby_guide_end = izx.getData(izx.imei + "lobby_guide_end")
                    if (!lobby_guide_end) {
                        return
                    }
                    if (!this.giftProgress || this.giftProgress.length === 0) {
                        return
                    }
            
                    izx.dispatchEvent(Constants.EventName.WELCOME_GIFT_SHOW_MAIN, bQd, bBcs)
                } else {
                    izx.dispatchEvent(Constants.EventName.PRE_LOAD_SIGN_PIC, bQd, bBcs)
                }
            })
        }
    }
}