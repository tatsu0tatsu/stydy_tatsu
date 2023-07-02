const Audio_ctx = new AudioContext();
const VOLUME = 0.1;
const gainNode = Audio_ctx.createGain();
gainNode.gain.value = VOLUME;

Audio_flag=true;

function sounds(sound_value){
    if(!Audio_flag){
        oscillator.stop();
        Audio_flag=true;
  
    }
        oscillator=Audio_ctx.createOscillator();
        oscillator.type = "triangle";
        oscillator.frequency.setValueAtTime(sound_value, Audio_ctx.currentTime);
        oscillator.connect(gainNode).connect(Audio_ctx.destination);
        oscillator.start();
        Audio_flag=false;
}

function sounds_stop(){
    oscillator.stop();
}