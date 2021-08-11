var verificaColisaoX , verificaColisao2X , verificaColisaoY , verificaColisao2Y = false;
var flechaCima , flechaEsq , flechaDir , flechaBaixo , tecla , jog ;

var limiteCampoCima = -1;
var limiteCampoBaixo = 519;
var limiteCampoEsq = -1;
var limiteCampoDir = 1026;

var tamanhoBarreira = [200  ,240];
var posicaoBarreira = [500, 200]

barreira.style.left = posicaoBarreira[0]+'px';
barreira.style.top = posicaoBarreira[1]+'px';

barreira.style.width = tamanhoBarreira[0]+'px';
barreira.style.height = tamanhoBarreira[1]+'px';


var jogDireX=0;
var jogDireY=25;
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

    let By;
    let Bx;

    By = posicaoBarreira[1]- jogPosiY;
    Bx = posicaoBarreira[0] - jogPosiX;

    if(Bx >= 0){//se jog estiver a direita da barreira Bx sera positivo ( maior que 0)
        Bx = Math.abs(Bx); // transforma Bx em positivo
        if(tamanhoJogador[1] > Bx){// verifica se o tamanho do jogador é maior doq a distancia entre ele e a barreira/ se verdadeiro há colisao
          if(By <= 0){
            By = Math.abs(By);
            if(tamanhoBarreira[1] > By){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
            flechaDir = false;
            jogPosiX = posicaoBarreira[0]-tamanhoJogador[0]-4;   
            jog.style.left = jogPosiX+'px';
                }
                }

                
          }
         
        }else{//se o jog estiver a esquerda da barreira Bx sera negativo ( menor que 0)
            Bx = Math.abs(Bx);
            if(tamanhoBarreira[0]+2 > Bx){ // verifica se o tamanho do jogador é maior doq a distancia entre ele e a barreira/ se verdadeiro há colisao
                if(By <= 0){// se jog estiver acima da barreira By sera positivo
                  By = Math.abs(By);
                  if(tamanhoBarreira[1] > By){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
                    flechaEsq = false;
                   ;; jogPosiX = posicaoBarreira[0]+5;   
                   // jog.style.left = jogPosiX+'px';
                      }
                }
            }

        }
/*
        if(By >= 0){//se jog estiver a acima da barreira By sera positivo ( maior que 0)
            By = Math.abs(By); // transforma Bx em positivo
            if(tamanhoJogador[1] > By){// verifica se o tamanho do jogador é maior doq a distancia entre ele e a barreira/ se verdadeiro há colisao
              if(Bx >= 0){// se jog estiver acima da barreira Bx sera positivo
                Bx = Math.abs(Bx);
          
                    }else{// se jog estiver abaixo da barreira By sera negativo 
                        Bx = Math.abs(Bx);
                        if(tamanhoBarreira[1] > By){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
                        flechaBaixo = false;
                        jogPosiY = posicaoBarreira[0]-tamanhoJogador[0]-4;   
                        jog.style.top = jogPosiY+'px';
                            }
                    }
              }
             
            }else{//se o jog estiver a abaixo da barreira By sera negativo ( menor que 0)
                By = Math.abs(By);
                if(tamanhoBarreira[0]+2 > By){ // verifica se o tamanho do jogador é maior doq a distancia entre ele e a barreira/ se verdadeiro há colisao
                    if(Bx >= 0){// se jog estiver acima da barreira By sera positivo
                        Bx = Math.abs(Bx);
                
                          }else{// se jog estiver esquerda da barreira Bx sera negativo 
                            Bx = Math.abs(Bx);
                            
                              if(tamanhoBarreira[1] > Bx){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
                              flechaCima = false;
                              jogPosiY = posicaoBarreira[0]+5;   
                              jog.style.top = jogPosiY+'px';
                                  }
                          }
                    }
    
            }*/



}
function verificaVencedor(){
    let fimVencerY = vencerPosiXeY[1]+75;
    let fimVencerX = vencerPosiXeY[0]+70;
    if(jogPosiX >= vencerPosiXeY[0] && jogPosiY >= vencerPosiXeY[1]+35 && jogPosiX < fimVencerX && jogPosiY < fimVencerY){

        console.log(nNivel);
        
    jogDireX = 0;
    jogDireY = 25;
    jogPosiX=jogDireX*jogadorVel;
    jogPosiY=jogDireY*jogadorVel; 
    
    jog.style.left = jogPosiX+'px';
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
        jogDireY = 25;
        jogPosiX=jogDireX*jogadorVel;
        jogPosiY=jogDireY*jogadorVel;
        jog.style.left = jogPosiX+'px';
        jog.style.top = jogPosiY+'px';
    
    }
}