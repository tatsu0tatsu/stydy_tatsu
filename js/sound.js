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


const Audio_ctx0 = new AudioContext();
const gainNode0 = Audio_ctx0.createGain();
gainNode0.gain.value = VOLUME;
nodeflag0=0;

const Audio_ctx1 = new AudioContext();
const gainNode1 = Audio_ctx1.createGain();
gainNode1.gain.value = VOLUME;
nodeflag1=0;

const Audio_ctx2 = new AudioContext();
const gainNode2 = Audio_ctx2.createGain();
gainNode2.gain.value = VOLUME;
nodeflag2=0;

function sounds0(sound_value){
    console.log(nodeflag0);
    if(nodeflag0==0){
        oscillator0=Audio_ctx0.createOscillator();
        oscillator0.type = "triangle";
        oscillator0.frequency.setValueAtTime(sound_value, Audio_ctx0.currentTime);
        oscillator0.connect(gainNode0).connect(Audio_ctx0.destination);
        oscillator0.start();
        nodeflag0=1;
    }else{
        console.log("重複");
    }
}
function sounds_stop0(){
    oscillator0.stop();
    nodeflag0=0;
}

function sounds1(sound_value){
    console.log(nodeflag1);
    if(nodeflag1==0){
        oscillator1=Audio_ctx1.createOscillator();
        oscillator1.type = "triangle";
        oscillator1.frequency.setValueAtTime(sound_value, Audio_ctx1.currentTime);
        oscillator1.connect(gainNode1).connect(Audio_ctx1.destination);
        oscillator1.start();
        nodeflag1=1;
    }else{
        console.log("重複");
    }
}
function sounds_stop1(){
    oscillator1.stop();
    nodeflag1=0;
}

function sounds2(sound_value){
    console.log(nodeflag2);
    if(nodeflag2==0){
        oscillator2=Audio_ctx2.createOscillator();
        oscillator2.type = "triangle";
        oscillator2.frequency.setValueAtTime(sound_value, Audio_ctx2.currentTime);
        oscillator2.connect(gainNode2).connect(Audio_ctx2.destination);
        oscillator2.start();
        nodeflag2=1;
    }else{
        console.log("重複");
    }
}
function sounds_stop2(){
    oscillator2.stop();
    nodeflag2=0;
}