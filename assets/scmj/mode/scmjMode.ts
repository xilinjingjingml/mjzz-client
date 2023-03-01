import BaseMode from "../../framework/base/baseMode"
import { izx } from "../../framework/izx"
import Constants from "../../common/constants"
import { SCMJ_EVENT } from "../scmjEvents"
import proto = require("../protos/pbScmj")
import { AdPos, AdState } from "../../ad/adConstants"
import { EAdsResult } from "../../framework/plugin/IPluginProxy"
import { AD_EVENT } from "../../ad/adEvents"
import Servers from "../../servers/servers"
import { ScmjAudioUtil } from "../scmjAudioUtil"

export default class ScmjMode extends BaseMode{
  mapChairUserData = {}
  mapUidUserData = {}
  serialId = 0
  completeNoti = null
  operateReq = null
  lackReq = null
  changeReq = null
  clientTimerNoti = null
  reconnect = false
  changeStartOid = ""
  // 是否自动准备
	needAutoReady: boolean = false
  // 是否切换过后台
  isGoBackground = false

  constructor() {        
    super()       
  }

  load() {
    this.autoRegHander()
    izx.setProto("scmj", proto)
    izx.on(Constants.EventName.PLUGIN_ADS_CALLBACK, this.onPluginAdsCallback, this)
    izx.on(SCMJ_EVENT.ENTER_SCMJ, this.afterEnterScmj, this)
    izx.on(SCMJ_EVENT.OPERATE_RSP, this.OperateRsp, this)
    izx.on(SCMJ_EVENT.LACK_RSP, this.LackRsp, this)
    izx.on(SCMJ_EVENT.CHANGE_RSP, this.ChangeRsp, this)
    izx.on(SCMJ_EVENT.BILL_REQ, this.BillReq, this)
    izx.on(SCMJ_EVENT.COMPLETE_REQ, this.CompleteReq, this)
    izx.on(SCMJ_EVENT.AUTO_REQ, this.AutoReq, this)
    izx.on(Constants.EventName.ROOM_JOIN_NOTIFY, this.IsReconnect, this)
    izx.on(Constants.EventName.ROOM_EXIT_GAME, this.onExitRoom, this)
    izx.on(SCMJ_EVENT.READY_REQ, this.ReadyReq, this)
    izx.on(SCMJ_EVENT.CHANGE_CARD_START_REQ, this.ChangeCardStartReq, this)
    izx.on(SCMJ_EVENT.TING_TIP_REQ, this.TingTipReq, this)
    izx.on(Constants.EventName.NEED_AUTO_READY, this.setAutoReady, this)
    izx.on(SCMJ_EVENT.RESET_USER_DATA, this.resetUserData, this)

    izx.on(Constants.EventName.BACKGROUND, () => {
      this.isGoBackground = true
    }, this)
  }

  unLoad() {
    izx.offByTag(this)
    izx.unsetProto("scmj")
  }

  onPluginAdsCallback(msg) {
    izx.log("ScmjMode onPluginAdsCallback")

    if (msg == null) {
      return
    }
    let adInfo = msg.adsInfo
    if (adInfo.adArea == AdPos.ChangeStartGame) {
      let callback = (order) => {
        this.ReadyReq(true)
        if (order && order.state == AdState.OrderFinish) {
          this.changeStartOid = order.id
        }
      }
      if (msg.AdsResultCode == EAdsResult.RESULT_CODE_REWARTVIDEO_SUCCEES) {
        izx.dispatchEvent(AD_EVENT.UPDATE_AD_ORDER_REQ, {oid: adInfo.adOid, state: AdState.OrderFinish, callback: callback})
      } else if (msg.AdsResultCode == EAdsResult.RESULT_CODE_REWARTVIDEO_FAIL){
        izx.log("ad play fail msg = ", msg.msg)
        izx.dispatchEvent(AD_EVENT.UPDATE_AD_ORDER_REQ, {oid: adInfo.adOid, state: AdState.OrderCancel, callback: callback})
      }
    }
  }

  setAutoReady(ready) {
    this.needAutoReady = ready
  }

  resetSavedMsg() {
    this.completeNoti = null
    this.operateReq = null
    this.lackReq = null
    this.changeReq = null
    this.clientTimerNoti = null
  }

  onExitRoom(msg) {
    this.resetUserData()
    this.reconnect = false
    this.resetSavedMsg()
  }

  IsReconnect(msg) {
    izx.log("IsReconnect msg = ", JSON.stringify(msg))
    if (msg && msg.reconnect) {
      this.reconnect = true
    } else {
      this.reconnect = false
    }
  }

