var jogDireX=0;
var jogDireY=25;
var jogPosiX=0;
var jogPosiY=0;
var jogVel=10;



var obstDireX=1;
var obstDireY=1;
var obstPosiX=0;
var obstPosiY=0;
var obstVel=2;

var obst2DireX=1;
var obst2DireY=1;
var obst2PosiX=0;
var obst2PosiY=520;
var obst2Vel=2;
/*
var obst3DireX=1;
var obst3DireY=1;
var obst3PosiX=0;
var obst3PosiY=0;
var obst3Vel=2;

var obst4DireX=1;
var obst4DireY=1;
var obst4PosiX=0;
var obst4PosiY=520;
var obst4Vel=2;
*/
var tecla;
var jog;
var obst1;
var obst2;

    jog=document.getElementById('jog');
    obst1=document.getElementById('obst1');
    obst2=document.getElementById('obst2');
    obst3=document.getElementById('obst3');
    obst4=document.getElementById('obst4');
    obst5=document.getElementById('obst5');
    obst6=document.getElementById('obst6');
    obst7=document.getElementById('obst7');

    document.addEventListener('keydown', teclaDw);
    window.addEventListener('keyup', teclaUp);
    timeMovePlayer = setInterval(enterFrame , 20);

    obst1=document.getElementById('obst1');
   // timeMoveObst=setInterval(moveObst, 20)


    moveObst();
    moveObst2();/*
    moveObst3();
    moveObst4();
*/
function moveObst(){
    obstPosiY+= obstDireY*obstVel; 
    obst1.style.top=obstPosiY+"px";
    obst3.style.top=obstPosiY+"px";
    obst5.style.top=obstPosiY+"px";
    obst7.style.top=obstPosiY+"px";
    if(obstPosiY > 520){
    obstDireY=-1;
 

    }else if(obstPosiY <  0){
        obstDireY=1;
       
       
    }
   
   anima=requestAnimationFrame(moveObst)
 }

 function moveObst2(){
    
    obst2PosiY+= obst2DireY*obst2Vel; 
    obst2.style.top=obst2PosiY+"px";
    obst4.style.top=obst2PosiY+"px";
    obst6.style.top=obst2PosiY+"px";
    obst8.style.top=obst2PosiY+"px";
    
    if(obst2PosiY > 520){
    obst2DireY=-1;
    

    }else if(obst2PosiY <  0){
        obst2DireY=1;
       
    }
   
   anima=requestAnimationFrame(moveObst2)
 }
/*
 function moveObst3(){
    obst3PosiY+= obst3DireY*obst3Vel; 
    obst3.style.top=obst3PosiY+"px";
    if(obst3PosiY > 520){
    obst3DireY=-1;
    console.log('dentro if'+ obst3DireY);

    }else if(obst3PosiY <  0){
        obst3DireY=1;
        console.log('dentro else if' + obst3PosiY);
        
    }
   
   anima=requestAnimationFrame(moveObst3)
 }

 function moveObst4(){
    
    obst4PosiY+= obst4DireY*obst4Vel; 
    obst4.style.top=obst4PosiY+"px";
    if(obst4PosiY > 520){
    obst4DireY=-1;
    console.log('dentro isf'+ obst4DireY);

    }else if(obst4PosiY <  0){
        obst4DireY=1;
        console.log('dentro else if' + obst4PosiY);
    }
   
   anima=requestAnimationFrame(moveObst4)
 }*/

function teclaDw(){  
     tecla=event.key
    switch(tecla){
        case 'ArrowDown': 
            jogDireY+=1;
        break;
        case 'ArrowUp':
            jogDireY+=-1;           
        break;
        case 'ArrowRight':
            jogDireX+=1;           
        break;
        case 'ArrowLeft' :
            jogDireX+=-1   
        break;
        case 'Arrowleft' & 'ArrowDown':
            jogDireX+=-1 
            jogDireY+=1;
        break;
        case 'ArrowRight' & 'ArrowDown':
            jogDireX+=1;
            jogDireY+=1;
        break;
        case 'Arrowleft' & 'ArrowUp':
            jogDireX+=-1
            jogDireY+=-1; 
            
        break;
        case 'ArrowRight' & 'ArrowUp':
            jogDireX+=1;
            jogDireY+=-1; 
        break;
             
             }    
             console.log(tecla);
}
function teclaUp(){
     tecla=event.key
    switch(tecla){
        case 'ArrowDown': 
        jogDireY+=0;
        break;
        case 'ArrowUp':
         jogDireY+=0;           
        break;
        case 'ArrowRight':
         jogDireX+=0;           
        break;
        case 'ArrowLeft' :
            jogDireX+=0;          
             }
            
}
function enterFrame(){
    var positionJ = jogPosiX + jogPosiY
var positionOb = obstPosiX + obstPosiY
    if(positionJ == positionOb){
        
    }
    jogPosiX=jogDireX*jogVel;
    jogPosiY=jogDireY*jogVel;
    
    jog.style.left = jogPosiX+'px';
    jog.style.top = jogPosiY+'px';
  
}



