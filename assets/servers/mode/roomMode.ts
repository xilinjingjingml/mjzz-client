import { izx } from "../../framework/izx"

import room = require("../protos/room")
import gameBase = require("../protos/gamebase")
import chess = require("../protos/chess")
import Constants from "../../common/constants"
import BaseMode from "../../framework/base/baseMode"
import { Fsm } from "../../framework/base/fsm"

const enum ROOM_STATUS{
  ROOM_NONE = 0,
  START_GAME = 1,
  CANCEL_GAME = 2,
  ENTER_ROOM = 3,
  LEAVE_ROOM = 4,
  STAET_GAME_NOTIFY = 5,

  SOCKET_CLOSE = 6,
  CONFIRM_ENTER = 7,
}

interface RoomInfo {
  gameId?: string
  metaData?: string
  roomId?: string 
  ruleId?: string
  serverId?: string

  ruleHead?: string
}

export default class RoomMode extends BaseMode {
  _fsm: Fsm = null
    
  constructor() {
    super()
    this.autoRegHander()

    // 设置proto协议
    izx.setProto("room", room)
    izx.setProto("gameBase", gameBase)
    izx.setProto("chess", chess)

    this._fsm = izx.createFsm("room")                        
    this._fsm.regState(ROOM_STATUS.START_GAME, [ROOM_STATUS.ROOM_NONE, ROOM_STATUS.LEAVE_ROOM], this._startGame.bind(this))
    // this._fsm.regState(ROOM_STATUS.STAET_GAME_NOTIFY, [ROOM_STATUS.ROOM_NONE, ROOM_STATUS.START_GAME], this._startGameNot.bind(this))
    this._fsm.regState(ROOM_STATUS.CONFIRM_ENTER, [ROOM_STATUS.ROOM_NONE, ROOM_STATUS.START_GAME, ROOM_STATUS.ENTER_ROOM,], this._confirmEnter.bind(this))
    this._fsm.regState(ROOM_STATUS.ENTER_ROOM, [ROOM_STATUS.ROOM_NONE, ROOM_STATUS.START_GAME, ROOM_STATUS.CONFIRM_ENTER], this._enterRoom.bind(this))
    this._fsm.regState(ROOM_STATUS.LEAVE_ROOM, [ROOM_STATUS.START_GAME, ROOM_STATUS.STAET_GAME_NOTIFY, ROOM_STATUS.ENTER_ROOM, ROOM_STATUS.CONFIRM_ENTER, ROOM_STATUS.ROOM_NONE], this._leaveRoom.bind(this))        
    this._fsm.regState(ROOM_STATUS.ROOM_NONE, [ROOM_STATUS.START_GAME, ROOM_STATUS.STAET_GAME_NOTIFY, ROOM_STATUS.LEAVE_ROOM], this._initRoom.bind(this))        
    this._fsm.regState(ROOM_STATUS.CANCEL_GAME, ROOM_STATUS.START_GAME, this._closeGame.bind(this))
    this._fsm.regState(ROOM_STATUS.SOCKET_CLOSE, [ROOM_STATUS.START_GAME, ROOM_STATUS.STAET_GAME_NOTIFY, ROOM_STATUS.ENTER_ROOM], this._closeGame.bind(this))
    this._fsm.initState(ROOM_STATUS.ROOM_NONE)
  }

  InTable() {
    izx.log("==State==", this._fsm.getState())
    return this._fsm.getState() === ROOM_STATUS.ENTER_ROOM
  }
  InLobby() {
    izx.log("==State==", this._fsm.getState())
    return this._fsm.getState() === ROOM_STATUS.ROOM_NONE
  }

  private _initRoom(msg) {
    izx.log("_initRoom msg = ", msg)
  }

  private _startGame(msg) {    
    izx.log("_startGame msg = ", msg)  
    izx.dispatchEvent(Constants.EventName.ROOM_READY_SUCC, msg)
  }

  // private _startGameNot(msg) {        
  //     izx.dispatchEvent(Constants.EventName.ROOM_JOIN_NOTIFY, msg)
  //     this.EnterRoomReq(msg)
  // }
  private _confirmEnter(msg) {
    izx.log("_confirmEnter msg = ", msg)  
    izx.dispatchEvent(Constants.EventName.ROOM_JOIN_NOTIFY, msg)
    this.EnterRoomReq(msg)
  }

