var dx ;
var dy ;
var px ;
var py ;
var vel;
var tecla;

function inicio(){
     dx= 0 ;
     dy= 0 ;
     px= 0 ;
     py= 0 ;
    vel= 10;
    obj=document.getElementById('obst1');
    document.addEventListener('keydown', teclaDw);
    window.addEventListener('keyup', teclaUp);
    tmp = setInterval(enterFrame , 20);
}
function teclaDw(){
     tecla=event.key
    switch(tecla){
        case 'ArrowDown': 
            dy+=1;
        break;
        case 'ArrowUp':
            dy+=-1;           
        break;
        case 'ArrowRight':
            dx+=1;           
        break;
        case 'ArrowLeft' :
            dx+=-1          
             }
             
}
function teclaUp(){
     tecla=event.key
    switch(tecla){
        case 'ArrowDown': 
            dy+=0;
        break;
        case 'ArrowUp':
            dy+=0;           
        break;
        case 'ArrowRight':
            dx+=0;           
        break;
        case 'ArrowLeft' :
            dx+=0;          
             }
             console.log(tecla);
}

function enterFrame(){
    
    px=dx*vel;
    py=dy*vel;
    obj.style.left = px+'px';
    obj.style.top = py+'px';
  
}



window.addEventListener('load',inicio);
