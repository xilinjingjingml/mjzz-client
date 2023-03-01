import baseUI from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import Constants from "../../common/constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SettingDialog extends baseUI {
  @property(cc.Toggle)
  togMusic: cc.Toggle = null
  @property(cc.Toggle)
  togSound: cc.Toggle = null
  @property(cc.Toggle)
  togDialect: cc.Toggle = null

  onLoad() {
    if (cc.winSize.width < 720) {
      this.node.getChildByName("setting").setScale(0.8, 0.8)
    } 
  }

  onOpen() {
    this.initEvent()
    this.initButton()
    this.initToggle()
    this.refreshBindPhone()
  }

  initEvent() {
    izx.on(Constants.EventName.REFRESH_BIND_PHONE, this.refreshBindPhone, this)
    izx.on(Constants.EventName.CLOSE_SETTING, () => { this.pop() }, this)
  }

  refreshBindPhone() {
    let bindPhone = izx.getData(izx.imei + "bind_phone")
    if (izx.user.bindPhone || bindPhone == 1) {
      let btnBindAccount = cc.find("setting/BtnBindAccount", this.node)
      btnBindAccount.active = false
      let btnSwitchAccount = cc.find("setting/BtnSwitchAccount", this.node)
      btnSwitchAccount.x = 0
    }
  }

  onToggleMusic() {
    izx.log("onToggleMusic this.togMusic.isChecked = ", this.togMusic.isChecked)
    if (this.togMusic.isChecked) {
      izx.setMusicVol(1)
    } else {
      izx.setMusicVol(0)
    }
  }

  onToggleSound() {
    izx.log("onToggleMusic this.togSound.isChecked = ", this.togSound.isChecked)
    if (this.togSound.isChecked) {
      izx.setEffectVol(1)
    } else {
      izx.setEffectVol(0)
    }
  }


  onToggleDialect() {
    izx.log("onToggleDialect this.togDialect.isChecked = ", this.togDialect.isChecked)
    if (this.togDialect.isChecked) {
      izx.utils.setDialect(1)
    } else {
      izx.utils.setDialect(0)
    }
  }

  initToggle() {
    let volume = izx.getMusicVol()
    this.togMusic.isChecked = volume > 0 ? true : false
    volume = izx.getEffectVol()
    this.togSound.isChecked = volume > 0 ? true : false
    let dialect = izx.utils.isDialect()
    this.togDialect.isChecked = dialect == 1 ? true : false
  }


  initButton() {
    izx.bindButtonClick("setting/backBtn", this.node, () => {
      this.pop()
    })
    izx.bindButtonClick("setting/BtnBindAccount", this.node, () => {
      izx.dispatchEvent(Constants.EventName.PHONE_SHOW_MAIN, true)
    })
    izx.bindButtonClick("setting/BtnSwitchAccount", this.node, () => {
      let auth_type = izx.getData(izx.imei + "auth_type")
      if (auth_type == 2) { // 手机号登录
        izx.dispatchEvent(Constants.EventName.SWITCH_GUEST)
      } else {
        izx.dispatchEvent(Constants.EventName.SWITCH_PHONE)
      }
    })
  }
}
