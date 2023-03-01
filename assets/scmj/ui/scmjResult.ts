/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangxinfeng
 * @Date: 2020-11-30
 * @LastEditors: wangxinfeng
 * @LastEditTime: 2020-11-30
 */
import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { SCMJ_EVENT } from "../scmjEvents";
import { scmjUtil } from "../scmjUtil";
import { CheckType, GameState } from "../scmjConstants";
import { AdPos } from "../../ad/adConstants";
import { AD_EVENT } from "../../ad/adEvents";
import Constants from "../../common/constants";
import { ScmjAudioUtil } from "../scmjAudioUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class scmjResult extends BaseUi {
  winColor = "#efdb9f"
  loseColor = "#8ed1e9"

  @property(cc.Prefab)
  prefabBillItem: cc.Prefab = null;
  @property(cc.Node)
  ndBgWin: cc.Node = null;
  @property(cc.Node)
  imgVictory: cc.Node = null;
  @property(cc.Node)
  imgWin: cc.Node = null;
  @property(cc.Node)
  ndBgLose: cc.Node = null;
  @property(cc.Label)
  lblWinScore: cc.Label = null;
  @property(cc.Label)
  lblLoseScore: cc.Label = null;
  @property(cc.ProgressBar)
  processBar: cc.ProgressBar = null;
  @property(cc.Node)
  ndBills: cc.Node = null;
  @property(cc.Label)
  lblLevel: cc.Label = null;
  @property(cc.Label)
  lblExp: cc.Label = null;

  middleCallback = null;
  enableUpdate = false;
  endProgress = 0;

  onOpen() {
    console.log("scmjResult onOpen")
    super.onOpen()
    this.registerEvent()
  }

  onClose() {
    console.log("scmjResult onClose")
    super.onClose()
  }
  // 注册事件
  registerEvent() {
    izx.on(SCMJ_EVENT.UPDATE_RESULT, this.updateResult, this)
  }

  playAnimation(node) {
    izx.log("scmjResult playAnimation")
    let child = node.getChildByName("BgTitle")
    let disp = child.getComponent(dragonBones.ArmatureDisplay)
    disp.playAnimation("newAnimation", 1)
  }

  updateResult(msg) {
    console.log("scmjResult updateResult msg = ", msg)
    this.node.active = true
    let color = msg.score > 0 ? scmjUtil.hex2color(this.winColor) : scmjUtil.hex2color(this.loseColor)
    if (msg.score > 0) {
      ScmjAudioUtil.playSound("audio_win")
      this.ndBgWin.active = true
      this.ndBgLose.active = false
      if (msg.victory > 1) {
        this.imgVictory.active = true
        this.imgWin.active = false
      } else {
        this.imgVictory.active = false
        this.imgWin.active = true
      }
      this.lblWinScore.node.active = true
      this.lblLoseScore.node.active = false
      this.lblWinScore.string = "+" + msg.score
      this.playAnimation(this.ndBgWin)
    } else {
      ScmjAudioUtil.playSound("audio_lose")
      this.ndBgWin.active = false
      this.ndBgLose.active = true
      this.lblWinScore.node.active = false
      this.lblLoseScore.node.active = true
      this.lblLoseScore.string = msg.score
      this.playAnimation(this.ndBgLose)
    }
    this.ndBills.removeAllChildren()
    msg.items.forEach(item => {
      let node = cc.instantiate(this.prefabBillItem)
      node.parent = this.ndBills
      this.setTypeText(node, item.op, item.fan, item.type, item.score, color)
      this.setRatioText(node, item.ratio, color, item.score)
      this.setLine(node, msg.score > 0 ? true : false)
    });
    this.updateLevel(msg)
  }

  setLine(node, isWin) {
    let lblRatio = <cc.Sprite>(node.getChildByName("Line").getComponent(cc.Sprite))
    if (isWin) {
     
    } else {
      lblRatio.spriteFrame = <cc.SpriteFrame>scmjUtil.loadPic("pics/result/lose/line")
    }
  }

  setRatioText(node, ratio, color, score) {
    let lblRatio = <cc.Label>(node.getChildByName("Ratio").getComponent(cc.Label))
    lblRatio.string = ""
    lblRatio.node.color = color
    if (score <= 0) {
      lblRatio.string = "-" + ratio + "倍"
    } else {
      lblRatio.string = "+" + ratio + "倍" 
    }
  }

  setTypeText(node, op, fan, type, score, color) {
    let lblType = <cc.Label>(node.getChildByName("Type").getComponent(cc.Label))
    lblType.string = ""
    lblType.node.color = color
    let preText = ""
    if (type == CheckType.CheckTypeNone) {
      preText = scmjUtil.opcodeConfig(op)
    } else {
      preText = scmjUtil.checkTypeConfig(type)
    }
    if (preText != "" && score <= 0) {
      preText = "被" + preText
    }
    lblType.string = preText
    let fanText = scmjUtil.fanConfig(fan)
    if (scmjUtil.isKong(op) == false && fanText.length > 0) {
      lblType.string = lblType.string + "(" + fanText + ")"
    }
  }

  updateLevel(msg) {
    let prevLevel = msg.level.prevLevel
    let curLevel = msg.level.curLevel
    let incExp = msg.level.incExp
    let prevLevelExp = msg.level.prevLevelExp
    let prevLeftExp = msg.level.prevLeftExp
    let levelExp = msg.level.levelExp
    let leftExp = msg.level.leftExp
    let money = msg.level.money
    this.lblLevel.string = "LV." + prevLevel
    this.lblExp.string = "+" + incExp
    this.processBar.progress = (prevLevelExp - prevLeftExp)/prevLevelExp
    if (curLevel > prevLevel) {
      this.middleCallback = () => {
        this.lblLevel.string = "LV." + curLevel
      }
    } else {
      this.middleCallback = null
    }
    this.endProgress = (levelExp - leftExp)/levelExp
    izx.log("this.endProgress = ", this.endProgress)
    this.scheduleOnce(() => {
      this.enableUpdate = true
    }, 1.0)
    if (curLevel > prevLevel && curLevel > 1 && money > 0) {
      this.scheduleOnce(() => {
        izx.dispatchEvent(Constants.EventName.SHOW_AWARDS, {awards: [{index:0, num:money}], level: curLevel})
      }, 2.0)
    }
  }


  onBtnBack() {
    console.log("scmjResult onBtnBack")
    izx.audioMgr.playBtn()
    // this.node.active = false
    izx.dispatchEvent(SCMJ_EVENT.EXIT_ROOM, {})
  }

  onBtnStart() {
    console.log("scmjResult onBtnStart")
    izx.audioMgr.playBtn()
    this.node.active = false
    izx.dispatchEvent(SCMJ_EVENT.CHANEG_STATE, GameState.NormalReadyReq)
    izx.dispatchEvent(SCMJ_EVENT.STATE_NONE, {bBtnReady: true})
    izx.dispatchEvent(Constants.EventName.DEAL_WITH_MONEY, {inResult: true, callback: (isDeal, succ, isQuickGame) => {
      izx.log("DEAL_WITH_MONEY isDeal = ", isDeal)
      if (!isDeal) {
        izx.dispatchEvent(SCMJ_EVENT.READY_REQ, true)
        izx.dispatchEvent(SCMJ_EVENT.SHOW_MATCHING, {bShow: true}) 
      } else if (isQuickGame) {
        izx.dispatchEvent(SCMJ_EVENT.SHOW_MATCHING, {bShow: true}) 
      } else {
        izx.dispatchEvent(SCMJ_EVENT.SHOW_BTN_READY, true)
        izx.dispatchEvent(SCMJ_EVENT.CHANEG_STATE, GameState.None)
      }
    }})
  }

  onBtnChangeStart() {
    console.log("scmjResult onBtnChangeStart")
    izx.audioMgr.playBtn()
    this.node.active = false
    izx.dispatchEvent(SCMJ_EVENT.CHANEG_STATE, GameState.ChangeReadyReq)
    let callback = (ack) => {
      if (ack && ack.oid && ack.oid.length > 0) {
        izx.ad.showAd(AdPos.ChangeStartGame)
      } else {
        izx.log("change card start failed")
        izx.dispatchEvent(SCMJ_EVENT.READY_REQ, true)
        izx.dispatchEvent(SCMJ_EVENT.SHOW_MATCHING, {bShow: true}) 
      }
    }
    izx.dispatchEvent(SCMJ_EVENT.STATE_NONE, {bBtnReady: true})
    izx.dispatchEvent(Constants.EventName.DEAL_WITH_MONEY, {inResult: true, callback: (isDeal) => {
      izx.log("DEAL_WITH_MONEY isDeal = ", isDeal)
      if (!isDeal) {
        izx.dispatchEvent(AD_EVENT.INIT_AD_ORDER_REQ, {adPos: AdPos.ChangeStartGame, callback: callback})  
      } else {
        izx.dispatchEvent(SCMJ_EVENT.SHOW_BTN_READY, true)
        izx.dispatchEvent(SCMJ_EVENT.CHANEG_STATE, GameState.None)
      }
    }})
  }

  // LIFE-CYCLE CALLBACKS:
  onLoad () {
    this.onOpen()
  }

  start () {

  }

  update (dt) {
    if (!this.enableUpdate) {
      return
    }

    let progress = this.processBar.progress
    if (progress >= 1) {
      if (this.middleCallback) {
        this.middleCallback()
        this.middleCallback = null
        this.processBar.progress = 0
      } else {
        this.enableUpdate = false
      }
    }
    progress = this.processBar.progress
    if (this.middleCallback ==  null && progress >= this.endProgress) {
      this.enableUpdate = false
      return
    }

    this.processBar.progress += dt
    if (this.middleCallback ==  null && this.processBar.progress >= this.endProgress) {
      this.processBar.progress = this.endProgress
    }
  }
}
