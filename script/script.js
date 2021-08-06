var verificaColisaoX , verificaColisao2X , verificaColisaoY , verificaColisao2Y = false;
var flechaCima , flechaEsq , flechaDir , flechaBaixo , tecla , jog ;
var limiteCampoCima = -1;
var limiteCampoBaixo = 519;
var limiteCampoEsq = -1;
var limiteCampoDir = 1026;
var vencerPosiXeY=[1000,200];

var tamanhoJogador = [30, 30];
var tamanhoObstaculo = [25, 25];
var jogDireX=0;
var jogDireY=25;
var jogPosiX=0;
var jogPosiY=0;
var jogVel=5;


var obstaculoPosiX =[150,250,350,450,550,650,750,850,950];
var obstaculoPosiY=[0,520];

var obstaculoDireX=[1,1]
var obstaculoDireY=[1,1]

var obstaculoVel=[0.4,3];




capturaElementosDom();
function capturaElementosDom(){
    obstaculos=document.querySelectorAll('.obstaculos');
  
    jog=document.getElementById('jog');
    
}
console.log(obstaculos);
function posicaoObstX(){
  
    obstaculos[0].style.left=obstaculoPosiX[0] +"px";
    obstaculos[1].style.left=obstaculoPosiX[1] +"px";
    obstaculos[2].style.left=obstaculoPosiX[2] +"px";
    obstaculos[3].style.left=obstaculoPosiX[3] +"px";
    obstaculos[4].style.left=obstaculoPosiX[4] +"px";
    obstaculos[5].style.left=obstaculoPosiX[5] +"px";
    obstaculos[6].style.left=obstaculoPosiX[6] +"px";
    obstaculos[7].style.left=obstaculoPosiX[7] +"px";
}

    
   
    vencer.style.left = vencerPosiXeY[0]+'px';
    vencer.style.top = vencerPosiXeY[1]+'px';
    

    window.addEventListener('keydown', capturaTeclaPress);
    window.addEventListener('keyup', capturaTeclaSolt);
    timeMovePlayer = setInterval(enterFrame , 20);
  
    


    moveObst();
    moveObst2();
    

function moveObst(){
    posicaoObstX();

    obstaculoPosiY[0]+= obstaculoDireY[0]*obstaculoVel[0]; 
    
    obstaculos[0].style.top=obstaculoPosiY[0]+"px";
    obstaculos[2].style.top=obstaculoPosiY[0]+"px";
    obstaculos[4].style.top=obstaculoPosiY[0]+"px";
    obstaculos[6].style.top=obstaculoPosiY[0]+"px";

    if(obstaculoPosiY[0] > limiteCampoBaixo){
    obstaculoDireY[0]=-1;
 

    }else if(obstaculoPosiY[0] <  limiteCampoCima){
        obstaculoDireY[0]=1;
              
    }
   
   anima=requestAnimationFrame(moveObst)
 }

 function moveObst2(){
    


    obstaculoPosiY[1]+= obstaculoDireY[1]*obstaculoVel[1]; 
 
    obstaculos[1].style.top=obstaculoPosiY[1]+"px";
    obstaculos[3].style.top=obstaculoPosiY[1]+"px";
    obstaculos[5].style.top=obstaculoPosiY[1]+"px";
    obstaculos[7].style.top=obstaculoPosiY[1]+"px";
    


    if(obstaculoPosiY[1] > limiteCampoBaixo){
        obstaculoDireY[1]=-1;
    
        }else if(obstaculoPosiY[1] <  limiteCampoCima){
            obstaculoDireY[1]=1;
        }
   anima=requestAnimationFrame(moveObst2)
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
    jogPosiX=jogDireX*jogVel;
    jogPosiY=jogDireY*jogVel;
    
    jog.style.left = jogPosiX+'px';
    jog.style.top = jogPosiY+'px';
}
function enterFrame(){
    validaMovimento();
    attPosiJog();
    verificaColisao();
    verificaVencedor();
    verificaColisaoX = false;
    verificaColisaoY = false;   
    verificaColisao2X = false;
    verificaColisao2Y = false;  

    limitaCampo(); 
}



