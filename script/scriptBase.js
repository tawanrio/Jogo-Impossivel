var verificaColisaoX , verificaColisao2X , verificaColisaoY , verificaColisao2Y = false;
var flechaCima , flechaEsq , flechaDir , flechaBaixo , tecla , jog ;

var limiteCampoCima = -1;
var limiteCampoBaixo = 519;
var limiteCampoEsq = -1;
var limiteCampoDir = 1026;






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
/*

barreira.style.left = posicaoBarreira[0]+'px';
barreira.style.top = posicaoBarreira[1]+'px';

barreira.style.width = tamanhoBarreira[0]+'px';
barreira.style.height = tamanhoBarreira[1]+'px';

var tamanhoBarreira = [200,240];
var posicaoBarreira = [500,200];
    let BxY;
    let BxX;
    let ByY;
    let ByX;

    BxX = posicaoBarreira[0] - jogPosiX;
    BxY = posicaoBarreira[1]- jogPosiY;
    ByX = posicaoBarreira[0] - jogPosiX;
    ByY = posicaoBarreira[1]- jogPosiY;

    if(BxX >= 0){//se jog estiver a direita da barreira Bx sera positivo ( maior que 0)
        BxX = Math.abs(BxX); // transforma Bx em positivo
        if(tamanhoJogador[0]+5 > BxX){// verifica se o tamanho do jogador é maior doq a distancia entre ele e a barreira/ se verdadeiro há colisao
          if(BxY <= 0){
            BxY = Math.abs(BxY);
            if(tamanhoBarreira[1] > BxY){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
            flechaDir = false;
                }
                }else{
                    BxY = Math.abs(BxY);
                    if(tamanhoJogador[1] > BxY){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
                    flechaDir = false;
                    }
                }
          }
        }else{//se o jog estiver a esquerda da barreira Bx sera negativo ( menor que 0)
            BxX = Math.abs(BxX);
            if(tamanhoBarreira[0]+2 > BxX){ // verifica se o tamanho do jogador é maior doq a distancia entre ele e a barreira/ se verdadeiro há colisao
                if(BxY <= 0){// se jog estiver acima da barreira By sera positivo
                    BxY = Math.abs(BxY);
                  if(tamanhoBarreira[1] > BxY){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
                    flechaEsq = false;
                      }
                }
                else{
                    BxY = Math.abs(BxY);
                    if(tamanhoJogador[1] > BxY){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
                    flechaEsq = false;
                    }
                }
            }
        }     
        if(ByY >= 0){//se jog estiver a acima da barreira By sera positivo ( maior que 0)
            ByY = Math.abs(ByY); // transforma Bx em positivo
            if(tamanhoJogador[1]+5 > ByY){// verifica se o tamanho do jogador é maior doq a distancia entre ele e a barreira/ se verdadeiro há colisao
              if(ByX >= 0){// se jog estiver acima da barreira Bx sera positivo
                ByX = Math.abs(ByX);
                if(tamanhoJogador[0] > ByX){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
                    flechaBaixo = false;}

                    }else{// se jog estiver abaixo da barreira By sera negativo 
                        ByX = Math.abs(ByX);
                        if(tamanhoBarreira[0] > ByX){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
                            flechaBaixo = false;
                          }
                    }
              }
            }else{//se o jog estiver a abaixo da barreira By sera negativo ( menor que 0)
                ByY = Math.abs(ByY);
                if(tamanhoBarreira[1]+5 > ByY){ // verifica se o tamanho do jogador é maior doq a distancia entre ele e a barreira/ se verdadeiro há colisao
                    if(ByX >= 0){// se jog estiver acima da barreira By sera positivo
                        ByX = Math.abs(ByX);
                        if(tamanhoJogador[0] > ByX){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
                            flechaCima = false;
                        }
                          }else{// se jog estiver esquerda da barreira Bx sera negativo 
                            ByX = Math.abs(ByX);
                            if(tamanhoBarreira[0] > ByX){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
                                flechaCima = false;
                              
                                    }
                          }
                    }
    
            }*/


}/*
function verificaVencedor(){
    let fimVencerY = vencerPosiXeY[1]+75;
    let fimVencerX = vencerPosiXeY[0]+70;
    if(jogPosiX >= vencerPosiXeY[0] && jogPosiY >= vencerPosiXeY[1]+35 && jogPosiX < fimVencerX && jogPosiY < fimVencerY){

        for(let i; i < contador; i++){
        tamanhoBarreira[i]=[0,0];

        posicaoBarreira[i]=[0,0];
    }
        
    jogDireX = 0;
    jogDireY = 25;
    jogPosiX=jogDireX*jogadorVel;
    jogPosiY=jogDireY*jogadorVel; 
    
    jog.style.left = jogPosiX+'px';
    jog.style.top = jogPosiY+'px';

    
    
    }  
}*/
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