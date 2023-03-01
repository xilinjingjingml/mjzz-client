import Constants, { COMMON_CONSTANT } from "../../common/constants"
import BaseMode from "../../framework/base/baseMode"
import { izx } from "../../framework/izx"
import { vipUtil } from "../vipUtil"
import { VIP_EVENT } from "../vip_events"

const GET_VIP_CONFIG = "mjzz-lobby-vip-srv/vip/getVipConfig"
const GET_SEND_VIP_CONFIG = "mjzz-lobby-vip-srv/vip/getSendVipConfig"
const GET_VIP_USER_LEVEL = "mjzz-lobby-vip-srv/vip/getVipUserLevel"
const GET_VIP_AWARDS = "mjzz-lobby-vip-srv/vip/getVipAwards"

export default class VipMode extends BaseMode{
    vipConfigs = null
    sendvipConfigs = null
    vipUserLevel = null

    constructor() {        
        super()
        this.autoRegHander()
        this.init()
    }

    init() {
        izx.log("VipMode init")
        izx.on(VIP_EVENT.GET_VIP_CONFIG_REQ, this.getVipConfigReq, this)
        izx.on(VIP_EVENT.GET_SEND_VIP_CONFIG_REQ, this.getSendVipConfigReq, this)
        izx.on(VIP_EVENT.GET_VIP_USER_LEVEL_REQ, this.getVipUserLevelReq, this)
        izx.on(VIP_EVENT.GET_VIP_AWARDS_REQ, this.getVipAwardsReq, this)
        izx.on(Constants.EventName.PRE_LOAD_VIP_PIC, this.preLoadPic, this)
    }

    unLoad() {
        izx.offByTag(this)
        izx.unsetProto("vip")
    }

    getVipConfigReq(msg, readCache) {
        let url = izx.httpUrl + GET_VIP_CONFIG
        let body = msg

        izx.log(body, readCache)
        if (readCache && this.vipConfigs && this.vipConfigs.length>0) {
            izx.dispatchEvent(VIP_EVENT.GET_VIP_CONFIG_RSP, this.vipConfigs)
            return
        }

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.code.id !== 1) {
                izx.logW("get vip config err!", res.code.id)
                return
            }

            this.vipConfigs = res.vip_configs
            izx.dispatchEvent(VIP_EVENT.GET_VIP_CONFIG_RSP, res.vip_configs)
        })
    }

    getSendVipConfigReq(msg, readCache) {
        let url = izx.httpUrl + GET_SEND_VIP_CONFIG
        let body = msg

        izx.log(body)
        if (readCache && this.sendvipConfigs && this.sendvipConfigs.length>0) {
            izx.dispatchEvent(VIP_EVENT.GET_SEND_VIP_CONFIG_RSP, this.sendvipConfigs)
            return
        }
        izx.httpPost(url, null, body, (res) => {
            if (!res || res.code.id !== 1) {
                izx.logW("get send vip config err!", res.code.id)
                return
            }

            this.sendvipConfigs = res.awards_list
            izx.dispatchEvent(VIP_EVENT.GET_SEND_VIP_CONFIG_RSP, res.awards_list)
        })
    }

    getVipUserLevelReq(msg, readCache) {
        let url = izx.httpUrl + GET_VIP_USER_LEVEL
        let body = msg

        izx.log(body, readCache)
        if (readCache && this.vipUserLevel && this.vipUserLevel.length>0) {
            izx.dispatchEvent(VIP_EVENT.GET_VIP_USER_LEVEL_RSP, this.vipUserLevel)
            return
        }        

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.code.id !== 1) {
                izx.logW("get vip user level err!", res.code.id)
                return
            }
            this.vipUserLevel = res.info
            if (readCache) {
                izx.dispatchEvent(VIP_EVENT.GET_VIP_USER_LEVEL_RSP, res.info)
            }
        })
    }

    getVipAwardsReq(msg) {
        let url = izx.httpUrl + GET_VIP_AWARDS
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.code.id !== 1) {
                izx.logW("get vip awards err!", res.code.id)
                if (res.code.id == -9) {
                    izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: res.code.id, msg: "您正在游戏中，无法进行操作"})
                }
                return
            }
            
            let awards = new Array(res.awards.length)
            for(var i = 0; i<res.awards.length; i++) {
                let award = res.awards[i]
                let id = award.prop_id ? award.prop_id : 0
                if (id == COMMON_CONSTANT.ITEM_HEAD_FRAME) {
                    awards[i] = {index:id, num:award.min_num, headFrameIndex:award.max_num}
                } else {
                    awards[i] = {index:id, num:award.min_num}
                }
            }
            izx.dispatchEvent(Constants.EventName.SHOW_AWARDS, {awards: awards})

            izx.dispatchEvent(VIP_EVENT.GET_VIP_AWARDS_RSP, res)
        })
    }

    preLoadPic() {        
        if (!CC_EDITOR){
            vipUtil.preLoadPic(()=> {
                izx.dispatchEvent(Constants.EventName.PRE_LOAD_PERSONAL_PIC)
            })            
        }
    }
}