import { izx } from "../izx"

export namespace ToJava {
  // 调用java方法
  export function callStaticMethod(clsName: string, methodName: string, methodSig?: string, params: any[] = []): any {
    cc.log("callStaticMethod clsName = ", clsName, " methodName = ", methodName, " methodSig = ", methodSig)
    if (!CC_JSB) {
      return
    }
    try {
      methodSig && params.unshift(methodSig)
      cc.log("callStaticMethod.apply")
      return jsb.reflection.callStaticMethod.apply(jsb.reflection, [clsName, methodName].concat(params))
    } catch (error) {
      cc.log("callStaticMethod", JSON.stringify(error))
    }
  }
}