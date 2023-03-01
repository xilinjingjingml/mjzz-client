export enum SCMJ_EVENT{
  INIT_USER_DATA = "scmj_init_user_data",
  ENTER_SCMJ = "scmj_enter_scmj",
  ENTER_ACK = "scmj_enter_ack",
  ENTER_NOTI = "scmj_enter_noti",
  EXIT_NOTI = "scmj_exit_noti",
  READY_REQ = "scmj_ready_req",
  READY_RSP = "scmj_ready_rsp",
  READY_NOTI = "scmj_ready_noti",
  BEGIN_GAME_NOTI = "scmj_begin_game_noti",
  SET_BANKER_NOTI = "scmj_set_banker_noti",
  UPDATE_CARDS_NOTI = "scmj_update_cards_noti",
  OPERATE_NOTI = "scmj_operate_noti",
  OPERATE_REQ = "scmj_operate_req",
  OPERATE_RSP = "scmj_operate_rsp",
  CLIENT_TIMER_NOTI = "scmj_client_timer_noti",
  RESULT_NOTI = "scmj_result_noti",
  LACK_REQ = "scmj_lack_req",
  LACK_RSP = "scmj_lack_rsp",
  LACK_NOTI = "scmj_lack_noti",
  MJ_PLAY_MARK_NOTI = "scmj_mj_play_mark_noti",
  BILL_REQ = "scmj_bill_req",
  BILL_RSP = "scmj_bill_rsp",
  SCORE_CHANGE_NOTI = "scmj_score_change_noti",
  COMPLETE_REQ = "scmj_complete_req",
  COMPLETE_NOTI = "scmj_complete_noti",
  AUTO_REQ = "scmj_auto_req",
  AUTO_NOTI = "scmj_auto_noti",
  CHANGE_REQ = "scmj_change_req",
  CHANGE_RSP = "scmj_change_rsp",
  CHANGE_NOTI = "scmj_change_noti",
  CHANGE_CARD_START_REQ = "scmj_change_card_start_req",
  TING_TIP_REQ = "scmj_ting_tip_req",

  STATE_NONE = "scmj_state_none",
  RESET_USER_DATA = "scmj_reset_user_data",
  
  // main使用
  EXIT_ROOM = "SCMJ_EXIT_ROOM",
  SHOW_TING_TIP = "SCMJ_SHOW_TING_TIP",
  SHOW_AUTO_HU = "SCMJ_SHOW_AUTO_HU",
  SHOW_MATCHING = "SCMJ_SHOW_MATCHING",
  SHOW_BTN_READY = "SCMJ_SHOW_BTN_READY",
  CHANEG_STATE = "SCMJ_CHANEG_STATE",
  
  // 头像使用
  UPDATE_HEAD_READY = "SCMJ_UPDATE_HEAD_READY",
  UPDATE_HEAD_BANKER = "SCMJ_UPDATE_HEAD_BANKER",
  UPDATE_HEAD_SCORE = "SCMJ_UPDATE_HEAD_SCORE",
  UPDATE_HEAD_LACK = "SCMJ_UPDATE_HEAD_LACK",
  SHOW_HEAD = "SCMJ_SHOW_HEAD",

  // mjlayer使用
  UPDATE_MJLAYER_CARDS = "SCMJ_UPDATE_MJLAYER_CARDS",
  UPDATE_MJPLAY_MARK = "SCMJ_UPDATE_MJPLAY_MARK",
  UPDATE_LACK_CARDS = "SCMJ_UPDATE_LACK_CARDS",
  UPDATE_TING_MARKS = "SCMJ_UPDATE_TING_MARKS",

  // 动画使用
  ANI_PLAY_CARD = "SCMJ_ANI_PLAY_CARD",
  ANI_MOPAI = "SCMJ_ANI_MOPAI",
  ANI_SCORE_CHANGE = "SCMJ_ANI_SCORE_CHANGE",
  ANI_CPGH = "SCMJ_ANI_CPGH",
  SHOW_LOSE = "SCMJ_SHOW_LOSE",

  // touch使用
  ENABLE_PLAY_CARD = "SCMJ_ENABLE_PLAY_CARD",

  // operate使用
  OP_PLAY = "SCMJ_OP_PLAY",
  OP_CPGH = "SCMJ_OP_CPGH",
  OP_HIDE = "SCMJ_OP_HIDE",
  OP_LACK = "SCMJ_OP_LACK",
  OP_AUTO = "SCMJ_OP_AUTO",
  OP_CHANGE = "SCMJ_OP_CHANGE",

  // timer使用
  UPDATE_TIMER = "SCMJ_UPDATE_TIMER",
  UPDATE_EAST = "SCMJ_UPDATE_EAST",

  // 账单使用
  UPDATE_BILL = "SCMJ_UPDATE_BILL",

  // 结算使用
  UPDATE_RESULT = "SCMJ_UPDATE_RESULT",

  // 新手引导使用
  GUIDE_HIDE = "SCMJ_GUIDE_HIDE",
  GUIDE_LACK = "SCMJ_GUIDE_LACK",
  GUIDE_PLAY = "SCMJ_GUIDE_PLAY",
  GUIDE_GANG = "SCMJ_GUIDE_GANG",
  GUIDE_HU = "SCMJ_GUIDE_HU",
  GUIDE_HU2 = "SCMJ_GUIDE_HU2"
}