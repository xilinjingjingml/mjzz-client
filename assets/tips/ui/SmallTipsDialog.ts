import BaseUI from "../../framework/base/baseUI";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SmallTipsDialog extends BaseUI {


    @property(cc.Label)
    tips:cc.Label=null

    onOpen () {
        if (this.initParam.tips) {
            this.tips.string =  this.initParam.tips
        }
        this.scheduleOnce(() => {
          this.pop()
        }, 3.0)
    }
}
   
