import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import Constants from "../../common/constants";
import LobbyRoom from "./lobbyRoom";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyGuide extends BaseUi {
    @property(cc.Prefab)
    prefabRoom = null
    @property(cc.Node)
    ndGirl = null
    @property(cc.Node)
    upArea = null

    @property(cc.Node)
    sptMaskTask = null
    @property(cc.Node)
    sptMaskActivity = null
    @property(cc.Node)
    sptBlack = null
    @property(cc.Node)
    sptMaskQuickStart = null

    @property(cc.Node)
    btnQuickStart = null

    curStep = 1

  onOpen() {
    izx.log("LobbyGuide onOpen")

    this.rigisterTouchEvent();
    this.initEvent()
    this.updateRooms()
  }

  initEvent() {
    izx.on(Constants.EventName.SERVER_UPDATE, this.updateRooms, this)
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

  updateRooms() {
    let xlch = izx.dataMgr.getServerList("xlch")
    if (!xlch) {
      return
    }
    // this.gameId = xlch.id
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
        node.getChildByName("BtnRoom").getComponent(cc.Button).interactable = false
        let room = <LobbyRoom>node.getComponent("lobbyRoom")
        room.setServerParams(xlch.id, xlch.type)
        room.initRoom(v, this.ndGirl)
        node.parent = parent
      }
    })
  }

  onBtnNext() {
    izx.audioMgr.playBtn()
      cc.find("SptRole/LblDesc" + this.curStep, this.node).active = false
      this.curStep += 1
      cc.find("SptRole/LblDesc" + this.curStep, this.node).active = true

      let nodeStep = this.node.getChildByName("NodeStep" + this.curStep)
      let sptRole = this.node.getChildByName("SptRole")
      sptRole.x = nodeStep.x
      sptRole.y = nodeStep.y

      switch (this.curStep) {
        case 2:
            cc.find("NodeTopArea/NodeJbArea", this.node).active = true
            cc.find("NodeTopArea/NodeJbArea/BtnJb", this.node).getComponent(cc.Button).interactable = false
            cc.find("NodeTopArea/NodeZsArea", this.node).active = true
            cc.find("NodeTopArea/NodeZsArea/BtnZs", this.node).getComponent(cc.Button).interactable = false
            break
        case 3:            
            cc.find("NodeTopArea/NodeJbArea", this.node).active = false
            cc.find("NodeTopArea/NodeZsArea", this.node).active = false
            
            cc.find("NodeTopArea/NodeHeadArea", this.node).active = true
            cc.find("NodeTopArea/NodeHeadArea/BtnGrxx", this.node).getComponent(cc.Button).interactable = false
            break
        case 4:
            cc.find("NodeTopArea/NodeHeadArea", this.node).active = false            

            this.sptMaskTask.active = true
            this.sptMaskActivity.active = true
            this.sptBlack.active = false
            break
        case 5:
            this.sptMaskTask.active = false
            this.sptMaskActivity.active = false
            this.sptBlack.active = true
            this.upArea.active = true
            break
        case 6:
            cc.find("SptRole/BtnNext", this.node).active = false
            cc.find("SptRole/DragonBones", this.node).active = false

            this.sptBlack.active = false
            this.upArea.active = false
            this.sptMaskQuickStart.active = true
            this.btnQuickStart.active = true
            break
        default:
            break;
    }
  }

  onBtnQuickStart() {
    izx.log("onBtnQuickStart")
    izx.audioMgr.playBtn()
    izx.setData(izx.imei + "lobby_guide_end", true, true)
    izx.dispatchEvent(Constants.EventName.QUICK_START_GAME)
    this.pop()
  }
}
