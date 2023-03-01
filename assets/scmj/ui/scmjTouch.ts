// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { SCMJ_EVENT } from "../scmjEvents"
import MjPrefab from "./scmjPrefab";

const {ccclass, property} = cc._decorator;

@ccclass
export default class mjTouch extends BaseUi {
  offsetY = 50
  mjLayer = null
  touchCard = null
  prevTouchCard = null
  canPlay = false
  canChange = false
  changeCards = []

  registerMainTouch() {
    izx.log("registerMainTouch")
    this.mjLayer = this.getComponent("scmjMain").mjLayer.getComponent("scmjLayer")

    this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
      izx.log('main started 1');
      this.switchTouchCard(event)
      izx.log('main started 2');
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      izx.log('main moving 1');
      let touchPos = event.touch.getLocation()
      let isMoving = false
      if (this.touchCard) {
        isMoving = this.isMoving(this.touchCard)
      }
      let card = this.getTouchCard(touchPos)
      if (card && !isMoving) {
        this.switchTouchCard(event)
      }
      this.moveTouchCard(event)
      izx.log('main moving 2');
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
      izx.log('main ended 1');
      this.switchTouchCard(event)
      this.prevTouchCard = this.touchCard
      izx.log('main ended 2');
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
      izx.log('main cancel 1');
      this.switchTouchCard(event)
      this.prevTouchCard = this.touchCard
      izx.log('main cancel 2');
    }, this);
  }

  switchTouchCard(event) {
    let touchPos = event.touch.getLocation()
    let card = this.getTouchCard(touchPos)
    if (this.canChange) {
      if (card && event.type == cc.Node.EventType.TOUCH_START) {
        this.pushChangeCard(card.getComponent("scmjPrefab"))
        this.sendChangeCards()
      }
      izx.dispatchEvent(SCMJ_EVENT.SHOW_TING_TIP, {})
      return
    }
    if (this.touchCard == null) {
      if (card) {
        card.y += this.offsetY
        this.touchCard = <MjPrefab>card.getComponent("scmjPrefab")
      }
      izx.dispatchEvent(SCMJ_EVENT.SHOW_TING_TIP, {})
    } else {
      if (card) {
        if (card == this.touchCard.node) {
          switch (event.type) {
            case cc.Node.EventType.TOUCH_START:

              break;
            case cc.Node.EventType.TOUCH_END:
              // 双击出牌 拖动出牌
              if (this.canPlay && this.touchCard.node.x == this.touchCard.getOriginPositon().x && this.prevTouchCard == this.touchCard) {
                // TODO:出牌动画 出牌响应
                izx.log("chupai 1")
                this.canPlay = false
                // izx.dispatchEvent(SCMJ_EVENT.ANI_PLAY_CARD, {chairId: 1, touchCard: this.touchCard})
                izx.dispatchEvent(SCMJ_EVENT.OP_PLAY, {card: this.touchCard.cValue})
                izx.dispatchEvent(SCMJ_EVENT.SHOW_TING_TIP, {})
                izx.log("chupai 2")
              } else if (this.canPlay && touchPos.y > this.getBorderY(this.touchCard.node)) {
                // TODO:出牌动画 出牌响应
                izx.log("chupai")
                this.canPlay = false
                // izx.dispatchEvent(SCMJ_EVENT.ANI_PLAY_CARD, {chairId: 1, touchCard: this.touchCard})
                izx.dispatchEvent(SCMJ_EVENT.OP_PLAY, {card: this.touchCard.cValue})
                izx.dispatchEvent(SCMJ_EVENT.SHOW_TING_TIP, {})
              } else {
                this.touchCard.resetPosition()
                this.touchCard.node.y += this.offsetY
                izx.dispatchEvent(SCMJ_EVENT.SHOW_TING_TIP, {tingCards: this.touchCard.tingCards})
              }
              break;
            case cc.Node.EventType.TOUCH_CANCEL:
              this.touchCard.resetPosition()
              this.touchCard.node.y += this.offsetY
              izx.dispatchEvent(SCMJ_EVENT.SHOW_TING_TIP, {tingCards: this.touchCard.tingCards})
              break;
            default:
              break;
          }
        } else {
          this.touchCard.resetPosition()
          card.y += this.offsetY
          this.touchCard = <MjPrefab>card.getComponent("scmjPrefab")
          izx.dispatchEvent(SCMJ_EVENT.SHOW_TING_TIP, {tingCards: this.touchCard.tingCards})
        }
      } else {
        this.resetTouchCard()
        izx.dispatchEvent(SCMJ_EVENT.SHOW_TING_TIP, {})
      }
    }
  }

  resetTouchCard() {
    if (this.touchCard) {
      this.touchCard.resetPosition()
      this.touchCard = null
    }
  }

  getTouchCard(touchPos) {
    if (this.mjLayer == null) {
      return null
    }
    let handcards = this.mjLayer.getHandcards()
    let touchCard = null
    for (let index = 0; index < handcards.length; index++) {
      let card = handcards[index]
      let box = card.getBoundingBoxToWorld()
      if (this.touchCard && card == this.touchCard.node) {
        box.y -= box.height/2 - ((box.height + this.offsetY)/2 - this.offsetY) 
        box.height += this.offsetY
      }
      if (box.contains(touchPos)) {
        touchCard = card
        // 胡牌标志的手牌不允许 点击
        if (touchCard.getComponent("scmjPrefab").isHu()) {
          touchCard = null
        }
        break
      }
    }
    return touchCard
  }

  getBorderY(card) {
    let originPos = card.getComponent("scmjPrefab").getOriginPositon()
    let height = card.getBoundingBox().height
    let wpos = card.parent.convertToWorldSpaceAR(originPos)
    let borderY = wpos.y + height/2
    return borderY
  }

  isMoving(card) {
    let originPos = card.getComponent("scmjPrefab").getOriginPositon()
    if (card.y > originPos.y + this.offsetY || card.x != originPos.x) {
      return true
    } else {
      return false
    }
  }

  moveTouchCard(event) {
    if (this.canPlay) {
    } else {
      return
    }
    let touchPos = event.touch.getLocation()
    let delta = event.touch.getDelta()
    if (this.touchCard) {
      let borderY = this.getBorderY(this.touchCard.node)
      if (touchPos.y > borderY) {
        this.touchCard.node.x += delta.x;
        this.touchCard.node.y += delta.y;
      }
    }
  }

  setCanPlay(msg) {
    izx.log("setCanPlay msg = ", msg)
    this.canPlay = msg.canPlay
    this.canChange = false
    let lackcards = this.mjLayer.getLackCards()
    if (lackcards.length > 0) {
      let card = lackcards[0]
      let pos = card.parent.convertToWorldSpaceAR(card.position)
      izx.dispatchEvent(SCMJ_EVENT.GUIDE_PLAY, {pos: pos})
    }
  }

  setCanChange(msg) {
    izx.log("setCanChange msg = ", msg)
    this.canChange = true
    this.canPlay = false
    this.changeCards = []
    this.resetTouchCard()
  }

  setCantChange(msg) {
    izx.log("setCantChange msg = ", msg)
    this.canChange = false
    for(let key in this.changeCards) {
      let tempTouchCard = this.changeCards[key]
      tempTouchCard.resetPosition()
    }
    this.changeCards = []
  }

  pushChangeCard(touchCard) {
    izx.log("pushChangeCard value = ", touchCard.cValue)
    let isExist = false
    for (let index = 0; index < this.changeCards.length; index++) {
      let tempTouchCard = this.changeCards[index];
      if (tempTouchCard == touchCard) {
        izx.log("change card is exist, reset card")
        isExist = true
        tempTouchCard.resetPosition()
        this.changeCards.splice(index, 1)
        break
      }
    }

    if (!isExist) {
      this.changeCards.push(touchCard)
      touchCard.node.y += this.offsetY
      if (this.changeCards.length >= 3) {
        let tempTouchCard = this.changeCards.shift()
        tempTouchCard.resetPosition()
      }
    }
  }

  sendChangeCards() {
    izx.log("sendChangeCards")
    let cards = []
    this.changeCards.forEach(v => {
      cards.push(v.cValue)
    });

    izx.dispatchEvent(SCMJ_EVENT.OP_CHANGE, {changeCards: cards})
  }

  // LIFE-CYCLE CALLBACKS:

  onLoad () {
    izx.on(SCMJ_EVENT.ENABLE_PLAY_CARD, this.setCanPlay, this)
    izx.on(SCMJ_EVENT.CHANGE_REQ, this.setCanChange, this)
    izx.on(SCMJ_EVENT.CHANGE_NOTI, this.setCantChange, this)
  }

  start () {

  }

  // update (dt) {}
}
