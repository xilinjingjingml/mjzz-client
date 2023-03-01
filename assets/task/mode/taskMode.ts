import BaseMode from "../../framework/base/baseMode"
import { izx } from "../../framework/izx"
import { TASK_EVENT } from "../task_events"
import Constants from "../../common/constants";
import { taskUtil } from "../taskUtil";

const GET_TASK_PROGRESS = "mjzz-lobby-task-srv/task/getTaskProgress"
const GET_TASK_AWARD = "mjzz-lobby-task-srv/task/getTaskAward"
const UPT_TASK_PROGRESS_BY_INDEX = "mjzz-lobby-task-srv/task/uptTaskProgressByIndex"
const UPT_TASK_PROGRESS_BY_GROUP = "mjzz-lobby-task-srv/task/uptTaskProgressByGroup"

export default class TaskMode extends BaseMode{
    taskProgress = null

    constructor() {        
        super()
        this.autoRegHander()
        this.init()
    }

    init() {
        izx.log("TaskMode init")
        izx.on(TASK_EVENT.GET_TASK_PROGRESS_REQ, this.GetTaskProgressReq, this)
        izx.on(TASK_EVENT.GET_TASK_AWARD_REQ, this.GetTaskAwardReq, this)
        izx.on(TASK_EVENT.UPT_TASK_PROGRESS_BY_INDEX_REQ, this.UptTaskProgressByIndexReq, this)
        izx.on(TASK_EVENT.UPT_TASK_PROGRESS_BY_GROUP_REQ, this.UptTaskProgressByGroupReq, this)
        izx.on(Constants.EventName.PRE_LOAD_TASK_PIC, this.preLoadPic, this)
    }

    unLoad() {
        izx.offByTag(this)
        izx.unsetProto("task")
    }

    GetTaskProgressReq(msg) {
        let url = izx.httpUrl + GET_TASK_PROGRESS
        let body = msg

        izx.log(body)

        if (msg.type == 4 && this.taskProgress && this.taskProgress.length>0) {
            izx.dispatchEvent(TASK_EVENT.GET_PERSONAL_PROGRESS_RSP, this.taskProgress)
            return
        } else {
            msg.type = 0
        }

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.err_code !== 1) {
                izx.logW("get task progress err!", res.err_code)
                izx.logI(body)
                return
            }

            // 计算统计信息
            for (let task of res.task_items)  {
                if (task.task_cond == 10) {
                    let ju = task.cur_num ? Number(task.cur_num) : 0
                    if (ju > izx.user.totalJu) {
                        izx.user.totalJu = ju
                    }
                } else if (task.task_cond == 8) {
                    let ju = task.cur_num ? Number(task.cur_num) : 0
                    if (ju > izx.user.winJu) {
                        izx.user.winJu = ju
                    }
                }
            }

            this.taskProgress = res.task_items
            izx.dispatchEvent(TASK_EVENT.GET_TASK_PROGRESS_RSP, res.task_items)
            izx.dispatchEvent(TASK_EVENT.GET_PERSONAL_PROGRESS_RSP, res.task_items)
        })
    }

    GetTaskAwardReq(msg) {
        let url = izx.httpUrl + GET_TASK_AWARD
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.err_code !== 1) {
                izx.logW("get task award err!", res.err_code)
                if (res.err_code == -9) {
                    izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: res.err_code, msg: "您正在游戏中，无法进行操作"})
                }
                return
            }

            let awards = new Array(res.awards.length)
            for(var i = 0; i<res.awards.length; i++) {
                let award = res.awards[i]
                let id = award.prop_id ? award.prop_id : 0
                awards[i] = {index:id, num:award.min_num}
            }
            izx.dispatchEvent(Constants.EventName.SHOW_AWARDS, {awards: awards})
        })
    }

    UptTaskProgressByIndexReq(msg) {
        let url = izx.httpUrl + UPT_TASK_PROGRESS_BY_INDEX
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.err_code !== 1) {
                izx.logW("upt task progress by index err!", res.err_code)
                izx.logI(body)
                return
            }

            izx.dispatchEvent(TASK_EVENT.UPT_TASK_PROGRESS_BY_INDEX_RSP, res.task_items)
        })
    }

    UptTaskProgressByGroupReq(msg) {
        let url = izx.httpUrl + UPT_TASK_PROGRESS_BY_GROUP
        let body = msg

        izx.log(body)

        izx.httpPost(url, null, body, (res) => {
            if (!res || res.err_code !== 1) {
                izx.logW("upt task progress by group err!", res.err_code)
                izx.logI(body)
                return
            }

            izx.dispatchEvent(TASK_EVENT.UPT_TASK_PROGRESS_BY_GROUP_RSP, res.task_items)
        })
    }

    preLoadPic() {        
        if (!CC_EDITOR){
            taskUtil.preLoadPic(()=> {
                izx.dispatchEvent(Constants.EventName.PRE_LOAD_VIP_PIC)
            })            
        }
    }
}