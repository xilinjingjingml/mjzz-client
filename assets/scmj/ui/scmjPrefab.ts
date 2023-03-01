/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangxinfeng
 * @Date: 2020-11-2
 * @LastEditors: wangxinfeng
 * @LastEditTime: 2020-11-4
 */
import { izx } from "../../framework/izx";
import { CardArea, LackType } from "../scmjConstants";
import { scmjUtil } from "../scmjUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MjPrefab extends cc.Component {
  @property(cc.Node)
  grayShadow: cc.Node = null
  // 座位 1-4
  chairId: number = 0;
  // 类型
  cArea: CardArea = 0;
  // 花色数值
  cValue: number = 0;
  // 牌背图片名称
  bgPic: string = "";
  // 花色图片名称
  valuePic: string = "";
  // 花色精灵
  sptValue: cc.Node = null;
  // 牌背
  sptBg: cc.Node = null;
  // 缩放系数
  scale: number = 1;
  // 花色y轴位移
  offsetY: number = 0;
  // 花色旋转角度
  rotation = 0;
  // arrow
  sptArrow: cc.Node = null;
  // lack
  sptLack: cc.Node = null;
  // 花色缩放系数
  valueScale = 1;
  // 麻将牌初始位置
  originPos = null;
  // 听牌标记
  sptTingMark = null;
  tingCards = null;

  // 计算麻将图片以及缩放系数
  calcMjPic() {
    let prefix = ""
    let suffix = ""
    this.valuePic = "pics/mj_card_num_small/mj_cardnum_mahjong_s_" + this.cValue
    switch(this.chairId) {
      case 1: 
        prefix = "me"
        break
      case 2: 
      case 4: 
        prefix = "side"
        break
      case 3: 
        prefix = "top"
        break
    }

    switch(this.cArea) {
      case CardArea.CurCard: 
      case CardArea.HandCard:
        suffix = "stand"
        this.valuePic = this.chairId == 1 ? "pics/mj_card_num/mj_cardnum_mahjong_" + this.cValue : this.valuePic
        this.scale = this.chairId == 1 ? 0.85 : this.scale
        this.offsetY = this.chairId == 1 ? -3 : this.offsetY
        // 结算时，手牌放倒
        if (this.cValue > 0 && this.chairId != 1) {
          suffix = "face"
          this.offsetY += 5
        }
        break
      case CardArea.DisplayCard: 
        prefix = prefix == "side" ? "middle" : prefix
        prefix = prefix == "me" ? "top" : prefix
        suffix = "face"
        this.scale = this.chairId%2 == 0 ? 1.0 : 1.0
        this.scale = this.chairId == 1 ? 1.2 : this.scale
        this.offsetY = 5
        this.offsetY = this.chairId == 1 ? 8 : this.offsetY
        break;
      case CardArea.HuCard: 
        prefix = prefix == "me" ? "top" : prefix
        suffix = "face"
        this.scale = 0.65 // this.chairId%2 == 0 ? 0.6 : 0.7
        this.offsetY = 4
        this.offsetY = this.chairId == 1 ? 6 : this.offsetY
        break;
      case CardArea.LeftCard:
        suffix = this.cValue > 0 ?  "face" : "back"
        this.offsetY = 5
        this.valueScale = this.chairId == 1 ? 1.15 : this.valueScale
        break;
    }

    this.bgPic =  "pics/mj_card_bg/" + prefix + "_" + suffix
  }
  // 背景左右翻转
  bgFlipX() {
    if (this.chairId == 2 && 
        (this.cArea == CardArea.HandCard || 
        this.cArea == CardArea.CurCard)
      ){
      this.sptBg.scaleX = -1*this.sptBg.scaleX
    }
  }
  // 花色旋转
  valueRotation() {
    if (this.sptValue == null) {
      return
    }
    switch (this.chairId) {
      case 1:
        
        break;
      case 2:
        this.sptValue.angle = 90
        break;
      case 3:
        this.sptValue.angle = -180
        break;
      case 4:
        this.sptValue.angle = -90
        break;
    }
  }
  // 播放换牌动画
  startChangeAni() {
    console.log("startChangeAni value = ", this.cValue)
    this.node.runAction(cc.repeat(cc.sequence(
      cc.fadeTo(0.8, 100),
      cc.fadeTo(0.8, 255),
    ), 2))
  }

  // 不可出牌阴影
  drawDisableShadow() {
    this.grayShadow.active = true
    this.grayShadow.zIndex = 5
    this.grayShadow.setContentSize(this.mjSize())
  }

  isHu() {
    if (this.grayShadow.active) {
      return true
    } else {
      return false
    }
  }
  
  // 
  replaceMj() {

  }
  // 创建麻将
  createMj() {
    if (this.sptBg == null) {
      this.sptBg = new cc.Node()
      let sprite = this.sptBg.addComponent(cc.Sprite);
      sprite.spriteFrame = <cc.SpriteFrame>scmjUtil.loadPic(this.bgPic)
      this.sptBg.parent = this.node;
      this.sptBg.zIndex = 1
      if (this.cValue > 0) {
        this.sptValue = new cc.Node()
        let sprite = this.sptValue.addComponent(cc.Sprite);
        sprite.spriteFrame = <cc.SpriteFrame>scmjUtil.loadPic(this.valuePic)
        this.sptValue.parent = this.node;
        this.sptValue.zIndex = 2
        this.sptValue.y = this.offsetY
        this.sptValue.scale = this.valueScale
      }
    } else {
      this.replaceMj()
    }
    this.node.scale = this.scale
    this.bgFlipX()
    this.valueRotation()
  }

  setOriginPositon() {
    this.originPos = this.node.getPosition()
  }

  getOriginPositon() {
    return this.originPos
  }

  resetPosition() {
    this.node.position = this.originPos
  }

  drawArrow(opChairId) {
    if (opChairId == this.chairId) {
      return
    }
    if (this.sptArrow == null) {
      this.sptArrow = new cc.Node()
      let sprite = this.sptArrow.addComponent(cc.Sprite);
      sprite.spriteFrame = <cc.SpriteFrame>scmjUtil.loadPic("pics/ui/arrow")
      this.sptArrow.parent = this.node;
      this.sptArrow.zIndex = 3
      let rotation = 0
      let offsetY = 0
      let offsetX = 0
      switch (this.chairId) {
        case 1:
          rotation = opChairId == 2 ? 180 : rotation
          rotation = opChairId == 3 ? 90 : rotation
          offsetY = -7
          break
        case 2:
          rotation = opChairId == 1 ? -90 : rotation
          rotation = opChairId == 3 ? 90 : rotation
          offsetX = 10
          offsetY = 5
          break
        case 3:
          rotation = opChairId == 1 ? -90 : rotation
          rotation = opChairId == 2 ? 180 : rotation
          offsetY = 15
          break
        case 4:
          rotation = opChairId == 1 ? -90 : rotation
          rotation = opChairId == 2 ? 180 : rotation
          rotation = opChairId == 3 ? 90 : rotation
          offsetX = -10
          offsetY = 5
          break
        default:
          break;
      }
      this.sptArrow.angle = -rotation
      this.sptArrow.y = offsetY
      this.sptArrow.x = offsetX
    }
  }

  // 增加定缺标记
  drawLackMark(lack) {
    if (this.sptLack) {
      return
    }
    if (lack >= 0 && parseInt(this.cValue/10 + "") == lack) {
      this.sptLack = new cc.Node()
      let sprite = this.sptLack.addComponent(cc.Sprite);
      sprite.spriteFrame = <cc.SpriteFrame>scmjUtil.loadPic("pics/scmj/lack_mark")
      this.sptLack.parent = this.node;
      this.sptLack.zIndex = 4
      this.sptLack.y = 44
      this.sptLack.x = 28
    }
  }

  // 增加听牌标记
  drawTingMark(params) {
    izx.log("drawTingMark params = ", params)
    if (this.sptTingMark) {
      return
    }
    this.tingCards = params.tingCards
    if (this.tingCards && this.tingCards.length > 0) {
      this.sptTingMark = new cc.Node()
      let sprite = this.sptTingMark.addComponent(cc.Sprite);
      sprite.spriteFrame = <cc.SpriteFrame>scmjUtil.loadPic(params.isMore ?  "pics/ting/arrow_more" : "pics/ting/arrow_light")
      this.sptTingMark.parent = this.node;
      this.sptTingMark.zIndex = 5
      this.sptTingMark.y = 85
      this.sptTingMark.x = 0
    }
  }

  // 初始化牌值
  initMj(chairId, cArea: CardArea, cValue) {
    this.chairId = chairId
    this.cArea = cArea
    this.cValue = cValue
    this.calcMjPic()
    this.createMj()
    this.node.setContentSize(100, 100)
  }

  mjSize(): cc.Size {
    let size = cc.size(0,0)
    if (this.sptBg) {
      let rect = this.sptBg.getBoundingBox()
      size.width = rect.width
      size.height = rect.height
    }
    return size
  }

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start () {

  }

  // update (dt) {}
}
