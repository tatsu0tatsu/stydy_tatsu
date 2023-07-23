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

const Audio_ctx3 = new AudioContext();
const gainNode3 = Audio_ctx3.createGain();
gainNode3.gain.value = VOLUME;
nodeflag3=0;

const Audio_ctx4 = new AudioContext();
const gainNode4 = Audio_ctx4.createGain();
gainNode4.gain.value = VOLUME;
nodeflag4=0;


const Audio_ctx5 = new AudioContext();
const gainNode5 = Audio_ctx5.createGain();
gainNode5.gain.value = VOLUME;
nodeflag5=0;

const Audio_ctx6 = new AudioContext();
const gainNode6 = Audio_ctx6.createGain();
gainNode6.gain.value = VOLUME;
nodeflag6=0;

const Audio_ctx7 = new AudioContext();
const gainNode7 = Audio_ctx7.createGain();
gainNode7.gain.value = VOLUME;
nodeflag7=0;

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
    if(typeof(oscillator0)!="undefined"){
        oscillator0.stop();
        nodeflag0=0;
    }
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
    if(typeof(oscillator1)!="undefined"){
    oscillator1.stop();
    nodeflag1=0;
    }
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
    if(typeof(oscillator2)!="undefined"){
    oscillator2.stop();
    nodeflag2=0;
    }
}

function sounds3(sound_value){
    console.log(nodeflag3);
    if(nodeflag3==0){
        oscillator3=Audio_ctx3.createOscillator();
        oscillator3.type = "triangle";
        oscillator3.frequency.setValueAtTime(sound_value, Audio_ctx3.currentTime);
        oscillator3.connect(gainNode3).connect(Audio_ctx3.destination);
        oscillator3.start();
        nodeflag3=1;
    }else{
        console.log("重複");
    }
}
function sounds_stop3(){
    if(typeof(oscillator3)!="undefined"){
    oscillator3.stop();
    nodeflag3=0;
    }
}

function sounds4(sound_value){
    console.log(nodeflag4);
    if(nodeflag4==0){
        oscillator4=Audio_ctx4.createOscillator();
        oscillator4.type = "triangle";
        oscillator4.frequency.setValueAtTime(sound_value, Audio_ctx4.currentTime);
        oscillator4.connect(gainNode4).connect(Audio_ctx4.destination);
        oscillator4.start();
        nodeflag4=1;
    }else{
        console.log("重複");
    }
}
function sounds_stop4(){
    if(typeof(oscillator4)!="undefined"){
    oscillator4.stop();
    nodeflag4=0;
    }
}

function sounds5(sound_value){
    console.log(nodeflag5);
    if(nodeflag5==0){
        oscillator5=Audio_ctx5.createOscillator();
        oscillator5.type = "triangle";
        oscillator5.frequency.setValueAtTime(sound_value, Audio_ctx5.currentTime);
        oscillator5.connect(gainNode5).connect(Audio_ctx5.destination);
        oscillator5.start();
        nodeflag5=1;
    }else{
        console.log("重複");
    }
}
function sounds_stop5(){
    if(typeof(oscillator5)!="undefined"){
    oscillator5.stop();
    nodeflag5=0;
    }
}

function sounds6(sound_value){
    console.log(nodeflag6);
    if(nodeflag6==0){
        oscillator6=Audio_ctx6.createOscillator();
        oscillator6.type = "triangle";
        oscillator6.frequency.setValueAtTime(sound_value, Audio_ctx6.currentTime);
        oscillator6.connect(gainNode6).connect(Audio_ctx6.destination);
        oscillator6.start();
        nodeflag6=1;
    }else{
        console.log("重複");
    }
}
function sounds_stop6(){
    if(typeof(oscillator6)!="undefined"){
    oscillator6.stop();
    nodeflag6=0;
    }
}

function sounds7(sound_value){
    console.log(nodeflag7);
    if(nodeflag7==0){
        oscillator7=Audio_ctx7.createOscillator();
        oscillator7.type = "triangle";
        oscillator7.frequency.setValueAtTime(sound_value, Audio_ctx7.currentTime);
        oscillator7.connect(gainNode7).connect(Audio_ctx7.destination);
        oscillator7.start();
        nodeflag7=1;
    }else{
        console.log("重複");
    }
}
function sounds_stop7(){
    if(typeof(oscillator7)!="undefined"){
    oscillator7.stop();
    nodeflag7=0;
    }
}