/*
 * @Description: 
 * @Version: 1.0
 * @Autor: liuhongbin
 * @Date: 2020-10-21 14:43:52
 * @LastEditors: liuhongbin
 * @LastEditTime: 2020-10-23 17:45:13
 */
enum EventName {
  // 游戏初始化
  GAME_UPDATE_PROGRESS = "game_update_progress",
  GAME_PAUSE_PROGRESS = "game_pause_progress",
  GAME_RESUME_PROGRESS = "game_resume_progress",
  GAME_CLOSE_LOADING = "game_close_loading",

  BACKGROUND = "on_background",
  FOREGROUND = "on_foreground",

  // // SOCKET
  // SOCKET_CONNECT = "SOCKET_CONNECT",
  // SOCKET_RECONNECT = "SOCKET_RECONNECT",
  // SOCKET_CLOSE = "SOCKET_CLOSE",
  // SOCKET_DISCONNECT = "SOCKET_DISCONNECT",    

  // 账号
  ACCOUNT_CHECK_ACCOUNT = "account_check_account",
  ACCOUNT_WEB_AUTH = "account_web_auth",
  ACCOUNT_PHONE_AUTH = "account_phone_auth",
  ACCOUNT_ON_LOGIN = "account_on_login",
  ACCOUNT_AUTH_FAIL = "account_auth_fail",
  ACCOUNT_SOCKET_PEM = "accountz_socket_pem",
  SWITCH_PHONE = "switch_phone",
  SWITCH_GUEST = "switch_guest",
  // 快手回调
  KUAISHOU_CALLBACK = "kuaishou_callback",

  // 大厅
  LOBBY_SHOW_MAIN = "lobby_show_main",
  LOBBY_SHOW_GUIDE = "lobby_show_guide",
  GET_PLAYER_INFO = "get_player_info",

  // 通用
  COMMON_DIALOG = "common_dialog",
  COMMON_ERR_INFO = "common_err_info",
  QUICK_START_GAME = "quick_start_game",
  NEED_AUTO_READY = "need_auto_ready",
  NO_FIT_SERVER = "no_fit_server",
  UPDATE_BET = "update_bet",
  DEAL_WITH_MONEY = "deal_with_money",

  // 房间
  ROOM_ENTER_FROM_LOBBY = "room_enter_from_lobby",
  ROOM_READY_TO_GAME = "room_ready_to_game",
  ROOM_READY_SUCC = "room_ready_succ",
  ROOM_CANCEL_GAME = "room_cancel_game",
  ROOM_JOIN_NOTIFY = "room_join_notify",
  ROOM_CONFIRM_REQ = "room_confirm_req",
  ROOM_ENTER_REQ = "room_enter_req",
  ROOM_ENTER_GAME = "room_enter_game",
  ROOM_EXIT_REQ = "room_exit_req",
  ROOM_EXIT_GAME = "room_exit_game",

  ROOM_ENTER_NOT = "room_enter_not",
  ROOM_LEAVE_NOT = "room_leave_not",

  ROOM_LIST_REQ = "room_list_req",
  ROOM_LIST_RSP = "room_list_rsp",

  // 服务器列表相关
  SERVER_LIST_REQ = "server_list_req",
  SERVER_LIST_RSP = "server_list_rsp",
  SERVER_UPDATE = "server_update",


  // 任务
  TASK_SHOW_MAIN = "task_show_main",

  // Vip
  VIP_SHOW_MAIN = "vip_show_main",
  SEND_VIP_SHOW_MAIN = "send_vip_show_main",
  
  // 四川麻将
  SCMJ_SHOW_MAIN = "scmj_show_main",

  // 签到
  SIGN_SHOW_MAIN = "sign_show_main",

  // 个人信息
  PERSONAL_SHOW_MAIN = "personal_show_main",
  GET_ITEM_NUM_REQ = "get_item_num_req",
  GET_ITEM_NUM_RSP = "get_item_num_rsp",

  // 活动
  ACTIVITY_SHOW_MAIN = "activity_show_main",
  ACTIVITY_SHOW_BCS = "activity_show_bcs",

  // 手机登录
  PHONE_SHOW_MAIN = "phone_show_main",

  // 商城
  SHOP_SHOW_MAIN = "shop_show_main",

  // 迎新礼
  WELCOME_GIFT_SHOW_MAIN = "welcome_gift_show_main",

  // 幸运转盘
  LOTTERY_SHOW_MAIN = "lottery_show_main",
  LOTTERY_CLOSE_MAIN = "lottery_close_main",

  // 救济金
  DISP_BROKEN_RELIEF_DIALOG = "disp_broken_relief_dialog",
  GET_RELIEF_INFO_REQ = "get_relief_info_req",
  UPT_RELIEF_AD_STATE_REQ = "upt_relief_ad_state_req",
  GET_RELIEF_AWARDS_REQ = "get_relief_awards_req",

