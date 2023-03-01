import { izx } from "../framework/izx";
import { AudioConfig } from "./scmjAudioConfig";
import { scmjUtil } from "./scmjUtil";

export namespace ScmjAudioUtil {

	export function playMusic(name) {
    if (!AudioConfig.audio_sounds_table['sound'][name]) {
      return false
    }
    let audioUrl = this.addSoundPath(AudioConfig.audio_sounds_table['sound'][name])
    scmjUtil.loadRes(audioUrl, (res) => {
      if (!res) {
        cc.log(res)
      }else {
        cc.audioEngine.playMusic(res, true)
      }
    });
  }
  
  export function stopBackground() {
    cc.audioEngine.stopMusic()
	}

	export function playSound(name, sex = null) {
		if (sex != null) {
			var sexname = name + ((sex == 1) ? 'woman' : 'man')
			if (this.ccPlaySound(sexname)) {
				return
			}
		}
		this.ccPlaySound(name)
	}
	
	export function playBackground() {
    this.stopBackground()
		this.playMusic('bg_music')
	}

	
	export function ccPlaySound(audioName) {		
    if (!AudioConfig.audio_sounds_table['sound'][audioName]) {
      return false
    }
    let audioUrl = this.addSoundPath(AudioConfig.audio_sounds_table['sound'][audioName])
    let dialect = izx.utils.isDialect()
    if (dialect == 1) {
      audioUrl = audioUrl.replace("sounds/normal/", "sounds/dialect/")
    }
    scmjUtil.loadRes(audioUrl, (res) => {
      if (!res) {
        cc.log(res)
      }else {
        cc.audioEngine.playEffect(res, false)
      }
    });
    return true
  }
    
  export function addSoundPath(path) {
    return path
	}
}