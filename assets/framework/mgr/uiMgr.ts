import BaseUI from "../base/baseUI"
import { LogMgr } from "./logMgr"
import { EventMgr } from "./eventMgr"
import baseUICloseTransition from "../base/baseUICloseTransition"

// 场景参数
interface iUIParam {
    pos?: cc.Vec2 | cc.Vec3
    parent?: cc.Node
    size?: cc.Size

    mask?: boolean
    maskClose?: boolean

    initParam?: any
    closeCallback?: Function
}

interface uiOpt {
    orientation?: number
    pos?: cc.Vec2 | cc.Vec3
    size?: cc.Size
    mask?: boolean
    maskClose?: boolean
    
    initParam?: any
}

let _scenes: {[index: string]: any} = {}
let _maskTexture: cc.Texture2D = null
export namespace UiMgr {   
    export function preLoad(name: string | string[], progress?: Function, callback?: Function) {
        if (typeof name === "string") {
          console.log("loadbundle name = ", name)
            loadBundle(name, () => {
                progress && progress(1, 1)                
                callback && callback()
            })            
        } else {
            let length = 0
            name.map(item => {
                console.log("loadbundle item = ", item)
                loadBundle(item, () => {
                    length ++
                    progress && progress(length , name.length)
                    length === name.length && callback && callback()
                })
            })            
        }
    }

    export function loadBundle(name: string, callback?: Function) {
        console.log("loadBundle name = ", name)
        cc.assetManager.loadBundle(name, (err, bundle) => {
            if (err) {
                LogMgr.warn("Bundle " + name + "err :" + err)
                return
            }
            console.log("loadBundle name = ", name, " success")
            callback && callback(bundle)
        })
    }

    export function popUI(bundleName: string, name: string, param?:iUIParam | Function , callback?: Function ) {
        // let bundle = cc.assetManager.getBundle(bundleName)
        // if (null == bundle) {
        //     loadBundle(bundleName, (bundle) => {
        //         loadUI(bundle, name, param, callback)
        //     })
        // } else {
            loadUI(bundleName, name, param, callback)
        // }
    }

    export function closeUI(name: string, param?: any) {
        let obj: cc.Node = _scenes[name]
        if (!obj)
            return

        let ui = obj.getComponent(BaseUI)
        if (ui) {
            ui.closeCb && ui.closeCb(param)
            EventMgr.offByTag(ui)
        }

        obj.removeFromParent()
        obj.destroy()
    }

    export function loadUI(bundle: string | cc.AssetManager.Bundle, name: string, param?: iUIParam | Function, callback?: Function) {
        if (typeof param === "function") {
            callback = param
            param = {} as iUIParam
        }

        if (!param) {
            param = {} as iUIParam
        }

        if (typeof bundle === "string") {
            let bundleName = bundle
            bundle = cc.assetManager.getBundle(bundleName)
            if (!bundle) {
                loadBundle(bundleName, () => loadUI(bundleName, name, param, callback))
            }
        }
        
        bundle.load(name, cc.Prefab, (err, res: cc.Prefab) => {
            if (err) {
                LogMgr.warn("prefab " + name + " err: " + err)
                callback && callback(null)
                return
            }

            let obj = cc.instantiate(res)
            let n = name.split("/")
            obj.name = n[n.length - 1]
            
            if (typeof param === "function") {
                param = {}
            }
    
            if (!param.parent) {
                param.parent =  cc.director.getScene()
            }
            param.parent.addChild(obj)

            if (!param.pos) {
                param.pos = cc.v3(cc.winSize.width / 2, cc.winSize.height / 2, 0)
            } 
            if (param.pos instanceof cc.Vec2) {
                param.pos = cc.v3(param.pos)
            }
            obj.position = param.pos

            if (param.size) {
                obj.setContentSize(param.size)
            }
    
            if (param.mask) {
                let mask = getMask()
                obj.addChild(mask)
                mask.setSiblingIndex(obj.childrenCount - 1)
                if (param.maskClose) {
                    mask.on(cc.Node.EventType.TOUCH_END, (t) => {
                        for (let node of obj.children) {
                            if (node !== mask) {
                                let rect = node.getBoundingBoxToWorld()
                                let pos = t.getLocation()
                                if (rect.x < t.x && rect.x + rect.width > t.x && rect.y < t.y && rect.y + rect.height > t.y)
                                    return
                            }
                        }
    
                        closeUI(obj.name)
                    })
                }
            }
            
            let ui = obj.getComponent(BaseUI)            
            if (ui) {
                ui.initParam = param.initParam                                    
                ui.scheduleOnce(ui.onOpen.bind(ui), .0)
            }

            _scenes[obj.name] = obj

            if (callback)
                cc.tween(obj).delay(.1).call(() => callback(obj)).start()
        })
    }    

