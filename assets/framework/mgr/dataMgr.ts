import { EventMgr } from "../mgr/eventMgr"
import { LogMgr } from "./logMgr"

let _common: any = {}
const DATA_EVENT_NAME: string = "DATAEVENT_"

// let _funcs: {[index: string]: Function} = {}

export namespace DataMgr {
  export function setData(name: string, data: any, save: boolean = true) {
    _common[name] = data
        if (save) {
          if (data == null) {
            cc.sys.localStorage.removeItem(name)
          } else {
            cc.sys.localStorage.setItem(name, JSON.stringify(data))
          }
        }
        EventMgr.dispatchEvent(DATA_EVENT_NAME + name, data)
    }

    export function getData(name: string): any {        
        if (_common[name]){
            return _common[name]        
        }
        let data = cc.sys.localStorage.getItem(name)
        if (data && data.length > 0) {
          return JSON.parse(data)
        }
        return null
    }


    export function feed(name: string, callback: Function, target?: any) {
        let st = name.split(".")        
        let eventName = DATA_EVENT_NAME + name
        let func = (msg) => {
            let data = msg
            for (let i = 1; i < st.length; i ++) {
                data = data[st[i]]
            }
            callback && callback.call(target, data)
        }
        EventMgr.on(eventName, func, target)
    }

    export function getServerList(type) {
      let onlineParam = getData("onlineParam")
      if (!onlineParam) {
        return {}
      }
      let list = onlineParam.game[type]
      if (!list) {
        return {}
      }
      return list
    }

    export function getBestServer(list, money) {
      if (!list) {
        return null
      }
      let server = null
      for(let key in list) {
        let value = list[key]
        if (typeof value === "object") {
          if (money >= value.gold_limit.min && (server == null || server.order < value.order)) {
            server = value
          }
        }
      }
      if (server) {
        server.game = list.name
      }
      return server
    }

    export function getCurrentServer() {
      let room = getData("room")
      if (!room || !room.ruleId) {
        return null
      }
      let params = room.ruleId.split(".")
      if (params.length < 3) {
        return null
      }
      let game = params[1]
      let type = params[2]
      let list = getServerList(game)
      if (!list) {
        return null
      }
      let server = null
      for(let key in list) {
        let value = list[key]
        if (typeof value === "object") {
          if (type == value.type) {
            server = value
            server.game = list.name
            break
          }
        }
      }
      return server
    }

    export function getBrokenLimit() {
      return 5000
    }
}