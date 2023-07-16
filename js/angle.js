function ang(bodydata,body_count,points){
    var point1=[bodydata[body_count][points[0]*2],bodydata[body_count][points[0]*2+1]];
    var point2=[bodydata[body_count][points[1]*2],bodydata[body_count][points[1]*2+1]];
    var point3=[bodydata[body_count][points[2]*2],bodydata[body_count][points[2]*2+1]];
    
    var va=[point1[0]-point2[0],point1[1]-point2[1]];
    var vb=[point3[0]-point2[0],point3[1]-point2[1]];
    
    var dot=va[0]*vb[0]+va[1]*vb[1];
    var absa=Math.sqrt(va[0]*va[0]+va[1]*va[1]);
    var absb=Math.sqrt(vb[0]*vb[0]+vb[1]*vb[1]);
    
    var ans=Math.acos(dot/(absa*absb))*(180 / Math.PI);

    return ans;
}