function logicaColisao(){
    let Rx;
   if(jogPosiX < obstaculoPosiX[0]+30 ){
        Rx = obstaculoPosiX[0] - jogPosiX;
   } 
   else if(jogPosiX > obstaculoPosiX[1]+30  && jogPosiX < obstaculoPosiX[2]+30 ){
         Rx = obstaculoPosiX[2]  - jogPosiX;
   } 
   else if(jogPosiX > obstaculoPosiX[3]+30  && jogPosiX < obstaculoPosiX[4]+30 ){
      Rx = obstaculoPosiX[4]  - jogPosiX;
   } 
   else if(jogPosiX > obstaculoPosiX[5]+30  && jogPosiX < obstaculoPosiX[6]+30 ){
    Rx = obstaculoPosiX[6]  - jogPosiX;
  }  
  
    let Ry = obstaculoPosiY[0] - jogPosiY;
     if(Ry >= 0){
         Ry = Math.abs(Ry);
         if(tamanhoJogador[1] > Ry){
            verificaColisaoY = true;
        }
    }
    else{
        Ry = Math.abs(Ry);
        if(tamanhoObstaculo[1] > Ry){
            verificaColisaoY = true;   
        }
    }
    if(Rx >= 0){
         Rx = Math.abs(Rx);
         if(tamanhoJogador[0] > Rx){
            verificaColisaoX = true;        
        }
    }else{
        Rx = Math.abs(Rx);
        if(tamanhoObstaculo[0] > Rx){
            verificaColisaoX = true;       
        } 
    }

    let R2x;
if(jogPosiX > obstaculoPosiX[0]+30 && jogPosiX < obstaculoPosiX[1]+30){
    R2x = obstaculoPosiX[1]  - jogPosiX;
}
else if(jogPosiX > obstaculoPosiX[2]+30 && jogPosiX < obstaculoPosiX[3]+30){
    R2x = obstaculoPosiX[3]  - jogPosiX;
}
else if(jogPosiX > obstaculoPosiX[4]+30 && jogPosiX < obstaculoPosiX[5]+30){
    R2x = obstaculoPosiX[5]  - jogPosiX;
}
else if(jogPosiX > obstaculoPosiX[6]+30 && jogPosiX < obstaculoPosiX[7]+30){
    R2x = obstaculoPosiX[7]  - jogPosiX;
} 

let R2y = obstaculoPosiY[1] - jogPosiY;
    
     if(R2y >= 0){
         R2y = Math.abs(R2y);
         if(tamanhoJogador[1] > R2y){
            verificaColisao2Y = true;
        }
    }
    else{
        R2y = Math.abs(R2y);
        if(tamanhoObstaculo[1] > R2y){
            verificaColisao2Y = true;   
        }
    }
    if(R2x >= 0){
         R2x = Math.abs(R2x);
         if(tamanhoJogador[0] > R2x){
            verificaColisao2X = true; 
                
        }
    }else{
        R2x = Math.abs(R2x);
        if(tamanhoObstaculo[0] > R2x){
            verificaColisao2X = true;       
        } 
    }
}

function verificaColisao(){
    logicaColisao();
    if(verificaColisaoX && verificaColisaoY || verificaColisao2X && verificaColisao2Y == true ){
        verificaColisaoX = false;
        verificaColisaoY = false;
        
        jogDireX = 0;
        jogDireY = 25;
        jogPosiX=jogDireX*jogVel;
        jogPosiY=jogDireY*jogVel;
        jog.style.left = jogPosiX+'px';
        jog.style.top = jogPosiY+'px';
    
    }
}
function verificaVencedor(){
    let fimVencerY = vencerPosiXeY[1]+75;
    let fimVencerX = vencerPosiXeY[0]+70;
    if(jogPosiX >= vencerPosiXeY[0] && jogPosiY >= vencerPosiXeY[1]+35 && jogPosiX < fimVencerX && jogPosiY < fimVencerY){
        
    jogDireX = 0;
    jogDireY = 25;
    jogPosiX=jogDireX*jogVel;
    jogPosiY=jogDireY*jogVel; 
    jog.style.left = jogPosiX+'px';
    jog.style.top = jogPosiY+'px';
    
    }  
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
