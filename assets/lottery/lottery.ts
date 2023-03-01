import { izx } from "../framework/izx";
import Constants from "../common/constants";
import LotteryMode from "./mode/lotteryMode";
import proto = require("./protos/lottery_proto")
import { lotteryUtil } from "./lotteryUtil"

// bundleName
const GAME_BUNDLE_NAME = "lottery"

export default class Lottery {
    private static _instance: Lottery
    static getInstance(): Lottery {
        if (!Lottery._instance) {
            Lottery._instance = new Lottery()
            Lottery._instance._init()
        }

        return Lottery._instance
    }

    private _lotteryMode: LotteryMode = new LotteryMode()

    private _init() {
        izx.setProto("lottery", proto)
        izx.on(Constants.EventName.LOTTERY_SHOW_MAIN, this.ShowLottery, this)
    }

    private ShowLottery() {
        izx.dispatchEvent(Constants.EventName.BLOCK_UI)
        lotteryUtil.preLoadPic(() => {
            izx.pushDialog(GAME_BUNDLE_NAME, "prefabs/LotteryMain", (res) => {
                izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
            }, {initParam:this._lotteryMode.lotteryCfg})
        })
    }
}

let lottery = Lottery.getInstance()