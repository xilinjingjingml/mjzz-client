import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import Constants from "../../common/constants";
import {LOBBY_SCENE_EVENT} from "../evnets_lobby_scene";
import {COMMON_CONSTANT} from "../../common/constants";
import LobbyRoom from "./lobbyRoom";
import { AD_EVENT } from "../../ad/adEvents";
import {AdPos} from "../../ad/adConstants";
import {LOBBY_CONSTANT} from "../constants_lobby_scene";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyScene extends BaseUi {
  @property(cc.Prefab)
  prefabRoom = null
  @property(cc.Node)
  ndGirl = null

  nodeCenterArea: cc.Node = null;
  nodeBottomArea: cc.Node = null;

  btnVip: cc.Node = null; // vip按钮
  btnYxl: cc.Node = null; // 新手礼
  btnSVip: cc.Node = null; // 升vip按钮
  btnQd: cc.Node = null; // 签到按钮
  btnZp: cc.Node = null // 转盘

  btnRw: cc.Node = null; // 任务按钮
  btnHd: cc.Node = null; // 活动按钮
  btnKf: cc.Node = null; // 客服按钮
  btnSz: cc.Node = null; // 设置按钮

  sptTip1: cc.Node = null
  lblTip1: cc.Node = null
  sptTip2: cc.Node = null
  lblTip2: cc.Node = null
  playingAni: boolean = true
  bPreLoadPic: boolean = true

  gameId: string = "mjzz-server-game-srv"

  onResume() {
    izx.log("==LobbyScene onResume==")
    izx.pluginMgr.logEvent("LobbyScene_onOpen", {"openType": "2"})
  }

  onPause() {
    izx.log("==LobbyScene onPause==")
  }

  onOpen() {
    izx.log("LobbyScene onOpen")
    this.gameId = izx.urlParams["game"] || this.gameId

    this.btnVip = cc.find("NodeCenterArea/NodeTop/BtnVip", this.node);
    this.btnYxl = cc.find("NodeCenterArea/NodeTop/BtnYxl", this.node);
    this.btnSVip = cc.find("NodeCenterArea/NodeTop/BtnSVip", this.node);
    this.btnQd = cc.find("NodeCenterArea/NodeTop/BtnQd", this.node);
    this.btnZp = cc.find("NodeCenterArea/NodeTop/BtnZp", this.node)
    this.btnRw = cc.find("NodeBottomArea/BtnRw", this.node);
    this.btnHd = cc.find("NodeBottomArea/BtnHd", this.node);
    this.btnKf = cc.find("NodeBottomArea/BtnKf", this.node);
    this.btnSz = cc.find("NodeBottomArea/BtnSz", this.node);
    this.sptTip1 = this.node.getChildByName("SptTip1")
    this.lblTip1 = this.sptTip1.getChildByName("LblTip")
    this.sptTip2 = this.node.getChildByName("SptTip2")
    this.lblTip2 = this.sptTip2.getChildByName("LblTip")

    this.rigisterTouchEvent();
    this.initEvent()
    this.initButton()
    this.refreshVipLevel()
    this.updateRooms()
    this.updateBtnQuickStartDesc()
    this.refreshBtnYxl()
    izx.audioMgr.playLobby()

    if (this.initParam) {
      this.showAwardsTip(this.initParam)
    }
    this.updateSVipAwardNot()
    izx.pluginMgr.logEvent("LobbyScene_onOpen", {"openType": "1"})
    
    let lobby_guide_end = izx.getData(izx.imei + "lobby_guide_end")
    if (!lobby_guide_end) {
      izx.dispatchEvent(Constants.EventName.LOBBY_SHOW_GUIDE)
    }
  }

  initEvent() {
    izx.on(Constants.EventName.REFRESH_ITEM_VIP, this.refreshVipLevel, this)
    izx.on(Constants.EventName.SERVER_UPDATE, this.updateRooms, this)
    izx.on(Constants.EventName.REFRESH_ITEM_JINBI, this.updateBtnQuickStartDesc, this)
    izx.on(LOBBY_SCENE_EVENT.AWARDS_TIP_NOT, this.showAwardsTip, this)
    izx.on(AD_EVENT.GET_AD_SPOT_ACK, this.updateSVipAwardNot, this)
    izx.on(Constants.EventName.REFRESH_BTN_YXL, this.refreshBtnYxl, this)
  }

  initButton() {
    // 菜单按钮
    izx.bindButtonClick(this.btnVip, this.node, () => {
      izx.audioMgr.playBtn()
      izx.dispatchEvent(Constants.EventName.VIP_SHOW_MAIN)
    })
    izx.bindButtonClick(this.btnYxl, this.node, () => {
        izx.audioMgr.playBtn()
        izx.dispatchEvent(Constants.EventName.WELCOME_GIFT_SHOW_MAIN)
      })
    izx.bindButtonClick(this.btnSVip, this.node, () => {
      izx.audioMgr.playBtn()
      izx.dispatchEvent(Constants.EventName.SEND_VIP_SHOW_MAIN)
    })
    izx.bindButtonClick(this.btnQd, this.node, () => {
      izx.audioMgr.playBtn()
      izx.dispatchEvent(Constants.EventName.SIGN_SHOW_MAIN)
    })
    izx.bindButtonClick(this.btnRw, this.node, () => {
      izx.audioMgr.playBtn()
      izx.dispatchEvent(Constants.EventName.TASK_SHOW_MAIN)
    })
    izx.bindButtonClick(this.btnHd, this.node, () => {
      izx.audioMgr.playBtn()
      izx.dispatchEvent(Constants.EventName.ACTIVITY_SHOW_MAIN)
    })
    izx.bindButtonClick(this.btnKf, this.node, () => {
      izx.audioMgr.playBtn()
      if (CC_JSB) {
        izx.pluginMgr.openKeFu()
      } else {
        izx.dispatchEvent(Constants.EventName.SHOW_KEFU)
      }
    })
    izx.bindButtonClick(this.btnSz, this.node, () => {
      izx.audioMgr.playBtn()
      izx.dispatchEvent(Constants.EventName.SHOW_SETTING)
    })
    izx.bindButtonClick(this.btnZp, this.node, () => {
      izx.audioMgr.playBtn()
      izx.dispatchEvent(Constants.EventName.LOTTERY_SHOW_MAIN)
    })
  }

  rigisterTouchEvent() {
    console.log('rigisterTouchEvent');
    let bg = this.node.getChildByName("Bg")
    bg.on(cc.Node.EventType.TOUCH_START, (event) => {
    }, this);
    bg.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
    }, this);
    bg.on(cc.Node.EventType.TOUCH_END, (event) => {
    }, this);
    bg.on(cc.Node.EventType.TOUCH_CANCEL, (event) => {
    }, this);
  }

  refreshVipLevel() {
    let vipLevel = izx.item.getItemNum(COMMON_CONSTANT.ITEM_VIP)
    if (vipLevel <= 0 || vipLevel > 10) {
      vipLevel = 1
    }
    izx.loadPic("unires", "vip/" + vipLevel, (res) => {
      this.btnVip.getComponent(cc.Sprite).spriteFrame = res
    })
  }

  updateRooms() {
    let xlch = izx.dataMgr.getServerList("xlch")
    if (!xlch) {
      return
    }
    this.gameId = xlch.id
    let rooms = []
    let money = izx.user.money
    if (money < 100000) {
      rooms.push(xlch.xs)
      rooms.push(xlch.cj)
      rooms.push(xlch.zj)
      rooms.push(xlch.gj)
    } else if (money < 300000) {
      rooms.push(xlch.cj)
      rooms.push(xlch.zj)
      rooms.push(xlch.gj)
      rooms.push(xlch.jy)
    } else if (money < 1000000) {
      rooms.push(xlch.zj)
      rooms.push(xlch.gj)
      rooms.push(xlch.jy)
      rooms.push(xlch.ds)
    } else if (money < 6000000) {
      rooms.push(xlch.gj)
      rooms.push(xlch.jy)
      rooms.push(xlch.ds)
      rooms.push(xlch.th)
    // } else if (money < 30000000) {
    //   rooms.push(xlch.jy)
    //   rooms.push(xlch.ds)
    //   rooms.push(xlch.th)
    } else {
      rooms.push(xlch.jy)
      rooms.push(xlch.ds)
      rooms.push(xlch.th)
      rooms.push(xlch.zz)
    }
    let parent = cc.find("NodeCenterArea/NodeRight/UpArea", this.node);
    parent.removeAllChildren()
    rooms.forEach((v, i) => {
      if (v) {
        let node = <cc.Node>cc.instantiate(this.prefabRoom)
        let room = <LobbyRoom>node.getComponent("lobbyRoom")
        room.setServerParams(xlch.id, xlch.type)
        room.initRoom(v, this.ndGirl)
        node.parent = parent
      }
    })
    
    if (this.bPreLoadPic) {
      this.bPreLoadPic = false
      this.scheduleOnce(() => {
        let bQd = false // 检查是否没领取签到奖励
        let bYxl = false // 检查是否没领取迎新礼
        let bBcs = false // 检查是否没领取拜财神
        this.initParam.forEach((v) => {
          if (v.target == "btnQd" && v.haveRewards) {
            bQd = true
          } else if (v.target == "btnYxl" && v.haveRewards) {
            bYxl = true
          } else if (v.target == "btnHd" && v.haveRewards) {
            bBcs = true
          }
        })
        let yxl_end = izx.getData(izx.user.guid+"_yxl_end")
        if (!yxl_end) {
          izx.dispatchEvent(Constants.EventName.PRE_LOAD_GIFT_PIC, bYxl, bQd, bBcs)
        } else {
          izx.dispatchEvent(Constants.EventName.PRE_LOAD_SIGN_PIC, bQd, bBcs)
        }
      }, 1)
    }
  }

  onBtnQuickStart() {
    izx.log("onBtnQuickStart")
    izx.audioMgr.playBtn()
    izx.dispatchEvent(Constants.EventName.QUICK_START_GAME)
  }

  updateBtnQuickStartDesc() {
    izx.log("updateBtnQuickStartDesc")
    let xlch = izx.dataMgr.getServerList("xlch")
    if (!xlch) {
      return
    }
    let server = izx.dataMgr.getBestServer(xlch, izx.user.money)
    if (!server) {
      return
    }
    let tip = cc.find("NodeCenterArea/NodeLeft/BtnStart/LblTip", this.node)
    tip.getComponent(cc.Label).string = xlch.name + server.name
  }

  onBtnRule() {
    izx.log("onBtnRule")
    izx.audioMgr.playBtn()
    izx.dispatchEvent(Constants.EventName.SHOW_RULE)
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  showAwardsTip(msg) {
    // 显示隐藏小红点
    msg.forEach((v) => {
      if (this[v.target]) {
        this[v.target].getChildByName("SptRedDot").active = v.haveRewards
      }
    })

    if (!this.playingAni) {
      return
    }
    this.playingAni = false

    // 显示tips
    let obj = msg[this.random(0, msg.length)]
    if (!obj) {
      return
    }
    let curLblTip = this["lblTip" + obj.style]
    let curSptTip = this["sptTip" + obj.style]
    if (obj.haveRewards && this[obj.target]) {
      curLblTip.getComponent(cc.Label).string = obj.desc
      let worldPos = this[obj.target].parent.convertToWorldSpaceAR(this[obj.target].position)
      let localPos = this.node.convertToNodeSpaceAR(worldPos)
      if (1 == obj.align) {
        curSptTip.setAnchorPoint(0, 0.5)
        curSptTip.setPosition(localPos.x + 35, localPos.y)
      } else if (2 == obj.tipsAlign) {
        curSptTip.setAnchorPoint(1, 0.5)
        curSptTip.setPosition(localPos.x - 35, localPos.y)
      } else {
        curSptTip.setAnchorPoint(0.2, 0)
        curSptTip.setPosition(localPos.x, localPos.y + this[obj.target].height / 2)
      }
      if (obj.flip) {
        curSptTip.scaleX = -1
        curLblTip.scaleX = -1
      } else {
        curSptTip.scaleX = 1
        curLblTip.scaleX = 1
      }
      curSptTip.active = true
      curSptTip.runAction(cc.sequence(
          cc.fadeIn(0.5).easing(cc.easeBackOut()),
          cc.delayTime(4),
          cc.fadeOut(0.5),
          cc.delayTime(1),
          cc.callFunc(() => {
            this.playingAni = true
            this.showAwardsTip(msg)
          }),
      ))
    } else {
      curSptTip.active = false
      this.scheduleOnce(() => {
        this.playingAni = true
        this.showAwardsTip(msg)
      }, 1)
    }
  }

  updateSVipAwardNot() {
    let adInfo = izx.ad.getAreaInfo(AdPos.Vip)
    izx.log("updateSVipAwardNot adInfo = ", adInfo)

    if (this.initParam) {
      if (adInfo && adInfo.curNum >= adInfo.maxNum) {
        this.initParam.forEach((v: any) => {
          if (v.target == "btnSVip") {
            v.haveRewards = false
          }
        })
      } else {
        let bExist = false
        this.initParam.forEach((v: any) => {
          if (v.target == "btnSVip") {
            bExist = true
          }
        })
        if (!bExist) {
          let SVipAwardNot = {
            haveRewards: true,
            target: "btnSVip",
            align: 0,
            desc: "VIP可以升级啦~",
            style: 2,
            flip: true,
          }
          this.initParam.push(SVipAwardNot)
        }
      }
      this.showAwardsTip(this.initParam)
    }
  }

  refreshBtnYxl() {
    let yxl_end = izx.getData(izx.user.guid+"_yxl_end")
    if (!yxl_end) {
      this.btnYxl.active = true
    } else {
      this.btnYxl.active = false
    }
  }
}
