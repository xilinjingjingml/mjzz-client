import BaseUi from "../../framework/base/baseUI";
import {izx} from "../../framework/izx";
import {PHONE_EVENT} from "../phone_events";
import Constants from "../../common/constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PhoneBind extends BaseUi {
    editBoxPhone: cc.Node = null;
    lblPhoneNum: cc.Node = null

    @property(cc.Button)
    btnNext: cc.Button = null

    onOpen() {
        this.editBoxPhone = this.node.getChildByName("EditBoxCodeInput")
        this.lblPhoneNum = this.node.getChildByName("LblPhoneNum")

        this.initEvent()
        this.initButton()
        this.initView()
    }

    initEvent() {
        izx.on(PHONE_EVENT.CLOSE_POP, this.closePop, this)
        izx.on(PHONE_EVENT.MOVE_POP, this.movePop, this)
    }

    closePop() {
        this.pop()
    }

    movePop() {
        this.node.runAction(cc.moveTo(0.2, new cc.Vec2(-this.node.width, 0)))
    }

    initButton() {
        izx.bindButtonClick("SptClose/BtnClose", this.node, () => {
            this.node.runAction(cc.sequence(
                cc.moveTo(0.2, new cc.Vec2(this.node.width, 0)),
                cc.callFunc(() => {
                    this.pop()
                }),
            ))
        })

        izx.bindButtonClick("Layout/BtnUserAgreement", this.node, () => {
            izx.pushDialog("agree", "prefabs/userAgreeDialog", (res) => {})
        })

        izx.bindButtonClick("Layout/BtnPrivacyPolicy", this.node, () => {
            izx.pushDialog("agree", "prefabs/agreeDialog", (res) => {})
        })

        izx.bindButtonClick("BtnNext", this.node, () => {
            console.log('Get verify code button clicked!');
            //检查手机号
            let phone = this.editBoxPhone.getComponent(cc.EditBox).string;
            let ret = izx.utils.checkPhone(phone);
            if (!ret.pass) {
                console.log(ret.tip);
                izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: -1, msg: ret.tip})
                return;
            }

            //发送验证码请求
            izx.dispatchEvent(PHONE_EVENT.SEND_PHONE_CODE_REQ, {
                guid: izx.user.guid,
                phone: phone,
            })

            // 跳转到输入验证码界面
            izx.dispatchEvent(PHONE_EVENT.SHOW_NEXT, phone, () => {
                this.node.runAction(cc.moveTo(0.2, new cc.Vec2(0, 0)))
            }, this.initParam.bind)
        })
    }

    initView() {
        this.editBoxPhone.on("text-changed", this.textChanged, this)
        this.editBoxPhone.on("editing-did-began", this.editBegan, this)
        this.editBoxPhone.on("editing-did-ended", this.editEnded, this)

        this.node.runAction(cc.moveTo(0.2, new cc.Vec2(0, 0)))
    }

    editBegan(editbox) {
        let getAndroidVersion = function() {
            let ua = navigator.userAgent.toLowerCase();
            let match = ua.match(/android\s([0-9\.]*)/);
            return match ? match[1] : null;
        }
        let version = getAndroidVersion()
        if (version && parseInt(version, 10) <= 6) {
            this.node.y = 150
        }
    }

    editEnded(editbox) {
        this.node.y = 0
        this.lblPhoneNum.getComponent(cc.Label).string = editbox.string.substring(0, 3) + " " + editbox.string.substring(3, 7) + " " + editbox.string.substring(7, 11)
        if (editbox.string.length > 0) {
            this.lblPhoneNum.color = new cc.Color(0, 0, 0, 255)
        } else {
            this.lblPhoneNum.getComponent(cc.Label).string = "请输入手机号码"
            this.lblPhoneNum.color = new cc.Color(165, 165, 165, 255)
        }
    }

    textChanged(editbox) {
        if (editbox.string.length > 0) {
            this.btnNext.interactable = true
        } else {
            this.btnNext.interactable = false
        }

        this.lblPhoneNum.getComponent(cc.Label).string = editbox.string.substring(0, 3) + " " + editbox.string.substring(3, 7) + " " + editbox.string.substring(7, 11)
        if (editbox.string.length > 0) {
            this.lblPhoneNum.color = new cc.Color(0, 0, 0, 255)
        } else {
            this.lblPhoneNum.getComponent(cc.Label).string = "请输入手机号码"
            this.lblPhoneNum.color = new cc.Color(165, 165, 165, 255)
        }
    }

    touchMain() {
    }

    onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchMain, this ,true);
    }

    onDisable() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.touchMain, this,true);
    }
}