    function getMask() {
        if (!_maskTexture) {
            _maskTexture = new cc.Texture2D;
            _maskTexture.initWithData(new Uint8Array([0, 0, 0]), cc.Texture2D.PixelFormat.RGB888, 1, 1);
        }

        let mask = new cc.Node()
        let sprite = mask.addComponent(cc.Sprite)
        mask.addComponent(cc.BlockInputEvents)
        sprite.spriteFrame = new cc.SpriteFrame(_maskTexture)
        sprite.spriteFrame.setRect(cc.rect(0, 0, cc.winSize.width + 20, cc.winSize.height + 20))
        return mask
    }

    /********************************/
    /**
     * 
     */

    let _stackScenes: BaseUI[] = [];
    
    /**
     * 
     */
    export function PushScene(bundleName: string, name: string, callback?: Function, opt?: uiOpt) {
        enterScene("push", bundleName, name, callback, opt)
    }

    function enterScene(how: string, bundleName: string, name: string, callback?: Function, opt?: uiOpt) {
        opt = opt || {}
        opt.orientation = opt.orientation || 1

        let loadScene = (bundle: cc.AssetManager.Bundle, cb: Function) => {
            bundle.load(name, cc.Prefab, (err, res: cc.Prefab) => {
                if (err) {
                    LogMgr.warn("prefab " + name + " err: " + err)
                    cb && cb(null)
                    return
                }

                let obj = cc.instantiate(res)
                obj.name = bundleName + "_" + name.replace("/", "_")
                let parent = cc.director.getScene()
                obj.parent = parent

                // set pos
                if (!opt.pos) {
                    opt.pos = cc.v3(cc.winSize.width / 2, cc.winSize.height / 2, 0)
                }
                if (opt.pos instanceof cc.Vec2) {
                    opt.pos = cc.v3(opt.pos)
                }
                obj.position = opt.pos

                // set size
                if (opt.size) {
                    obj.setContentSize(opt.size)
                }

                let ui = obj.getComponent(BaseUI)
                ui.isScene = true
                ui.initParam = opt.initParam || {}

                if (how === "push") {
                    if (_stackScenes.length > 0) {
                        _stackScenes[_stackScenes.length - 1].onPause()
                    }
                    _stackScenes.push(ui)
                } else if (how === "replace") {
                    let s = _stackScenes[_stackScenes.length - 1]
                    try {
                        s && s.onPause()
                    } finally {
                        PopScene(s)
                        _stackScenes[_stackScenes.length - 1] = ui
                    }
                }

                cb && cb(ui)
                ui.scheduleOnce(ui.onOpen.bind(ui), .0)
            })
        }

        if (how === "show") {
            let objname = bundleName + "_" + name.replace("/", "_")
            let idx = 0
            let scene = null
            for (let n=_stackScenes.length, i=0;i<n;i++) {
                
                if (objname === _stackScenes[i].name) {
                    idx = i
                    scene = _stackScenes[i]
                    break
                }
            }
            if (!scene) {
                return
            }

            while (_stackScenes.length > idx) {
                let s = _stackScenes.pop()
                if (s && s instanceof BaseUI) {
                    try {
                        s.onPause()
                    } finally {
                        PopScene(s)
                    }
                }
            }

            if (_stackScenes.length === 0) {
                // exit game
            } else {
                let s = _stackScenes[_stackScenes.length - 1]
                s && s.onResume()
            }
            return
        } else if (how === "replace") {
            if (_stackScenes.length === 0)
                return
        }

        let bundle = cc.assetManager.getBundle(bundleName)
        if (null == bundle) {
            loadBundle(bundleName, (bundle: cc.AssetManager.Bundle) => {
                loadScene(bundle, callback)
            })
        } else {
            loadScene(bundle, callback)
        }
    }