  afterEnterScmj() {
    izx.log("afterEnterScmj")
    izx.log("this.mapChairUserData = ", JSON.stringify(this.mapChairUserData))
    izx.log("this.mapUidUserData = ", JSON.stringify(this.mapUidUserData))

    izx.dispatchEvent(SCMJ_EVENT.INIT_USER_DATA, {
      mapChairUserData: this.mapChairUserData, 
      mapUidUserData: this.mapUidUserData
    })
    
    if (this.reconnect && this.completeNoti == null) {
      this.CompleteReq()
    } else {
      let haveReq = false
      if (this.completeNoti) {
        izx.dispatchEvent(SCMJ_EVENT.COMPLETE_NOTI, this.completeNoti)
        this.completeNoti = null
      }
      if (this.operateReq) {
        haveReq = true
        izx.dispatchEvent(SCMJ_EVENT.OPERATE_REQ, this.operateReq)
        this.operateReq = null
      }
      if (this.lackReq) {
        haveReq = true
        izx.dispatchEvent(SCMJ_EVENT.LACK_REQ, this.lackReq)
        this.lackReq = null
      }
      if (this.changeReq) {
        haveReq = true
        izx.dispatchEvent(SCMJ_EVENT.CHANGE_REQ, this.changeReq)
        this.changeReq = null
      }
      if (this.clientTimerNoti && haveReq) {
        izx.dispatchEvent(SCMJ_EVENT.CLIENT_TIMER_NOTI, this.clientTimerNoti)
        this.clientTimerNoti = null
      }
    }
  }

  resetUserData(msg = null) {
    izx.log("resetUserData = ", msg)
    if (msg && !msg.bExit) {
      for(let key in this.mapChairUserData) {
        let item = this.mapChairUserData[key]
        let uid = item.data.uid
        if (uid != izx.user.uid) {
          delete this.mapChairUserData[key]
          delete this.mapUidUserData[uid]
          izx.dispatchEvent(SCMJ_EVENT.EXIT_NOTI, {
            uid: uid,
            chairId: key
          })
        }
      }
    } else {
      this.mapChairUserData = {}
      this.mapUidUserData = {}
    }
  }

  ReadyReq(ready) {
    izx.log("ReadyReq")
    if (Servers.getInstance()._room.InLobby()) {
      this.needAutoReady = true
      izx.dispatchEvent(Constants.EventName.ROOM_READY_TO_GAME)
    } else if (Servers.getInstance()._room.InTable()) {
      izx.notify("mjzz-server-game-srv.Mahjong.Ready", "ReadyReq" ,{
        isReady: ready
      })
    } else {
        izx.log("=======Other State=======", Servers.getInstance()._room._fsm.getState())
    }
  }

  OperateRsp(msg) {
    msg.serialId = this.serialId
    izx.notify("mjzz-server-game-srv.Scmj.Operate", "OperateRsp", msg)
  }

  ReadyRspHandler(rsp) {
    izx.log("ReadyRspHandler rsp = ", rsp)
    rsp = rsp.packet
    // if (rsp.errCode !== 0) {
    //   izx.dispatchEvent(Constants.EventName.COMMON_ERR_INFO, {code: rsp.errCode, msg: rsp.errMsg})
    //   izx.dispatchEvent(SCMJ_EVENT.READY_RSP, rsp)
    //   return
    // }
    for(let key in this.mapChairUserData) {
      let item = this.mapChairUserData[key]
      let uid = item.data.uid
      if (uid == izx.user.uid) {
        item.ready = 1
        break
      }
    }
    izx.dispatchEvent(SCMJ_EVENT.READY_RSP, rsp)
    this.checkAllReady()
  }

  ReadyNotHandler(noti) {
    izx.log(noti)
    noti = noti.packet
    let userData = this.mapUidUserData[noti.uid]
    if (userData) {
      userData.ready = noti.isReady ? 1 : 2
      noti.chairId = userData.chairId
      noti.ready = noti.isReady ? 1 : 2
      izx.dispatchEvent(SCMJ_EVENT.READY_NOTI, noti)
      if (noti.ready) {
        izx.dispatchEvent(SCMJ_EVENT.SHOW_HEAD, {uid: noti.uid})
        if (izx.isInGameScene) {
          ScmjAudioUtil.playSound("audio_ready")
        }
      }
    }
    this.checkAllReady()
  }

  EnterAckHandler(ack) {
    izx.log("EnterAckHandler = ",JSON.stringify(ack))
    ack = ack.packet
    if (ack.ret == 0) {
      this.resetUserData()
      ack.items.forEach(item => {
        this.mapChairUserData[item.chairId] = item
        this.mapUidUserData[item.data.uid] = item
      });
    }
    izx.dispatchEvent(SCMJ_EVENT.ENTER_ACK, ack)
    izx.dispatchEvent(SCMJ_EVENT.INIT_USER_DATA, {
      mapChairUserData: this.mapChairUserData, 
      mapUidUserData: this.mapUidUserData
    })
    this.resetSavedMsg()
    if (this.needAutoReady) {
      izx.dispatchEvent(SCMJ_EVENT.READY_REQ, { isReady: true })
    }
    this.needAutoReady = false
    if (this.isGoBackground) {
      izx.emit(SCMJ_EVENT.COMPLETE_REQ)
    }
  }

