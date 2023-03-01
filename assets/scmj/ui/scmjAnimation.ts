// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { SCMJ_EVENT } from "../scmjEvents"
import { CardArea, OperatorCode } from "../scmjConstants";
import { scmjUtil } from "../scmjUtil";
const {ccclass, property} = cc._decorator;

@ccclass
export default class mjAnimation extends BaseUi {
  @property(cc.Node)
  mjLayer = null
  @property(cc.Prefab)
  prefabAniWinScore:cc.Prefab = null
  @property(cc.Prefab)
  prefabAniLoseScore:cc.Prefab = null
  @property(cc.Prefab)
  prefabAniChow:cc.Prefab = null
  @property(cc.Prefab)
  prefabAniPong:cc.Prefab = null
  @property(cc.Prefab)
  prefabAniKong:cc.Prefab = null
  @property(cc.Prefab)
  prefabAniHu:cc.Prefab = null
  @property(cc.Prefab)
  prefabAniZimo:cc.Prefab = null

  mjLayerS = null

  refreshHandcardsAfterPlay(putCard) {
    let chairId = putCard.chairId
    let name = putCard.node.name
    let value = putCard.cValue
    let noti = this.mjLayerS.mapCards[chairId]
    if (name.indexOf("handcard") != -1) {
      for (let index = 0; index < noti.handcards.length; index++) {
        if (noti.handcards[index] == value) {
          delete noti.handcards[index]
          break
        }
      }
      let handcards = []
      for (let index = 0; index < noti.handcards.length; index++) {
        if (noti.handcards[index]) {
          handcards.push(noti.handcards[index])
        }
      }
      if (noti.card != 0) {
        handcards.push(noti.card)
        noti.card = 0
      }
      noti.handcards = handcards
    } else if (name.indexOf("curcard") != -1) {
      noti.card = 0
    }
    izx.log("refreshHandcards noti = ", noti)
    this.mjLayerS.refleshLeftcards(noti.chairId, noti.leftcards)
    this.mjLayerS.refleshHandcards(noti.chairId, noti.handcards)
    this.mjLayerS.refleshCurCard(noti.chairId, noti.card)
  }

  aniPlayCard(msg) {
    izx.log("aniPlayCard msg = ", msg)
    if (true) {
      return
    }
    let chairId = msg.chairId
    let touchCard = msg.touchCard
    if (touchCard == null) {
      touchCard = this.getPlayCard(chairId, msg.card)
      if (touchCard == null) {
        izx.log("aniPlayCard error touchCard")
        return 
      }
      touchCard = touchCard.getComponent("scmjPrefab")
    }
    let cards = this.mjLayerS.mapCards[chairId].dispcards
    let cValue = touchCard.cValue
    if (cValue <= 0 && msg.card) {
      cValue = msg.card
    }
    cards.push(cValue)
    let endCard = this.mjLayerS.refleshDisplaycards(chairId, cards)
    if (endCard) {
      endCard.opacity = 0
      let time = 1.0
      let scale = 0.001
      let toPos = endCard.parent.convertToWorldSpaceAR(endCard.position)
      toPos = touchCard.node.parent.convertToNodeSpaceAR(toPos)
      touchCard.node.runAction(cc.sequence(cc.spawn(cc.moveTo(time, toPos), cc.scaleTo(time, scale)), cc.callFunc(()=> {
        endCard.opacity = 255
        this.refreshHandcardsAfterPlay(touchCard)
      })).easing(cc.easeExponentialIn()))
    }
  }

  aniMoPai(msg) {
    izx.log("aniMoPai msg = ", msg)
    let noti = this.mjLayerS.mapCards[msg.chairId]
    if (noti) {
      noti.card = msg.card
      let card = this.mjLayerS.refleshCurCard(msg.chairId, msg.card)
    }
  }
  
