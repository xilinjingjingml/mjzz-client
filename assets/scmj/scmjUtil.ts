import { CardIndex, Fan, OperatorCode, CheckType } from "./scmjConstants";

export namespace scmjUtil {   
  var chairId = -1
  var isPicReady = false
  var loadTimer = 0

  export function setChairId(chairId) {
    this.chairId = chairId
  }

  export function s2c(index) {
    let maxPlyNum = 4
    return (index - this.chairId + maxPlyNum) % maxPlyNum + 1
  }

  export function c2s(index) {
    let maxPlyNum = 4
    return (this.chairId + index + maxPlyNum) % maxPlyNum - 1
  }

  export function pathNode(name, mapPaths, parent): cc.Node {
    let node = null
    for(let key in mapPaths){
      node = cc.find(mapPaths[key] + name, parent)
      if (node) {
        break
      }
    }
    if (node) {
      return node
    } else {
      console.log("pathNode did't find node of name ", name)
      return null
    }
  }

  export function addIntoPath(name, mapPaths, parent, child) {
    console.log("addIntoPath name ", name)
    let node = this.pathNode(name, mapPaths, parent)
    if (node) {
      node.addChild(child)
    }
  }

  export function stopLoaderTimer() {
    if (this.loadTimer != 0) {
      clearInterval(this.loadTimer)
      this.loadTimer = 0
    }
  }

  export function startLoaderTimer(callback) {
    this.stopLoaderTimer()
    this.loadTimer = setInterval(() => {
      if (isPicReady) {
        this.stopLoaderTimer()
        callback && callback()
        return
      }
    }, 1.0)
  }

  export function preLoadPic(callback?) {
    if (isPicReady) {
      callback && callback()
      return
    } else if (callback) {
      this.startLoaderTimer(callback)
      return
    }
    cc.assetManager.loadBundle("scmj",(err, bundle)=>{
      if (err) {
        
      } else {
        bundle.loadDir("pics/", (err, res)=>{
          console.log("load scmj pics ready")
          isPicReady = true
          callback && callback()
        })
      }
   });
  }

  export function loadPic(pathName):cc.SpriteFrame {
    let bundle = cc.assetManager.getBundle("scmj")
    if (bundle) {
      let asset = bundle.get(pathName, cc.SpriteFrame)
      if (asset) {
        return <cc.SpriteFrame>asset
      } else {
        return null
      }
    } else {
      return null
    }
  }

  export function loadRes(pathName, callback) {
    let bundle = cc.assetManager.getBundle("scmj")
    if (bundle) {
      let asset = bundle.get(pathName)
      if (asset) {
        callback(asset)
      } else {
        bundle.load(pathName, (err, res)=>{
          if (err) {
            callback()
          } else {
            callback(res)
          }
        })
      }
    } else {
      cc.assetManager.loadBundle("scmj", (err, bundle) => {
        bundle.load(pathName, (err1, res) => {
          if (err1) {
            callback()
          } else {
            callback(res)
          }
        })
      });
    }
  }

  export function playDiceAni(vecDices, parent, callback) {
    cc.log("playDiceAni")
    this.loadRes("pics/dice/ani", (res)=> {
      if (!res) {
        callback()
        return
      }
      for (let key in vecDices) {
        let nPoint = vecDices[key]
        let sRect 		= cc.rect(0,0,900,1932)
        let size 		  = cc.size(0, 0)
        let offset 		= cc.v2(0, 0)
        let frames 		= []
        for (let i = 0; i < 9; ++i) {
          size.width = 100
          size.height = 322
          let width = 100
          let height = 322
          let orgPoint = sRect.origin
          let rect = cc.rect(orgPoint.x+((nPoint-1)*9+i)%9*100,orgPoint.y+Math.floor(((nPoint-1)*9+i)/9)%6*322, size.width,size.height)
          frames[i] = new cc.SpriteFrame(res, rect, false, offset, size)  
        }
        let nodeDice = new cc.Node();
        nodeDice.name = 'NodeDice';
        let sprite = nodeDice.addComponent(cc.Sprite);
        sprite.spriteFrame = frames[8]
        nodeDice.parent = parent;
        nodeDice.x = (key == "1" ? -40 : 60)
        nodeDice.y = 180
        let animation = nodeDice.addComponent(cc.Animation);
        let clip = cc.AnimationClip.createWithSpriteFrames(frames, 9);
        clip.name = 'anim_dice';
        clip.wrapMode = cc.WrapMode.Default;
        clip.speed = 2
        animation.addClip(clip)
        if (key == "1") {
          animation.on('finished', ()=>{
            nodeDice.runAction(cc.sequence(cc.delayTime(1.0), cc.removeSelf(true)))
          })
        } else {
          animation.on('finished', ()=>{
            nodeDice.runAction(cc.sequence(cc.delayTime(1.0), cc.callFunc(callback), cc.removeSelf(true)))
          })
        }
        animation.play("anim_dice")
      }
    })
  }

