import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { TASK_EVENT } from "../task_events";
import Constants from "../../common/constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TaskScene extends BaseUi {
    _content: cc.Node = null

    @property(cc.SpriteFrame)
    btnGreenFrame = null;
    @property(cc.SpriteFrame)
    btnToFinishFrame = null;
    @property(cc.Prefab)
    taskItem = null;

    _sptTip: cc.Node = null
    lastTween: cc.Tween = null
    lastLightTween: cc.Tween = null
   
    onOpen() {
        this.initEvent()
        this.initButton()

        this._sptTip = this.node.getChildByName("SptTip")

        if (this.initParam && this.initParam.length>0) {
            this.getTaskProgressRsp(this.initParam)
        } else {
            izx.dispatchEvent(TASK_EVENT.GET_TASK_PROGRESS_REQ, {
                type: 0,
                uid: izx.user.uid,
            })
        }
        izx.pluginMgr.logEvent("TaskScene_onOpen", {})
    }

    initEvent() {
        izx.on(TASK_EVENT.GET_TASK_PROGRESS_RSP, this.getTaskProgressRsp, this)
        izx.on(TASK_EVENT.UPT_TASK_PROGRESS_BY_INDEX_RSP, this.uptTaskProgressByIndexRsp, this)
        izx.on(TASK_EVENT.UPT_TASK_PROGRESS_BY_GROUP_RSP, this.uptTaskProgressByGroupRsp, this)
    }

    initButton() {
        izx.bindButtonClick("close", this.node, (sender, data) => {
            this.pop()
        })
    }

    touchMain() {
        if (this._sptTip) {
            this._sptTip.active = false
        }
    }

    onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchMain, this ,true);
    }

    onDisable() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.touchMain, this,true);
    }

    getTaskProgressRsp(msg) {
        if (!msg || msg.length === 0) {
            return
        }

        let tempTaskItems = msg.slice(0, 9)
        function isEqual1(element, index, array) {
            return (element.status == 1);
        }
        function isEqual2(element, index, array) {
            return (element.status == 2);
        }
        function isEqual3(element, index, array) {
            return (element.status == 3);
        }
        let taskItems = tempTaskItems.filter(isEqual2).concat(tempTaskItems.filter(isEqual1)).concat(tempTaskItems.filter(isEqual3)).concat(msg.slice(9, 13))
        
        let content = cc.find("scrollView/view/content", this.node)
        content.removeAllChildren()
        let count = 1
        for (let task of taskItems) {
            if (task.task_type == 1) {
                let nItem = cc.instantiate(this.taskItem)
                nItem.active = true
                let jl = cc.find("btn_jl/layout/jl", nItem)
                jl.getComponent(cc.Label).string = task.awards ? task.awards[0].min_num : 0
                nItem.getChildByName("task_name").getComponent(cc.Label).string = task.desc
                let jd = cc.find("jd_bg/jd", nItem)
                jd.getComponent(cc.Label).string = (task.cur_num ? task.cur_num : 0) + "/" + task.cond_num
                let progressBar = cc.find("jd_bg/progressBar", nItem)
                progressBar.getComponent(cc.ProgressBar).progress = (task.cur_num ? task.cur_num : 0) / task.cond_num
                let Background = cc.find("BtnAward/Background", nItem)
                let status = cc.find("BtnAward/Background/status", nItem)
                if (task.status == 1) { // 去完成
                    Background.getComponent(cc.Sprite).spriteFrame = this.btnGreenFrame
                    status.getComponent(cc.Sprite).spriteFrame = this.btnToFinishFrame
                    izx.bindButtonClick("BtnAward", nItem, () => {
                        izx.audioMgr.playBtn()
                        if (task.desc.indexOf("观看升VIP广告") != -1) {
                            izx.dispatchEvent(Constants.EventName.SEND_VIP_SHOW_MAIN)
                        } else {
                            let xlch = izx.dataMgr.getServerList("xlch")
                            if (!xlch) {
                              return
                            }
                            let server = izx.dataMgr.getBestServer(xlch, izx.user.money)
                            if (!server) {
                              return
                            }
                            izx.dispatchEvent(Constants.EventName.ROOM_READY_TO_GAME, {gameId: xlch.id, ruleId: xlch.id + "." + xlch.type + "." + server.type})
                        }
                        this.pop()
                    })
                } else if (task.status == 2) { // 领取
                    izx.bindButtonClick("BtnAward", nItem, () => {
                        izx.audioMgr.playBtn()
                        izx.dispatchEvent(TASK_EVENT.GET_TASK_AWARD_REQ, {
                            uid: izx.user.uid,
                            prog_id: task.prog_id,
                        })
                    })
                } else if (task.status == 3) { //已完成
                    let sptAwarded = nItem.getChildByName("SptAwarded")
                    sptAwarded.active = true
                    let btnAward = nItem.getChildByName("BtnAward")
                    btnAward.active = false
                }
                izx.bindButtonClick("btn_jl", nItem, (sender, data) => {
                    let worldPos = sender.target.parent.convertToWorldSpaceAR(sender.target.position)
                    let localPos = this.node.convertToNodeSpaceAR(worldPos)
                    this._sptTip.setPosition(localPos.x + sender.target.width, localPos.y + sender.target.height/2)
                    this._sptTip.active = true
                })
                content.addChild(nItem)
            } else if (task.task_type == 2) {
                let lblNum = cc.find("SptBgActivity/NodeAward" + count + "/LblNum", this.node)
                let lblActivity = cc.find("SptBgActivity/NodeAward" + count + "/Layout/LblActivity", this.node)
                if (task.awards) {
                    if (task.awards[0].min_num == task.awards[0].max_num) {
                        lblNum.getComponent(cc.Label).string = task.awards[0].min_num
                    } else {
                        lblNum.getComponent(cc.Label).string = task.awards[0].min_num + "-" + task.awards[0].max_num
                    }
                }
                lblActivity.getComponent(cc.Label).string = task.cond_num
                let btnAward = cc.find("SptBgActivity/NodeAward" + count + "/BtnAward", this.node)
                if (task.status == 1) { // 去完成
                } else if (task.status == 2) { // 领取
                    let sptLight = cc.find("SptBgActivity/NodeAward" + count + "/SptLight", this.node)
                    sptLight.active = true
                    this.lastLightTween = cc.tween(sptLight).by(1, {angle: -30}).repeatForever().start()
                    let sptDot = cc.find("SptBgActivity/NodeAward" + count + "/SptDot", this.node)
                    sptDot.active = true
                    let scale = btnAward.scale
                    this.lastTween = cc.tween(btnAward).to(0.8, {scale: scale * 0.8}).to(0.8, {scale: scale}).union().repeatForever().start()
                    izx.bindButtonClick(btnAward, this.node, () => {
                        izx.audioMgr.playBtn()
                        izx.dispatchEvent(TASK_EVENT.GET_TASK_AWARD_REQ, {
                            uid: izx.user.uid,
                            prog_id: task.prog_id,
                        })
                    })
                } else if (task.status == 3) { //已完成
                    let sptLight = cc.find("SptBgActivity/NodeAward" + count + "/SptLight", this.node)
                    sptLight.active = false
                    if (this.lastLightTween) {
                        this.lastLightTween.stop()
                    }
                    if (this.lastTween) {
                        this.lastTween.stop()
                    }
                    let sptDot = cc.find("SptBgActivity/NodeAward" + count + "/SptDot", this.node)
                    sptDot.active = false
                    let sptAwarded = cc.find("SptBgActivity/NodeAward" + count + "/SptAwarded", this.node)
                    sptAwarded.active = true
                    
                    btnAward.getComponent(cc.Button).interactable = false
                    lblNum.active = false
                }
                count += 1

                let curNum = Number(task.cur_num) ? Number(task.cur_num) : 0
                let progressActivity = cc.find("SptBgActivity/ProgressActivity", this.node)
                progressActivity.getComponent(cc.ProgressBar).progress = curNum/task.cond_num

                let lblDayActivity = cc.find("SptBgActivity/SptBgDayActivity/Layout/LblDayActivity", this.node)
                lblDayActivity.getComponent(cc.Label).string = curNum.toString()
            } else if (task.task_type == 3) {
                let btnWeekActivity = cc.find("SptBgActivity/BtnWeekActivity", this.node)
                if (task.status == 1) { // 去完成
                    btnWeekActivity.getComponent(cc.Button).interactable = false
                } else if (task.status == 2) { // 领取
                    let sptLight = cc.find("SptBgActivity/SptLight", this.node)
                    sptLight.active = true
                    izx.bindButtonClick(btnWeekActivity, this.node, () => {
                        izx.audioMgr.playBtn()
                        izx.dispatchEvent(TASK_EVENT.GET_TASK_AWARD_REQ, {
                            uid: izx.user.uid,
                            prog_id: task.prog_id,
                        })
                    })
                } else if (task.status == 3) { //已完成
                    let sptWeekActivityMask = cc.find("SptBgActivity/BtnWeekActivity/SptWeekActivityMask", this.node)
                    sptWeekActivityMask.active = true
                    btnWeekActivity.getComponent(cc.Button).interactable = false
                }

                let curNum = Number(task.cur_num) ? Number(task.cur_num) : 0
                let lblWeekActivity = cc.find("SptBgActivity/NodeBzhy/LblWeekActivity", this.node)
                lblWeekActivity.getComponent(cc.Label).string = curNum + "/" + task.cond_num
                let sptMask = cc.find("SptBgActivity/NodeBzhy/SptMask", this.node)
                let sptBzhy = cc.find("SptBgActivity/NodeBzhy/SptMask/SptBzhy", this.node)
                sptMask.width = curNum/task.cond_num * sptBzhy.width
            }
        }
    }

    uptTaskProgressByIndexRsp(msg) {
    }

    uptTaskProgressByGroupRsp(msg) {
    }
}
