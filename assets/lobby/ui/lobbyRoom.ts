
/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangxinfeng
 * @Date: 2021-1-28
 * @LastEditors: wangxinfeng
 * @LastEditTime: 2021-1-28
 */
import Constants from "../../common/constants";
import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyRoom extends BaseUi {
  @property(cc.Sprite)
  sptBg: cc.Sprite = null
  @property(cc.Sprite)
  sptType: cc.Sprite = null
  @property(cc.Label)
  lblBet: cc.Label = null
  @property(cc.Label)
  lblLimit: cc.Label = null

  ndGirl: cc.Node = null

  bundleName = "lobby"
  roomInfo = null
  gameId: string = ""
  gameType: string = ""

  mapBetColor = {
    "xs": "#138d25",
    "cj": "#976907",
    "zj": "#b54c1e",
    "gj": "#be3e2d",
    "jy": "#709609",
    "ds": "#b96510",
    "zz": "#bb3d36",
    "th": "#9c4070",
  }

  mapLimitColor = {
    "xs": "#a9dd94",
    "cj": "#ffd990",
    "zj": "#ffc09e",
    "gj": "#ffbdb3",
    "jy": "#b6da85",
    "ds": "#ffb869",
    "zz": "#f7c291",
    "th": "#f0a2d6",
  }

  onOpen() {
    console.log("LobbyRoom onOpen")
    super.onOpen()
    this.registerEvent()
    this.scheduleOnce(() => {
      this.initScale()
    },0.1)
  }

  onClose() {
    console.log("LobbyRoom onClose")
    super.onClose()
  }

  initScale() {
    let originH = 159
    let originGirlScale = 1.3
    let curH = this.node.getContentSize().height
    console.log("initScale curH = ", curH)
    let scale = curH/originH
    // let layout = <cc.Layout>this.node.parent.getComponent(cc.Layout)
    if (scale > 1.1){
      this.node.scale = scale
      this.ndGirl.scale = originGirlScale * scale
    }
    if (scale > 1.2){
      this.node.scale = 1.2
      this.ndGirl.scale = originGirlScale * 1.2
    }
  }

  registerEvent() {
    
  }

  onBtnRoom() {
    izx.audioMgr.playBtn()
    izx.dispatchEvent(Constants.EventName.ROOM_READY_TO_GAME, {gameId: this.gameId, ruleId: this.gameId + "." + this.gameType + "." + this.roomInfo.type})
  }

  initRoom(info, girl) {
    this.roomInfo = info
    izx.loadPic(this.bundleName, "room/" + info.type, (res) => {
      this.sptBg.spriteFrame = res
    })
    izx.loadPic(this.bundleName, "room/" + this.gameType + "_" + info.type, (res) => {
      this.sptType.spriteFrame = res
    })
    this.lblBet.string = izx.utils.numberFormat2(info.bet)
    // this.lblBet.node.color = izx.utils.hex2color(this.mapBetColor[info.type])
    let min = izx.utils.numberFormat2(info.gold_limit.min)
    let max = info.gold_limit.max > 0 ? ("-" + izx.utils.numberFormat2(info.gold_limit.max)) : "以上"
    this.lblLimit.string = "限制：" + min + max
    this.lblLimit.node.color = izx.utils.hex2color(this.mapLimitColor[info.type]) 
    this.ndGirl = girl
  }

  setServerParams(gameId, type) {
    this.gameId = gameId
    this.gameType = type
  }

  // LIFE-CYCLE CALLBACKS:
  onLoad () {
    this.onOpen()
  }

  start () {

  }

  // update (dt) {}
}
