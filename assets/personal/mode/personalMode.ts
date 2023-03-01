import Constants from "../../common/constants"
import BaseMode from "../../framework/base/baseMode"
import { izx } from "../../framework/izx"
import { PERSONAL_EVENT } from "../personal_events"
import { personalUtil } from "../personalUtil";

const UPDATE_HEAD = "mjzz-lobby-item-srv/item/UpdateHead"
const UPDATE_HEAD_FRAME = "mjzz-lobby-item-srv/item/UpdateHeadFrame"

export default class PersonalMode extends BaseMode{
    constructor() {        
        super()
        this.autoRegHander()
        this.init()
    }

    init() {
        izx.log("PersonalMode init")
        izx.on(PERSONAL_EVENT.UPDATE_HEAD_REQ, this.UpdateHeadReq, this)
        izx.on(PERSONAL_EVENT.UPDATE_HEAD_FRAME_REQ, this.UpdateHeadFrameReq, this)
        izx.on(Constants.EventName.PRE_LOAD_PERSONAL_PIC, this.preLoadPic, this)
    }

    unLoad() {
        izx.offByTag(this)
        izx.unsetProto("personal")
    }

    UpdateHeadReq(msg) {
        let url = izx.httpUrl + UPDATE_HEAD
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.err_code !== 1) {
                izx.logW("UpdateHeadReq err!")
                return
            }
        })
    }
    
    UpdateHeadFrameReq(msg, callback) {
        let url = izx.httpUrl + UPDATE_HEAD_FRAME
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.err_code !== 1) {
                izx.logW("UpdateHeadFrameReq err!")
                return
            }

            if (callback) {
                callback()
            }
        })
    }

    preLoadPic() {        
        if (!CC_EDITOR){
            personalUtil.preLoadPic(()=> {
                izx.dispatchEvent(Constants.EventName.PRE_LOAD_LOTTERY_PIC)
            })
        }
    }
}