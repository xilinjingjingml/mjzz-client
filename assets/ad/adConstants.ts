export enum AdPos {
  Shop = 1,
  SignDouble = 2,
  Signreplenish = 3,
  NewerGift = 4,
  Vip = 5,
  Wheel = 6,
  ChangeStartGame = 7,
  LoseFree = 8,
  HaiDiLaoYue = 9,
  BrokenRelief = 10,
  LackMoney = 11,
  BaiCaiShen = 12,
}

export enum AdState {
  OrderInit,     // 初始化
	OrderCancel,   // 中途取消广告
	OrderFinish,   // 已看完广告
	OrderComplete, // 已领奖
}

export enum AdPlugin {
  AdsTTAds = 1, // 穿山甲广告
	AdsQQAds,     // 腾讯广告
  AdsWechat,    // 微信广告 
}

