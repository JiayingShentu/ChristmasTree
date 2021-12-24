
function run(){
    var ctx = document.getElementById('scene').getContext('2d');
    var x0=250,y0=100;
    //红色丝带
    for(var i=0;i<5.6*Math.PI;i+=0.02){
        if(Math.sin(i-Math.PI/2)>-0.1){
            ctx.stroke();
            ctx.beginPath();
            ctx.strokeStyle="#ff0000";
        }
        else{
            ctx.stroke();
            ctx.beginPath();
            ctx.strokeStyle="#660000";
        }
        
        ctx.moveTo(x0+8*i*Math.sin(i-0.01),y0+20*(i-0.01));
        ctx.lineTo(x0+8*i*Math.sin(i),y0+20*i);
    }
    //绿色丝带
    for(var i=0;i<11/2*Math.PI;i+=0.02){
        if(Math.sin(i-Math.PI/2)>-0.05){
            ctx.stroke();
            ctx.beginPath();
            ctx.strokeStyle="#00ffcc";
        }
        else{
            ctx.stroke();
            ctx.beginPath();
            ctx.strokeStyle="#003300";
        }
        
        ctx.moveTo(x0-8*i*Math.sin(i-0.01),y0+20*(i-0.01));
        ctx.lineTo(x0-8*i*Math.sin(i),y0+20*i);
    }
    //小星星
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle="#ffff8f";
    for(var angle=0;angle<2*Math.PI;angle+=2/5*Math.PI){
        ctx.moveTo(250-10*Math.sin(angle),100-10*Math.cos(angle));
        ctx.lineTo(250-6*Math.sin(angle+1/5*Math.PI),100-6*Math.cos(angle+1/5*Math.PI));
        ctx.lineTo(250-10*Math.sin(angle+2/5*Math.PI),100-10*Math.cos(angle+2/5*Math.PI));
    }
    ctx.stroke();
    


    

    
    
}