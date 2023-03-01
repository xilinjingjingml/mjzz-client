/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangxinfeng
 * @Date: 2020-11-2 
 * @LastEditors: wangxinfeng
 * @LastEditTime: 2020-11-4
 */
import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import { SCMJ_EVENT } from "../scmjEvents";
import Constants from "../../common/constants";
import { OperatorCode, GameState } from "../scmjConstants";
import { scmjUtil } from "../scmjUtil";
import { ScmjAudioUtil } from "../scmjAudioUtil";
import { AD_EVENT } from "../../ad/adEvents";
import { AdPos } from "../../ad/adConstants";
import mjLayer from "./scmjLayer";
import TingTip from "./scmjTingTip";
import scmjResult from "./scmjResult";

const { ccclass, property } = cc._decorator;

@ccclass
export default class scmjMain extends BaseUi {

  @property(cc.Prefab)
  prefabUserHead: cc.Prefab = null
  @property(cc.Prefab)
  prefabBill: cc.Prefab = null
  @property(cc.Prefab)
  prefabResult: cc.Prefab = null
  @property(cc.Prefab)
  prefabTingTip: cc.Prefab = null
  @property(cc.Prefab)
  prefabGuideTip: cc.Prefab = null
  @property(cc.Node)
  selfHead: cc.Node = null
  @property(cc.Node)
  mjLayer: cc.Node = null
  @property(cc.Label)
  lblCardNum: cc.Label = null
  @property(cc.Label)
  lblGame: cc.Label = null
  @property(cc.Label)
  lblBet: cc.Label = null
  @property(cc.Button)
  btnTingTip: cc.Button = null
  @property(cc.Button)
  btnAutoHu: cc.Button = null
  @property(cc.Button)
  btnNoAutoHu: cc.Button = null
  @property(cc.Node)
  ndMatching: cc.Node = null

  mapNodePaths = {}
  // 根据本地座位号保存
  mapPlayers = {}
  // 根据服务器座位号保存
  mapChairUserData = {}
  mapUidUserData = {}
  // 账单页面
  billLayer = null
  // 结算页面
  resultLayer = null
  // 服务器信息
  serverInfo = null
  // 听牌提示页面
  tingTip = null

  chairId = -1
  uid = 0
  state = GameState.None
  matchingCount = 0

  onOpen() {
    izx.log("ScmjMain onOpen")
    super.onOpen()
    this.init()
    izx.isInGameScene = true
    izx.pluginMgr.logEvent("scmjMain_onOpen", {})
  }

  onClose() {
    izx.log("ScmjMain onClose")
    this.unscheduleAllCallbacks()
    ScmjAudioUtil.stopBackground()
    super.onClose()
    izx.isInGameScene = false
  }

  onDestroy() {
    super.onDestroy()
    izx.audioMgr.playLobby()
  }

