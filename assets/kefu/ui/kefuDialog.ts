import BaseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";

const {ccclass, property} = cc._decorator;

@ccclass
export default class KefuDialog extends BaseUI {

  onLoad() {
    if (cc.winSize.width < 720) {
      this.node.getChildByName("kefu").setScale(0.8, 0.8)
    } 
  }

  onOpen() {
    this.initButton()
  }

  initButton() {
    izx.bindButtonClick("kefu/closeBtn", this.node, () => {
      this.pop()
    })

    izx.bindButtonClick("kefu/content/copyBtn", this.node, () => {
      izx.log("copy copy")
      izx.pluginMgr.copyToClipboard("地方online娱乐")
    })
  }

}