  private _enterRoom(msg) {
    izx.log("_enterRoom msg = ", msg)  
    let room = msg.roomInfo as RoomInfo
    room.ruleHead = room.serverId + "." + room.ruleId
    izx.setData("room", room)
    izx.dispatchEvent(Constants.EventName.ROOM_ENTER_GAME, room)
    this.HeartBeatReq()
  }

  private _leaveRoom(msg) {
    izx.log("_leaveRoom msg = ", msg)  
    izx.dispatchEvent(Constants.EventName.ROOM_EXIT_GAME, msg)
    // izx.setData("room", null)
  }

  private _closeGame(msg) {
    izx.log("_closeGame msg = ", msg)  
    izx.dispatchEvent(Constants.EventName.ROOM_CANCEL_GAME, izx.getData("room"))
    // izx.setData("room", null)
  }

  EnterFromLobby(msg) {
    izx.log("EnterFromLobby msg = ", msg)  
    if (msg && msg.gameData && msg.gameData.roomId) {
      msg.gameData.reconnect = true
      this._fsm.updateState(ROOM_STATUS.CONFIRM_ENTER, msg.gameData)
    }
  }

  StartJoinRoomReq(msg) {
    izx.log("StartJoinRoomReq msg = ", msg)  
    this.resetState()
    
    if (!izx.isInGameScene) {
      izx.dispatchEvent(Constants.EventName.BLOCK_UI)
    }
    
    if (!msg || !msg.ruleId) {      
      let room = izx.getData("room")
      if (room && room.gameId && room.ruleId){
        msg = room
      } else {
        izx.logW("ruleId is null")
        return
      }
    }
    izx.notify("mcbeam-server-manager-srv.Room.StartGame", "StartJoinRoomReq", {
      uid: izx.user.uid,
      gameId: msg.gameId,
      ruleId: msg.ruleId,
    })
  }

