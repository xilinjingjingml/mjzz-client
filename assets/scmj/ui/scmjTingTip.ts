/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangxinfeng
 * @Date: 2021-2-5
 * @LastEditors: wangxinfeng
 * @LastEditTime: 2021-2-5
 */
import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { SCMJ_EVENT } from "../scmjEvents";
import { scmjUtil } from "../scmjUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TingTip extends BaseUi {
  // 标题
  @property(cc.Label)
  lblTitle: cc.Label = null;
  // 内容
  @property(cc.Layout)
  layoutContent: cc.Layout = null;
  // 听牌信息
  @property(cc.Prefab)
  prefabTingCard: cc.Prefab = null;

  onOpen() {
    console.log("TingTip onOpen")
    super.onOpen()
    this.registerEvent()
  }

  onClose() {
    console.log("TingTip onClose")
    super.onClose()
  }
  // 注册事件
  registerEvent() {
    izx.on(SCMJ_EVENT.STATE_NONE, this.reset, this)
  }

  reset() {
    this.node.active = false
    this.layoutContent.node.removeAllChildren()
  }

  // 初始化数据
  init(tingCards) {
    let len = tingCards.length
    if (len == 0) {
      this.lblTitle.string = "h0z"
      this.layoutContent.node.removeAllChildren()
      return
    }
    this.layoutContent.node.removeAllChildren()
    if (len <=  2) {
      this.layoutContent.type = cc.Layout.Type.HORIZONTAL
    } else if (len >= 3) {
      this.layoutContent.type = cc.Layout.Type.GRID
    }
    let huNum = 0
    tingCards.forEach(item => {
      let node = cc.instantiate(this.prefabTingCard)
      node.getChildByName("SptValue").getComponent(cc.Sprite).spriteFrame = <cc.SpriteFrame>scmjUtil.loadPic("pics/mj_card_num/mj_cardnum_mahjong_" + item.card)
      node.getChildByName("LblLeft").getComponent(cc.Label).string = item.left
      if (item.ratio == 0) {
        node.getChildByName("LblRatio").active = false
      } else {
        node.getChildByName("LblRatio").active = true
        node.getChildByName("LblRatio").getComponent(cc.Label).string = item.ratio + "b"
      }
      
      node.parent = this.layoutContent.node
      huNum += item.left
    });
    this.lblTitle.string = "h" + huNum + "z"
  }

 

  // LIFE-CYCLE CALLBACKS:
  onLoad () {
    this.onOpen()
  }

  start () {

  }

  // update (dt) {}
}