  export function isCrak(card) {
    if (card >= CardIndex.CrakStart && card <= CardIndex.CrakEnd) {
      return true
    } else {
      return false
    }
  }

  export function isBam(card) {
    if (card >= CardIndex.BamStart && card <= CardIndex.BamEnd) {
      return true
    } else {
      return false
    }
  }

  export function isDot(card) {
    if (card >= CardIndex.DotStart && card <= CardIndex.DotEnd) {
      return true
    } else {
      return false
    }
  }

  export function sortLack(handcards, lack = -1) {
    // console.log("sortLack lack = ", lack)
    if (lack < 0) {
      return handcards
    }
    let cards = []
    let lacks = []
    handcards.forEach(card => {
      if (parseInt(card/10 + "") == lack) {
        lacks.push(card)
      } else {
        cards.push(card)
      }
    });
    lacks.forEach(card => {
      cards.push(card)
    });
    return cards
  }

  export function fanConfig(fan): string {
    switch (fan) {
    case Fan.QingShiBaLuoHan:
      return "???????????????"
    case Fan.ShiBaLuoHan:
      return "????????????"
    case Fan.TianHu:
      return "??????"
    case Fan.DiHu:
      return "??????"
    case Fan.QingLongQiDui:
      return "????????????"
    case Fan.QingJinGouGou:
      return "????????????"
    case Fan.QingQiDui:
      return "?????????"
    case Fan.QingDaiYaoJiu:
      return "????????????"
    case Fan.QingPeng:
      return "??????"
    case Fan.JiangDui:
      return "??????"
    case Fan.LongQiDui:
      return "?????????"
    case Fan.QingYiSe:
      return "?????????"
    case Fan.QiDui:
      return "??????"
    case Fan.JinGouGou:
      return "?????????"
    case Fan.DaiYaoJiu:
      return "?????????"
    case Fan.PengPengHu:
      return "?????????"
    case Fan.PingHu:
      return "??????"
    case Fan.GangHouPao:
      return "?????????"
    case Fan.GangShangKaiHua:
      return "????????????"
    case Fan.HaiDiLaoYue:
      return "????????????"
    case Fan.HaiDiPao:
      return "?????????"
    }
    return ""
  }
  
  export function opcodeConfig(op): string {
    switch (op) {
    case OperatorCode.OP_KONG:
    case OperatorCode.OP_KONG_TURN:
      return "??????"
    case OperatorCode.OP_KONG_DARK:
      return "??????"
    case OperatorCode.OP_HU_DIANPAO:
      return "??????"
    case OperatorCode.OP_HU_ZIMO:
      return "??????"
    case OperatorCode.OP_HU_AFTER_KONG_TURN:
      return "?????????"
    }
    return ""
  }
  
  export function checkTypeConfig(type): string {
    switch (type) {
    case CheckType.ChaHuaZhu:
      return "?????????"
    case CheckType.ChaDaJiao:
      return "?????????"
    case CheckType.ChaTingTuiShui:
      return "????????????"
    case CheckType.GangShangPaoTuiGang:
      return "????????????"
    }
    return ""
  }
  
  export function isKong(op): boolean {
    switch (op) {
    case OperatorCode.OP_KONG:
    case OperatorCode.OP_KONG_TURN:
    case OperatorCode.OP_KONG_DARK:
      return true
    }
    return false
  }

  export function isHu(op): boolean {
    switch (op) {
    case OperatorCode.OP_HU_DIANPAO:
    case OperatorCode.OP_HU_ZIMO:
    case OperatorCode.OP_HU_AFTER_KONG_TURN:
      return true
    }
    return false
  }

  export function hex2color(hexColor: string) {
    const hex = hexColor.replace(/^#?/, "0x");
    const c = parseInt(hex);
    const r = c >> 16;
    const g = (65280 & c) >> 8;
    const b = 255 & c;
    return cc.color(r, g, b, 255);
  };

}
