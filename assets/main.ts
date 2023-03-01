import { izx } from "./framework/izx";
import { App } from "./common/common";

// 游戏启动 放在启动场景中
const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {
  @property(cc.Prefab)
  prefabBlockUI: cc.Prefab = null

  start() {
    izx.log("Main start")
    izx.prefabBlockUI = this.prefabBlockUI
    cc.debug.setDisplayStats(false)
    cc.assetManager.loadBundle("gameInit", () => {
      izx.log("Main loadBundle gameInit success")
      App.start()
    })
  }
}
