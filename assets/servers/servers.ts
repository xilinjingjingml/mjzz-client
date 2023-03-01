import { izx } from "../framework/izx";
import Constants from "../common/constants";
import RoomMode from "./mode/roomMode";
import ServerList from "./mode/serverList";

const GAME_BUNDLE_NAME = "servers"

export default class Servers {
    private static _instance = null
    static getInstance(): Servers {
        if (!Servers._instance) {
            Servers._instance = new Servers()
            Servers._instance._init()
        }

        return Servers._instance
    }

    _room: RoomMode = null
    _svrCfg: ServerList = null

    private _init() {
        this._room = new RoomMode()
        this._svrCfg = new ServerList()

        // 注册消息
        izx.on(Constants.EventName.SERVER_LIST_REQ, this.getServer, this)
        izx.on(Constants.EventName.ACCOUNT_ON_LOGIN, this._svrCfg.initServerConfigs, this._svrCfg)

        izx.on(Constants.EventName.ROOM_READY_TO_GAME, this._room.StartJoinRoomReq, this._room)    
        izx.on(Constants.EventName.ROOM_CONFIRM_REQ, this._room.EnterRoomConfirmReq, this._room)
        izx.on(Constants.EventName.ROOM_ENTER_REQ, this._room.EnterRoomReq, this._room)
        izx.on(Constants.EventName.ROOM_EXIT_REQ, this._room.ExitRoomReq, this._room)

        izx.on(Constants.EventName.ROOM_LIST_REQ, this._room.RoomListReq, this._room)
        izx.on(Constants.EventName.ROOM_ENTER_FROM_LOBBY, this._room.EnterFromLobby, this._room)
    }

    getServer(msg) {    
        let list = []   
        if (!msg) {
            list = this._svrCfg.getServers()
        }
        else if (msg.game && msg.typs) {
            list = this._svrCfg.getServerByGameType(msg.game, msg.typs)
        }
        else if (msg.game) {
            list = this._svrCfg.getServersByGame(msg.game)
        }
        izx.dispatchEvent(Constants.EventName.SERVER_LIST_RSP, {list: list})
    }

    getGameByServer(svrTyps: string) {
        return this._svrCfg.getGameByServer(svrTyps)
    }

    findServerByMoney(game: string) {
        // return this._svrCfg.getServerByMoney(game, izx.user.money)
    }
}

let server = Servers.getInstance()