    export function isSceneExist(bundleName: string, name: string) {
      console.log("isSceneExist")
      console.log("bundleName = ", bundleName)
      console.log("name = ", name)
      let sName = bundleName + "_" + name.replace("/", "_")
      let parent = cc.director.getScene()
      let child = parent.getChildByName(sName)
      if (child) {
        console.log("scene is exist!")
        return true
      }
      return false
  }

  export function isDialogExist(bundleName: string, name: string) {
    console.log("isDialogExist")
    console.log("bundleName = ", bundleName)
    console.log("name = ", name)
    if (_stackScenes.length <= 0) {
      return false
    }
    let sName = bundleName + "_" + name.replace("/", "_")
    let parent = _stackScenes[_stackScenes.length-1].node
    let child = parent.getChildByName(sName)
    if (child) {
      console.log("dialog is exist!")
      return true
    }
    return false
}

  

    export function ReplaceScene(bundleName: string, name: string, callback?: Function, opt?: uiOpt) {
        if (_stackScenes.length === 0) {
            PushScene(bundleName, name, callback, opt)
            return
        }
        enterScene("replace", bundleName, name, callback, opt)
    }

    export function ShowScene(bundleName: string, name: string, callback?: Function, opt?: uiOpt) {
        enterScene("show", bundleName, name, callback, opt)
    }

    export function PushDialog(bundleName: string, name: string, callback?: Function, opt?: uiOpt) {
        if (_stackScenes.length <= 0) {
            LogMgr.error("Failed! no running scene!")
            return
        }

        opt = opt || {}

        let loadScene = (bundle: cc.AssetManager.Bundle, cb: Function) => {
            bundle.load(name, cc.Prefab, (err, res: cc.Prefab) => {
                if (err) {
                    LogMgr.warn("prefab " + name + " err: " + err)
                    cb && cb(null)
                    return
                }

                let obj = cc.instantiate(res)
                obj.name = bundleName + "_" + name.replace("/", "_")
                obj.parent = _stackScenes[_stackScenes.length-1].node

                // set pos
                if (!opt.pos) {
                    opt.pos = cc.v3(0, 0, 0)
                }
                if (opt.pos instanceof cc.Vec2) {
                    opt.pos = cc.v3(opt.pos)
                }
                obj.position = opt.pos

                // set size
                if (opt.size) {
                    obj.setContentSize(opt.size)
                }

                let ui = obj.getComponent(BaseUI)
                ui.isScene = false

                if (opt.mask) {
                    let mask = getMask()
                    obj.addChild(mask)
                    mask.setSiblingIndex(obj.childrenCount - 1)
                    if (opt.maskClose) {
                        mask.on(cc.Node.EventType.TOUCH_END, (t) => {
                            for (let node of obj.children) {
                                if (node !== mask) {
                                    let rect = node.getBoundingBoxToWorld()
                                    let pos = t.getLocation()
                                    if (rect.x < t.x && rect.x + rect.width > t.x && rect.y < t.y && rect.y + rect.height > t.y)
                                        return
                                }
                            }

                            ui.pop()
                        })
                    }
                }

                let s = _stackScenes[_stackScenes.length - 1]
                if (s) {
                    let d = s.lastDialog()
                    d && d.onPause()
                }

                ui.initParam = opt.initParam || {}
                _stackScenes[_stackScenes.length-1].pushDialog(ui)

                cb && cb(ui)
                ui.scheduleOnce(ui.onOpen.bind(ui), .0)
            })
        }

        let bundle = cc.assetManager.getBundle(bundleName)
        if (null == bundle) {
            loadBundle(bundleName, (bundle: cc.AssetManager.Bundle) => {
                loadScene(bundle, callback)
            })
        } else {
            loadScene(bundle, callback)
        }
    }

