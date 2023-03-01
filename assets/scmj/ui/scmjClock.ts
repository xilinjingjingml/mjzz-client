/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangxinfeng
 * @Date: 2020-11-3
 * @LastEditors: wangxinfeng
 * @LastEditTime: 2020-11-4
 */
import Constants from "../../common/constants";
import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { ScmjAudioUtil } from "../scmjAudioUtil";
import { SCMJ_EVENT } from "../scmjEvents";

const {ccclass, property} = cc._decorator;

@ccclass
export default class scmjClock extends BaseUi {
  @property(cc.Node)
  bgEswn: cc.Node = null;
  @property(cc.Node)
  east: cc.Node = null;
  @property(cc.Node)
  south: cc.Node = null;
  @property(cc.Node)
  west: cc.Node = null;
  @property(cc.Node)
  north: cc.Node = null;
  @property(cc.Label)
  lblTimer01: cc.Label = null;
  @property(cc.Label)
  lblTimer02: cc.Label = null;

  eastChairId = 0
  bgAngle = 0
  mapSpt = {}
  second = -1

  onOpen() {
    console.log("scmjClock onOpen")
    super.onOpen()
    this.registerEvent()
  }

  onClose() {
    console.log("scmjClock onClose")
    super.onClose()
  }
  // 注册事件
  registerEvent() {
    izx.on(SCMJ_EVENT.UPDATE_TIMER, this.updateTimer, this)
    izx.on(SCMJ_EVENT.UPDATE_EAST, this.updateEast, this)
    izx.on(SCMJ_EVENT.BEGIN_GAME_NOTI, this.onStartGameNoti, this)
    izx.on(SCMJ_EVENT.STATE_NONE, this.onStartGameNoti, this)
  }

  onStartGameNoti(noti) {
    console.log("scmjClock onStartGameNoti")
    if (!noti) return
    this.second = -1
    this.showSpt()
    this.showTimer()
  }

  showTimer(second = 0) {
    this.lblTimer01.node.active = false
    this.lblTimer02.node.active = false
    if (second < 0) {
      return
    }
    if (second > 5) {
      this.lblTimer01.node.active = true
      this.lblTimer01.string = second >= 10 ? second + "" : "0" + second
    } else {
      this.lblTimer02.node.active = true
      this.lblTimer02.string = second >= 10 ? second + "" : "0" + second
    }
  }

  showSpt(chairId = 0) {
    this.east.active = false
    this.south.active = false
    this.west.active = false
    this.north.active = false
    if (chairId > 0) {
      this.mapSpt[chairId].active = true
      this.mapSpt[chairId].runAction(cc.repeatForever(cc.sequence(
        cc.fadeIn(0.8),
        cc.fadeOut(0.8),
    )))
    }
  }

  stopTimer() {
    this.unschedule(this.startTimer)
  }

  startTimer() {
    this.second --
    if (this.second >= 0) {
      if (this.second < 5) {
        ScmjAudioUtil.playSound("audio_clock")
      }
      this.showTimer(this.second)
    } else {
      this.second = -1
      this.stopTimer()
    }
  }

  updateTimer(msg) {
    console.log("scmjClock updateTimer msg = ", msg)
    if (this.eastChairId == 0) {
      console.log("this.eastChairId == 0")
      izx.dispatchEvent(SCMJ_EVENT.COMPLETE_REQ)
      return
    }
    this.showSpt(msg.chairId)
    this.second = msg.second
    this.showTimer(this.second)
    this.stopTimer()
    // this.lblTimer01.node.active = true
    this.schedule(this.startTimer, 1)
  }

  updateEast(msg) {
    console.log("scmjClock updateEast msg = ", msg)
    this.eastChairId = msg.chairId
    this.bgAngle = (this.eastChairId - 1) * (-90)
    let chairId = this.eastChairId
    this.mapSpt[chairId] = this.east
    chairId = (this.eastChairId + 1)%4 == 0 ? 4 : (this.eastChairId + 1)%4
    this.mapSpt[chairId] = this.south
    chairId = (this.eastChairId + 2)%4 == 0 ? 4 : (this.eastChairId + 2)%4
    this.mapSpt[chairId] = this.west
    chairId = (this.eastChairId + 3)%4 == 0 ? 4 : (this.eastChairId + 3)%4
    this.mapSpt[chairId] = this.north
    this.bgEswn.angle = - this.bgAngle
  }

  // LIFE-CYCLE CALLBACKS:
  onLoad () {
    this.onOpen()
  }

  start () {

  }

  // update (dt) {}
}
