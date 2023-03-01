export namespace Utils {    
    // 比较字符串版本
    export function versionCompare(versionA: string, versionB: string): number {
      versionA = versionA || "0.0.0"
      const vA = versionA.split('.')
      versionB = versionB || "0.0.0"
      const vB = versionB.split('.')
      for (let i = 0; i < vA.length; ++i) {
          const a = parseInt(vA[i])
          const b = parseInt(vB[i] || '0')
          if (a === b) {
              continue
          } else {
              return a - b
          }
      }
      if (vB.length > vA.length) {
          return -1
      } else {
          return 0
      }
    }

    export function numberFormat(num: number) {
        let strNum = "" + num
        let len = strNum.length
        let head = parseInt(strNum.substr(0, 3))
        let point = len % 3 
        point = point === 0 ? 3 : point
        let strHead = "" + head / Math.pow(10, (3 - point))
        if (len / 3 > 4)
            return strHead + "T"
        else if (len / 3 > 3)
            return strHead + "B"
        else if (len / 3 > 2)
            return strHead + "M"
        else if (len / 3 > 1)
            return strHead + "K"
        return strNum
    }

    //保留2位小数，如：2，还会保留2 不会补0
    export function toDecimal2NoZero(x) {
      var f = Math.round(x * 100) / 100;
      var s = f.toString();
      return s;
    }

    // 数字转换
    export function numberFormat2(value) {
      let param = null;
      param = {}
      let k = 10000,
          sizes = ['', '万', '亿', '万亿'],
          i;
      if(value < k){
          param.value =value
          param.unit=''
      }else{
          i = Math.floor(Math.log(value) / Math.log(k)); 
    
          param.value = ((value / Math.pow(k, i))).toFixed(2);
          param.value = toDecimal2NoZero(param.value)
          param.unit = sizes[i];
      }
      return param.value + param.unit;
    }

    // 数字转换
    export function numberFormat3(value) {
      let param = null;
      param = {}
      let k = 10000,
          sizes = ['', 'w', 'y', 'wy'],
          i;
      if(value < k){
          param.value =value
          param.unit=''
      }else{
          i = Math.floor(Math.log(value) / Math.log(k)); 
    
          param.value = ((value / Math.pow(k, i))).toFixed(2);
          param.value = toDecimal2NoZero(param.value)
          param.unit = sizes[i];
      }
      return param.value + param.unit;
    }


    export function getComponent<T extends cc.Component>(name: string | cc.Node, parent?: cc.Node | {prototype: T}, type?: {prototype: T}): T | undefined {
        if (typeof name === "string" && parent instanceof cc.Node) {
            name = cc.find(name, parent)
        }

        if (!(name instanceof cc.Node)) {
            return
        }

        if (!type && !(parent instanceof cc.Node)) {
            type = parent
        }
        
        return name.getComponent(type)
    }

    export function setPosition(name: string | cc.Node, parent?: cc.Node | cc.Vec2 | cc.Vec3, position?: cc.Vec2 | cc.Vec3 ) {
        if (!position && (parent instanceof cc.Vec2 || parent instanceof cc.Vec3)) {
            position = parent
        }

        if (typeof name === "string" && parent instanceof cc.Node) {
            name = cc.find(name, parent)
        }

        if (!(name instanceof cc.Node)) {
            return
        }

        name.position = cc.v3(position)
    }

    export function checkPhone (phone: string) {
        if (!phone || phone == '') {
            return {pass:false, tip:'手机号不能为空'};
        }
        if (!/^1(3|4|5|6|7|8)\d{9}$/.test(phone)) {
            return {pass:false, tip:'手机号格式不正确'};
        } else {
            return {pass:true, tip:''};
        }
    }

    export function GetLevelNeedExp(level) {
        if (level <= 0) {
            return 0
        } else if (level == 1) {
            return 20
        } else {
            return 20 * (level - 1)
        }
    }
    
    export function GetLevelMaxExp(level) {
        if (level <= 0) {
            return 0
        } else if (level == 1) {
            return 20
        } else {
            return this.GetLevelMaxExp(level-1) + this.GetLevelNeedExp(level)
        }
    }

    export function hex2color(hexColor: string) {
      const hex = hexColor.replace(/^#?/, "0x");
      const c = parseInt(hex);
      const r = c >> 16;
      const g = (65280 & c) >> 8;
      const b = 255 & c;
      return cc.color(r, g, b, 255);
    }
    
    export function isDialect() {
      let dialect = cc.sys.localStorage.getItem("soundDialect")
      if (!dialect || dialect != "1") {
        dialect = 0
      } else {
        dialect = 1
      }
      return dialect
    }

    export function setDialect(dialect) {
      cc.sys.localStorage.setItem("soundDialect", dialect)
    }
}