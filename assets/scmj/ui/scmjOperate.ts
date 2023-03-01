// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { SCMJ_EVENT } from "../scmjEvents"
import { LackType, OperatorCode } from "../scmjConstants";
import { scmjUtil } from "../scmjUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class mjOperate extends BaseUi {
  @property(cc.Prefab)
  selectChow = null
  @property(cc.Prefab)
  selectKong = null
  @property(cc.Node)
  nodeLack = null
  @property(cc.Node)
  nodeBtns = null
  @property(cc.Node)
  nodeCards = null
  @property(cc.Node)
  contentCards = null
  @property(cc.Node)
  btnChow = null
  @property(cc.Node)
  btnPong = null
  @property(cc.Node)
  btnKong = null
  @property(cc.Node)
  btnHu = null
  @property(cc.Node)
  btnGiveUp = null
  @property(cc.Node)
  mjLayer = null
  @property(cc.Node)
  nodeAuto = null
  @property(cc.Node)
  nodeChange = null
  @property(cc.Node)
  nodePlayTip = null

  mapLackBtn = {}
  mjLayerS = null
  origPos = []
  mapOpCode = {}
  chowOpCodes = [OperatorCode.OP_CHOW]
  pongOpcodes = [OperatorCode.OP_PONG]
  kongOpcodes = [OperatorCode.OP_KONG, OperatorCode.OP_KONG_DARK, OperatorCode.OP_KONG_TURN]
  huOpcodes = [OperatorCode.OP_HU_ZIMO, OperatorCode.OP_HU_DIANPAO, OperatorCode.OP_HU_AFTER_KONG_TURN]
  giveupOpcodes = [OperatorCode.OP_GIVEUP]
  countBtnNum = 0
  valuePicPath = "pics/mj_card_num/mj_cardnum_mahjong_"
  // 接收到的操作码
  reqOpCodes = []
  // 接收到的操作牌
  reqOpCard = 0
  // 响应的操作码
  rspOpCode = 0
  // 响应的操作相关牌，仅吃
  rspOpCards = []
  // 定缺
  lack = LackType.None
  // 换牌
  changeCards = []
  
  resetOperate() {
    this.mapOpCode = {}
    this.reqOpCodes = []
    this.reqOpCard = 0
    this.rspOpCode = 0
    this.rspOpCards = []
    this.btnChow.active = false
    this.btnPong.active = false
    this.btnKong.active = false
    this.btnHu.active = false
    this.btnGiveUp.active = false
    this.countBtnNum = 0
  }

  getChowCards(opCard) {
    let handcards = this.mjLayerS.mapCards[1].handcards
    let chowCards = []
    let mapHandcard = {}
    handcards.forEach(card => {
      mapHandcard[card] = true
    });
    let round = opCard/10
    round = parseInt(round + "")
    if (mapHandcard[opCard - 2] && mapHandcard[opCard - 1] &&
      parseInt((opCard - 2)/10 + "") == round && parseInt((opCard - 1)/10 + "") == round) {
      chowCards.push([opCard - 2, opCard - 1, opCard])
    }
    if (mapHandcard[opCard - 1] && mapHandcard[opCard + 1] &&
      parseInt((opCard - 1)/10 + "") == round && parseInt((opCard + 1)/10 + "") == round) {
      chowCards.push([opCard - 1, opCard, opCard + 1])
    }
    if (mapHandcard[opCard + 1] && mapHandcard[opCard + 2] &&
      parseInt((opCard + 1)/10 + "") == round && parseInt((opCard + 2)/10 + "") == round) {
      chowCards.push([opCard, opCard + 1, opCard + 2])
    }
    return chowCards
  }

  displayChowCards(chowCards, opCard) {
    this.nodeBtns.active = false
    this.nodeCards.active = true
    this.contentCards.removeAllChildren()
    this.contentCards.x = 0
    let offsetX = 0
    let gap = 20
    chowCards.forEach((cards) => {
      let node = cc.instantiate(this.selectChow)
      let width = node.getChildByName("BgCards").getBoundingBox().width
      node.x = offsetX + width/2 
      offsetX += width + gap
      cards.forEach((v, i) => {
        let card = cc.find("Card" + i + "/SptValue", node).getComponent(cc.Sprite)
        card.spriteFrame = <cc.SpriteFrame>scmjUtil.loadPic(this.valuePicPath + v)
        if (v == opCard) {
          let gray = cc.find("Card" + i + "/SptGray", node)
          gray.active = true
        }
      })
      izx.bindButtonClick("BtnCard", node, (sender, data) => {   
        // TODO: 发送吃牌响应
        izx.log("发送吃牌响应")
        this.sendOperateRsp(OperatorCode.OP_CHOW, opCard, cards)
      })
      node.parent = this.contentCards
    })
    this.contentCards.x -= (offsetX - gap) /2
  }

  onBtnChow() {
    izx.log("mjOperate onBtnChow")
    izx.audioMgr.playBtn()
    let chowCards = this.getChowCards(this.reqOpCard)
    if (chowCards.length > 0) {
      if (chowCards.length == 1) {
        // TODO: 发送吃牌响应
        izx.log("发送吃牌响应")
        this.sendOperateRsp(OperatorCode.OP_CHOW, this.reqOpCard, chowCards[0])
      } else {
        this.displayChowCards(chowCards, this.reqOpCard)
      }
    }
  }

  onBtnPong() {
    izx.log("mjOperate onBtnPong")
    izx.audioMgr.playBtn()
    izx.log("发送碰牌响应")
    izx.dispatchEvent(SCMJ_EVENT.GUIDE_HIDE)
    this.sendOperateRsp(OperatorCode.OP_PONG, this.reqOpCard)
  }
  // 获取明杠的牌
  getKongCards(opCard) {
    if (this.mapOpCode[OperatorCode.OP_KONG] && opCard > 0) {
      return [opCard]
    } else {
      return []
    }
    
  }
  // 获取暗杠的牌
  getKongDarkCards() {
    if (this.mapOpCode[OperatorCode.OP_KONG_DARK]) {
      
    } else {
      return []
    }
    let handcards = this.mjLayerS.mapCards[1].handcards
    let mapHandcard = {}
    let cards = []
    handcards.forEach(card => {
      if (mapHandcard[card]) {
        mapHandcard[card] ++
      } else {
        mapHandcard[card] = 1
      }
    });
    let curcard = this.mjLayerS.mapCards[1].card
    if (curcard > 0) {
      if (mapHandcard[curcard]) {
        mapHandcard[curcard] ++
      } else {
        mapHandcard[curcard] = 1
      }
    }
    for (let card in mapHandcard) {
      if (mapHandcard[card] == 4 && parseInt(parseInt(card)/10 + "") != this.lack) {
        cards.push(card)
      }
    }
    
    return cards
  }

  // 获取补杠的牌
  getKongTurnCards() {
    if (this.mapOpCode[OperatorCode.OP_KONG_TURN]) {
      
    } else {
      return []
    }
    let handcards = this.mjLayerS.mapCards[1].handcards
    let mapHandcard = {}
    let cards = []
    handcards.forEach(card => {
      if (mapHandcard[card]) {
        mapHandcard[card] ++
      } else {
        mapHandcard[card] = 1
      }
    });
    let curcard = this.mjLayerS.mapCards[1].card
    if (curcard > 0) {
      if (mapHandcard[curcard]) {
        mapHandcard[curcard] ++
      } else {
        mapHandcard[curcard] = 1
      }
    }
    let mapLeftcard = {}
    let leftcards = this.mjLayerS.mapCards[1].leftcards
    let isChair = true
    leftcards.forEach(card => {
      if (card != -99) {
        if (isChair) {
          isChair = false
        } else {
          if (mapLeftcard[card]) {
            mapLeftcard[card] ++
          } else {
            mapLeftcard[card] = 1
          }
        }
      } else {
        isChair = true
      }
    });
    for (let card in mapLeftcard) {
      if (mapLeftcard[card] == 3 && mapHandcard[card] == 1) {
        cards.push(card)
      }
    }
    
    return cards
  }

  displayKongCards(mapCardOpcode) {
    this.nodeBtns.active = false
    this.nodeCards.active = true
    this.contentCards.removeAllChildren()
    this.contentCards.x = 0
    let offsetX = 0
    let gap = 20
    for (let i in mapCardOpcode) {
      let opcode = mapCardOpcode[i]
      let node = cc.instantiate(this.selectKong)
      let width = node.getChildByName("BgCards").getBoundingBox().width
      node.x = offsetX + width/2 
      offsetX += width + gap
      let card = cc.find("Card0/SptValue", node).getComponent(cc.Sprite)
      card.spriteFrame = <cc.SpriteFrame>scmjUtil.loadPic(this.valuePicPath + i)
      izx.bindButtonClick("BtnCard", node, (sender, data) => {   
        // TODO: 发送杠牌响应
        izx.log("发送杠牌响应")
        this.sendOperateRsp(opcode, i)
      })
      node.parent = this.contentCards
    }
    this.contentCards.x -= (offsetX - gap) /2
  }

  onBtnKong() {
    izx.log("mjOperate onBtnKong")
    izx.audioMgr.playBtn()
    izx.dispatchEvent(SCMJ_EVENT.GUIDE_HIDE)
    if (this.mapOpCode[OperatorCode.OP_KONG]) {
      // 发送明杠响应
      this.sendOperateRsp(OperatorCode.OP_KONG, this.reqOpCard)
      return
    }
    let darkCards = this.getKongDarkCards()
    let turnCards = this.getKongTurnCards()
    let count = darkCards.length + turnCards.length
    if (count > 0) {
      if (count == 1) {
        let opcode = 0
        let card = 0
        if (darkCards.length == 1) {
          // 发送暗杠响应
          opcode = OperatorCode.OP_KONG_DARK
          card = darkCards[0]
        } else if (turnCards.length == 1) {
          // 发送补杠响应
          opcode = OperatorCode.OP_KONG_TURN
          card = turnCards[0]
        }
        this.sendOperateRsp(opcode, card)
      } else {
        let mapCardOpcode = {}
        darkCards.forEach(v => {
          mapCardOpcode[v] = OperatorCode.OP_KONG_DARK
        })
        turnCards.forEach(v => {
          mapCardOpcode[v] = OperatorCode.OP_KONG_TURN
        })
        this.displayKongCards(mapCardOpcode)
      }
    }
  }

  onBtnHu() {
    izx.log("mjOperate onBtnHu")
    izx.audioMgr.playBtn()
    izx.dispatchEvent(SCMJ_EVENT.GUIDE_HIDE)
    for (let i = 0; i < this.huOpcodes.length; i++) {
      if (this.mapOpCode[this.huOpcodes[i]]) {
        // TODO: 发送胡牌响应
        izx.log("发送胡牌响应")
        this.sendOperateRsp(this.huOpcodes[i], this.reqOpCard)
        break;
      }
    }
  }

  onBtnGiveUp() {
    izx.log("mjOperate onBtnGiveUp")
    izx.audioMgr.playBtn()
    izx.dispatchEvent(SCMJ_EVENT.GUIDE_HIDE)
    this.sendOperateRsp(OperatorCode.OP_GIVEUP, this.reqOpCard)
  }

  onBtnCloseSelect() {
    izx.audioMgr.playBtn()
    izx.log("mjOperate onBtnCloseSelect")
    this.nodeBtns.active = true
    this.nodeCards.active = false
  }

  playCard(msg) {
    izx.log("mjOperate playCard msg = ", msg)
    this.nodePlayTip.active = false
    this.sendOperateRsp(OperatorCode.OP_PLAY, msg.card)
  }

  displayBtn(opcodes, btn) {
    for (let i = 0; i < opcodes.length; i++) {
      if (this.mapOpCode[opcodes[i]]) {
        btn.active = true
        btn.position = this.origPos[this.countBtnNum]
        this.countBtnNum++
        if (scmjUtil.isHu(opcodes[i])) {
          let pos = this.nodeBtns.convertToWorldSpaceAR(this.btnHu.position)
          izx.dispatchEvent(SCMJ_EVENT.GUIDE_HU, {pos: pos})
        }else if (scmjUtil.isKong(opcodes[i])) {
          let pos = this.nodeBtns.convertToWorldSpaceAR(this.btnKong.position)
          izx.dispatchEvent(SCMJ_EVENT.GUIDE_GANG, {pos: pos})
        }
        break
      }
    }
  }

  operateCard(msg) {
    izx.log("mjOperate displayOperateBtns msg = ", msg)
    this.resetOperate()
    this.node.active = true
    msg.opcodes.forEach(opcode => {
      this.mapOpCode[opcode] = true
    });
    this.reqOpCodes = msg.opcodes
    this.reqOpCard = msg.card
    this.nodeBtns.active = true
    this.nodeCards.active = false
    this.nodeLack.active = false
    this.nodeChange.active = false
    this.displayBtn(this.giveupOpcodes, this.btnGiveUp)
    this.displayBtn(this.huOpcodes, this.btnHu)
    this.displayBtn(this.kongOpcodes, this.btnKong)
    this.displayBtn(this.pongOpcodes, this.btnPong)
    this.displayBtn(this.chowOpCodes, this.btnChow)
  }

  sendOperateRsp(opcode, card, opcards = []) {
    izx.log("mjOperate sendOperateRsp")
    this.node.active = false
    izx.dispatchEvent(SCMJ_EVENT.OPERATE_RSP, {
      opcode: opcode,
      card: card,
      opCards: opcards
    })
  }

  initOrigPos() {
    this.origPos.push(this.btnGiveUp.position)
    this.origPos.push(this.btnHu.position)
    this.origPos.push(this.btnKong.position)
    this.origPos.push(this.btnPong.position)
    this.origPos.push(this.btnChow.position)
  }

  sendLackRsp(lack) {
    izx.log("mjOperate sendLackRsp")
    this.node.active = false
    izx.dispatchEvent(SCMJ_EVENT.LACK_RSP, lack)
  }

  onBtnCrak() {
    izx.log("onBtnCrak")
    izx.audioMgr.playBtn()
    izx.dispatchEvent(SCMJ_EVENT.GUIDE_HIDE)
    this.sendLackRsp(LackType.CRAK)
  }

  onBtnBam() {
    izx.log("onBtnBam")
    izx.audioMgr.playBtn()
    izx.dispatchEvent(SCMJ_EVENT.GUIDE_HIDE)
    this.sendLackRsp(LackType.BAM)
  }

  onBtnDot() {
    izx.log("onBtnDot")
    izx.audioMgr.playBtn()
    izx.dispatchEvent(SCMJ_EVENT.GUIDE_HIDE)
    this.sendLackRsp(LackType.DOT)
  }

  displayLack(msg) {
    izx.log("msg = ", msg)
    this.node.active = true
    this.nodeBtns.active = false
    this.nodeCards.active = false
    this.nodeChange.active = false
    this.nodeLack.active = true
    this.resetLack()
    let tip = "Btn" + this.mapLackBtn[msg.lack] + "/LackTip"
    let recommendLack = cc.find(tip, this.nodeLack)
    recommendLack.active = true
    let pos = this.nodeLack.convertToWorldSpaceAR(recommendLack.parent.position)
    izx.dispatchEvent(SCMJ_EVENT.GUIDE_LACK, {pos: pos})
  }

  resetLack() {
    cc.find("Btn" + this.mapLackBtn[LackType.CRAK] + "/LackTip", this.nodeLack).active = false
    cc.find("Btn" + this.mapLackBtn[LackType.BAM] + "/LackTip", this.nodeLack).active = false
    cc.find("Btn" + this.mapLackBtn[LackType.DOT] + "/LackTip", this.nodeLack).active = false
  }

  initLack() {
    this.nodeLack.active = false
    this.mapLackBtn[LackType.CRAK] = "Crak"
    this.mapLackBtn[LackType.BAM] = "Bam"
    this.mapLackBtn[LackType.DOT] = "Dot"
  }

  hide() {
    izx.log("mjOperate hide")
    this.node.active = false
    this.nodePlayTip.active = false
  }

  lackNoti(noti) {
    izx.log("lackNoti noti = ", noti)
    if (noti.chairId ==  1) {
      this.lack = noti.lack
      this.nodeLack.active = false
    }
  }

  onBtnCancelAuto() {
    izx.log("mjOperate onBtnCancelAuto")
    izx.audioMgr.playBtn()
    izx.log("取消托管")
    izx.dispatchEvent(SCMJ_EVENT.AUTO_REQ, {auto: 2})
  }

  onStartGameNoti(msg) {
    this.hide()
    this.lack = LackType.None
    this.nodeAuto.active = false
    izx.dispatchEvent(SCMJ_EVENT.SHOW_AUTO_HU, {isShow:false})
  }

  autoNoti(msg) {
    if (msg.chairId == 1 && this.nodeAuto) {
      if (msg.auto == 1) {
        this.nodeAuto.active = true
        this.nodePlayTip.active = false
      } else {
        this.nodeAuto.active = false
      }
    }
  }

  onBtnChangeCard() {
    izx.log("mjOperate onBtnChangeCard")
    izx.audioMgr.playBtn()
    if (this.changeCards == null || this.changeCards.length == 0) {
      return
    }
    izx.dispatchEvent(SCMJ_EVENT.CHANGE_RSP, {giveup: 1, cards: this.changeCards})
  }

  onBtnChangeNone() {
    izx.log("mjOperate onBtnChangeNone")
    izx.audioMgr.playBtn()
    izx.dispatchEvent(SCMJ_EVENT.CHANGE_RSP, {giveup: 2, cards: []})
  }

  displayChange() {
    izx.log("mjOperate displayChange")
    this.node.active = true
    this.nodeBtns.active = false
    this.nodeCards.active = false
    this.nodeChange.active = true
    this.nodeLack.active = false
    this.changeCards = []
    let btn = this.nodeChange.getChildByName("BtnChangeCard").getComponent(cc.Button)
    btn.interactable = false
  }

  onChangeCards(msg) {
    izx.log("mjOperate onChangeCards msg = ", msg)
    this.changeCards = msg.changeCards
    let btn = this.nodeChange.getChildByName("BtnChangeCard").getComponent(cc.Button)
    izx.log("this.changeCards.length = ", this.changeCards.length)
    if (this.changeCards.length == 0 || this.changeCards.length > 2) {
      btn.interactable = false
    } else {
      btn.interactable = true
    }
  }

  changeNoti(msg) {
    izx.log("mjOperate changeNoti")
    this.nodeChange.active = false
    this.node.active = false
  }

  displayPlayTip(msg) {
    izx.log("mjOperate displayPlayTip")
    if (this.nodeAuto.active == false) {
      this.displayChange()
      this.nodeChange.active = false
      this.nodePlayTip.active = true
    }
  }

  // LIFE-CYCLE CALLBACKS:
  onLoad () {
    izx.log("mjOperate onLoad")
    this.initOrigPos()
    this.resetOperate()
    this.initLack()
    this.node.active = false
    this.nodeAuto.active = false
    this.nodePlayTip.active = false
    this.mjLayerS = this.mjLayer.getComponent("scmjLayer")
    izx.on(SCMJ_EVENT.OP_PLAY, this.playCard, this)
    izx.on(SCMJ_EVENT.OP_CPGH, this.operateCard, this)
    izx.on(SCMJ_EVENT.OP_HIDE, this.hide, this)
    izx.on(SCMJ_EVENT.LACK_REQ, this.displayLack, this)
    izx.on(SCMJ_EVENT.OP_LACK, this.lackNoti, this)
    izx.on(SCMJ_EVENT.BEGIN_GAME_NOTI, this.onStartGameNoti, this)
    izx.on(SCMJ_EVENT.STATE_NONE, this.onStartGameNoti, this)
    izx.on(SCMJ_EVENT.OP_AUTO, this.autoNoti, this)
    izx.on(SCMJ_EVENT.CHANGE_REQ, this.displayChange, this)
    izx.on(SCMJ_EVENT.OP_CHANGE, this.onChangeCards, this)
    izx.on(SCMJ_EVENT.CHANGE_NOTI, this.changeNoti, this)
    izx.on(SCMJ_EVENT.ENABLE_PLAY_CARD, this.displayPlayTip, this)
  }

  start () {

  }

  // update (dt) {}
}
