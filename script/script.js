var mJdx=0;
var mJdy=0;
var mJpx=0;
var mJpy=0;
var mJvel=10;
var mObdx=1;
var mObdy=1;
var mObpx=0;
var mObpy=0;
var mObvel=2;
var tecla;
var jog;
var obst1;

    jog=document.getElementById('jog');
    obst1=document.getElementById('obst1');
    document.addEventListener('keydown', teclaDw);
    window.addEventListener('keyup', teclaUp);
    timeMovePlayer = setInterval(enterFrame , 20);

    obst1=document.getElementById('obst1');
   // timeMoveObst=setInterval(moveObst, 20)


    moveObst();

function moveObst(){
    mObpy+= mObdy*mObvel; 
    obst1.style.top=mObpy+"px";
    if(mObpy > 520){
    mObdy=-1;
    console.log('dentro if'+ mObdy);

    }else if(mObpy <  0){
        mObdy=1;
        console.log('dentro else if' + mObdy);
    }
   

   anima=requestAnimationFrame(moveObst)
 
}

function teclaDw(){  
     tecla=event.key
    switch(tecla){
        case 'ArrowDown': 
            mJdy+=1;
        break;
        case 'ArrowUp':
            mJdy+=-1;           
        break;
        case 'ArrowRight':
            mJdx+=1;           
        break;
        case 'ArrowLeft' :
            mJdx+=-1          
             }    
}
function teclaUp(){
     tecla=event.key
    switch(tecla){
        case 'ArrowDown': 
            mJdy+=0;
        break;
        case 'ArrowUp':
            mJdy+=0;           
        break;
        case 'ArrowRight':
            mJdx+=0;           
        break;
        case 'ArrowLeft' :
            mJdx+=0;          
             }
             console.log(tecla);
}
function enterFrame(){
    mJpx=mJdx*mJvel;
    mJpy=mJdy*mJvel;
    jog.style.left = mJpx+'px';
    jog.style.top = mJpy+'px';
  
}



