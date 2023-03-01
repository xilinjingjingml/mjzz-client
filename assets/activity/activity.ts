import { izx } from "../framework/izx";
import Constants from "../common/constants";
import ActivityMode from "./mode/activityMode";
import proto = require("./protos/activity_proto")
import { activityUtil } from "./activityUtil"

// bundleName
const GAME_BUNDLE_NAME = "activity"

export default class Activity {
    private static _instance: Activity
    static getInstance(): Activity {
        if (!Activity._instance) {
            Activity._instance = new Activity()
            Activity._instance._init()
        }

        return Activity._instance
    }

    private _activityMode: ActivityMode = new ActivityMode()

    private _init() {
        izx.setProto("activity", proto)
        izx.on(Constants.EventName.ACTIVITY_SHOW_MAIN, this.ShowActivity, this)
        izx.on(Constants.EventName.ACTIVITY_SHOW_BCS, this.ShowActivityBcs, this)
    }

    private ShowActivity() {
        izx.dispatchEvent(Constants.EventName.BLOCK_UI)
        activityUtil.preLoadPic(() => {
            izx.pushDialog(GAME_BUNDLE_NAME, "prefabs/ActivityMain", (res) => {
                izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
            }, {initParam:this._activityMode.activityProgress})
        })
    }

    private ShowActivityBcs(msg) {
        if (izx.isDialogExist(GAME_BUNDLE_NAME, "prefabs/ActivityBcs")) {
          return
        }
        izx.dispatchEvent(Constants.EventName.BLOCK_UI)
        izx.pushDialog(GAME_BUNDLE_NAME, "prefabs/ActivityBcs", (res) => {
            izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
        }, {initParam:msg})
    }
}

let activity = Activity.getInstance()