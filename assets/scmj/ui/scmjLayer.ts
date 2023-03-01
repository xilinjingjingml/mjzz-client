/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangxinfeng
 * @Date: 2020-11-4
 * @LastEditors: wangxinfeng
 * @LastEditTime: 2020-11-4 
 */
import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { SCMJ_EVENT } from "../scmjEvents";
import { CardArea, LackType } from "../scmjConstants";
import { scmjUtil } from "../scmjUtil";
import MjPrefab from "./scmjPrefab";
import TingTip from "./scmjTingTip";
import { ScmjAudioUtil } from "../scmjAudioUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class mjLayer extends BaseUi {
  @property(cc.Prefab)
  mjPrefab: cc.Prefab = null
  @property(cc.Prefab)
  prefabPlayMark = null;

  // mark
  ndPlayMark: cc.Node = null;

  mapCards = {}
  mapNodePaths = {}
  mapHandCardsOffset = {}
  mapCurCardOffset = {}
  lack = LackType.None
  prevPlayCard = null
  changeCards = []

  onOpen() {
    izx.log("mjLayer onOpen")
    super.onOpen()
    this.registerEvent()
    this.initMapNodePaths()
    this.scheduleOnce(this.adjustTopAndBottomAreaPosition, 0.1)
  }

  onClose() {
    izx.log("mjLayer onClose")
    super.onClose()
  }

  adjustTopAndBottomAreaPosition() {
    let parentHeight = this.node.parent.getContentSize().height
    let topArea = cc.find("TopArea", this.node)
    let centerArea = cc.find("CenterArea", this.node)
    let bottomArea = cc.find("BottomArea", this.node)
    let diffH = (parentHeight-topArea.height-centerArea.height-bottomArea.height)/2
    if (diffH > 0) {
      topArea.y += diffH/2
      bottomArea.y -= diffH/2
      if (diffH > 12) {
        let handAreas = this.getAreas("HandArea", 1)
        handAreas[0].y += 12/2
        handAreas[1].y -= 12/2
      }
    }
  }
  
  initMapNodePaths() {
    this.mapNodePaths["CenterRoot"] = "CenterArea/CenterMjArea/"
    this.mapNodePaths["TopRoot"] = "TopArea/"
    this.mapNodePaths["BottomRoot"] = "BottomArea/"
  }
  // 注册事件
  registerEvent() {
    izx.on(SCMJ_EVENT.UPDATE_MJLAYER_CARDS, this.updateCards, this)
    izx.on(SCMJ_EVENT.BEGIN_GAME_NOTI, this.onStartGameNoti, this)
    izx.on(SCMJ_EVENT.UPDATE_LACK_CARDS, this.updateLackCards, this)
    izx.on(SCMJ_EVENT.UPDATE_MJPLAY_MARK, this.updateMjPlayMark, this)
    izx.on(SCMJ_EVENT.STATE_NONE, this.onStartGameNoti, this)
    izx.on(SCMJ_EVENT.CHANGE_NOTI, this.changeNoti, this)
    izx.on(SCMJ_EVENT.UPDATE_TING_MARKS, this.updateTingMarks, this)
  }

  changeNoti(noti) {
    izx.log("changeNoti noti = ", noti)
    this.changeCards = noti.cards
  }

   // 增加当前出牌标记
   drawPlayMark(pos) {
    if (this.ndPlayMark) {

    } else {
      this.ndPlayMark = cc.instantiate(this.prefabPlayMark)
      this.ndPlayMark.parent = this.node
      this.ndPlayMark.scale = 0.7
    }
    this.ndPlayMark.position = this.ndPlayMark.parent.convertToNodeSpaceAR(pos)
  }

  removePlayMark() {
    if (this.ndPlayMark) {
      this.ndPlayMark.removeFromParent()
      this.ndPlayMark = null
    }
  }

  updateMjPlayMark(noti) {
    izx.log("updateMjPlayMakr noti = ", noti)
    let name = "DisplayArea" + noti.chairId
    let nodeArea = scmjUtil.pathNode(name, this.mapNodePaths, this.node)
    if (nodeArea == null) {
      this.removePlayMark()
      return 
    }
    let count = 0
    let cards = this.mapCards[noti.chairId]
    if (cards) {
      count = cards.dispcards.length
    }
    if (count == 0) {
      this.removePlayMark()
      return 
    }
    let mj = nodeArea.getChildByName("Displaycard_" + (count - 1))
    if (mj) {
      let wpos = mj.getParent().convertToWorldSpaceAR(mj.position)
      wpos.y += parseInt(noti.chairId/2 + "") == 1 ? 40 : 35
      this.drawPlayMark(wpos)
      // 播放出牌手势动画
      let node = cc.find("CenterArea1/CenterMjArea/GestureArea" + noti.chairId + "/Hand", this.node)
      node.active = true
      node.position = mj.getParent().convertToNodeSpaceAR(wpos)
      node.getComponent(dragonBones.ArmatureDisplay).playAnimation("newAnimation", 1)
      
      node.getComponent(dragonBones.ArmatureDisplay)
        .on(dragonBones.EventObject.COMPLETE, (event) => {
          node.active = false
        }, this)
      this.scheduleOnce(() => {
        ScmjAudioUtil.playSound("audio_throw")
      }, 0.3)
    }
  }

  updateLackCards(noti) {
    izx.log("scmjlayer lackNoti noti = ", noti)
    if (noti.chairId ==  1) {
      izx.log("lchairId ==  1")
      this.lack = noti.lack
      // let handcards = this.getHandcards()
      // handcards.forEach(card => {
      //   card.getComponent("scmjPrefab").drawLackMark(this.lack)
      // })
      if (this.mapCards[noti.chairId]) {
        this.refleshLeftcards(noti.chairId, this.mapCards[noti.chairId].leftcards)
        this.refleshHandcards(noti.chairId, this.mapCards[noti.chairId].handcards)
        this.refleshCurCard(noti.chairId, this.mapCards[noti.chairId].card)
      }
    }
  }

  updateTingMarks(noti) {
    izx.log("scmjlayer updateTingMarks noti = ", noti)
    let mapTingCards = {}
    let mapMore = []
    let isDiff = false
    let maxNum = 0
    noti.tingCards.forEach(item => {
      mapTingCards[item.playCard] = {}
      mapTingCards[item.playCard].tingCards = item.tingCards
      let tempNum = 0
      item.tingCards.forEach(item2 => {
        tempNum += item2.left
      });
      if (tempNum > maxNum) {
        if (maxNum != 0) {
          isDiff = true
        }
        maxNum = tempNum
        mapMore = []
        mapMore.push(item.playCard)
      } else if (tempNum == maxNum) {
        mapMore.push(item.playCard)
      } else {
        isDiff = true
      }
    });
    if (isDiff) {
      mapMore.forEach(v => {
        mapTingCards[v].isMore = true
      });
    }
    izx.log("mapTingCards = ", mapTingCards)
    let handcards = this.getHandcards()
    handcards.forEach(card => {
      let cardS = <MjPrefab>card.getComponent("scmjPrefab")
      if (mapTingCards[cardS.cValue]) {
        cardS.drawTingMark(mapTingCards[cardS.cValue])
      }
    })
  }

  // 清空麻将牌
  clearMjs() {
    for (let index = 1; index <= 4; index++) {
      let name = "HuArea" + index
      let nodeArea = scmjUtil.pathNode(name, this.mapNodePaths, this.node)
      nodeArea.removeAllChildren()
      name = "DisplayArea" + index
      nodeArea = scmjUtil.pathNode(name, this.mapNodePaths, this.node)
      nodeArea.removeAllChildren()
      let nodeAreas = this.getAreas("HandArea", index)
      nodeAreas.forEach(area => {
        area.removeAllChildren()
      })
    }
  }
  onStartGameNoti(noti) {
    izx.log("mjLayer onStartGameNoti")
    this.clearMjs()
    this.removePlayMark()
    this.lack = LackType.None
  }
  // 接收牌面更新事件
  updateCards(noti) {
    izx.log("mjLayer updateCards")
    if (!noti) {
      return
    }
    
    izx.log("noti = ", JSON.stringify(noti))
    this.mapHandCardsOffset[noti.chairId] = 0
    this.mapCurCardOffset[noti.chairId] = 0 
    this.mapCards[noti.chairId] = noti
    this.refleshLeftcards(noti.chairId, noti.leftcards)
    this.refleshHandcards(noti.chairId, noti.handcards)
    this.refleshCurCard(noti.chairId, noti.card)
    this.refleshHucards(noti.chairId, noti.hucards)
    this.refleshDisplaycards(noti.chairId, noti.dispcards)
  }
  // 获取方向系数
  ratio(chairId, area: CardArea): number{
    let ratio = 1
    switch(chairId) {
      case 1: 
        break
      case 2: 
        break
      case 3: 
        ratio = -1
        break
      case 4: 
        ratio = -1
        break
    }
    return ratio
  }
  // 获取间隔系数
  gap(chairId, area: CardArea): number{
    let gap = 0
    switch(chairId) {
      case 1: 
        if (area == CardArea.DisplayCard) {
          gap = -2
        } else if (area == CardArea.HandCard) {
          gap = -18
        } else if (area == CardArea.LeftCard) {
          gap = -3
        }
        break
      case 2: 
        gap = -13
        if (area == CardArea.HuCard) {
          gap = -7
        } else if (area == CardArea.DisplayCard) {
          gap = -10
        }
        break
      case 3: 
        gap = 2
        break
      case 4: 
        gap = 13
        if (area == CardArea.HuCard) {
          gap = 7
        } else if (area == CardArea.DisplayCard) {
          gap = 10
        }
        break
    }
    return gap
  }

  getAreas(areaName, chairId) {
    let nodeAreas = []
    if (chairId == 1 && areaName == "HandArea") {
      let area = scmjUtil.pathNode(areaName + chairId + "01", this.mapNodePaths, this.node)
      if (area ) {
        nodeAreas.push(area)
      }
      area = scmjUtil.pathNode(areaName + chairId + "02", this.mapNodePaths, this.node)
      if (area ) {
        nodeAreas.push(area)
      }
    } else {
      let area = scmjUtil.pathNode(areaName + chairId, this.mapNodePaths, this.node)
      if (area ) {
        nodeAreas.push(area)
      }
    }

    return nodeAreas
  }

  getHandcards() {
    let handcards = []
    let areas = this.getAreas("HandArea", 1)
    areas.forEach(area => {
      area.children.forEach(card => {
        if (card.name.indexOf("handcard") != -1 || card.name.indexOf("curcard") != -1) {
          handcards.push(card)
        }
      });
    });
    return handcards
  }

  getLackCards() {
    let lackcards = []
    let areas = this.getAreas("HandArea", 1)
    areas.forEach(area => {
      area.children.forEach(card => {
        if (card.name.indexOf("handcard") != -1 || card.name.indexOf("curcard") != -1) {
          let cardS = card.getComponent("scmjPrefab")
          if (cardS.sptLack && cardS.sptLack.active) {
            lackcards.push(card)
          }
        }
      });
    });
    return lackcards
  }
  // 刷新左手牌
  // 0,1,2,3,-99,1,4,4,4,4,-99 第1位表示 座位，吃谁的、碰谁的；中间是吃碰杠的牌，最后-99间隔
  refleshLeftcards(chairId, cards) {
    // izx.log("mjLayer refleshLeftcards")
    // izx.log("chairId = ", chairId)
    // izx.log("cards = ", cards)

    let nodeAreas = this.getAreas("HandArea", chairId)
    if (nodeAreas.length == 0) {
      return
    }

    if (cards.length == 0) { 
      nodeAreas.forEach(nodeArea => {
        nodeArea.removeAllChildren()
      })
      return
    }
    
    // 解析左手牌
    let groups: number[][] = []
    let group: number[] = []
    cards.forEach(v => {
      if (v == -99) {
        groups.push(group)
        group = []
      } else {
        group.push(v)
      }
    })
    // izx.log("groups = ", groups)
    let groupIndex = 0
    nodeAreas.forEach((nodeArea, areaIndex) => {
      nodeArea.removeAllChildren()
      let offset = 0
      let ratio = this.ratio(chairId, CardArea.LeftCard)
      let gap = this.gap(chairId, CardArea.LeftCard)
      // izx.log("ratio = ", ratio)
      // izx.log("gap = ", gap)
      let num = 0
      let opChairId = -1

      for (; groupIndex < groups.length; groupIndex++) {
        let v = groups[groupIndex]
        if (chairId == 1 && groupIndex >= 2 && areaIndex == 0) {
          this.mapHandCardsOffset[chairId] = 0
          break
        }
        let centerX = 0
        let centerY = 0
        let arrowI = -1
        if (v.length == 4) {
          arrowI = 2
        } else if (v.length == 5) {
          arrowI = 4
        }
        v.forEach((vv, i) => {
          if (i == 0) {
            opChairId = scmjUtil.s2c(vv)
          } else {
            let card = vv
            let nodeCard: MjPrefab
            nodeCard = cc.instantiate(this.mjPrefab).getComponent("scmjPrefab")
            nodeCard.initMj(chairId, CardArea.LeftCard, card)
            nodeCard.node.name = "leftcard_" + num
            nodeCard.node.zIndex = -num*ratio
            num++
            nodeCard.node.parent = nodeArea
            if (i == 4) {
              if (chairId == 1) {
                nodeCard.node.x = centerX
                nodeCard.node.y = 10
              } else if (chairId == 3) {
                nodeCard.node.x = centerX
                nodeCard.node.y = 8
              } else {
                nodeCard.node.y = centerY + 5
              }
              nodeCard.node.zIndex = (chairId == 2 || chairId == 1) ? nodeCard.node.zIndex + 3 : nodeCard.node.zIndex
            } else {
              let size = nodeCard.mjSize()
              if (chairId == 1 || chairId == 3) {
                nodeCard.node.x = (offset + size.width*ratio + gap)
                offset += (size.width*ratio + gap)
              } else {
                nodeCard.node.y = (offset + size.height*ratio + gap)
                offset += (size.height*ratio + gap)
              }
            }
            if (i == 2) {
              if (chairId == 1 || chairId == 3) {
                centerX = nodeCard.node.x
              } else {
                centerY = nodeCard.node.y
              }
            }
            if (i == arrowI) {
              nodeCard.drawArrow(opChairId)
            }
            if (i == v.length - 1) {
              offset += 10*ratio
              this.mapHandCardsOffset[chairId] = offset
            }
            nodeCard.setOriginPositon()
          }
        })
      }
    })
  }
  // 刷新手牌
  refleshHandcards(chairId, cards) {
    // izx.log("mjLayer refleshHandcards")
    // izx.log("chairId = ", chairId)
    // izx.log("cards = ", cards)
    
    let nodeAreas = this.getAreas("HandArea", chairId)
    if (nodeAreas.length == 0) {
      return
    }

    let bHu = this.isHu(chairId)
    cards = scmjUtil.sortLack(cards, this.lack)

    let groups: number[][] = []
    let group: number[] = []
    if (cards.length <= 7) {
      groups[0] = []
      groups[1] = cards
    } else {
      groups[0] = []
      groups[1] = []
      for (let index = cards.length - 1, num = 0; index >= 0; index--, num++) {
        if (num >= 7) {
          groups[0].splice(0,0,cards[index])
        } else {
          groups[1].splice(0,0,cards[index])
        }
      }
    }
    // izx.log("groups = ", groups)
    for (let areaIndex = 0; areaIndex < nodeAreas.length; areaIndex++) {
      let nodeArea = nodeAreas[areaIndex];
      let tempCards = cards
      if (areaIndex == 0 && chairId == 1) {
        if (groups[0].length > 0) {
          tempCards = groups[0]
        } else {
          continue
        }
      }
      let offset = this.mapHandCardsOffset[chairId] ? this.mapHandCardsOffset[chairId] : 0
      if (areaIndex == 1 && chairId == 1) {
        if (groups[1].length == 7) {
          offset = 0
        }
        tempCards = groups[1]
      }
      let ratio = this.ratio(chairId, CardArea.HandCard)
      let gap = this.gap(chairId, CardArea.HandCard)
      // 结算明牌
      if (tempCards.length > 0 && tempCards[0] > 0 && chairId != 1) {
        chairId == 2 && (gap += 3)
        chairId == 4 && (gap -= 3)
      }
      // izx.log("ratio = ", ratio)
      // izx.log("gap = ", gap)
      let num = 0
      tempCards.forEach((card, i) => {
        let nodeCard: MjPrefab
        nodeCard = cc.instantiate(this.mjPrefab).getComponent("scmjPrefab")
        nodeCard.initMj(chairId, CardArea.HandCard, card)
        nodeCard.node.name = "handcard_" + num
        nodeCard.node.zIndex = -num*ratio
        num++
        nodeCard.node.parent = nodeArea
        let size = nodeCard.mjSize()
        if (chairId == 1 || chairId == 3) {
          nodeCard.node.x = (offset + size.width*ratio + gap)
          offset += (size.width*ratio + gap)
        } else {
          nodeCard.node.y = (offset + size.height*ratio + gap)
          offset += (size.height*ratio + gap)
        }
        if (i == tempCards.length - 1) {
          offset += 10*ratio
          this.mapCurCardOffset[chairId] = offset
        }
        nodeCard.setOriginPositon()
        chairId == 1 ? nodeCard.drawLackMark(this.lack) : {}
        let cIndex =  this.changeCards.indexOf(card) 
        if (cIndex >= 0) {
          nodeCard.startChangeAni()
          this.changeCards.splice(cIndex, 1)
        }
        if (bHu && chairId == 1) {
          nodeCard.drawDisableShadow()
        }
      });
    }
  }
  // 刷新当前摸到的牌
  refleshCurCard(chairId, card) {
    // izx.log("mjLayer refleshCurCard")
    // izx.log("chairId = ", chairId)
    // izx.log("cards = ", card)
    if (card == 0) {
      return
    }
    
    let name = "HandArea" + chairId
    name = chairId == 1 ? name + "02" : name
    let nodeArea = scmjUtil.pathNode(name, this.mapNodePaths, this.node)
    if (nodeArea == null) {
      return
    }
    let nodeCard: MjPrefab
    nodeCard = cc.instantiate(this.mjPrefab).getComponent("scmjPrefab")
    nodeCard.initMj(chairId, CardArea.CurCard, card)
    nodeCard.node.name = "curcard"
    let ratio = this.ratio(chairId, CardArea.CurCard)
    let size = nodeCard.mjSize()
    let offset = this.mapCurCardOffset[chairId] ? this.mapCurCardOffset[chairId] : 0
    if (chairId == 1 || chairId == 3) {
      nodeCard.node.x = offset + (size.width)*ratio
    } else {
      nodeCard.node.y = offset + (size.height)*ratio
    }
    nodeCard.node.parent = nodeArea
    nodeCard.setOriginPositon()
    chairId == 1 ? nodeCard.drawLackMark(this.lack) : {}
    return nodeCard
  }
  // 刷新胡牌
  refleshHucards(chairId, cards) {
    // izx.log("mjLayer refleshHucards")
    // izx.log("chairId = ", chairId)
    // izx.log("cards = ", cards)
    
    let name = "HuArea" + chairId
    let nodeArea = scmjUtil.pathNode(name, this.mapNodePaths, this.node)
    if (nodeArea == null) {
      return
    }

    if (chairId == 1 && cards.length == 1) {
      izx.dispatchEvent(SCMJ_EVENT.GUIDE_HU2)
    }

    nodeArea.removeAllChildren()
    let ratio = this.ratio(chairId, CardArea.HuCard)
    let gap = this.gap(chairId, CardArea.HuCard)
    // izx.log("ratio = ", ratio)
    // izx.log("gap = ", gap)
    let num = 0
    cards.forEach(card => {
      let nodeCard: MjPrefab
      nodeCard = cc.instantiate(this.mjPrefab).getComponent("scmjPrefab")
      nodeCard.initMj(chairId, CardArea.HuCard, card)
      nodeCard.node.name = "hucard_" + num
      nodeCard.node.zIndex = -num*ratio
      nodeCard.node.parent = nodeArea
      let tempRatio = ratio*nodeCard.node.scale
      let size = nodeCard.mjSize()
      if (chairId == 1 || chairId == 3) {
        nodeCard.node.x = (size.width*tempRatio + gap) * num
      } else {
        nodeCard.node.y = (size.height*tempRatio + gap) * num
      }
      num++
      nodeCard.setOriginPositon()
    });
  }
  // 刷新出牌
  refleshDisplaycards(chairId, cards) {
    // izx.log("mjLayer refleshDisplaycards")
    // izx.log("chairId = ", chairId)
    // izx.log("cards = ", cards)
    let endCard = null
    let numPerColumm = 7
    let name = "DisplayArea" + chairId
    let nodeArea = scmjUtil.pathNode(name, this.mapNodePaths, this.node)
    if (nodeArea == null) {
      return null
    }
    let areaLength = 0
    if (chairId == 1 || chairId == 3) {
      areaLength = nodeArea.getContentSize().width
    } else {
      areaLength = nodeArea.getContentSize().height
    }
    nodeArea.removeAllChildren()
    let ratio = this.ratio(chairId, CardArea.DisplayCard)
    let gap = this.gap(chairId, CardArea.DisplayCard)
    // izx.log("ratio = ", ratio)
    // izx.log("gap = ", gap)
    let num = 0
    let nameNum = 0
    let column = 0
    let offset = 0
    let scale = 1
    if (cards.length > numPerColumm*2) {
      if (chairId == 2 || chairId == 4) {
        scale = 0.8
      } else {
        scale = 0.9
      }
    }
    cards.forEach(card => {
      let nodeCard: MjPrefab
      nodeCard = cc.instantiate(this.mjPrefab).getComponent("scmjPrefab")
      nodeCard.initMj(chairId, CardArea.DisplayCard, card)
      nodeCard.node.name = "Displaycard_" + nameNum
      nodeCard.node.zIndex = -(num - numPerColumm*column)*ratio
      nodeCard.node.parent = nodeArea
      nodeCard.node.scale = nodeCard.node.scale * scale
      let tempRatio = ratio*nodeCard.node.scale
      let size = nodeCard.mjSize()
      if (chairId == 1 || chairId == 3) {
        nodeCard.node.x = (size.width*tempRatio + gap) * num
        nodeCard.node.x += chairId == 1 ? size.width/2 : -size.width/2
        nodeCard.node.y = chairId == 1 ? -size.height/2 : size.height/2
        nodeCard.node.y += offset
      } else {
        nodeCard.node.y = (size.height*tempRatio + gap) * num
        nodeCard.node.y += chairId == 2 ? size.width/2 : -size.width/2
        nodeCard.node.x = chairId == 2 ? size.height/2 : -size.height/2
        nodeCard.node.x += offset
      }
      num++
      nameNum++
      //if (Math.abs((size.height*tempRatio + gap) * num) > areaLength) {
      if (num >= numPerColumm) {
        num = 0
        column++
        if (chairId == 1 || chairId == 3) {
          offset = -(size.height - 11)*tempRatio*column
        } else {
          offset = (size.width - 3)*tempRatio*column
        }
      }
      nodeCard.setOriginPositon()
      endCard = nodeCard
    });
    if (endCard) {
      return endCard.node
    } else {
      return null
    }
  }

  isHu(chairId) {
    if (this.mapCards[chairId] && this.mapCards[chairId].hucards && this.mapCards[chairId].hucards.length > 0) {
      return true
    } else {
      return false
    }
  }

  // LIFE-CYCLE CALLBACKS:
  onLoad () {
    this.onOpen()
  }

  start () {

  }

  // update (dt) {}
}
