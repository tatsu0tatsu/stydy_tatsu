var goodmove_value=0;
var mymove_value=0;
var last_value=0;

var v = document.getElementById('v');
var v_canvas=document.getElementById('c');
var v_context=v_canvas.getContext("2d");

function goodmove()
{
    v.muted = true;
    v.loop=true;
    var v_flag=0;

    v.addEventListener('play', function() {
        console.log("start");
        const intervalId=setInterval(()=>{
            v_pri(v);
            if(v_flag==1){
                clearInterval(intervalId);
        }},100);
    })

    v.addEventListener('ended', function() {
        console.log("end");
        v_flag=1;
    })
    v.play();
}

function v_pri(v){
    pose1.send({image:v});
}

function onResults1(results) {
    if(results.poseLandmarks!=undefined){
        var point1=[results.poseLandmarks[13].x,results.poseLandmarks[13].y];
        var point2=[results.poseLandmarks[11].x,results.poseLandmarks[11].y];
        var point3=[results.poseLandmarks[23].x,results.poseLandmarks[23].y];
        
        var va=[point1[0]-point2[0],point1[1]-point2[1]];
        var vb=[point3[0]-point2[0],point3[1]-point2[1]];

        var dot=va[0]*vb[0]+va[1]*vb[1];
        var absa=Math.sqrt(va[0]*va[0]+va[1]*va[1]);
        var absb=Math.sqrt(vb[0]*vb[0]+vb[1]*vb[1]);

        var ans=Math.acos(dot/(absa*absb))*(180 / Math.PI);
        goodmove_value=ans;
        last_value=Math.abs(mymove_value-goodmove_value);
        to_graph(last_value,v.currentTime,v.duration);
    }

    v_context.save();
    v_context.clearRect(0, 0, v_canvas.width, v_canvas.height);
    v_context.drawImage(results.image, 0, 0, v_canvas.width, v_canvas.height);
    drawConnectors(v_context, results.poseLandmarks, POSE_CONNECTIONS, {color: '#ffffff', lineWidth: 4});
    drawLandmarks(v_context, results.poseLandmarks,{color: '#ffddff', lineWidth: 2});
     v_context.restore();
}

const pose1 = new Pose({locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
}});

pose1.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: true,
      smoothSegmentation: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
});

pose1.onResults(onResults1);


const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');
const camera = new Camera(videoElement, {
    onFrame: async () => {
        await pose.send({image: videoElement});
    },
      width: 360,
      height: 440
});

function start(){
    console.log("start");
    camera.start();
    
}function stop(){
    console.log("stop");
    v.loop=false;
    v.currentTime=14.5;
    camera.stop();
}

function onResults(results) {
    if(results.poseLandmarks!=undefined){
    
    var point1=[results.poseLandmarks[13].x,results.poseLandmarks[13].y];
    var point2=[results.poseLandmarks[11].x,results.poseLandmarks[11].y];
    var point3=[results.poseLandmarks[23].x,results.poseLandmarks[23].y];
    
    var va=[point1[0]-point2[0],point1[1]-point2[1]];
    var vb=[point3[0]-point2[0],point3[1]-point2[1]];

    var dot=va[0]*vb[0]+va[1]*vb[1];
    var absa=Math.sqrt(va[0]*va[0]+va[1]*va[1]);
    var absb=Math.sqrt(vb[0]*vb[0]+vb[1]*vb[1]);

    var ans=Math.acos(dot/(absa*absb))*(180 / Math.PI);
    mymove_value=ans;



 }

  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
  drawConnectors(canvasCtx, results.poseLandmarks, POSE_CONNECTIONS, {color: '#ffffff', lineWidth: 4});
  drawLandmarks(canvasCtx, results.poseLandmarks, {color: '#ffddff', lineWidth: 2});
  canvasCtx.restore();
}

const pose = new Pose({locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
}});
pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: true,
      smoothSegmentation: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
});
pose.onResults(onResults);