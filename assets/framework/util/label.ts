export namespace Label{
    export function setLabelString(name: string | cc.Node, parent: cc.Node | string, msg: string = null) {
        if (!msg && typeof parent === "string") {
            msg = parent
        }

        if (typeof name === "string" && parent instanceof cc.Node) {
            name = cc.find(name, parent)
        }

        if (!(name instanceof cc.Node)) {
            return
        }

        let lbl = name.getComponent(cc.Label)
        lbl.string = msg
    }

    export function getLabelString(name: string | cc.Node, parent: cc.Node = null) : string {
        if (typeof name === "string" && parent instanceof cc.Node) {
            name = cc.find(name, parent)
        }

        if (!(name instanceof cc.Node)) {
            return
        }

        let lbl = name.getComponent(cc.Label)
        return lbl.string
    }
}