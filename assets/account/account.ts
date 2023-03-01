import Login from "./mode/login"
import { izx } from "../framework/izx"
import Constants from "../common/constants"
import Auth from "./mode/auth"

export default class Account {
    static _instacne: Account = null
    static getInstance(): Account {
        if (!Account._instacne) {
            Account._instacne = new Account()
            Account._instacne._init()
        }

        return Account._instacne
    }    

    _auth: Auth = null
    _login: Login = null

    private _init() {
        // 初始化账号系统
        this._auth = new Auth()
        this._login = new Login()

        izx.on(Constants.EventName.ACCOUNT_CHECK_ACCOUNT, this.checkAccount, this)
        izx.on(Constants.EventName.ACCOUNT_WEB_AUTH, this.login, this)
        izx.on(izx.SOCKET_CONNECT, this._login.LoginReq, this._login)
    }

    checkAccount() {
        this._auth.authLogin()
    }

    login() {
        izx.log("socket login")
        this._login.login()
    }
}

let account = Account.getInstance()