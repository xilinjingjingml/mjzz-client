import { LogMgr } from "./logMgr"

let _soundVolume: number = 0
let _effectVolume: number = 0


export namespace AudioMgr {
  export function setMusicVolume(value: number) {
    _soundVolume = value
    cc.audioEngine.setMusicVolume(_soundVolume)
    cc.sys.localStorage.setItem("soundVolume", value.toString())
  }

  export function getMusicVolume() : number {
    return _soundVolume
  }

  export function setEffectVolume(value: number) {
    _effectVolume = value
    cc.audioEngine.setEffectsVolume(_effectVolume)
    cc.sys.localStorage.setItem("effectVolume", value.toString())
  }

  export function getEffectVolume() : number {
    return _effectVolume
  }

  export function playMusic(name: string) {
    let callback = (bundle) => {
      if (bundle) {
        bundle.load("sounds/" + name, cc.AudioClip, (err1, res: cc.AudioClip)=>{
          if (err1) {
            LogMgr.info(name + " music not exists!")
          } else {
            cc.audioEngine.playMusic(res, true) 
          }
        })
      }
    }
    let bundle = cc.assetManager.getBundle("unires")
    if (bundle) {
      callback(bundle)
    } else {
      cc.assetManager.loadBundle("unires",(err, bundle)=>{
        callback(bundle)
      });
    }
  }

  export function playEffect(name: string, loop?: boolean | Function, cb?: Function) {
    if (typeof loop === "function") {
      cb = loop
      loop = null
    }
    let callback = (bundle) => {
      if (bundle) {
        bundle.load("sounds/" + name, cc.AudioClip, (err, res: cc.AudioClip)=>{
          if (err) {
            LogMgr.info(name + " music not exists!")
            return 
          }
    
          if (typeof loop !== "boolean") {
            loop = false
          }
    
          let id = cc.audioEngine.playEffect(res, loop)
          if (cb) {
            cc.audioEngine.setFinishCallback(id, cb);
          }
        })
      }
    }
    let bundle = cc.assetManager.getBundle("unires")
    if (bundle) {
      callback(bundle)
    } else {
      cc.assetManager.loadBundle("unires",(err, bundle)=>{
        callback(bundle)
      });
    }
  }

  export function playLobby() {
    this.playMusic("lobby")
  }

  export function playBtn() {
    this.playEffect("btn")
  }

  export function playAward() {
    this.playEffect("award")
  }

  export function init() {
    console.log("AudioMgr init")
    let volumn = cc.sys.localStorage.getItem("soundVolume")
    if (!volumn) {
      _soundVolume = 1
    } else if (volumn == "0") {
      _soundVolume = 0
    } else {
      _soundVolume = parseFloat(volumn)
    }

    volumn = cc.sys.localStorage.getItem("effectVolume")
    if (!volumn) {
      _effectVolume = 1
    } else if (volumn == "0") {
      _effectVolume = 0
    } else {
      _effectVolume = parseFloat(volumn)
    }

    console.log("_soundVolume = ", _soundVolume)
    console.log("_effectVolume = ", _effectVolume)
    cc.audioEngine.setMusicVolume(_soundVolume)
    cc.audioEngine.setEffectsVolume(_effectVolume)
  }
}

AudioMgr.init()
