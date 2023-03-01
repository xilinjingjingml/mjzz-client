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
import { CheckType } from "../scmjConstants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class scmjBill extends BaseUi {
  winColor = "#dc4f28"
  loseColor = "#69b336"

  @property(cc.Prefab)
  prefabBillItem: cc.Prefab = null;
  @property(cc.RichText)
  lblAddScore: cc.RichText = null;
  @property(cc.Node)
  ndEmpty: cc.Node = null;
  @property(cc.Node)
  ndContent: cc.Node = null;
  @property(cc.Node)
  ndBills: cc.Node = null;

  onOpen() {
    console.log("scmjBill onOpen")
    super.onOpen()
    this.registerEvent()
  }

  onClose() {
    console.log("scmjBill onClose")
    super.onClose()
  }
  // 注册事件
  registerEvent() {
    izx.on(SCMJ_EVENT.UPDATE_BILL, this.updateBill, this)
    izx.on(SCMJ_EVENT.STATE_NONE, this.reset, this)
  }

  reset() {
    this.node.active = false
    this.lblAddScore.string = "<color=#b06b44>本局当前输赢金豆：</c><color=" + this.loseColor + ">" + 0 + "</color>"
    this.ndBills.removeAllChildren()
  }

  updateBill(msg) {
    console.log("scmjBill updateBill msg = ", msg)
    this.node.active = true
    if (msg.items.length == 0) {
      this.ndContent.active = false
      this.ndEmpty.active = true
      return
    } else {
      this.ndContent.active = true
      this.ndEmpty.active = false
    }
    let score = msg.score > 0 ? "+" + msg.score : msg.score
    let color = msg.score > 0 ? this.winColor : this.loseColor
    let text = "<color=#b06b44>本局当前输赢金豆：</c><color=" + color + ">" + score + "</color>"
    this.lblAddScore.string = text
    this.ndBills.removeAllChildren()
    msg.items.forEach(item => {
      let node = cc.instantiate(this.prefabBillItem)
      node.parent = this.ndBills
      this.setTypeText(node, item.op, item.fan, item.type, item.score)
      this.setRatioText(node, item.ratio, item.score)
      this.setScoreText(node, item.score)
      this.setRoleText(node, item.position)
    });
  }

  setRoleText(node, role) {
    let lblRole = <cc.Label>(node.getChildByName("Role").getComponent(cc.Label))
    lblRole.string = role 
  }

  setScoreText(node, score) {
    let lblScore = <cc.Label>(node.getChildByName("Score").getComponent(cc.Label))
    lblScore.string = ""
    if (score <= 0) {
      lblScore.string = score + ""
      lblScore.node.color = scmjUtil.hex2color(this.loseColor)
    } else {
      lblScore.string = "+" + score
      lblScore.node.color = scmjUtil.hex2color(this.winColor)
    }
  }

  setRatioText(node, ratio, score) {
    let lblRatio = <cc.Label>(node.getChildByName("Ratio").getComponent(cc.Label))
    lblRatio.string = ""
    if (score <= 0) {
      lblRatio.string = "-" + ratio + "倍"
    } else {
      lblRatio.string = "+" + ratio + "倍" 
    }
  }

  setTypeText(node, op, fan, type, score) {
    let lblType = <cc.Label>(node.getChildByName("Type").getComponent(cc.Label))
    lblType.string = ""
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

  onBtnClose() {
    console.log("scmjBill onBtnClose")
    this.node.active = false
  }


  // LIFE-CYCLE CALLBACKS:
  onLoad () {
    this.onOpen()
  }

  start () {

  }

  // update (dt) {}
}
