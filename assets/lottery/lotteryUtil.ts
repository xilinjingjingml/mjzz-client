export namespace lotteryUtil {   
  var isPicReady = false

  export function preLoadPic(callback?) {
    if (isPicReady) {
      callback && callback()
      return
    }
    cc.assetManager.loadBundle("lottery",(err, bundle)=>{
      if (err) {
        
      } else {
        bundle.loadDir("pics/", (err, res)=>{
          console.log("load lottery pics ready")
          isPicReady = true
          callback && callback()
        })
      }
   });
  }

  export function loadPic(pathName):cc.SpriteFrame {
    let bundle = cc.assetManager.getBundle("lottery")
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
    let bundle = cc.assetManager.getBundle("lottery")
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
      cc.assetManager.loadBundle("lottery", (err, bundle) => {
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
}
