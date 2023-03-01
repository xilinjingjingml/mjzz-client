import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import Constants from "../../common/constants";
import {LOBBY_SCENE_EVENT} from "../evnets_lobby_scene";
import {COMMON_CONSTANT} from "../../common/constants";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LobbyHead extends BaseUi {
    @property(cc.Sprite)
    headIcon: cc.Sprite = null;
    @property(cc.Sprite)
    headFrame: cc.Sprite = null;
    @property(cc.Label)
    lblLv: cc.Label = null;
    @property(cc.Label)
    lblJb: cc.Label = null;
    @property(cc.Label)
    lblZs: cc.Label = null;
    @property(cc.SpriteAtlas)
    vipLogo: cc.SpriteAtlas = null;
    @property(cc.ProgressBar)
    lvlProg: cc.ProgressBar = null;

    btnGrxx: cc.Node = null; // 个人信息按钮
    btnJb: cc.Node = null; //加金币
    btnZs: cc.Node = null; //加钻石

    onOpen() {
        this.btnGrxx = cc.find("NodeHeadArea/BtnGrxx", this.node);
        this.btnJb = cc.find("NodeJbArea/BtnJb", this.node);
        this.btnZs = cc.find("NodeZsArea/BtnZs", this.node);

        this.initEvent()
        this.initButton()
        this.initView()

        this.refreshItemZuanShi()
        this.updateHeadicon()
        this.updateHeadFrame()
    }

    initEvent() {
        izx.on(LOBBY_SCENE_EVENT.GET_PLAYER_INFO_RSP, this.getPlayerInfoRsp, this)

        izx.on(Constants.EventName.REFRESH_ITEM_JINBI, this.refreshItemJinBi, this)
        izx.on(Constants.EventName.REFRESH_ITEM_DIAMOND, this.refreshItemZuanShi, this)
        izx.on(Constants.EventName.REFRESH_ITEM_LEVEL_EXP, this.refreshItemLevelExp, this)
        izx.on(Constants.EventName.REFRESH_ITEM_LEVEL, this.refreshItemLevelExp, this)

        izx.on(Constants.EventName.REFRESH_ITEM_HEAD, this.updateHeadicon, this)
        izx.on(Constants.EventName.REFRESH_ITEM_HEADFRAME, this.updateHeadFrame, this)
    } 

    initButton() {
        // 菜单按钮
        izx.bindButtonClick(this.btnGrxx, this.node, () => {
            izx.audioMgr.playBtn()
            izx.dispatchEvent(Constants.EventName.PERSONAL_SHOW_MAIN)
        })
        izx.bindButtonClick(this.btnJb, this.node, () => {
            izx.audioMgr.playBtn()
            izx.dispatchEvent(Constants.EventName.SHOP_SHOW_MAIN)
        })
        izx.bindButtonClick(this.btnZs, this.node, () => {
            izx.audioMgr.playBtn()
            izx.dispatchEvent(Constants.EventName.SHOP_SHOW_MAIN)
        })
    }

    initView() {
        let level = izx.item.getItemNum(COMMON_CONSTANT.ITEM_LEVEL)
        level = (level == 0 ? 1 : level)
        this.lblLv.string = "LV." + level.toString()
        this.lblJb.string = izx.utils.numberFormat2(izx.user.money)
        let levelExp = izx.item.getItemNum(COMMON_CONSTANT.ITEM_LEVEL_EXP)
        levelExp = (levelExp == 0 ? 0 : levelExp)
        let levelMax = izx.utils.GetLevelMaxExp(level)
        if (levelExp > levelMax) {
            levelMax = izx.utils.GetLevelMaxExp(level + 1)
        }
        this.lvlProg.progress = levelExp/levelMax
    }

    // 替换默认头像
    updateHeadicon() {
      console.log("LobbyHead updateHeadicon")
      izx.dispatchEvent(Constants.EventName.DRAW_ICON_BY_ID, {uid: izx.user.uid, pid: COMMON_CONSTANT.ITEM_HEAD, callback: (res) => {
        this.headIcon.spriteFrame = res
      }})
    }

    // 替换默认头像框
    updateHeadFrame() {
      console.log("LobbyHead updateHeadFrame")
      izx.dispatchEvent(Constants.EventName.DRAW_ICON_BY_ID, {uid: izx.user.uid, pid: COMMON_CONSTANT.ITEM_HEAD_FRAME, callback: (res) => {
        this.headFrame.spriteFrame = res
      }})
    }

    refreshItemJinBi() {
        this.lblJb.string = izx.utils.numberFormat2(izx.user.money)
    }

    refreshItemZuanShi() {
        this.lblZs.string = izx.utils.numberFormat2(izx.item.getItemNum(COMMON_CONSTANT.ITEM_DIAMOND))
    }

    getPlayerInfoRsp(res) {
        this.lblZs.string = izx.utils.numberFormat2(izx.item.getItemNum(COMMON_CONSTANT.ITEM_DIAMOND))
    }

    refreshItemLevelExp() {
        let level = izx.item.getItemNum(COMMON_CONSTANT.ITEM_LEVEL)
        level = (level == 0 ? 1 : level)
        this.lblLv.string = "LV." + level.toString()

        let levelExp = izx.item.getItemNum(COMMON_CONSTANT.ITEM_LEVEL_EXP)
        levelExp = (levelExp == 0 ? 0 : levelExp)
        let levelMax = izx.utils.GetLevelMaxExp(level)
        if (levelExp > levelMax) {
            levelMax = izx.utils.GetLevelMaxExp(level + 1)
        }
        this.lvlProg.progress = levelExp/levelMax
    }

    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        this.onOpen()
    }

    start () {

    }

    // update (dt) {}
}