  init() {
    izx.log("ScmjMain init")
    this.uid = izx.user.uid
    this.getComponent("scmjTouch").registerMainTouch()

    izx.on(SCMJ_EVENT.INIT_USER_DATA, this.initUserData, this)
    izx.on(SCMJ_EVENT.READY_RSP, this.readyRsp, this)
    izx.on(SCMJ_EVENT.READY_NOTI, this.readyNoti, this)
    izx.on(SCMJ_EVENT.ENTER_NOTI, this.enterNoti, this)
    izx.on(SCMJ_EVENT.EXIT_NOTI, this.exitNoti, this)
    izx.on(SCMJ_EVENT.SET_BANKER_NOTI, this.bankerNoti, this)
    izx.on(SCMJ_EVENT.UPDATE_CARDS_NOTI, this.updateCardsNoti, this)
    izx.on(SCMJ_EVENT.OPERATE_NOTI, this.operateNoti, this)
    izx.on(SCMJ_EVENT.OPERATE_REQ, this.operateReq, this)
    izx.on(SCMJ_EVENT.CLIENT_TIMER_NOTI, this.clientTimerNoti, this)
    izx.on(SCMJ_EVENT.RESULT_NOTI, this.resultNoti, this)
    izx.on(SCMJ_EVENT.LACK_NOTI, this.lackNoti, this)
    izx.on(SCMJ_EVENT.MJ_PLAY_MARK_NOTI, this.mjPlayMarkNoti, this)
    izx.on(SCMJ_EVENT.BEGIN_GAME_NOTI, this.onStartGameNoti, this)
    izx.on(SCMJ_EVENT.BILL_RSP, this.billRsp, this)
    izx.on(SCMJ_EVENT.SCORE_CHANGE_NOTI, this.scoreChangeNoti, this)
    izx.on(SCMJ_EVENT.EXIT_ROOM, this.exitRoom, this)
    izx.on(SCMJ_EVENT.COMPLETE_NOTI, this.completeNoti, this)
    izx.on(SCMJ_EVENT.AUTO_NOTI, this.autoNoti, this)

    izx.on(SCMJ_EVENT.SHOW_TING_TIP, this.showTingTip, this)
    izx.on(SCMJ_EVENT.SHOW_AUTO_HU, this.showAutoHu, this)
    izx.on(SCMJ_EVENT.SHOW_MATCHING, this.showMatching, this)
    izx.on(Constants.EventName.ROOM_EXIT_REQ, this.onRoomExitReq, this)
    izx.on(SCMJ_EVENT.SHOW_BTN_READY, this.showStartBtn, this)
    izx.on(Constants.EventName.UPDATE_BET, this.updateBet, this)
    izx.on(Constants.EventName.NO_FIT_SERVER, this.noFitServer, this)
    izx.on(SCMJ_EVENT.CHANEG_STATE, this.changeState, this)

    izx.on(Constants.EventName.BACKGROUND, () => {
      izx.dispatchEvent(SCMJ_EVENT.SHOW_MATCHING, {bShow: false})
    }, this)

    izx.on(izx.SOCKET_DISCONNECT, () => {
      izx.log("scmj SOCKET_DISCONNECT this.state = ", this.state)
      if (this.state != GameState.Game) {
        izx.dispatchEvent(SCMJ_EVENT.RESET_USER_DATA, {bExit: false})
        return
      }
    }, this)

    izx.on(Constants.EventName.FOREGROUND, () => {
      izx.log("scmj FOREGROUND this.state = ", this.state)
      if (this.state == GameState.Result || this.state == GameState.None) {
        if (!izx.socketIsReady()) {
          izx.dispatchEvent(Constants.EventName.ROOM_EXIT_REQ, {needReq: false})
        }
        return
      }
      
      this.scheduleOnce(() => {
        izx.log("scmj main scheduleOnce 1")
        if (izx.socketIsReady()) {
          if (this.state == GameState.Game) {
            izx.emit(SCMJ_EVENT.COMPLETE_REQ) 
          }else if (this.state == GameState.NormalReadyReq || this.state == GameState.ChangeReadyReq) {
            this.readyAndMatching()
          }
          return
        }

        izx.dispatchEvent(Constants.EventName.BLOCK_UI)
        // izx.dispatchEvent(SCMJ_EVENT.STATE_NONE, {})
        this.scheduleOnce(() => {
          izx.dispatchEvent(Constants.EventName.ROOM_EXIT_REQ, {needReq: false, isReJoin: true})
          this.scheduleOnce(() => {
            izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
            izx.dispatchEvent(Constants.EventName.ROOM_READY_TO_GAME)
            if (this.state == GameState.NormalReadyReq || this.state == GameState.ChangeReadyReq) {
              this.readyAndMatching()
            }
          }, 0.5)
        }, 1.5);
      }, 0.5)
    }, this)

    izx.bindButtonClick("CenterArea/BtnReady", this.node, (sender, data) => {  
      izx.log("BtnReady")
      izx.audioMgr.playBtn() 
      izx.dispatchEvent(SCMJ_EVENT.CHANEG_STATE, GameState.NormalReadyReq)
      this.showStartBtn(false)  
      izx.dispatchEvent(Constants.EventName.DEAL_WITH_MONEY, {callback: (isDeal) => {
        if (!isDeal) {
          this.readyAndMatching()
        } else {
          izx.dispatchEvent(SCMJ_EVENT.CHANEG_STATE, GameState.None)
        }
      }})        
    })

    izx.bindButtonClick("CenterArea/BtnChangeReady", this.node, (sender, data) => {   
      izx.log("BtnChangeReady")
      izx.dispatchEvent(SCMJ_EVENT.CHANEG_STATE, GameState.ChangeReadyReq)
      this.showStartBtn(false) 
      izx.audioMgr.playBtn()
      let callback = (ack) => {
        if (ack && ack.oid && ack.oid.length > 0) {
          izx.ad.showAd(AdPos.ChangeStartGame)
        } else {
          izx.log("change card start failed")
          this.readyAndMatching() 
        }
      }
      izx.dispatchEvent(Constants.EventName.DEAL_WITH_MONEY, {callback: (isDeal) => {
        if (!isDeal) {
          izx.dispatchEvent(AD_EVENT.INIT_AD_ORDER_REQ, {adPos: AdPos.ChangeStartGame, callback: callback})   
        } else {
          izx.dispatchEvent(SCMJ_EVENT.CHANEG_STATE, GameState.None)
        }
      }})     
    })

    izx.bindButtonClick("TopArea/BtnExit", this.node, (sender, data) => {
      izx.audioMgr.playBtn()
      this.exitRoom({})
    })

    izx.bindButtonClick("TopArea/BtnSetting", this.node, (sender, data) => {
      izx.audioMgr.playBtn()
      izx.dispatchEvent(Constants.EventName.SHOW_SETTING)
    })

    this.initMapNodePaths()
    this.showStartBtn(true)
    this.showAutoHu({isShow:false})
    this.updateBet(izx.dataMgr.getCurrentServer())
    if (this.serverInfo) {
      this.lblGame.string = this.serverInfo.game + this.serverInfo.name
      this.lblBet.string = "底分：" + this.serverInfo.bet + "分"
    }
    izx.dispatchEvent(SCMJ_EVENT.ENTER_SCMJ, {})
    // bgm
    ScmjAudioUtil.playBackground()

    // 新手引导
    this.popGuideTip() 
  }