  EnterNotiHandler(noti) {
    izx.log("EnterNotiHandler noti = ", JSON.stringify(noti))
    noti = noti.packet
    let item = noti.item
    if (!item) {
      return
    }
    this.mapChairUserData[item.chairId] = item
    this.mapUidUserData[item.data.uid] = item
    izx.dispatchEvent(SCMJ_EVENT.ENTER_NOTI, noti)
    if (izx.isInGameScene) {
      ScmjAudioUtil.playSound("audio_player_enter")
    }
  }

  ExitRoomNotHandler(noti) {
    izx.log(noti)
    noti = noti.packet
    if (noti.uid == izx.user.uid) {
      izx.log("this.mapChairUserData1 = ", this.mapChairUserData)
      for(let key in this.mapChairUserData) {
        let item = this.mapChairUserData[key]
        let uid = item.data.uid
        if (uid != noti.uid) {
          delete this.mapChairUserData[key]
          delete this.mapUidUserData[uid]
          izx.dispatchEvent(SCMJ_EVENT.EXIT_NOTI, {
            uid: uid,
            chairId: key
          })
        }
      }
      izx.log("this.mapChairUserData2 = ", this.mapChairUserData)
      if (this.mapUidUserData[noti.uid]) {
        this.mapUidUserData[noti.uid].ready = 2
      }
      return 
    }
    if (this.mapUidUserData[noti.uid]) {
      delete this.mapUidUserData[noti.uid]
      for(let key in this.mapChairUserData) {
        let item = this.mapChairUserData[key]
        if (item.data.uid == noti.uid) {
          delete this.mapChairUserData[key]
          noti.chairId = Number(key)
          break
        }
      }
      izx.dispatchEvent(SCMJ_EVENT.EXIT_NOTI, noti)
      if (izx.isInGameScene) {
        ScmjAudioUtil.playSound("audio_player_leave")
      }
    }
  }

  BeginGameNotiHandler(noti) {
    this.resetSavedMsg()
    noti = noti.packet
    // 重置准备状态
    for(let key in this.mapChairUserData) {
      let item = this.mapChairUserData[key]
      item.ready = 2
    }
    ScmjAudioUtil.playSound("audio_duijukaishi")
    izx.dispatchEvent(SCMJ_EVENT.BEGIN_GAME_NOTI, noti)
    this.ChangeCardStartReq()
    console.log("izx.user.totalJu = ", izx.user.totalJu)
    if (izx.user.totalJu == 0) {
      izx.dispatchEvent(Constants.EventName.KUAISHOU_CALLBACK, {type:1})
    }
  }

  SetBankerNotiHandler(noti) {
    noti = noti.packet
    izx.dispatchEvent(SCMJ_EVENT.SET_BANKER_NOTI, noti)
  }

  UpdateCardsNotiHandler(noti) {
    noti = noti.packet
    izx.dispatchEvent(SCMJ_EVENT.UPDATE_CARDS_NOTI, noti)
  }

  OperateNotiHandler(noti) {
    noti = noti.packet
    izx.dispatchEvent(SCMJ_EVENT.OPERATE_NOTI, noti)
  }

  OperateReqHandler(req) {
    req = req.packet
    this.serialId = req.serialId
    if (izx.isInGameScene) {
      izx.dispatchEvent(SCMJ_EVENT.OPERATE_REQ, req)
    } else {
      this.operateReq = req
    }
    this.changeStartOid = ""
  }

  ClientTimerNotiHandler(noti) {
    noti = noti.packet
    izx.dispatchEvent(SCMJ_EVENT.CLIENT_TIMER_NOTI, noti)
  }

  ResultNotiHandler(noti) {
    this.resetSavedMsg()// 重置准备状态
    for(let key in this.mapChairUserData) {
      let item = this.mapChairUserData[key]
      item.ready = 2
    }

    noti = noti.packet
    izx.dispatchEvent(SCMJ_EVENT.RESULT_NOTI, noti)
  }

  LackReqHandler(req) {
    req = req.packet
    if (izx.isInGameScene) {
      izx.dispatchEvent(SCMJ_EVENT.LACK_REQ, req)
    } else {
      this.lackReq = req
    }
  }

  LackRsp(lack) {
    izx.notify("mjzz-server-game-srv.Scmj.Lack", "LackRsp" ,{
      lack: lack
    })
  }

