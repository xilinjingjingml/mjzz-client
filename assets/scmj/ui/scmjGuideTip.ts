/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangxinfeng
 * @Date: 2021-3-12
 * @LastEditors: wangxinfeng
 * @LastEditTime: 2021-3-12
 */
import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { SCMJ_EVENT } from "../scmjEvents";
import { scmjUtil } from "../scmjUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GuideTip extends BaseUi {

  onOpen() {
    console.log("GuideTip onOpen")
    super.onOpen()
    this.registerEvent()
  }

  onClose() {
    console.log("GuideTip onClose")
    super.onClose()
  }
  // 注册事件
  registerEvent() {

  }

  onBtnOlder() {
    izx.audioMgr.playBtn()
    izx.setData("scmjPopGuideTip_" + izx.user.uid, 1)
    this.pop()
  }
 
  onBtnNewer() {
    izx.audioMgr.playBtn()
    izx.setData("scmjPopGuideTip_" + izx.user.uid, 1)
    izx.setData("scmjNeedGuide_" + izx.user.uid, 1)
    this.pop()
  }

  // LIFE-CYCLE CALLBACKS:
  onLoad () {
  }

  start () {

  }

  // update (dt) {}
}