  getPlayCard(chairId, value) {
    izx.log("getPlayCard chairId = ", chairId)
    izx.log("getPlayCard value = ", value)
    if (this.mjLayerS == null) {
      return null
    }
    let areas = this.mjLayerS.getAreas("HandArea", chairId)
    for (let index = areas.length - 1; index >= 0 ; index--) {
      let area = areas[index]
      if (chairId == 1) {
        area.children.forEach(card => {
          if (card.name.indexOf("handcard") != -1 || card.name.indexOf("curcard") != -1) {
            if (card.getComponent("scmjPrefab").cValue == value) {
              return card
            }
          }
        });
      } else {
        let card = area.getChildByName("curcard")
        if (card) {
          return card
        }
        let handCount = 0
        area.children.forEach(child => {
          if (child.name.indexOf("handcard") != -1) {
            handCount++
          }
        })
        card = area.getChildByName("handcard_" + (handCount - 1))
        if (card) {
          return card
        }
      }
    }
    return null
  }

  aniScoreChange(msg) {
    izx.log("aniScoreChange msg = ", msg)
    msg.items.forEach(item => {
      if (item.presentScore != 0) {
        let text = item.presentScore > 0 ? "+" + item.presentScore : item.presentScore + ""
        let prefab = item.presentScore > 0 ? this.prefabAniWinScore : this.prefabAniLoseScore
        let score = cc.instantiate(prefab)
        score.getComponent(cc.Label).string = text
        let aniPlayNode = cc.find("CenterArea/AniPlayArea/Area" + item.chairId, this.node)
        score.parent = aniPlayNode
        let animation = score.getComponent(cc.Animation);
        animation.on('finished',  ()=>{
          score.removeFromParent()
        }, this);
      }
    });
  }

  aniCpgh(msg) {
    izx.log("aniCpgh msg = ", msg)
    let prefab = null
    switch (msg.opcode) {
      case OperatorCode.OP_CHOW:
        prefab = this.prefabAniChow
        break
      case OperatorCode.OP_PONG:
        prefab = this.prefabAniPong
        break
      case OperatorCode.OP_KONG:
      case OperatorCode.OP_KONG_TURN:
      case OperatorCode.OP_KONG_DARK:
        prefab = this.prefabAniKong
        break
      case OperatorCode.OP_HU_DIANPAO:
        prefab = this.prefabAniHu
        break
      case OperatorCode.OP_HU_ZIMO:
      case OperatorCode.OP_HU_AFTER_KONG_TURN:
        prefab = this.prefabAniZimo
        break
      default:
        break
    }
    if (prefab) {
      let node = cc.instantiate(prefab)
      let aniPlayNode = cc.find("CenterArea/AniPlayArea/Area" + msg.chairId, this.node)
      node.parent = aniPlayNode
      let skeleton = <sp.Skeleton>node.getComponent(sp.Skeleton);
      skeleton.setCompleteListener(() => {
        node.removeFromParent()
      })
    }
  }

  showLose(msg) {
    izx.log("showLose isShow = ", msg)
    let ndLose = cc.find("CenterArea/AniPlayArea/Area" + msg.chairId + "/Lose", this.node)
    ndLose.active = msg.isShow
  }

  reset() {
    for (let index = 1; index <= 4; index++) {
      let ndLose = cc.find("CenterArea/AniPlayArea/Area" + index + "/Lose", this.node)
      ndLose.active = false
    }
  }

  // LIFE-CYCLE CALLBACKS:

  onLoad () {
    this.mjLayerS = this.mjLayer.getComponent("scmjLayer")
    izx.on(SCMJ_EVENT.ANI_PLAY_CARD, this.aniPlayCard, this)
    izx.on(SCMJ_EVENT.ANI_MOPAI, this.aniMoPai, this)
    izx.on(SCMJ_EVENT.ANI_SCORE_CHANGE, this.aniScoreChange, this)
    izx.on(SCMJ_EVENT.ANI_CPGH, this.aniCpgh, this)
    izx.on(SCMJ_EVENT.SHOW_LOSE, this.showLose, this)
    izx.on(SCMJ_EVENT.STATE_NONE, this.reset, this)
  }

  start () {

  }

  // update (dt) {}
}