  StartJoinRoomRspHandler(msg) {
    izx.log("StartJoinRoomRspHandler msg = ", JSON.stringify(msg))  
    msg = msg.packet
    if (msg.errCode && msg.errCode !== 0) {
      izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
      izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: msg.errCode, msg: msg.errMsg})
      this.ExitRoomReq({needReq: true})
      return
    }

    if (msg.gameData) {
      msg.gameData.reconnect = true
      this._fsm.updateState(ROOM_STATUS.CONFIRM_ENTER, msg.gameData)
    } else {
      this._fsm.updateState(ROOM_STATUS.START_GAME, msg)
    }
  }            

  StartJoinRoomNotHandler(msg) {
    izx.log("StartJoinRoomNotHandler msg = ", JSON.stringify(msg))  
    msg = msg.packet
    // if (msg.room) {
    //     this._fsm.updateState(ROOM_STATUS.STAET_GAME_NOTIFY, msg.room)
    // }
    this.EnterRoomConfirmReq(msg)
  }

  EnterRoomConfirmReq(msg) {
    izx.log("EnterRoomConfirmReq msg = ", msg)  
    if (!msg) {      
      izx.logW("ruleId is null")
      izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
      return
    }
    izx.notify("mcbeam-server-manager-srv.Room.EnterRoomConfirm", "EnterRoomConfirmReq", {
      confirmed: true
    })
  }

  EnterRoomConfirmRspHandler(msg) {
    izx.log("EnterRoomConfirmRspHandler msg = ", JSON.stringify(msg))  
    msg = msg.packet
    if (msg.errCode && msg.errCode !== 0) {
      izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
      izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: msg.errCode, msg: msg.errMsg})
      return
    }

    if (msg && msg.room)
      this._fsm.updateState(ROOM_STATUS.CONFIRM_ENTER, msg.room)
  }  

  EnterRoomReq(msg) {
    izx.log("EnterRoomReq msg = ", msg)  
    if (!msg || !msg.roomId) {
      izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
      return
    }
      
    if (!msg.roomId) {
      izx.logW("roomId is null")
      izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
      return
    }
    let room = izx.getData("room")
    if (!room) {
     izx.setData("room", msg)
    }
    izx.notify(msg.gameId + ".Base.EnterRoom", "EnterRoomReq", {
      uid: izx.user.uid,
      token: izx.user.token,
      roomId: msg.roomId,
    })
  }

  EnterRoomRspHandler(msg) {
    izx.log("EnterRoomRspHandler msg = ", JSON.stringify(msg))  
    msg = msg.packet
    if (msg.errCode && msg.errCode !== 0) {   
      izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
      if (msg.errCode == -3505 || msg.errCode == -3511) {
        if (!izx.isInGameScene) {
          izx.dispatchEvent(Constants.EventName.DEAL_WITH_MONEY, {callback: (isDeal) => {
            izx.log("DEAL_WITH_MONEY isDeal = ", isDeal)
          }})
        }
      } else {
        izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: msg.errCode, msg: msg.errMsg})
        this.ExitRoomReq({needReq: true})
      }       
      return
    } else {
      this._fsm.updateState(ROOM_STATUS.ENTER_ROOM, msg)
    }    
  }

  EnterRoomNotHandler(msg) {
    izx.log("EnterRoomNotHandler msg = ", msg)  
  }

  resetState(msg = null) {
    if (this.InLobby() && (!msg || !msg.backToLobby)) {
      izx.log("allready in lobby state")
    } else {
      this._fsm.updateState(ROOM_STATUS.LEAVE_ROOM, msg)
      this._fsm.updateState(ROOM_STATUS.ROOM_NONE)
    }
  }
      
  ExitRoomReq(msg = null) {
    izx.log("ExitRoomReq msg1 = ", msg)
    msg = msg ? msg : {}
    izx.log("ExitRoomReq msg2 = ", JSON.stringify(msg))
 
    let room = izx.getData("room")
    if (!room){
      this.resetState(msg)
      return
    }

    if (msg.needReq){
      izx.notify(room.gameId + ".Base.ExitRoom", "ExitRoomReq", {})
      izx.setData("room", null)
    } else if (msg.isReJoin) {
      izx.notify(room.gameId + ".Base.ExitRoom", "ExitRoomReq", {})
    }

    if (this._heartAction) {
      this._heartAction.stop()
    }

    this.resetState(msg)
  }
      
  ExitRoomRspHandler(msg) {
    izx.log("ExitRoomRspHandler msg = ", JSON.stringify(msg)) 
    msg = msg.packet
    if (msg.errCode && msg.errCode !== 0) {
        return
    }
    this._fsm.updateState(ROOM_STATUS.LEAVE_ROOM, {backToLobby: false})
    this._fsm.updateState(ROOM_STATUS.ROOM_NONE)
  }

  ExitRoomNotHandler(msg) {
    izx.log("ExitRoomNotHandler msg = ", msg) 
    msg = msg.packet
    let room = izx.getData("room")
    if (!room) {
      return
    }

    // 房间中间删除玩家信息
    if (msg.uid == izx.user.uid) {
      this.ExitRoomReq({ needReq: false })
    }

    izx.dispatchEvent(Constants.EventName.ROOM_LEAVE_NOT, msg)   
  }

  RoomListReq() {
    izx.log("RoomListReq ") 
    izx.notify("mcbeam-server-manager-srv.Room.GetRoomList", "RoomListReq", {})
  }

  RoomListRspHandler(msg) {
    izx.log("RoomListRspHandler msg = ", msg) 
    msg = msg.packet
    if (msg.errCode && msg.errCode !== 0) {
      izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: msg.errCode, msg: msg.errMsg})
      return
    }
    izx.dispatchEvent(Constants.EventName.ROOM_LIST_RSP, {list: msg.roomList})
  }

  _heartNode: cc.Node = null
  _heartAction: cc.Tween = null
  _heartLostTimer: number = 0
  getHeartNode() {
    if (!this._heartNode) {
      this._heartNode = cc.find("HeartTimer", cc.Camera.main.node)
      if (!this._heartNode) {
        this._heartNode = new cc.Node()
        this._heartNode.name = "HeartTimer"
        this._heartNode.parent = cc.Camera.main.node
      }
    }

    return this._heartNode
  }

  HeartBeatReq() {
    let room = izx.getData("room")
    if (!room)
      return
    izx.notify(room.gameId + ".Base.HeartBeat", "HeartBeatReq", {reqTime: Date.now()})
    if (this._heartAction) {
      this._heartAction.stop()
    }

    this._heartAction = cc.tween(this.getHeartNode())
    .delay(5)
    .call(() => {
      this._heartLostTimer ++ 
      if (this._heartLostTimer >= 3) {
          this.ExitRoomReq({needReq: false})
          return
      }
      this.HeartBeatReq()
    })
    .start()        
  }

  HeartBeatRspHandler(msg) {
    if (this._heartAction) {
      this._heartAction.stop()
    }

    this._heartAction = cc.tween(this.getHeartNode())
    .delay(5)
    .call(() => this.HeartBeatReq())
    .start()
  }    

  KickPlayerNotHandler(msg) {
    izx.log("KickPlayerNotHandler msg = ", msg) 
    this.ExitRoomReq({needReq: false})
  }

} 