  popGuideTip() {
    let bGuide = izx.getData("scmjPopGuideTip_" + izx.user.uid)
    if (!bGuide) {
      izx.pushDialog("scmj", "prefabs/GuideTip")
    }
  }

  changeState(state) {
    this.state = state
  }

  noFitServer(msg) {
    izx.dispatchEvent(SCMJ_EVENT.STATE_NONE, {})
    izx.dispatchEvent(SCMJ_EVENT.CHANEG_STATE, GameState.None)
    this.showStartBtn(true)
  }

  updateBet(serverInfo) {
    this.serverInfo = serverInfo
    if (serverInfo) {
      this.lblGame.string = serverInfo.game + serverInfo.name
      this.lblBet.string = "底分：" + serverInfo.bet + "分"
    }
  }

  initMapNodePaths() {
    this.mapNodePaths["MjLayerCenterRoot"] = "CenterArea/MjLayer/CenterArea/CenterMjArea/"
    this.mapNodePaths["MjLayerTopRoot"] = "CenterArea/MjLayer/TopArea/"
    this.mapNodePaths["MjLayerBottomRoot"] = "CenterArea/MjLayer/BottomArea/"
  }

  initUserData(msg) {  
    izx.log("initUserData izx.user.uid = ", izx.user.uid)
    izx.log("initUserData this.uid = ", this.uid)
    izx.log("updateUserData msg = ", JSON.stringify(msg))
    // return
    this.mapChairUserData = msg.mapChairUserData
    this.mapUidUserData = msg.mapUidUserData
    if (this.mapUidUserData && this.mapUidUserData[this.uid]) {
      this.chairId = this.mapUidUserData[this.uid].chairId
      scmjUtil.setChairId(this.chairId)
    }
    izx.log("this.chairId  = ", this.chairId)
    this.mapPlayers = this.mapPlayers ? this.mapPlayers : {}
    if (this.mapChairUserData) {
      for(let key in this.mapChairUserData) {
        let data = this.mapChairUserData[key]
        let localChairId = this.s2c(data.chairId)
        let player = this.mapPlayers[localChairId]
        if (player) {
          player.init({
            chairId: localChairId,
            uid: data.data.uid,
            ready: data.ready,
            score: data.data.score
          })
        } else {
          this.addPlayer(data)
        }
      }
    }
  }

