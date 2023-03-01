import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import Constants from "../../common/constants";
import { App } from "../../common/common";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoadingScene extends BaseUi {

  @property(cc.Asset)
  wssCacert: cc.Asset = null
  @property(cc.Label)
  lblVersion: cc.Label = null
  @property(cc.Label)
  lblMsg: cc.Label = null
  @property(cc.ProgressBar)
  processBar: cc.ProgressBar = null

  _progressVal: number = 0
  enableUpdate = false

  start() {
    izx.on(Constants.EventName.GAME_UPDATE_PROGRESS, this.updateProgress, this)
    izx.on(Constants.EventName.GAME_PAUSE_PROGRESS, this.pauseProgress, this)
    izx.on(Constants.EventName.GAME_RESUME_PROGRESS, this.resumeProgress, this)
  }

  onOpen() {
    console.log("loading scene on open scene")       
    this.updateProgress({abs: 0, msg: App.tips.GAME_INIT})
    this.enableUpdate = true
    izx.dispatchEvent(Constants.EventName.ACCOUNT_SOCKET_PEM, {wssCacert: this.wssCacert})
    this.lblVersion.string = "v2.2.5.6"
    izx.callStaticMethod("org/cocos2dx/javascript/Luaj", "hideSplash", "()V")
    let d = new Date()
    izx.pluginMgr.logEvent("LoadingScene_onOpen", {hour: d.getHours() + "", version: this.lblVersion.string})
  }

  updateProgress(msg) {
    console.log(JSON.stringify(msg))
    if (msg.abs) {
      this._progressVal = msg.abs
    } else if (msg.inc) {
      this._progressVal += msg.inc
    }

    this.processBar.progress = this._progressVal
    this.lblMsg.string = msg.msg
    console.log("this.progress.progress = ", this.processBar.progress)
    console.log("this.lblMsg.string = ", this.lblMsg.string)
  }

  pauseProgress(msg) {
    this.enableUpdate = false
  }

  resumeProgress(msg) {
    this.enableUpdate = true
  }

  onClose() {

  }

  onBtnKefu() {
    izx.audioMgr.playBtn()
    if (CC_JSB) {
      izx.pluginMgr.openKeFu()
    } else {
      izx.dispatchEvent(Constants.EventName.SHOW_KEFU)
    }
  }

  onLoad() {
    this.onOpen()
  }

  update (dt) {
    if (!this.enableUpdate) {
      return
    }

    if (this._progressVal >= 1) {
      this._progressVal = 0
    }
    this._progressVal += dt/4
    this.processBar.progress = this._progressVal
  }
}
