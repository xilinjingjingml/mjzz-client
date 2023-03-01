import BaseUi from "../../framework/base/baseUI";
import { izx } from "../../framework/izx";
import Constants from "../../common/constants";

const {ccclass, property} = cc._decorator;

interface MsgBoxParam {
    title?: string
    msg?: string
    mask?: boolean
    maskClose?: boolean
    buttonNum?: number
    confirm?: Function
    cancel?: Function
}

@ccclass
export default class MsgBox extends BaseUi {
    onOpen() {
        
    }

    onClose() {

    }
}