  showStartBtn(isActive) {
    cc.find("CenterArea/BtnReady", this.node).active = isActive
    cc.find("CenterArea/BtnChangeReady", this.node).active = isActive
  }

  exitRoom(msg) {
    izx.dispatchEvent(Constants.EventName.ROOM_EXIT_REQ, {needReq: true, backToLobby: true})
    this.pop()
  }

  onStartGameNoti(noti) {
    izx.log("mjMain onStartGameNoti")
    izx.dispatchEvent(SCMJ_EVENT.SHOW_MATCHING, {bShow: false})
    this.lblCardNum.string = "0"
    izx.dispatchEvent(SCMJ_EVENT.CHANEG_STATE, GameState.Game)
    this.showStartBtn(false)
    this.showAutoHu({isShow:false})
    this.showTingTip({})
    this.btnTingTip.interactable = false
  }

  readyRsp(rsp) {
    izx.log("readyRsp rsp = ", JSON.stringify(rsp))
    // if (rsp.errCode !== 0) {
    //   this.showStartBtn(true)
    //   return
    // }

    izx.dispatchEvent(SCMJ_EVENT.UPDATE_HEAD_READY, {
      chairId: 1,
      ready: 1
    })
  }

  readyNoti(noti) {
    if (!noti || !noti.uid) {
      return
    }
    if (this.state == GameState.Game) {
      return
    }
    izx.log("noti = ", noti)
    noti.chairId = this.s2c(noti.chairId)
    izx.dispatchEvent(SCMJ_EVENT.UPDATE_HEAD_READY, noti)
  }

  enterNoti(noti) {
    if (!noti) {
      return
    }
    izx.log("noti = ", noti)
    let item = noti.item
    let localChairId = this.s2c(item.chairId)
    let player = this.mapPlayers[localChairId]
    if (player) {
      player.init({
        chairId: localChairId,
        uid: item.data.uid,
        ready: item.ready,
        score: item.data.score
      })
    } else {
      this.addPlayer(item)
    }
  }

  exitNoti(noti) {
    if (!noti) {
      return
    }
    izx.log("noti = ", noti)
    let localChairId = this.s2c(noti.chairId)
    let player = this.mapPlayers[localChairId]
    if (player) {
      player.node.removeFromParent(true)
      this.mapPlayers[localChairId] = null
    }
  }

  bankerNoti(noti) {
    izx.log("bankerNoti noti =",  noti)
    if (!noti) {
      return
    }
    ScmjAudioUtil.playSound("audio_dice")
    scmjUtil.playDiceAni(noti.dices, this.node, ()=>{
      noti.chairId = this.s2c(noti.chairId)
      izx.dispatchEvent(SCMJ_EVENT.UPDATE_HEAD_BANKER, noti)
      if (noti.setEast == 1) {
        izx.dispatchEvent(SCMJ_EVENT.UPDATE_EAST, {chairId: noti.chairId})
      }
    })
  }

  updateCardsNoti(noti) {
    izx.log("updateCardsNoti noti = ", JSON.stringify(noti))
    noti.chairId = this.s2c(noti.chairId)
    izx.dispatchEvent(SCMJ_EVENT.UPDATE_MJLAYER_CARDS, noti)
    izx.dispatchEvent(SCMJ_EVENT.SHOW_AUTO_HU)
  }