  LackNotiHandler(noti) {
    noti = noti.packet
    izx.dispatchEvent(SCMJ_EVENT.LACK_NOTI, noti)
  }

  MjPlayMarkNotiHandler(noti) {
    noti = noti.packet
    izx.dispatchEvent(SCMJ_EVENT.MJ_PLAY_MARK_NOTI, noti)
  }

  BillReq() {
    izx.notify("mjzz-server-game-srv.Scmj.Bill", "BillReq" ,{})
  }

  BillRspHandler(rsp) {
    rsp = rsp.packet
    izx.dispatchEvent(SCMJ_EVENT.BILL_RSP, rsp)
  }

  ScoreChangeNotiHandler(noti) {
    noti = noti.packet
    izx.dispatchEvent(SCMJ_EVENT.SCORE_CHANGE_NOTI, noti)
  }

  CompleteReq() {
    izx.notify("mjzz-server-game-srv.Scmj.Complete", "CompleteReq" ,{})
  }

  CompleteNotiHandler(noti) {
    noti = noti.packet
    this.resetUserData()
    this.clientTimerNoti = {}
    noti.baseItems.forEach(item => {
      this.mapChairUserData[item.chairId] = item
      this.mapUidUserData[item.data.uid] = item
      if (item.data.uid == izx.user.uid) {
        this.clientTimerNoti.chairId = item.chairId
        this.clientTimerNoti.second = 3
        this.clientTimerNoti.remainCardNum = noti.remainCardNum
      }
    });
    if (izx.isInGameScene) {
      izx.dispatchEvent(SCMJ_EVENT.INIT_USER_DATA, {
        mapChairUserData: this.mapChairUserData, 
        mapUidUserData: this.mapUidUserData
      })
      
      izx.dispatchEvent(SCMJ_EVENT.COMPLETE_NOTI, noti)
      this.clientTimerNoti = null
    } else {
      this.completeNoti = noti
    }
  }

  AutoReq(msg) {
    izx.notify("mjzz-server-game-srv.Scmj.Auto", "AutoReq" ,msg)
  }

  AutoNotiHandler(noti) {
    noti = noti.packet
    izx.dispatchEvent(SCMJ_EVENT.AUTO_NOTI, noti)
  }

  ChangeReqHandler(req) {
    req = req.packet
    if (izx.isInGameScene) {
      izx.dispatchEvent(SCMJ_EVENT.CHANGE_REQ, req)
    } else {
      this.changeReq = req
    }
  }

  ChangeRsp(rsp) {
    izx.notify("mjzz-server-game-srv.Scmj.Change", "ChangeRsp", rsp)
  }

  ChangeNotiHandler(noti) {
    noti = noti.packet
    izx.dispatchEvent(SCMJ_EVENT.CHANGE_NOTI, noti)
  }

  ChangeCardStartReq() {
    if (this.changeStartOid.length > 0) {
      izx.notify("mjzz-server-game-srv.Scmj.ChangeCardStart", "ChangeCardStartReq" ,{
        oid: this.changeStartOid
      })
    }
  }

  TingTipReq() {
    izx.notify("mjzz-server-game-srv.Scmj.TingTip", "TingTipReq" ,{})
  }

  TingTipRspHandler(msg) {
    izx.log("TingTipRspHandler msg = ", msg)
    msg = msg.packet
    if (msg.tingCards.length > 0) {
      izx.dispatchEvent(SCMJ_EVENT.SHOW_TING_TIP, {tingCards: msg.tingCards})
    }
  }

  TingNotiHandler(msg) {
    izx.log("TingNotiHandler msg = ", msg)
    msg = msg.packet
    let isShow = msg.isTing == 1 ? true : false 
    izx.dispatchEvent(SCMJ_EVENT.SHOW_AUTO_HU, {isShow: isShow, fromServer: true})
  }

  UpdateItemNotHandler(msg) {
    izx.log("UpdateItemNotHandler msg = ", msg)
    msg = msg.packet
    if (msg && msg.update.length>0) {
      for (let item of msg.update) {
        if (item.id == 0) {
          izx.dispatchEvent(SCMJ_EVENT.UPDATE_HEAD_SCORE, {chairId: 1, money: item.num})
          break
        }
      }
    }
  }

  checkAllReady() {
    izx.log("checkAllReady this.mapChairUserData = ", JSON.stringify(this.mapChairUserData))
    let readyNum = 0
    for(let key in this.mapChairUserData) {
      let item = this.mapChairUserData[key]
      if (item.ready == 1) {
        readyNum += 1
      }
    }
    izx.log("readyNum = ", readyNum)
    if (readyNum == 4) {
      izx.dispatchEvent(SCMJ_EVENT.SHOW_MATCHING, {bShow: false})
    }
  }
}