    export function PopScene(ui?: BaseUI) {
        if (_stackScenes.length <= 1) {
            return
        }
        if (ui) {
            for (let n = _stackScenes.length, i = 0; i < n; i++) {
                if (_stackScenes[i] === ui) {
                    try {
                        ui.popAllDialog()
                        ui.onPause()
                    } finally {
                        let closeAnddistroy = function () {
                            try {
                                ui.onClose()
                            } finally {
                                ui.node.destroy()
                                ui = null
                                _stackScenes.splice(i, 1)
                            }
                        }

                        let aniTransition = ui.getComponent(baseUICloseTransition)
                        if (aniTransition) {
                            let func = () => {
                                closeAnddistroy()
                                EventMgr.off("BaseUI_Close_Transition_OK" + ui.node.name, func)
                            }
                            EventMgr.on("BaseUI_Close_Transition_OK" + ui.node.name, func)
                            try {
                                aniTransition.doCloseAni()
                            } finally {

                            }
                        } else {
                            closeAnddistroy()
                        }
                    }
                    if (_stackScenes.length === 0) {
                        // exit game
                        return
                    }
                    _stackScenes[_stackScenes.length - 1].onResume()
                    return
                }
            }
        } else {
            PopScene(_stackScenes[_stackScenes.length - 1])
        }
    }

    export function PopDialog(bundleName: BaseUI|string, name?: string) {
        if (_stackScenes.length <= 0) {
            return
        }
        if (bundleName instanceof BaseUI) {
            let d = bundleName
            if (!d.node) {
              return
            }
            let p = d.node.parent.getComponent(BaseUI)
            // 移除的pop是否是当前场景的lastPop
            let s = _stackScenes[_stackScenes.length - 1]
            p && p.popDialog(d)
            let ld = s && s.lastDialog()
            if (ld && ld === d) {
                ld.onResume()
            }
        } else if (typeof bundleName === "string")
            _stackScenes[_stackScenes.length - 1].popDialog(bundleName + "_" + name.replace("/", "_"))
    }

    export function PushDialog2(bundleName: string, name: string, res: cc.Prefab, opt?: uiOpt) {
      console.log("PushDialog2 name = ", name)
      if (_stackScenes.length <= 0) {
          LogMgr.error("Failed! no running scene!")
          return
      }
      opt = opt || {}

      let obj = cc.instantiate(res)
      obj.name = bundleName + "_" + name.replace("/", "_")
      obj.parent = _stackScenes[_stackScenes.length-1].node

      let ui = obj.getComponent(BaseUI)
      ui.isScene = false

      let s = _stackScenes[_stackScenes.length - 1]
      if (s) {
          let d = s.lastDialog()
          d && d.onPause()
      }

      ui.initParam = opt.initParam || {}
      _stackScenes[_stackScenes.length-1].pushDialog(ui)

      ui.scheduleOnce(ui.onOpen.bind(ui), .0)
  }

  export function loadPic(bundleName, pathName, callback) {
    let bundle = cc.assetManager.getBundle(bundleName)
    pathName = "pics/" + pathName
    if (bundle) {
      let asset = bundle.get(pathName, cc.SpriteFrame)
      if (asset) {
        callback(asset)
      } else {
        bundle.load(pathName, cc.SpriteFrame, (err, res)=>{
          if (err) {
              
          } else {
            callback(res)
          }
        })
      }
    } else {
      cc.assetManager.loadBundle(bundleName,(err, bundle)=>{
        if (err) {
          
        } else {
          bundle.load(pathName, cc.SpriteFrame, (err, res)=>{
            if (err) {
              
            } else {
              callback(res)
            }
          })
        }
     });
    }
  }
}