  operateNoti(noti) {
    izx.dispatchEvent(SCMJ_EVENT.GUIDE_HIDE)
    noti.chairId = this.s2c(noti.chairId)
    switch (noti.opcode) {
      case OperatorCode.OP_PLAY:
        // izx.dispatchEvent(SCMJ_EVENT.ANI_PLAY_CARD, noti)
        izx.dispatchEvent(SCMJ_EVENT.OP_HIDE, {})
        break
      case OperatorCode.OP_MOPAI:
        izx.dispatchEvent(SCMJ_EVENT.ANI_MOPAI, noti)
        izx.dispatchEvent(SCMJ_EVENT.OP_HIDE, {})
        break
      case OperatorCode.OP_CHOW:
      case OperatorCode.OP_PONG:
      case OperatorCode.OP_KONG:
        izx.dispatchEvent(SCMJ_EVENT.UPDATE_MJPLAY_MARK, {chairId: 0})
        izx.dispatchEvent(SCMJ_EVENT.ANI_CPGH, noti)
        break
      default:
        izx.dispatchEvent(SCMJ_EVENT.ANI_CPGH, noti)
        break
    }
    this.playOperateSound(noti)
  }

  playOperateSound(noti) {
    if (noti.opcode == OperatorCode.OP_PLAY) {
      ScmjAudioUtil.playSound("audio_card_"+noti.card+"_", 1)
    } else if (noti.opcode == OperatorCode.OP_KONG || noti.opCode == OperatorCode.OP_KONG_DARK || noti.opCode == OperatorCode.OP_KONG_TURN) {
      ScmjAudioUtil.playSound("audio_GANGPAI_", 1)
    } else if (noti.opcode == OperatorCode.OP_PONG) {
      ScmjAudioUtil.playSound("audio_PENGPAI_", 1)
    } else if (noti.opcode == OperatorCode.OP_CHOW) {
      ScmjAudioUtil.playSound("audio_CHIPAI_", 1)
    } else if (noti.opcode == OperatorCode.OP_HU_DIANPAO || noti.opCode == OperatorCode.OP_HU_AFTER_KONG_TURN) {
      ScmjAudioUtil.playSound("audio_hu_", 1)
    } else if (noti.opcode == OperatorCode.OP_HU_ZIMO) {
      ScmjAudioUtil.playSound("audio_zimo_", 1)
    }
  }

  operateReq(req) {
    izx.log("operateReq req = ", req)
    let mjLayerS = <mjLayer>this.mjLayer.getComponent("scmjLayer")
    let isHu = mjLayerS.isHu(1)
    let autoHu = this.btnNoAutoHu.node.active
    if (isHu || autoHu) {
      for (let index = 0; index < req.opcodes.length; index++) {
        if (scmjUtil.isHu(req.opcodes[index])) {
          this.scheduleOnce(() => {
            izx.dispatchEvent(SCMJ_EVENT.OPERATE_RSP, {
              opcode: req.opcodes[index],
              card: req.card
            })
          }, 0.5)
          return
        }
      }
    }
    let havePlay = false
    for (let index = 0; index < req.opcodes.length; index++) {
      if (req.opcodes[index] == OperatorCode.OP_PLAY) {
        havePlay = true
        if (isHu || autoHu) {
          this.scheduleOnce(() => {
            izx.dispatchEvent(SCMJ_EVENT.OP_PLAY, {card: req.card})
          }, 0.6)
          return
        } else {
          izx.dispatchEvent(SCMJ_EVENT.ENABLE_PLAY_CARD, {canPlay: true})
          izx.dispatchEvent(SCMJ_EVENT.UPDATE_TING_MARKS, {tingCards: req.tingCards})
        }
        break
      }
    }
    for (let index = 0; index < req.opcodes.length; index++) {
      if (req.opcodes[index] == OperatorCode.OP_GIVEUP) {
        if (isHu || autoHu) {
          this.scheduleOnce(() => {
            izx.dispatchEvent(SCMJ_EVENT.OPERATE_RSP, {
              opcode: req.opcodes[index],
              card: req.card
            })
          }, 0.5)
          return
        }
      }
    }
    for (let index = 0; index < req.opcodes.length; index++) {
      if (req.opcodes[index] != OperatorCode.OP_PLAY) {
        if (havePlay) {
          req.opcodes.push(OperatorCode.OP_GIVEUP)
        }
        izx.dispatchEvent(SCMJ_EVENT.OP_CPGH, req)
        break
      }
    }
  }

