/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangxinfeng
 * @Date: 2020-11-3
 * @LastEditors: wangxinfeng
 * @LastEditTime: 2020-11-4
 */
import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import Constants, { COMMON_CONSTANT } from "../../common/constants"
import { SCMJ_EVENT } from "../scmjEvents";
import { LackType } from "../scmjConstants";
import { scmjUtil } from "../scmjUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UserHead extends BaseUi {
  // 用户id
  uid: number = 0;
  // 座位 1-4
  chairId: number = 0;
  // vip等级
  vipLevel: number = 0;
  // 准备状态
  ready: number = 0;
  // 分数
  score: number = 0;
  // 庄家
  bBanker: boolean = false;
  // 托管
  bAuto: boolean = false;
  // 定缺
  lack: LackType = LackType.None;
  // 头像框
  @property(cc.Sprite)
  sptFrame: cc.Sprite = null;
  // 头像
  @property(cc.Sprite)
  sptHead: cc.Sprite = null;
  // vip图片
  @property(cc.Sprite)
  sptVip: cc.Sprite = null;
  // 左边准备图片
  @property(cc.Sprite)
  sptLeftReady: cc.Sprite = null;
  // 右边准备图片
  @property(cc.Sprite)
  sptRightReady: cc.Sprite = null;
  // 用户金豆
  @property(cc.Label)
  lblScore: cc.Label = null;
  // 庄图片
  @property(cc.Sprite)
  sptBanker: cc.Sprite = null;
  // 定缺图片
  @property(cc.Sprite)
  sptLack: cc.Sprite = null;

  mapLackPic = {}
  lackPos = null
  lackPicPath = "pics/scmj/"
  lackScale = 1
  changeScore = 0

  onOpen() {
    // izx.log("UserHead onOpen")
    super.onOpen()
    this.registerEvent()
    this.lackPos = this.sptLack.node.position
    this.mapLackPic[LackType.CRAK] = this.lackPicPath + "wan"
    this.mapLackPic[LackType.BAM] = this.lackPicPath + "tiao"
    this.mapLackPic[LackType.DOT] = this.lackPicPath + "tong"
  }

  onClose() {
    // izx.log("UserHead onClose")
    super.onClose()
  }
  // 注册事件
  registerEvent() {
    izx.on(SCMJ_EVENT.UPDATE_HEAD_READY, this.updateReady, this)
    izx.on(SCMJ_EVENT.BEGIN_GAME_NOTI, this.onStartGameNoti, this)
    izx.on(SCMJ_EVENT.UPDATE_HEAD_BANKER, this.onBankerNoti, this)
    izx.on(SCMJ_EVENT.UPDATE_HEAD_SCORE, this.onUpdateScore, this)
    izx.on(SCMJ_EVENT.UPDATE_HEAD_LACK, this.onUpdateLack, this)
    izx.on(SCMJ_EVENT.STATE_NONE, this.newRound, this)
    izx.on(SCMJ_EVENT.OP_AUTO, this.updateAuto, this)
    izx.on(SCMJ_EVENT.SHOW_HEAD, this.showHead, this)
    izx.on(SCMJ_EVENT.RESULT_NOTI, this.resultNoti, this)
  }

  resultNoti(msg) {
    this.sptVip.node.active = true
    this.sptBanker.node.active = false
    this.bBanker = false
  }

  showHead(msg = null) {
    // izx.log("showHead")
    // izx.log("msg = ", msg)
    // izx.log("this.chairId = ", this.chairId)
    // if (msg && msg.uid) {
    //   if (msg.uid == this.uid) {
    //     this.node.active = true
    //   }
    //   return
    // }
    // if ((msg && msg.bShow) || this.chairId == 1) {
    //   this.node.active = true
    // } else {
    //   this.node.active = false
    // }
  }

  // 更新准备按钮显示隐藏
  updateReady(noti) {
    // izx.log("UserHead updateReady noti = ", noti)
    if (!noti || !noti.ready) return
    if (noti.chairId != this.chairId) return

    if (noti.ready == 1) {
      if (this.chairId == 2 || this.chairId == 3) {
        this.sptLeftReady.node.active = true
      } else {
        this.sptRightReady.node.active = true
      }
    } else {
      this.sptLeftReady.node.active = false
      this.sptRightReady.node.active = false
    }
  }
  // 新一局开始重置相关参数
  newRound(msg) {
    if (msg && msg.bBtnReady) {
      
    } else {
      this.sptLeftReady.node.active = false
      this.sptRightReady.node.active = false
      this.sptVip.node.active = false
    }
    this.sptBanker.node.active = false
    this.sptLack.node.active = false
    this.bBanker = false
    this.lack = LackType.None
    this.bAuto = false
    this.changeScore = 0
  }
  // 游戏开始通知
  onStartGameNoti(noti) {
    // izx.log("UserHead onStartGameNoti")
    if (!noti) return
    this.newRound({})
  }
  // 置庄通知
  onBankerNoti(noti) {
    // izx.log("UserHead onBankerNoti")
    if (!noti) return
    if (noti.chairId == this.chairId) {
      this.sptBanker.node.active = true
    } else {
      this.sptBanker.node.active = false
    }
  }
  // 更新分数
  onUpdateScore(noti) {
    // izx.log("UserHead onUpdateScore")
    if (!noti) return
    if (noti.chairId == this.chairId) {
      if (noti.money != null) {
        this.score = noti.money
      }
      if (noti.score != null) {
        this.changeScore = noti.score
      }
      if (noti.result) {
        this.changeScore = 0
        return
      }
      this.lblScore.string = izx.utils.numberFormat2(this.score +  this.changeScore)
      if (this.score + this.changeScore == 0) {
        izx.dispatchEvent(SCMJ_EVENT.SHOW_LOSE, {chairId: this.chairId, isShow: true})
      }
    }
  }
  // 更新定缺
  onUpdateLack(noti) {
    // izx.log("UserHead onUpdateLack")
    if (noti.chairId == this.chairId) {
      // izx.log("noti.chairId == this.chairId noti = ", noti)
      this.lack = noti.lack
      // izx.log("this.mapLackPic[this.lack] = ", this.mapLackPic[this.lack])
      this.sptLack.node.active = true
      this.sptLack.spriteFrame = <cc.SpriteFrame>scmjUtil.loadPic(this.mapLackPic[this.lack])
      if (noti.pos) {
        this.sptLack.node.position = noti.pos
        this.sptLack.node.scale = 1.3
        this.sptLack.node.runAction(cc.sequence(cc.delayTime(1.0), cc.spawn(cc.moveTo(0.5, this.lackPos), cc.scaleTo(0.5, this.lackScale)) ))
      } else {
        this.sptLack.node.position = this.lackPos
      }
    } 
  }
  // 替换默认头像
  updateHeadicon() {
    // izx.log("UserHead updateHeadicon")
    if (this.uid > 0) {
      izx.dispatchEvent(Constants.EventName.DRAW_ICON_BY_ID, {uid: this.uid, pid: COMMON_CONSTANT.ITEM_HEAD, callback: (res) => {
        this.sptHead.spriteFrame = res
      }})
      izx.dispatchEvent(Constants.EventName.DRAW_ICON_BY_ID, {uid: this.uid, pid: COMMON_CONSTANT.ITEM_HEAD_FRAME, callback: (res) => {
        this.sptFrame.spriteFrame = res
      }})
      izx.dispatchEvent(Constants.EventName.DRAW_ICON_BY_ID, {uid: this.uid, pid: COMMON_CONSTANT.ITEM_VIP, callback: (res) => {
        this.sptVip.spriteFrame = res
      }})
    }
  }
  // 托管
  updateAuto(noti) {
    // izx.log("UserHead updateAuto")
    if (noti.chairId == this.chairId) {
      if (noti.auto == 1) {
        this.bAuto = true
      } else {
        this.bAuto = false
      }
    }
  }
  // 重置参数
  reset() {
    this.chairId = 0
    this.vipLevel = 0
    this.uid = 0
    this.ready = 0
    this.bBanker = false
    this.score = 0
    this.lack = LackType.None
    this.bAuto = false
  }
  // 初始化
  init(params) {
    // izx.log("UserHead init params = ", params)
    if (!params) return
    this.reset()
    if (params.chairId) {
      this.chairId = params.chairId
    }
    if (this.chairId == 1) {
      
    } else {
      this.showHead()
    }
    
    if (params.uid) {
      this.uid = params.uid
      this.updateHeadicon()
    }
    if (params.vipLevel) {
      this.vipLevel = params.vipLevel
    }
    if (params.ready) {
      this.ready = params.ready
      this.updateReady({chairId: this.chairId, ready: this.ready})
    }
    if (params.score) {
      this.score = params.score
      this.onUpdateScore({chairId: this.chairId, score: 0})
    }
    this.lackScale = this.sptLack.node.scale
  }

  // LIFE-CYCLE CALLBACKS:
  onLoad () {
    this.onOpen()
  }

  start () {

  }

  // update (dt) {}
}
