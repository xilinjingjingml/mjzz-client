import { izx } from "../framework/izx";
import Constants from "../common/constants";
import ShopMode from "./mode/shopMode";
import proto = require("./protos/shop_proto")

// bundleName
const GAME_BUNDLE_NAME = "shop"

export default class Shop {
    private static _instance: Shop
    static getInstance(): Shop {
        if (!Shop._instance) {
            Shop._instance = new Shop()
            Shop._instance._init()
        }

        return Shop._instance
    }

    private _shopMode: ShopMode = new ShopMode()

    private _init() {
        izx.setProto("shop", proto)
        izx.on(Constants.EventName.SHOP_SHOW_MAIN, this.ShowShop, this)
    }

    private ShowShop(msg) {
        izx.dispatchEvent(Constants.EventName.BLOCK_UI)
        izx.pushDialog(GAME_BUNDLE_NAME, "prefabs/ShopMain", (res) => {
            izx.dispatchEvent(Constants.EventName.UN_BLOCK_UI)
        })
    }
}

let shop = Shop.getInstance()