  clientTimerNoti(noti) {
    izx.log("clientTimerNoti noti = ", noti)
    noti.chairId = this.s2c(noti.chairId)
    this.lblCardNum.string = noti.remainCardNum + ""
    izx.dispatchEvent(SCMJ_EVENT.UPDATE_TIMER, noti)
  }

  lackNoti(noti) {
    izx.log("scmjmain lackNoti noti = ", noti)
    noti.chairId = this.s2c(noti.chairId)
    let lackNode = cc.find("CenterArea/LackArea/Lack" + noti.chairId, this.node)
    let wPos = lackNode.parent.convertToWorldSpaceAR(lackNode.position)
    let nPos = this.mapPlayers[noti.chairId].node.convertToNodeSpaceAR(wPos)
    noti.pos = nPos
    izx.dispatchEvent(SCMJ_EVENT.UPDATE_HEAD_LACK, noti)
    izx.dispatchEvent(SCMJ_EVENT.UPDATE_LACK_CARDS, noti)
    izx.dispatchEvent(SCMJ_EVENT.OP_LACK, noti)
    izx.dispatchEvent(SCMJ_EVENT.GUIDE_HIDE)
  }

  billRsp(rsp) {
    if (this.billLayer == null) {
      this.billLayer = cc.instantiate(this.prefabBill)
      this.billLayer.parent = this.node
      izx.dispatchEvent(SCMJ_EVENT.UPDATE_BILL, rsp)
    } else {
      izx.dispatchEvent(SCMJ_EVENT.UPDATE_BILL, rsp)
    }
  }

  resultNoti(noti) {
    izx.dispatchEvent(SCMJ_EVENT.SHOW_TING_TIP, {})
    izx.dispatchEvent(SCMJ_EVENT.SHOW_AUTO_HU, {isShow: false})
    this.btnTingTip.interactable = false
    if (this.billLayer != null) {
      this.billLayer.active = false
    }
    izx.dispatchEvent(SCMJ_EVENT.CHANEG_STATE, GameState.Result)
    if (this.resultLayer == null) {
      this.resultLayer = cc.instantiate(this.prefabResult)
      this.resultLayer.parent = this.node
      izx.dispatchEvent(SCMJ_EVENT.UPDATE_RESULT, noti)
    } else {
      izx.dispatchEvent(SCMJ_EVENT.UPDATE_RESULT, noti)
    }
    izx.dispatchEvent(SCMJ_EVENT.OP_AUTO, {chairId : 1, auto: 2})
    izx.dispatchEvent(SCMJ_EVENT.OP_HIDE, {})
    izx.dispatchEvent(SCMJ_EVENT.UPDATE_HEAD_SCORE, {chairId: 1, score: 0, result: true})
  }

  mjPlayMarkNoti(noti) {
    noti.chairId = this.s2c(noti.chairId)
    izx.dispatchEvent(SCMJ_EVENT.UPDATE_MJPLAY_MARK, noti)
  }

  scoreChangeNoti(noti) {
    noti.items.forEach(item => {
      item.chairId = this.s2c(item.chairId)
      izx.dispatchEvent(SCMJ_EVENT.UPDATE_HEAD_SCORE, {chairId: item.chairId, score: item.totalScore})
    });
    
    izx.dispatchEvent(SCMJ_EVENT.ANI_SCORE_CHANGE, noti)
  }

