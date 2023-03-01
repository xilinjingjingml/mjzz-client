/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-05-20 17:07:41
 * @LastEditors: liuhongbin
 * @LastEditTime: 2020-05-22 11:13:10
 */
// import proto = require("./lhd_proto")

import { LogMgr } from "../mgr/logMgr";
import { EventMgr } from "../mgr/eventMgr";

export namespace GateMgr {

    let starx = window["starx"]

    let _host: string = ""
    let _port: number = 0
    let _cacert: cc.Asset = null
    let _ready = false

    let _proto: { [name: string]: any[] } = {}

    function _registe() {
        starx.off('io-error')
        starx.on('io-error', function (event) {
            // izxFW.error('#########io-error#########', event)
            LogMgr.log('#########io-error#########', event);
        })

        starx.off('reconnect')
        starx.on('reconnect', function () {
            LogMgr.log('#########reconnect#########')
            EventMgr.dispatchEvent("SOCKET_RECONNECT")
        })

        starx.off('close')
        starx.on('close', function (event) {
            LogMgr.log('#########close#########', event) 
            EventMgr.dispatchEvent("SOCKET_CLOSE")  
            _ready = false         
        })

        starx.off('disconnect')
        starx.on('disconnect', function (event) {
            LogMgr.log('#########disconnect#########', event)
            EventMgr.dispatchEvent("SOCKET_DISCONNECT")
            _ready = false
        })

        starx.off('heartbeat timeout')
        starx.on('heartbeat timeout', function () {
            LogMgr.log('#########heartbeat timeout#########')
            _ready = false
        })

        starx.off('error')
        starx.on('error', function (msg) {
            LogMgr.log('#########error#########', msg)
        })

        starx.off('onKick')
        starx.on('onKick', function (data) {
            LogMgr.log('#########error#########', data)
            _ready = false
        })

        starx.off('onData')
        starx.on("onData", function (data) {
            if (data) {
                if (data.route === "SysError") {
                    LogMgr.warn("socket sys err")
                    return
                }        
                
                let body = _decodePacket(data.route, data.body)                
                if (data.route.indexOf("HeartBeat") != -1) {
          
                } else {
                  LogMgr.info(data.route)
                  LogMgr.log(body)
                }  
                EventMgr.dispatchEvent(data.route, body)
            }
        })        
    }

    export function login(wssCacert: cc.Asset, host: string, port?: number, sender?: Function) {
        console.log("gateMgr login")
        _registe()
        _host = host
        _port = port
        _cacert = wssCacert
        let sockPromise = new Promise((resolve, reject) => {
            starx.init({
                host: host, //"192.168.0.126",
                port: port, //3333
                wssCacert: wssCacert,
                reconnect: true,
                maxReconnectAttempts: 1e10
            }, function (socket) {
                LogMgr.log("connected", socket)
                if (socket === null) {
                    reject("failed")
                } else {
                    resolve("success")
                    _ready = true
                    EventMgr.dispatchEvent("SOCKET_CONNECT")
                    if (sender && typeof sender === "function") {
                      cc.Camera.main.scheduleOnce(() => sender(), 0.1)
                  }
                }
            })
        })
        sockPromise.then((msg) => { }).catch((msg) => { })
    }

    export function setProto(name, proto) {
        if (_proto[name])
            delete _proto[name]

        _proto[name] = proto
    }

    export function unsetProto(name) {
        if (_proto[name])
            delete _proto[name]
    }

    function _findProto(name) {        
        for (let key in _proto) {
            if (_proto[key][name])
                return { module: key, proto: _proto[key][name] }
        }

        return null
    }

    function _encodePacket(name, packet) {
        let p = _findProto(name)//proto[name]
        if (!p || !p.proto) {
            LogMgr.error('encode Packet : Unknown Packet = ' + name)
            // throw new ReferenceError('encode Packet : Unknown Packet = ' + name)
            return
        }

        let buf = p.proto.create(packet)
        buf = p.proto.encode(buf).finish()
    
        return buf
    }

    function _decodePacket(name, data) {
        let p = _findProto(name)//proto[name]
        if (!p || !p.proto) {
            LogMgr.error('Decode Packet : Unknown Proto = ' + name)
            // throw new ReferenceError('Decode Packet : Unknown Proto = ' + name)
            return
        }

        let packet = p.proto.decode(data)

        let setDefault = function(packet: object): object {
            let propertys = Reflect.getPrototypeOf(packet)
            for (let key in propertys) {
                if (typeof propertys[key] === "function")
                    continue;

                if (typeof propertys[key] === "object" && propertys[key]) {
                    if (packet[key] instanceof Array) {
                        for (let idx in packet[key]) {
                            if (typeof packet[key][idx] === "object")
                                packet[key][idx] = setDefault(packet[key][idx])
                        }
                    }
                    else {
                        packet[key] = setDefault(propertys[key])
                    }
                }
                else if (false === propertys.hasOwnProperty.call(packet, key)) {
                    packet[key] = propertys[key]
                }
            }

            return packet
        }

        packet = setDefault(packet)

        return { module: p.module, packet: packet }
    }

    function checkReady(sender: Function) {
      if (!sender && typeof sender !== "function") {
          return
      }
      LogMgr.log("=====ready _ready = " + _ready)
      if (_ready) {
          sender()   
      } else {
          login(_cacert, _host, _port, sender)
      }
  }

    export function request(route, reqName, reqBody, resName, cb) {
      let func = ()=> {
        try {
            LogMgr.info(route, reqName)
            LogMgr.log(reqBody)
            starx.request(route, _encodePacket(reqName, reqBody), function (data) {
                let msg = _decodePacket(resName, data)
                cb = cb || function () { }
                cb(msg)
            })
        } catch (e) {
            LogMgr.info(e)
        }
      }
      checkReady(func)
    }

    export function notify(route, reqName, reqBody = null) {
        if (null == reqBody)
            reqBody = {}
            
        if (reqName.indexOf("HeartBeat") != -1) {
          
        } else {
          LogMgr.info(route, reqName)
          LogMgr.log(reqBody)
        }

        starx.notify(route, _encodePacket(reqName, reqBody))
    }

    export function close() {
        starx.disconnect()
    }

    export function isReady() {
      return _ready
  }
}