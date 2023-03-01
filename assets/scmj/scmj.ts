/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangxinfeng
 * @Date: 2020-11-2 10:08:00
 * @LastEditors: wangxinfeng
 * @LastEditTime: 2020-11-2 10:08:00
 */
import { izx } from "../framework/izx"
import Constants from "../common/constants"
import ScmjMode from "./mode/scmjMode"
import { SCMJ_EVENT } from "./scmjEvents"
import { scmjUtil } from "./scmjUtil";

const GAME_BUNDLE_NAME = "scmj"
const GAME_ID = "mjzz-server-game-srv"

export default class Scmj {
  private static _instance: Scmj
  static getInstance(): Scmj {
    if (!Scmj._instance) {
      Scmj._instance = new Scmj()
      Scmj._instance._init()
    }

    return Scmj._instance
  }

  _scmj: ScmjMode = new ScmjMode()

  private _init() {
    console.log("Scmj init")
    // izx.preloadBundle.push(GAME_BUNDLE_NAME)

    // izx.on(Constants.EventName.ROOM_JOIN_NOTIFY, this.enterGame, this)
    izx.on(Constants.EventName.ROOM_ENTER_GAME, this.enterGame, this)
    izx.on(Constants.EventName.ROOM_EXIT_GAME, this.exitGame, this)
    izx.on(Constants.EventName.PRE_LOAD_SCMJ_PIC, this.preLoadScmjPic, this)
    if (!CC_EDITOR){
      scmjUtil.preLoadPic()
    }
  }

  private enterGame(msg) {
    console.log("Scmj init")
      if (msg.gameId === GAME_ID) {
        if (!izx.isInGameScene) {
          this._scmj.unLoad()
          this.loadGame()
        } else {
          this._scmj.afterEnterScmj()
        }
      }
  }

  private exitGame(msg) {
    if (msg && msg.backToLobby) {
      this._scmj.unLoad()
      izx.closeScene("ScmjMain")
    }
  }

  private loadGame() {
    this._scmj.load()
    izx.dispatchEvent(Constants.EventName.BLOCK_UI)
    scmjUtil.preLoadPic(() => {
      izx.pushScene(GAME_BUNDLE_NAME, "prefabs/ScmjMain", (res) => {
        izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
      })
    })
  }

  preLoadScmjPic(msg) {
    izx.log("preLoadScmjPic msg = ", msg)
    scmjUtil.preLoadPic(msg.callback)
  }
}


let scmj = Scmj.getInstance()