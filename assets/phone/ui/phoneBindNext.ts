import BaseUi from "../../framework/base/baseUI";
import {izx} from "../../framework/izx";
import {PHONE_EVENT} from "../phone_events";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PhoneBindNext extends BaseUi {
    sptInput1: cc.Sprite = null;
    sptInput2: cc.Sprite = null;
    sptInput3: cc.Sprite = null;
    sptInput4: cc.Sprite = null;
    sptInput5: cc.Sprite = null;
    sptInput6: cc.Sprite = null;

    editBoxCode: cc.Node = null;

    sptLine1: cc.Node = null;
    sptLine2: cc.Node = null;
    sptLine3: cc.Node = null;
    sptLine4: cc.Node = null;
    sptLine5: cc.Node = null;
    sptLine6: cc.Node = null;

    lblCode1: cc.Node = null;
    lblCode2: cc.Node = null;
    lblCode3: cc.Node = null;
    lblCode4: cc.Node = null;
    lblCode5: cc.Node = null;
    lblCode6: cc.Node = null;

    @property(cc.SpriteFrame)
    sptCodeInput1: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    sptCodeInput2: cc.SpriteFrame = null;

    countdown = 60 // 倒计时
    lastCodeLen = 0 // 验证码长度

    lblPhoneNum: cc.Label = null
    btnResend: cc.Node = null

    phoneInfo: string = "" // 手机号+倒计时信息
    bFirst = true

    onOpen() {
        this.sptInput1 = this.node.getChildByName("SptInput1").getComponent(cc.Sprite)
        this.sptInput2 = this.node.getChildByName("SptInput2").getComponent(cc.Sprite)
        this.sptInput3 = this.node.getChildByName("SptInput3").getComponent(cc.Sprite)
        this.sptInput4 = this.node.getChildByName("SptInput4").getComponent(cc.Sprite)
        this.sptInput5 = this.node.getChildByName("SptInput5").getComponent(cc.Sprite)
        this.sptInput6 = this.node.getChildByName("SptInput6").getComponent(cc.Sprite)

        this.editBoxCode = this.node.getChildByName("EditBoxCodeInput")

        this.sptLine1 = cc.find("SptInput1/SptLine", this.node)
        this.sptLine2 = cc.find("SptInput2/SptLine", this.node)
        this.sptLine3 = cc.find("SptInput3/SptLine", this.node)
        this.sptLine4 = cc.find("SptInput4/SptLine", this.node)
        this.sptLine5 = cc.find("SptInput5/SptLine", this.node)
        this.sptLine6 = cc.find("SptInput6/SptLine", this.node)

        this.lblCode1 = cc.find("SptInput1/LblCode", this.node)
        this.lblCode2 = cc.find("SptInput2/LblCode", this.node)
        this.lblCode3 = cc.find("SptInput3/LblCode", this.node)
        this.lblCode4 = cc.find("SptInput4/LblCode", this.node)
        this.lblCode5 = cc.find("SptInput5/LblCode", this.node)
        this.lblCode6 = cc.find("SptInput6/LblCode", this.node)

        this.lblPhoneNum = this.node.getChildByName("LblPhoneNum").getComponent(cc.Label)
        this.btnResend = this.node.getChildByName("BtnResend")

        this.phoneInfo = "已发送至: " + this.initParam.phone.substring(0,3) + " " + this.initParam.phone.substring(3,7) + " " + this.initParam.phone.substring(7,11) + "    "

        this.initEvent()
        this.initButton()
        this.initView()
    }

    initEvent() {
        izx.on(PHONE_EVENT.SEND_CODE_SUCCESS, this.sendCodeSuccess, this)
        izx.on(PHONE_EVENT.SEND_CODE_FAIL, this.sendCodeFail, this)
    }

    initButton() {
        izx.bindButtonClick("SptClose/BtnClose", this.node, () => {
            this.node.runAction(cc.sequence(
                cc.moveTo(0.2, new cc.Vec2(this.node.width, 0)),
                cc.callFunc(() => {
                    this.pop()
                }),
            ))
            if (this.initParam && this.initParam.callback) {
                this.initParam.callback()
            }
        })

        izx.bindButtonClick("BtnResend", this.node, () => {
            console.log('Get verify code button clicked!');
            //启动验证码倒计时，按钮置灰
            this.resetTimeSchedule();
            this.btnResend.active = false
            this.lblPhoneNum.string = this.phoneInfo + this.countdown + "s"
            this.schedule(this.getVerifyCodeScheduleCallback, 1);

            //发送验证码请求
            izx.dispatchEvent(PHONE_EVENT.SEND_PHONE_CODE_REQ, {
                guid: izx.user.guid,
                phone: this.initParam.phone,
            })
        })

        izx.bindButtonClick("BtnFocus", this.node, () => {
            this.editBoxCode.getComponent(cc.EditBox).focus()
        })
    }

    initView() {
        //启动验证码倒计时，按钮置灰
        this.resetTimeSchedule();
        this.btnResend.active = false
        this.lblPhoneNum.string = this.phoneInfo + this.countdown + "s重发"
        this.schedule(this.getVerifyCodeScheduleCallback, 1);

        this.sptInput1.spriteFrame = this.sptCodeInput2
        this.sptLine1.active = true
        this.sptLine1.runAction(cc.repeatForever(
            cc.blink(1, 1),
        ))
        this.editBoxCode.on("text-changed", this.textChanged, this)
        this.editBoxCode.on("editing-did-began", this.editBegan, this)
        this.editBoxCode.on("editing-did-ended", this.editEnded, this)
        this.editBoxCode.getComponent(cc.EditBox).focus()

        izx.dispatchEvent(PHONE_EVENT.MOVE_POP)
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
    }

    textChanged(editbox) {
        if (cc.sys.platform == cc.sys.WECHAT_GAME && this.bFirst) {
            this.bFirst = false
            editbox.string = ""
        }
        let backspace = false // 删除回退验证码
        if (editbox.string.length < this.lastCodeLen) {
            backspace = true
        }
        this.lastCodeLen = editbox.string.length
        if (backspace) {
            if (editbox.string.length == 0) {
                this.lblCode1.getComponent(cc.Label).string = ""
                this.sptInput1.spriteFrame = this.sptCodeInput2
                this.sptLine1.active = true
                this.sptLine1.runAction(cc.repeatForever(
                    cc.blink(1, 1),
                ))

                this.sptInput2.spriteFrame = this.sptCodeInput1
                this.sptLine2.stopAllActions()
                this.sptLine2.active = false
            } else if (editbox.string.length == 1) {
                this.sptLine1.stopAllActions()
                this.sptLine1.active = false
                this.lblCode1.getComponent(cc.Label).string = editbox.string

                this.lblCode2.getComponent(cc.Label).string = ""
                this.sptInput2.spriteFrame = this.sptCodeInput2
                this.sptLine2.active = true
                this.sptLine2.runAction(cc.repeatForever(
                    cc.blink(1, 1),
                ))

                this.sptInput3.spriteFrame = this.sptCodeInput1
                this.sptLine3.stopAllActions()
                this.sptLine3.active = false
            } else if (editbox.string.length == 2) {
                this.sptLine2.stopAllActions()
                this.sptLine2.active = false
                this.lblCode2.getComponent(cc.Label).string = editbox.string.substring(1, 2)

                this.lblCode3.getComponent(cc.Label).string = ""
                this.sptInput3.spriteFrame = this.sptCodeInput2
                this.sptLine3.active = true
                this.sptLine3.runAction(cc.repeatForever(
                    cc.blink(1, 1),
                ))

                this.sptInput4.spriteFrame = this.sptCodeInput1
                this.sptLine4.stopAllActions()
                this.sptLine4.active = false
            } else if (editbox.string.length == 3) {
                this.sptLine3.stopAllActions()
                this.sptLine3.active = false
                this.lblCode3.getComponent(cc.Label).string = editbox.string.substring(2, 3)

                this.lblCode4.getComponent(cc.Label).string = ""
                this.sptInput4.spriteFrame = this.sptCodeInput2
                this.sptLine4.active = true
                this.sptLine4.runAction(cc.repeatForever(
                    cc.blink(1, 1),
                ))

                this.sptInput5.spriteFrame = this.sptCodeInput1
                this.sptLine5.stopAllActions()
                this.sptLine5.active = false
            } else if (editbox.string.length == 4) {
                this.sptLine4.stopAllActions()
                this.sptLine4.active = false
                this.lblCode4.getComponent(cc.Label).string = editbox.string.substring(3, 4)

                this.lblCode5.getComponent(cc.Label).string = ""
                this.sptInput5.spriteFrame = this.sptCodeInput2
                this.sptLine5.active = true
                this.sptLine5.runAction(cc.repeatForever(
                    cc.blink(1, 1),
                ))

                this.sptInput6.spriteFrame = this.sptCodeInput1
                this.sptLine6.stopAllActions()
                this.sptLine6.active = false
            } else if (editbox.string.length == 5) {
                this.sptLine5.stopAllActions()
                this.sptLine5.active = false
                this.lblCode5.getComponent(cc.Label).string = editbox.string.substring(5, 6)

                this.lblCode6.getComponent(cc.Label).string = ""
                this.sptInput6.spriteFrame = this.sptCodeInput2
                this.sptLine6.active = true
                this.sptLine6.runAction(cc.repeatForever(
                    cc.blink(1, 1),
                ))
            }
        } else {
            if (editbox.string.length == 1) {
                this.sptLine1.stopAllActions()
                this.sptLine1.active = false
                this.lblCode1.getComponent(cc.Label).string = editbox.string

                this.sptInput2.spriteFrame = this.sptCodeInput2
                this.sptLine2.active = true
                this.sptLine2.runAction(cc.repeatForever(
                    cc.blink(1, 1),
                ))
            } else if (editbox.string.length == 2) {
                this.sptLine2.stopAllActions()
                this.sptLine2.active = false
                this.lblCode2.getComponent(cc.Label).string = editbox.string.substring(1, 2)

                this.sptInput3.spriteFrame = this.sptCodeInput2
                this.sptLine3.active = true
                this.sptLine3.runAction(cc.repeatForever(
                    cc.blink(1, 1),
                ))
            } else if (editbox.string.length == 3) {
                this.sptLine3.stopAllActions()
                this.sptLine3.active = false
                this.lblCode3.getComponent(cc.Label).string = editbox.string.substring(2, 3)

                this.sptInput4.spriteFrame = this.sptCodeInput2
                this.sptLine4.active = true
                this.sptLine4.runAction(cc.repeatForever(
                    cc.blink(1, 1),
                ))
            } else if (editbox.string.length == 4) {
                this.sptLine4.stopAllActions()
                this.sptLine4.active = false
                this.lblCode4.getComponent(cc.Label).string = editbox.string.substring(3, 4)

                this.sptInput5.spriteFrame = this.sptCodeInput2
                this.sptLine5.active = true
                this.sptLine5.runAction(cc.repeatForever(
                    cc.blink(1, 1),
                ))
            } else if (editbox.string.length == 5) {
                this.sptLine5.stopAllActions()
                this.sptLine5.active = false
                this.lblCode5.getComponent(cc.Label).string = editbox.string.substring(4, 5)

                this.sptInput6.spriteFrame = this.sptCodeInput2
                this.sptLine6.active = true
                this.sptLine6.runAction(cc.repeatForever(
                    cc.blink(1, 1),
                ))
            } else if (editbox.string.length == 6) {
                this.lblCode1.getComponent(cc.Label).string = editbox.string.substring(0, 1)
                this.sptInput2.spriteFrame = this.sptCodeInput2
                this.lblCode2.getComponent(cc.Label).string = editbox.string.substring(1, 2)
                this.sptInput3.spriteFrame = this.sptCodeInput2
                this.lblCode3.getComponent(cc.Label).string = editbox.string.substring(2, 3)
                this.sptInput4.spriteFrame = this.sptCodeInput2
                this.lblCode4.getComponent(cc.Label).string = editbox.string.substring(3, 4)
                this.sptInput5.spriteFrame = this.sptCodeInput2
                this.lblCode5.getComponent(cc.Label).string = editbox.string.substring(4, 5)
                this.sptInput6.spriteFrame = this.sptCodeInput2

                this.sptLine6.stopAllActions()
                this.sptLine6.active = false
                this.lblCode6.getComponent(cc.Label).string = editbox.string.substring(5, 6)

                this.node.y = 0

                //发送绑定请求
                let msg = {
                    mid: Number(izx.mid),
                    pn: izx.packetName,
                    imei: izx.imei,
                    device: izx.device,
                    phone: this.initParam.phone,
                    phone_code: editbox.string,
                }
                if (this.initParam.bind) {
                    msg["guid"] = izx.user.guid
                } // 获取guid
                izx.dispatchEvent(PHONE_EVENT.PHONE_CODE_LOGIN_REQ, msg, () => {
                    this.pop()
                    izx.dispatchEvent(PHONE_EVENT.CLOSE_POP)
                })
            }
        }
    }

    resetTimeSchedule() {
        this.countdown = 60;
        this.unschedule(this.getVerifyCodeScheduleCallback);
    }

    resetBtnVerifyCode() {
        this.btnResend.active = true
    }

    getVerifyCodeScheduleCallback() {
        if (this.countdown === 0) {
            this.resetTimeSchedule();
            this.resetBtnVerifyCode();

            this.lblPhoneNum.string = this.phoneInfo
        } else {
            this.countdown -= 1;
            this.lblPhoneNum.string = this.phoneInfo + this.countdown + "s重发"
        }
    }
    
    sendCodeSuccess(res) {
    }

    sendCodeFail() {
        izx.dispatchEvent(PHONE_EVENT.SHOW_POP, "获取验证码失败，服务器未响应")
        this.resetTimeSchedule();
        this.resetBtnVerifyCode();
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
