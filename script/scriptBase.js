var verificaColisaoX , verificaColisao2X , verificaColisaoY , verificaColisao2Y = false;
var flechaCima , flechaEsq , flechaDir , flechaBaixo , tecla , jog ;

var limiteCampoCima = -1;
var limiteCampoBaixo = 519;
var limiteCampoEsq = -1;
var limiteCampoDir = 1026;

var jogDireX=0;
var jogDireY=85;
var jogPosiX=0;
var jogPosiY=0;

function capturaElementosDom(){
    jog=document.getElementById('jog');
    barreira=document.getElementById('barreira');
}

function limitaCampo(){
    if(jogPosiX > limiteCampoDir){
        flechaDir = false;
        jogPosiX = limiteCampoDir;   

        jog.style.left = jogPosiX+'px';
       
    }else if(jogPosiX < limiteCampoEsq){
        jogPosiX = limiteCampoEsq+1;   
        jogDireX = limiteCampoEsq+1;  
        jog.style.left = jogPosiX+'px';
    }
    if(jogPosiY > limiteCampoBaixo){
       flechaBaixo = false;
       jogPosiY = limiteCampoBaixo-1;        
       jog.style.top = jogPosiY+'px';
    }else if(jogPosiY < limiteCampoCima){
        flechaCima = false;
        jogPosiY = limiteCampoCima+1;   
        jog.style.top = jogPosiY+'px';
    }
}
function validaMovimento(){
    switch(flechaBaixo){
        case true:
            jogDireY+=1;
        break;
        case false:
            jogDireY+=0;
    }
    switch(flechaEsq){
        case true:
            jogDireX+=-1;
        break;
        case false:
            jogDireX+=0;  
    }
    switch(flechaCima){
        case true:
            jogDireY+=-1;
        break;
        case false:
            jogDireY+=0;  
    }
    switch(flechaDir){
        case true:
            jogDireX+=1;
        break;
        case false:
            jogDireX+=0;
    }
}
 function capturaTeclaPress(){  
    tecla=event.key
   switch(tecla){
       case 'ArrowDown': 
       case 's':
          flechaBaixo = true;
       break;
       case 'ArrowUp':
        case 'w':
        flechaCima = true;           
       break;
       case 'ArrowRight':
        case 'd':
           flechaDir = true;          
       break;
       case 'ArrowLeft' :
    case 'a':
           flechaEsq = true; 
       break;
            }    
            
}
function capturaTeclaSolt(){
    tecla=event.key
   switch(tecla){
       case 'ArrowDown' : 
       case 's':
          flechaBaixo = false;
       break;
       case 'ArrowUp':
       case 'w':
          flechaCima = false;        
       break;
       case 'ArrowRight':
       case 'd':
          flechaDir = false;        
       break;
       case 'ArrowLeft' :
        case 'a':
          flechaEsq = false;          
            }
           
}
function attPosiJog(){
    jogPosiX=jogDireX*jogadorVel;
    jogPosiY=jogDireY*jogadorVel;
    
    jog.style.left = jogPosiX+'px';
    jog.style.top = jogPosiY+'px';
    limitaCampo(); 
}

function verificaColisao(){

    if(verificaColisaoX && verificaColisaoY || verificaColisao2X && verificaColisao2Y == true ){
        verificaColisaoX = false;
        verificaColisaoY = false;
        
        jogDireX = 0;
        jogDireY = 85;
        jogPosiX=jogDireX*jogadorVel;
        jogPosiY=jogDireY*jogadorVel;
        jog.style.left = jogPosiX+'px';
        jog.style.top = jogPosiY+'px';
    
    }
}