  completeNoti(noti) {
    izx.log("completeNoti noti = ", JSON.stringify(noti))
    if(noti == null) {
      return
    }
    // TODO: 初始化用户数据
    if (noti.state == 2) {
      if (this.state != GameState.Game) {
        izx.dispatchEvent(SCMJ_EVENT.BEGIN_GAME_NOTI, {})
      }
      izx.dispatchEvent(SCMJ_EVENT.CHANEG_STATE, GameState.Game)
      this.showStartBtn(false)
    } else {
      if (this.state == GameState.Game) {
        izx.dispatchEvent(SCMJ_EVENT.STATE_NONE, {})
        izx.dispatchEvent(SCMJ_EVENT.CHANEG_STATE, GameState.None)
      }
      noti.baseItems.forEach(item => {
        let chairId = this.s2c(item.chairId)
        izx.dispatchEvent(SCMJ_EVENT.UPDATE_HEAD_READY, {chairId: chairId, ready: item.ready})
        if (chairId == 1) {
          if (item.ready == 1) {
            this.showStartBtn(false)
          } else if (this.state == GameState.None || this.state == GameState.Result) {
            izx.log("completeNoti showStartBtn true")
            this.showStartBtn(true)
          }
        }
      });
    }

    if (noti.east >= 0) {
      izx.dispatchEvent(SCMJ_EVENT.UPDATE_EAST, {chairId: this.s2c(noti.east)})
    }
    izx.dispatchEvent(SCMJ_EVENT.UPDATE_HEAD_BANKER, {chairId: this.s2c(noti.banker)})
    this.lblCardNum.string = noti.remainCardNum + ""
    noti.gameItems.forEach(item => {
      let chairId = this.s2c(item.chairId)
      let lackNoti = {chairId: chairId, lack: item.lack}
      item.cards.chairId = chairId
      izx.dispatchEvent(SCMJ_EVENT.UPDATE_MJLAYER_CARDS, item.cards)
      izx.dispatchEvent(SCMJ_EVENT.UPDATE_HEAD_LACK, lackNoti)
      izx.dispatchEvent(SCMJ_EVENT.UPDATE_LACK_CARDS, lackNoti)
      izx.dispatchEvent(SCMJ_EVENT.OP_LACK, lackNoti)
      if (chairId == 1) {
        izx.dispatchEvent(SCMJ_EVENT.OP_AUTO, {chairId : 1, auto: 2})
      }
      izx.dispatchEvent(SCMJ_EVENT.UPDATE_HEAD_SCORE, {chairId: chairId, score: item.addScore})
    });
  }

  autoNoti(noti) {
    noti.chairId = this.s2c(noti.chairId)
    izx.dispatchEvent(SCMJ_EVENT.OP_AUTO, noti)
  }

  showTingTip(msg) {
    izx.log("showTingTip msg = ", msg)
    if (msg.tingCards == null || msg.tingCards.length == 0) {
      if (this.tingTip) {
        this.tingTip.active = false
      }
      return
    }
    if (this.tingTip == null) {
      this.tingTip = cc.instantiate(this.prefabTingTip)
      this.tingTip.parent = this.node
    }
    this.tingTip.active = true
    let tingTipS = <TingTip>this.tingTip.getComponent("scmjTingTip")
    tingTipS.init(msg.tingCards)
  }

  showAutoHu(msg) {
    izx.log("showTingTip msg = ", msg)
    let mjLayerS = <mjLayer>this.mjLayer.getComponent("scmjLayer")
    let isHu = mjLayerS.isHu(1)
    if (isHu) {
      this.btnAutoHu.node.active = false
      this.btnNoAutoHu.node.active = false
      if (this.state == GameState.Game) {
        this.btnTingTip.interactable = true
      }
      return
    }
    if (msg == null) {
      return
    }
    if (msg.isShow) {
      if (this.btnNoAutoHu.node.active) {

      } else {
        this.btnAutoHu.node.active = true
        this.btnTingTip.interactable = false
      }
      if (msg.fromServer) {
        this.btnTingTip.interactable = true
      }
    } else {
      this.btnAutoHu.node.active = false
      this.btnNoAutoHu.node.active = false
      this.btnTingTip.interactable = false
      this.btnNoAutoHu.node.stopAllActions()
    }
  }

