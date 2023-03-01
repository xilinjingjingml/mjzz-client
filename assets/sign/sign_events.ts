export enum SIGN_EVENT{
    GET_SIGN_PROGRESS_REQ = "get_sign_progress_req",
    GET_SIGN_PROGRESS_RSP = "get_sign_progress_rsp",
    UPT_SIGN_AD_STATE_REQ = "upt_sign_ad_state_req",
    UPT_SIGN_AD_STATE_RSP = "upt_sign_ad_state_rsp",
    GET_SIGN_AWARD_REQ = "get_sign_award_req",
    GET_SIGN_AWARD_RSP = "get_sign_award_rsp",

    // 今日未签到
    AWARD_SIGN = "award_sign",
    // 今日已签到
    AWARD_SIGNED = "award_signed",
}