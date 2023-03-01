export namespace Sprite{
    export function setSpriteFrame(name: string | cc.Sprite | cc.Node, parent: cc.Node | cc.SpriteFrame | string, sprite: cc.SpriteFrame | string = null) {
        if (!sprite && !(parent instanceof cc.Node)) {
            sprite = parent
        }

        let updateFrame = (src) => {
            if (typeof name === "string" && parent instanceof cc.Node) {
                name = cc.find(name, parent)
            }
    
            if (name instanceof cc.Node && name.isValid) {
                name = name.getComponent(cc.Sprite)
            }
    
            if (!name || !(name instanceof cc.Sprite)) {
                return
            }

            name.spriteFrame = src
        }        

        if (typeof sprite === "string") {
            if (-1 !== sprite.indexOf("http://") || -1 !== sprite.indexOf("https://")){
                cc.assetManager.loadRemote(sprite, cc.SpriteFrame, (res) => updateFrame(res))
            } else {
                cc.assetManager.loadAny(sprite, cc.SpriteFrame, (res) => updateFrame(res))
            }
        } else if (sprite instanceof cc.SpriteFrame) {
            updateFrame(sprite)
        }
    }
}