function to_graph(last_value,v,v_max){
    var s=document.getElementById("sound_canvas");
    var s_c=s.getContext("2d");

    s_c.fillRect(v*(800/v_max), last_value*3.3, 5, 5);

    if(v>=v_max-0.1){s_c.clearRect(0,0,800,300);}

    console.log(last_value);
}