import { EventMgr } from "../mgr/eventMgr"

export interface PlayerData {
    uid: number
    nickname?: string
    sex?: number
    pic?: string
    money?: number
    score?: number
    level?: number    
    vip?: number
    guid: string
}

class Player {
    private _data: PlayerData = <PlayerData>{uid: 0, sex: 0, money: 0, level: 0, vip: 0} 
    
    get uid(): number {
        return this._data.uid
    }

    get nickname(): string {
        return this._data.nickname
    }
    set nickname(value: string) {
        this._data.nickname = value
        EventMgr.dispatchEvent("PLAYER_DATA_FEED" + this.uid)
    }

    get sex(): number {
        return this._data.sex
    }
    set sex(value: number) {
        this._data.sex = value
        EventMgr.dispatchEvent("PLAYER_DATA_FEED" + this.uid)
    }

    get pic(): string {
        return this._data.pic
    }
    set pic(value: string) {
        this._data.pic = value
        EventMgr.dispatchEvent("PLAYER_DATA_FEED" + this.uid)
    }

    get money(): number {
        return this._data.money
    }
    set money(value: number) {
        this._data.money = value
        EventMgr.dispatchEvent("PLAYER_DATA_FEED" + this.uid)
    }

    get score(): number{
        return this._data.score
    }
    set score(value: number) {
        this._data.score = value
        EventMgr.dispatchEvent("PLAYER_DATA_FEED" + this.uid)
    }

    get level(): number {
        return this._data.level
    }
    set level(value: number) {
        this._data.level = value
        EventMgr.dispatchEvent("PLAYER_DATA_FEED" + this.uid)
    }

    get vip(): number {
        return this._data.vip
    }
    set vip(value: number) {
        this._data.vip = value
        EventMgr.dispatchEvent("PLAYER_DATA_FEED" + this.uid)
    }

    feed(field: string | string[], callback: Function, target: any) {
        EventMgr.on("PLAYER_DATA_FEED" + this.uid, () => {
            let msg = {}
            if (typeof field === "string") {
                msg = this._data[field]
            } else {
                field.map(item => msg[item] = this._data[item])
            }
            callback && callback.call(target, msg)
        }, target)
    }
}

export default class Players {
    private static _playerData: {[index: number]: Player} = []
    public static createPlayer(data: any) {
        if (!data || !data.uid)
            return

        let player = new Player
        for (let key in data) {
            player[key] = data[key]
        }

        Players._playerData[data.uid] = player
    }

    public static getPlayer(uid: number) {
        return Players._playerData[uid]
    }

    public static getPlayers() {
        return Players._playerData
    }
}