  showMatching(msg) {
    izx.log("showMatching msg = ", msg)
    msg = msg || {}
    msg.bShow = msg.bShow || false
    if (msg && msg.bShow) {
      this.ndMatching.active = true
    } else {
      this.ndMatching.active = false
    }
    izx.dispatchEvent(SCMJ_EVENT.SHOW_HEAD, {bShow: !msg.bShow})
    this.unschedule(this.matchingTimer)
    this.unschedule(this.readyAndMatching)
    if (msg.bShow) {
      this.matchingCount = 10
      let timer = cc.find("Bg/Layout/Timer", this.ndMatching).getComponent(cc.Label)
      timer.string = "(" + this.matchingCount + ")"
      this.schedule(this.matchingTimer, 1)
    }
  }

  readyAndMatching() {
    izx.dispatchEvent(SCMJ_EVENT.READY_REQ, true)
    izx.dispatchEvent(SCMJ_EVENT.SHOW_MATCHING, {bShow: true}) 
  }

  matchingTimer() {
    let timer = cc.find("Bg/Layout/Timer", this.ndMatching).getComponent(cc.Label)
    if (this.matchingCount == 0) {
      this.unschedule(this.matchingTimer)
      izx.dispatchEvent(Constants.EventName.ROOM_EXIT_REQ, {needReq: false, isReJoin: true})
      this.scheduleOnce(this.readyAndMatching, 1.0)
    } else {
      this.matchingCount -- 
      timer.string = "(" + this.matchingCount + ")"
    }
  }

  onRoomExitReq(msg) {
    if (msg.needReq && msg.isReJoin != true) {
      this.unscheduleAllCallbacks()
    }
  }

  addPlayer(data) {
    let localChairId = this.s2c(data.chairId)
    if (data.chairId == this.chairId) {
      this.mapPlayers[localChairId] = this.selfHead.getComponent("scmjHead")
    } else {
      let userHead = cc.instantiate(this.prefabUserHead)
      this.mapPlayers[localChairId] = userHead.getComponent("scmjHead")
      scmjUtil.addIntoPath("HeadArea" + localChairId, this.mapNodePaths, this.node, userHead)
    }
    this.mapPlayers[localChairId].init({
      chairId: localChairId,
      uid: data.data.uid,
      ready: data.ready,
      score: data.data.score
    })
  }

  onBtnBill() {
    izx.log("onBtnBill")
    izx.audioMgr.playBtn()
    izx.dispatchEvent(SCMJ_EVENT.BILL_REQ, {})
  }

  onBtnTingTip() {
    izx.log("onBtnTingTip")
    izx.audioMgr.playBtn()
    izx.dispatchEvent(SCMJ_EVENT.TING_TIP_REQ, {})
  }

  onBtnAutoHu() {
    izx.log("onBtnAutoHu")
    izx.audioMgr.playBtn()
    this.btnAutoHu.node.active = false
    this.btnNoAutoHu.node.active = true
    this.btnTingTip.interactable = true
    let bigEye = this.btnNoAutoHu.node.getChildByName("BigEye")
    let smallEye = this.btnNoAutoHu.node.getChildByName("SmallEye")
    this.btnNoAutoHu.node.runAction(cc.repeatForever(cc.sequence(
     cc.callFunc(() => {
      bigEye.active = !bigEye.active
      smallEye.active = !smallEye.active
     }), cc.delayTime(0.5)
  )))
  }

  onBtnNoAutoHu() {
    izx.log("onBtnNoAutoHu")
    izx.audioMgr.playBtn()
    this.btnAutoHu.node.active = true
    this.btnNoAutoHu.node.active = false
    // this.btnTingTip.interactable = false
    this.btnNoAutoHu.node.stopAllActions()
  }

  s2c(index) {
    let maxPlyNum = 4
    izx.log("s2c this.chairId = ", this.chairId, "index = ", index)
    return (index - this.chairId + maxPlyNum) % maxPlyNum + 1
  }

  c2s(index) {
    let maxPlyNum = 4
    izx.log("c2s this.chairId = ", this.chairId)
    return (this.chairId + index + maxPlyNum) % maxPlyNum - 1
  }
}