  // 插件
  PLUGIN_ADS_CALLBACK = "PluginAdsCallBack",

  PRE_LOAD_SCMJ_PIC = "PreLoadScmjPic",
  BLOCK_UI = "blockUI",
  UN_BLOCK_UI = "unBlockUI",
  SHOW_AWARDS = "showAwards",
  SHOW_TIPS = "showTips",
  SHOW_SMALL_TIPS = "showSmallTips",
  SHOW_KEFU = "showKefu",
  SHOW_SETTING = "showSetting",
  CLOSE_SETTING = "closeSetting",
  SHOW_RULE = "showRule",
  DRAW_ICON_BY_ID = "drawIconById",

  REFRESH_ITEM_JINBI = "refresh_item_jinbi", // 刷新金币
  REFRESH_ITEM_DIAMOND = "refresh_item_diamond", // 刷新钻石
  REFRESH_ITEM_VIP_EXP = "refresh_item_vip_exp", // 刷新vip经验
  REFRESH_ITEM_LEVEL_EXP = "refresh_item_level_exp", // 刷新level经验
  REFRESH_ITEM_LEVEL = "refresh_item_level", // 刷新level等级
  REFRESH_ITEM_VIP = "refresh_item_vip", // 刷新vip等级
  REFRESH_ITEM_HEAD = "refresh_item_head", // 刷新vip等级
  REFRESH_ITEM_HEADFRAME = "refresh_item_headframe", // 刷新vip等级

  REFRESH_BIND_PHONE = "refresh_bind_phone", // 刷新绑定手机
  REFRESH_BTN_YXL = "refresh_btn_yxl", // 刷新迎新礼按钮

  PRE_LOAD_ACTIVITY_PIC = "pre_load_activity_pic", // 预加载活动资源
  PRE_LOAD_GIFT_PIC = "pre_load_gift_pic", // 预加载迎新礼资源
  PRE_LOAD_LOTTERY_PIC = "pre_load_lottery_pic", // 预加载转盘资源
  PRE_LOAD_PERSONAL_PIC = "pre_load_personal_pic", // 预加载个人信息资源
  PRE_LOAD_SIGN_PIC = "pre_load_sign_pic", // 预加载签到资源
  PRE_LOAD_TASK_PIC = "pre_load_task_pic", // 预加载任务资源
  PRE_LOAD_VIP_PIC = "pre_load_vip_pic", // 预加载vip资源
}

export enum AnalyticEvent {

}

export default class Constants {
  public static EventName = EventName
  public static AnalyticEvent = AnalyticEvent
}

export enum COMMON_CONSTANT{
  ITEM_JINBI = 0,         // 金币
  ITEM_DIAMOND = 1001,    // 钻石
  ITEM_VIP_EXP = 1002,    // vip经验
  ITEM_LEVEL_EXP = 1003,  // level经验
  ITEM_LEVEL = 1004,      // level
  ITEM_HEAD = 1005,       // 头像
  ITEM_HEAD_FRAME = 1006, // 头像框
  ITEM_VIP = 1007,    	// vip
  ITEM_ACTIV_VALUE = 1008,// 活跃值
}

export enum ITEM_ICON_URL{
    // 金豆icon
    ITEM_0_0 = "https://pictures.hiigame.com/ZhangXinMJ/jindou1-0.png",
    ITEM_0_1 = "https://pictures.hiigame.com/ZhangXinMJ/jindou1-1.png",
    ITEM_0_2 = "https://pictures.hiigame.com/ZhangXinMJ/jindou1-2.png",
    ITEM_0_3 = "https://pictures.hiigame.com/ZhangXinMJ/jindou1-3.png",
    ITEM_0_4 = "https://pictures.hiigame.com/ZhangXinMJ/jindou1-4.png",
    ITEM_0_5 = "https://pictures.hiigame.com/ZhangXinMJ/jindou1-5.png",
    ITEM_0_6 = "https://pictures.hiigame.com/ZhangXinMJ/jindou1-6.png",
    // 钻石icon
    ITEM_1001_0 = "https://pictures.hiigame.com/ZhangXinMJ/zuanshi1-0.png",
    ITEM_1001_1 = "https://pictures.hiigame.com/ZhangXinMJ/zuanshi1-1.png",
    ITEM_1001_2 = "https://pictures.hiigame.com/ZhangXinMJ/zuanshi1-2.png",
    ITEM_1001_3 = "https://pictures.hiigame.com/ZhangXinMJ/zuanshi1-3.png",
    ITEM_1001_4 = "https://pictures.hiigame.com/ZhangXinMJ/zuanshi1-4.png",
    ITEM_1001_5 = "https://pictures.hiigame.com/ZhangXinMJ/zuanshi1-5.png",
    ITEM_1001_6 = "https://pictures.hiigame.com/ZhangXinMJ/zuanshi1-6.png",
}