var vencerPosiXeY=[];
var tamanhoJogador = [30,30];
var jogadorVel=3;

var tamanhoObstaculo = [35,35];
var obstaculoVel=[];

var novoObstaculo = [];
var tamanhoObstaculoSup = [];
var posicaoObstaculoSup = [];
var contadorObstaculoSup = 0;
var direObstSupX = [];
var direObstSupY = [];

var validaBarreira = false;
var novoNivel =[];
var nNivel=0;
var nFase=1;

var tamanhoBarreira = [];
var posicaoBarreira = [];
var contador = 0;

var verificaRequestFrame = true;

var criaElemento = new novaFase();
/*
            --------INSTRUÇÃO PARA CRIAR OBSTACULOS--------

    Deve ser instanciado o objeto newObst 



*/



criaElemento.newJogador();
function iniciar(){
    timeMovePlayer = setInterval(enterFrame , 15);

}

    
   // criaElemento.newNivel(0,0,function(){});
    


capturaElementosDom();
window.addEventListener('keydown', capturaTeclaPress);
window.addEventListener('keyup', capturaTeclaSolt);
//timeMovePlayer = setInterval(enterFrame , 20);



document.getElementById('apaga').addEventListener('click', function(){
    
   
    //document.getElementById('1').style.display = 'none';
    //document.getElementById('1').remove();
   // parar();
  

 
 })


 function logicaBarreira(){
   let i = 0
    for (i ; i < contador; i++) {

        let BxY;
        let BxX;
        let ByY;
        let ByX;
                  
     BxX = posicaoBarreira[i][0] - jogPosiX;
    BxY = posicaoBarreira[i][1]- jogPosiY;
    ByX = posicaoBarreira[i][0] - jogPosiX;
    ByY = posicaoBarreira[i][1]- jogPosiY;

    if(BxX >= 0){//se jog estiver a direita da barreira Bx sera positivo ( maior que 0)
        BxX = Math.abs(BxX); // transforma Bx em positivo
        if(tamanhoJogador[0]+5 > BxX){// verifica se o tamanho do jogador é maior doq a distancia entre ele e a barreira/ se verdadeiro há colisao
          if(BxY <= 0){
            BxY = Math.abs(BxY);
            if(tamanhoBarreira[i][1] > BxY){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
            flechaDir = false;
            jogPosiX += -1 ;
            jog.style.left = jogPosiX+'px';
           
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
            if(tamanhoBarreira[i][0]+2 > BxX){ // verifica se o tamanho do jogador é maior doq a distancia entre ele e a barreira/ se verdadeiro há colisao
                if(BxY <= 0){// se jog estiver acima da barreira By sera positivo
                    BxY = Math.abs(BxY);
                  if(tamanhoBarreira[i][1] > BxY){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
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
                    flechaBaixo = false;
                }

                    }else{// se jog estiver abaixo da barreira By sera negativo 
                        ByX = Math.abs(ByX);
                        if(tamanhoBarreira[i][0] > ByX){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
                            flechaBaixo = false;
                          }
                    }
              }
            }else{//se o jog estiver a abaixo da barreira By sera negativo ( menor que 0)
                ByY = Math.abs(ByY);
                if(tamanhoBarreira[i][1]+5 > ByY){ // verifica se o tamanho do jogador é maior doq a distancia entre ele e a barreira/ se verdadeiro há colisao
                    if(ByX >= 0){// se jog estiver acima da barreira By sera positivo
                        ByX = Math.abs(ByX);
                        if(tamanhoJogador[0] > ByX){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
                            flechaCima = false;
                        }
                          }else{// se jog estiver esquerda da barreira Bx sera negativo 
                            ByX = Math.abs(ByX);
                            if(tamanhoBarreira[i][0] > ByX){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
                                flechaCima = false;
                                    }
                          }
                    }
    
            }
    
        }
 
 }
 function logicaObstaculoSup(){
    let i = 0;
    for(i ; i<contadorObstaculoSup; i++){
    let Ry ;
    let Rx ;

       if(jogPosiX > posicaoObstaculoSup[i][0]-35 && jogPosiX < posicaoObstaculoSup[i][0]+35 && jogPosiY > posicaoObstaculoSup[i][1]-35 && jogPosiY          < posicaoObstaculoSup[i][1]+35){
         
            Ry = posicaoObstaculoSup[i][1] - jogPosiY;
            Rx = posicaoObstaculoSup[i][0] - jogPosiX;
          
       }
        if(Ry >= 0){
                 Ry = Math.abs(Ry);
                 if(tamanhoJogador[1] > Ry){
                    verificaColisaoY = true;     
                }
            }
            else{
                Ry = Math.abs(Ry);
                if(tamanhoObstaculoSup[i][1] > Ry){
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
                if(tamanhoObstaculoSup[i][0] > Rx){
                    verificaColisaoX = true;       
                } 
            }
    }
    
}
      
        function moveObstaculoSup(){
            
            let i=0;
            for(i;i<contadorObstaculoSup;i++){
               
               posicaoObstaculoSup[i][0]+= direObstSupX[i]*obstaculoVel[i][0]; 
               posicaoObstaculoSup[i][1]+= direObstSupY[i]*obstaculoVel[i][0]; 
                     
             novoObstaculo[i].style.left=posicaoObstaculoSup[i][0]+"px";
             novoObstaculo[i].style.top=posicaoObstaculoSup[i][1]+"px";

        
               if(posicaoObstaculoSup[i][1] > limiteCampoBaixo){
                direObstSupY[i]=-1;
               }else if(posicaoObstaculoSup[i][1] <  limiteCampoCima){
                direObstSupY[i]=1;      
               }
               if(posicaoObstaculoSup[i][0] > limiteCampoDir){
                direObstSupX[i]=-1;
               }else if(posicaoObstaculoSup[i][0] <  limiteCampoEsq){
                direObstSupX[i]=1;     
               }
             
           }
           }
           function logicaBarreiraObstaculo(){
         
           

           // while (b<contador) {
                
          
            for (var b = 0 ; b < contador; b++) {
             //   while (i<contadorObstaculoSup) {
                    
         
             for (var i = 0 ; i < contadorObstaculoSup; i++) {
        
                 let BxY;
                 let BxX;
                 let ByY;
                 let ByX;
                
              BxX = posicaoBarreira[b][0] - posicaoObstaculoSup[i][0];
              BxY = posicaoBarreira[b][1]- posicaoObstaculoSup[i][1];
              ByX = posicaoBarreira[b][0] - posicaoObstaculoSup[i][0];
              ByY = posicaoBarreira[b][1]- posicaoObstaculoSup[i][1];
            
            
             if(BxX >= 0){//se jog estiver a direita da barreira Bx sera positivo ( maior que 0)
                BxX = Math.abs(BxX); // transforma Bx em positivo
                 if(tamanhoObstaculoSup[i][0]+5 > BxX){// verifica se o tamanho do jogador é maior doq a distancia entre ele e a barreira/ se verdadeiro há colisao
                   if(BxY <= 0){
                     BxY = Math.abs(BxY);
                     if(tamanhoBarreira[b][1] > BxY){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
                         }
                         }else{
                             BxY = Math.abs(BxY);
                             if(tamanhoObstaculoSup[i][1] > BxY){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
                                direObstSupY[i]=1;
                             }
                         }
                   }
                 }else{//se o jog estiver a esquerda da barreira Bx sera negativo ( menor que 0)
                     BxX = Math.abs(BxX);
                     if(tamanhoBarreira[b][0]+2 > BxX){ // verifica se o tamanho do jogador é maior doq a distancia entre ele e a barreira/ se verdadeiro há colisao
                         if(BxY <= 0){// se jog estiver acima da barreira By sera positivo
                             BxY = Math.abs(BxY);
                           if(tamanhoBarreira[b][1] > BxY){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
                               if(direObstSupY[i] == 1){
                                direObstSupY[i]=-1;
                                }else if(direObstSupY[i] == -1){
                                      direObstSupY[i]=1;
                                }
                               }
                         }
                         else{
                             BxY = Math.abs(BxY);
                             if(tamanhoObstaculoSup[i][1] > BxY){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
                                if(direObstSupY[i] == 1){
                                    direObstSupY[i]=-1;
                                }else if(direObstSupY[i] == -1){
                                    direObstSupY[i]=1;
                                }
                             }
                         }
                     }
                 }     
                 if(ByY >= 0){//se jog estiver a acima da barreira By sera positivo ( maior que 0)
                     ByY = Math.abs(ByY); // transforma Bx em positivo
                     if(tamanhoObstaculoSup[i][1]+5 > ByY){// verifica se o tamanho do jogador é maior doq a distancia entre ele e a barreira/ se verdadeiro há colisao
                       if(ByX >= 0){// se jog estiver acima da barreira Bx sera positivo
                         ByX = Math.abs(ByX);
                         if(tamanhoObstaculoSup[i][0] > ByX){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
                            if(direObstSupY[i] == 1){
                                direObstSupY[i]=-1;
                            }else if(direObstSupY[i] == -1){
                                direObstSupY[i]=1;
                            }
                         }
         
                             }else{// se jog estiver abaixo da barreira By sera negativo 
                                 ByX = Math.abs(ByX);
                                 if(tamanhoBarreira[b][0] > ByX){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
                                   
                                 
                                    if(direObstSupX[i] == 1){
                                        direObstSupX[i]=-1;
                                    }else if(direObstSupX[i] == -1){
                                        direObstSupX[i]=1;
                                    }
                                     
                                   }
                             }
                       }
                     }else{//se o jog estiver a abaixo da barreira By sera negativo ( menor que 0)
                         ByY = Math.abs(ByY);
                         if(tamanhoBarreira[b][1]+5 > ByY){ // verifica se o tamanho do jogador é maior doq a distancia entre ele e a barreira/ se verdadeiro há colisao
                             if(ByX >= 0){// se jog estiver acima da barreira By sera positivo
                                 ByX = Math.abs(ByX);
                                 if(tamanhoObstaculoSup[i][0] > ByX){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
                                    if(direObstSupX[i] == 1){
                                        direObstSupX[i]=-1;
                                    }else if(direObstSupX[i] == -1){
                                        direObstSupX[i]=1;
                                    }
                                 }
                                   }else{// se jog estiver esquerda da barreira Bx sera negativo 
                                     ByX = Math.abs(ByX);
                                     if(tamanhoBarreira[b][0] > ByX){//verifica se o tamanho da barreira é maior doq a distancia entre a barreira e o jogador// há colisao
                                       
                                        if(direObstSupX[i] == 1){
                                            direObstSupX[i]=-1;
                                        }else if(direObstSupX[i] == -1){
                                            direObstSupX[i]=1;
                                        }
                                             }
                                   }
                             }
             
                     }
        //     i++
    }
        //    b++
    }
                 }
         
function novaFase(){
    
    this.elNovoNivel;
    this.elProximoNivel;
    this.elNovoObstaculo;
   
    this.newBarreira = function(posiBarrX,posiBarrY,tamBarrX,tamBarrY){
        const barreira = document.createElement('div');
        barreira.id = 'barreira';
        this.elNovoNivel.insertAdjacentElement('beforeend', barreira);

            posicaoBarreira[contador]= [];
            tamanhoBarreira[contador]=[];
      
         //posicaoBarreira[contador] = [posiBarrX,posiBarrY];
         posicaoBarreira[contador][0]=posiBarrX;
         posicaoBarreira[contador][1]=posiBarrY;


         tamanhoBarreira[contador] = [tamBarrX,tamBarrY];
         
         barreira.style.left = posicaoBarreira[contador][0]+'px';
         barreira.style.top = posicaoBarreira[contador][1]+'px';
         
         barreira.style.width = tamanhoBarreira[contador][0]+'px';
         barreira.style.height = tamanhoBarreira[contador][1]+'px';
                  
         contador+=1;
         validaBarreira=true;
    }

    this.newVencer = function(){
        const vencer = document.createElement("div");
        vencer.id = 'vencer';
        this.elNovoNivel.insertAdjacentElement('beforeend', vencer);
        vencer.style.left = vencerPosiXeY[0]+'px';
        vencer.style.top = vencerPosiXeY[1]+'px';

       

    }
    
    this.newNivel = function(vencerX,vencerY,callback){
        nNivel+=1;
        novoNivel[nNivel] = document.createElement("div");
        this.elNovoNivel = novoNivel[nNivel];
        
        novoNivel[nNivel].id = nNivel;
        novoNivel[nNivel].className = 'telaJogo';
        
        document.querySelector('#container').insertAdjacentElement('beforeend', novoNivel[nNivel]);
        
        //novoNivel[nNivel].style.display = 'none';
        vencerPosiXeY = [vencerX,vencerY] ;
                      
        callback();
        criaElemento.newVencer();
    }
    this.newJogador = function(){
        const novoJogador = document.createElement("div");
        novoJogador.id = 'jog';
        document.querySelector('#container').insertAdjacentElement('beforeend', novoJogador);
    }

    this.newObstaculoSup = function(posiX,posiY,direX,direY,vel){
         novoObstaculo[contadorObstaculoSup] = document.createElement("div");
        novoObstaculo[contadorObstaculoSup].className = 'obstaculoSup';
        this.elNovoNivel.insertAdjacentElement('beforeend', novoObstaculo[contadorObstaculoSup]);
        
        direObstSupX[contadorObstaculoSup]=direX;
        direObstSupY[contadorObstaculoSup]=direY;
        obstaculoVel[contadorObstaculoSup]=[vel];
        
        posicaoObstaculoSup[contadorObstaculoSup] = [];
        tamanhoObstaculoSup[contadorObstaculoSup] = [];

        posicaoObstaculoSup[contadorObstaculoSup][0]=posiX;
        posicaoObstaculoSup[contadorObstaculoSup][1]=posiY;

       tamanhoObstaculoSup[contadorObstaculoSup][0]=25;
        tamanhoObstaculoSup[contadorObstaculoSup][1]=25;
        
        novoObstaculo[contadorObstaculoSup].style.left=posicaoObstaculoSup[contadorObstaculoSup][0]+'px';
        novoObstaculo[contadorObstaculoSup].style.top=posicaoObstaculoSup[contadorObstaculoSup][1]+'px';
        
        novoObstaculo[contadorObstaculoSup].style.width=tamanhoObstaculoSup[contadorObstaculoSup][0]+'px';
        novoObstaculo[contadorObstaculoSup].style.height=tamanhoObstaculoSup[contadorObstaculoSup][1]+'px';

             contadorObstaculoSup++;
    }
    
    this.newObst = function(posiX,posiY,direX,direY,vel){
    const novoObst = document.createElement("div");
    novoObst.className = 'obstaculos';

    this.elNovoNivel.insertAdjacentElement('beforeend', novoObst);
    novoObst.style.left=posiX +"px";
    novoObst.style.top=posiY +"px";


    function moveObst(){
        posiY+=direY*vel; 
        posiX+=direX*vel; 
      
       novoObst.style.left=posiX+"px";
        novoObst.style.top=posiY+"px";
        if(posiY > limiteCampoBaixo){
        direY=-1;
        }else if(posiY <  limiteCampoCima){
            direY=1;      
        }
        if(posiX > limiteCampoDir){
        direX=-1;
        }else if(posiX <  limiteCampoEsq){
            direX=1;     
        }
        
    }
     function logicaColisao(){
        let Ry ;
        let Rx ;
           if(jogPosiX > posiX-30 && jogPosiX < posiX+30 && jogPosiY > posiY-30 && jogPosiY < posiY+30){
                Ry = posiY - jogPosiY;
                Rx = posiX - jogPosiX;
           }
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

        }
        
        requestFrame();
        function requestFrame(){
        
           if(verificaRequestFrame == true){
            moveObst();
            logicaColisao();
             anima=requestAnimationFrame(requestFrame)
           }
            }
}

}
frameRequest=setInterval(function(){verificaRequestFrame = true}, 250)
function enterFrame(){
   
    attPosiJog();    
    logicaObstaculoSup();
    if(validaBarreira == true){
        logicaBarreiraObstaculo(); 
    }
    moveObstaculoSup();
    logicaBarreira();
    validaMovimento();  
    verificaColisao();
    verificaVencedor();
    verificaColisaoX = false;
    verificaColisaoY = false;   
    verificaColisao2X = false;
    verificaColisao2Y = false;  
 
}

//frameObstaculoSup();
function frameObstaculoSup(){
   
    anima=requestAnimationFrame(frameObstaculoSup)
    }

function verificaVencedor(){
    let fimVencerY = vencerPosiXeY[1]+75;
    let fimVencerX = vencerPosiXeY[0]+70;
    if(jogPosiX >= vencerPosiXeY[0] && jogPosiY >= vencerPosiXeY[1]+35 && jogPosiX < fimVencerX && jogPosiY < fimVencerY){
        let i= 0
      for( i ; i < contador; i++){
            tamanhoBarreira[i][0]=0;
            posicaoBarreira[i][0]=0;
            tamanhoBarreira[i][1]=0;
            posicaoBarreira[i][1]=0;
      }
    contador=0;
    contadorObstaculoSup =0;
    posicaoObstaculoSup.length = 0;
     
    jogDireX = 0;
    jogDireY = 85;
    jogPosiX=jogDireX*jogadorVel;
    jogPosiY=jogDireY*jogadorVel; 
    jog.style.left = jogPosiX+'px';
    jog.style.top = jogPosiY+'px';
  
    nFase+=1;
  
    document.querySelector('.telaJogo').remove();
   

    verificaRequestFrame = false;

    chamaFase();
    }  
}


