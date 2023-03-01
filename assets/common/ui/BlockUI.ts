/*
 * @Description: 
 * @Version: 1.0
 * @Autor: wangxinfeng
 * @Date: 2021-1-21
 * @LastEditors: wangxinfeng
 * @LastEditTime: 2021-1-21
 */

const {ccclass, property} = cc._decorator;

@ccclass
export default class BlockUI extends cc.Component {
  
  @property(cc.SpriteFrame)
  sptLoading: cc.SpriteFrame = null;

  // 播放转圈
  playAnimation() {
    let sRect 		= cc.rect(0,0,549,60)
    let size 		  = cc.size(61, 60)
    let offset 		= cc.v2(0, 0)
    let frames 		= []
    let texture   = this.sptLoading.getTexture()
    for (let i = 0; i < 9; ++i) {
      let orgPoint = sRect.origin
      let rect = cc.rect(orgPoint.x+i*size.width, 0, size.width,size.height)
      frames[i] = new cc.SpriteFrame(texture, rect, false, offset, size)  
    }
    let nodeLoading = new cc.Node();
    nodeLoading.name = 'NodeLoading';
    let sprite = nodeLoading.addComponent(cc.Sprite);
    sprite.spriteFrame = frames[0]
    nodeLoading.parent = this.node;
    let animation = nodeLoading.addComponent(cc.Animation);
    let clip = cc.AnimationClip.createWithSpriteFrames(frames, 9);
    clip.name = 'anim_loading';
    clip.wrapMode = cc.WrapMode.Loop;
    clip.speed = 2
    animation.addClip(clip)
    animation.play("anim_loading")
  }

  // LIFE-CYCLE CALLBACKS:
  onLoad () {
    console.log("BlockUI onLoad")
    // this.scheduleOnce(()=>{
      this.playAnimation()
    // }, 1.0)
  }

  start () {

  }

  // update (dt) {}
}
