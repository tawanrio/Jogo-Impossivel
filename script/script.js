var vencerPosiXeY=[];
var basePosi=[];
var tamanhoJogador = [35,35];
var jogadorVel=3;

var tamanhoObstaculo = [];
var obstaculoVel=[];

var novoObstaculo = [];
var tamanhoObstaculoSup = [];
var posicaoObstaculoSup = [];
var contadorObstaculoSup = 0;
var direObstSupX = [];
var direObstSupY = [];
var cresc=1;

var novoNivel =[];
var nNivel=0;
var nFase=1;

var tamanhoBarreira = [];
var posicaoBarreira = [];
var contador = 0;

var validaColisao = true;
var verificaRequestFrame = true;

var criaElemento = new novaFase();
/*
            --------INSTRUÇÃO PARA CRIAR FASES--------
-  Deve ser criado uma nova função com o numero da fase. Ex: nivel5.
-  Instanciar o objeto criaElemento.newNivel  
*/
criaElemento.newJogador();

function iniciar(){
    
    jog.style.display = 'block';
     document.getElementById('config').style.display = 'block';
    // document.getElementById('controlador').style.display = 'flex';
    document.getElementById('numMorte').innerText='Numero de Mortes:  '+numeroMorte;
    timeMovePlayer = setInterval(enterFrame , 15);
}
function parar(){
    clearInterval(timeMovePlayer);
}
    
   
    

capturaElementosDom();
window.addEventListener('keydown', capturaTeclaPress);
window.addEventListener('keyup', capturaTeclaSolt);
//timeMovePlayer = setInterval(enterFrame , 20);



 function logicaBarreira(){
   let i = 0
    for (i ; i < contador; i++) {

    let BxX = posicaoBarreira[i][0] - jogPosiX;
    let BxY = posicaoBarreira[i][1]- jogPosiY;
     let ByX = posicaoBarreira[i][0] - jogPosiX;
     let ByY = posicaoBarreira[i][1]- jogPosiY;

    
    if(BxX >= 0){
        BxX = Math.abs(BxX); 
        if(tamanhoJogador[0]+5 > BxX){
          if(BxY <= 0){
            BxY = Math.abs(BxY);
            if(tamanhoBarreira[i][1] > BxY){
                //jogador a direita do ponto X e abaixo do ponto Y da barreira
                flechaDir = false;
                }
                }else{
                    BxY = Math.abs(BxY);
                    if(tamanhoJogador[1] > BxY){
                   //jogador a direta do ponto X  e acima do ponto Y da barreira
                         flechaDir = false;                  
                    }   }   }   }
                    else{
                        BxX = Math.abs(BxX);
                        if(tamanhoBarreira[i][0]+2 > BxX){
                            if(BxY <= 0){
                                BxY = Math.abs(BxY);
                            if(tamanhoBarreira[i][1] > BxY){
                                //jogador a esquerda do ponto X  e abaixo do ponto Y da barreira
                                flechaEsq = false;
                              }    }
                        else{
                            BxY = Math.abs(BxY);
                            if(tamanhoJogador[1] > BxY){
                                //jogador a esquerda do ponto X  e acima do ponto Y da barreira
                                flechaEsq = false;
                    }   }   }   }     
        if(ByY >= 0){
            ByY = Math.abs(ByY);
            if(tamanhoJogador[1]+5 > ByY){
              if(ByX >= 0){
                ByX = Math.abs(ByX);
                if(tamanhoJogador[0] > ByX){
                    //jogador acima do ponto Y e a direita do ponto X da barreira
                    flechaBaixo = false;
                }
                    }else{
                        ByX = Math.abs(ByX);
                        if(tamanhoBarreira[i][0] > ByX){
                           //jogador acima do ponto Y e a esquerda do ponto X da barreira
                            flechaBaixo = false;
                          }   }   }
            }else{
                ByY = Math.abs(ByY);
                if(tamanhoBarreira[i][1]+5 > ByY){ 
                    if(ByX >= 0){
                        ByX = Math.abs(ByX);
                        if(tamanhoJogador[0] > ByX){
                             //jogador abaixo do ponto Y e a esquerda do ponto X da barreira
                            flechaCima = false;
                        }
                          }else{
                            ByX = Math.abs(ByX);
                            if(tamanhoBarreira[i][0] > ByX){
                                 //jogador abaixo do ponto Y e a direita do ponto X da barreira
                                flechaCima = false;
                                    }  }  }  }  }  }
 function logicaObstaculoSup(){
    
    for(let i = 0 ; i<contadorObstaculoSup; i++){
    let Ry ;
    let Rx ;
       if(jogPosiX > posicaoObstaculoSup[i][0]-tamanhoJogador[0] && jogPosiX < posicaoObstaculoSup[i][0]+tamanhoJogador[0] && jogPosiY > posicaoObstaculoSup[i][1]-tamanhoJogador[1] && jogPosiY < posicaoObstaculoSup[i][1]+tamanhoJogador[1]){
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
            for(let i=0;i<contadorObstaculoSup;i++){
               
               posicaoObstaculoSup[i][0]+= direObstSupX[i]*obstaculoVel[i][0]; 
               posicaoObstaculoSup[i][1]+= direObstSupY[i]*obstaculoVel[i][0]; 
                     
             novoObstaculo[i].style.left=posicaoObstaculoSup[i][0]+"px";
             novoObstaculo[i].style.top=posicaoObstaculoSup[i][1]+"px";

        
               if(posicaoObstaculoSup[i][1]+tamanhoObstaculoSup[i][1] > limiteCampoBaixo-6){
                direObstSupY[i]=-1;
               }else if(posicaoObstaculoSup[i][1] <  limiteCampoCima){
                direObstSupY[i]=1;      
               }
               if(posicaoObstaculoSup[i][0]+tamanhoObstaculoSup[i][0] > limiteCampoDir-6){
                direObstSupX[i]=-1;
               }else if(posicaoObstaculoSup[i][0] <  limiteCampoEsq){
                direObstSupX[i]=1;     
               }             
            }
        }
           function logicaBarreiraObstaculo(){
            for (let b = 0 ; b < contador; b++) {
             for (let i = 0 ; i < contadorObstaculoSup; i++) {
                    
            let BxX = posicaoBarreira[b][0] - posicaoObstaculoSup[i][0];
            let BxY = posicaoBarreira[b][1]- posicaoObstaculoSup[i][1];
            let ByX = posicaoBarreira[b][0] - posicaoObstaculoSup[i][0];
            let ByY = posicaoBarreira[b][1]- posicaoObstaculoSup[i][1];

             if(BxX >= 0){
                BxX = Math.abs(BxX); 
                 if(tamanhoObstaculoSup[i][0]+5 > BxX){
                   if(BxY >= 0){
                     BxY = Math.abs(BxY);
                     if(tamanhoObstaculoSup[i][1] > BxY){
                        if(direObstSupY[i] == 1){
                            //obstaculoa a esquerda do ponto X e acima do ponto Y da barreira
                            direObstSupY[i]=-1;
                            }
                         }
                         }else{
                            BxY = Math.abs(BxY);
                            if(tamanhoBarreira[b][1] > BxY){
                                if(direObstSupY[i] == -1){
                                     //obstaculoa a esquerda do ponto X e abaixo do ponto Y da barreira
                                    direObstSupY[i]=1;
                                    }   }   }    }
                 }else{
                     BxX = Math.abs(BxX);
                     if(tamanhoBarreira[b][0]+5 > BxX){ 
                         if(BxY >= 0){
                             BxY = Math.abs(BxY);
                           if(tamanhoObstaculoSup[i][1] > BxY){
                               if(direObstSupY[i] == 1){
                                   //obstaculoa a direita do ponto X e acima do ponto Y da barreira
                                direObstSupY[i]=-1;
                                }   }   }
                         else{
                             BxY = Math.abs(BxY);
                             if(tamanhoBarreira[b][1] > BxY){
                                if(direObstSupY[i] == -1){
                                     //obstaculoa a direita do ponto X e abaixo do ponto Y da barreira
                                    direObstSupY[i]=1;
                                }  }  }  }  }     
                 if(ByY >= 0){
                     ByY = Math.abs(ByY); 
                     if(tamanhoObstaculoSup[i][1]+5 > ByY){
                       if(ByX >= 0){
                         ByX = Math.abs(ByX);
                         if(tamanhoObstaculoSup[i][0] > ByX){                            
                            if(direObstSupX[i] == 1){
                                //obstaculo acima do ponto Y e a esquerda do ponto X da barreira
                                direObstSupX[i]=-1;
                            }   }
                             }else{
                                 ByX = Math.abs(ByX);
                                 if(tamanhoBarreira[b][0] > ByX){                                 
                                   if(direObstSupX[i] == -1){
                                       //obstaculo acima do ponto Y e a direita do ponto X da barreira
                                        direObstSupX[i]=1;
                                    }  }  }   }
                     }else{
                         ByY = Math.abs(ByY);
                         if(tamanhoBarreira[b][1]+5 > ByY){ 
                             if(ByX >= 0){
                                 ByX = Math.abs(ByX);
                                 if(tamanhoObstaculoSup[i][0] > ByX){
                                    if(direObstSupX[i] == 1){
                                    //obstaculo abaixo do ponto Y e a esquerda do ponto X da barreira
                                        direObstSupX[i]=-1;
                                    }     }
                                   }else{ 
                                     ByX = Math.abs(ByX);
                                     if(tamanhoBarreira[b][0] > ByX){
                                       if(direObstSupX[i] == -1){
                                           //obstaculo abaixo do ponto Y e a direita do ponto X da barreira
                                            direObstSupX[i]=1;
                                        }  }  }  }  }  }  }  }

function LogicaFase(){
    this.colisaoJogador = function(){

    }
}
function novaFase(){
    this.elNovoNivel;
      
    this.newBarreira = function(posiBarrX,posiBarrY,tamBarrX,tamBarrY){
        const barreira = document.createElement('div');
        barreira.id = 'barreira';
        this.elNovoNivel.insertAdjacentElement('beforeend', barreira);

        posicaoBarreira[contador]= [];
        tamanhoBarreira[contador]=[];
      
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

    this.newBase = function(){
        const base = document.createElement("div");
        base.id = 'base';
        this.elNovoNivel.insertAdjacentElement('beforeend', base);
        base.style.left = basePosi[0]+'px';
        base.style.top = basePosi[1]+'px';

        jogPosiX = basePosi[0];
        jogPosiY = basePosi[1]+28;
        jog.style.left = jogPosiX+'px';
        jog.style.top = jogPosiY+'px';
       
    }
    
    this.newVencer = function(){
        const vencer = document.createElement("div");
        vencer.id = 'vencer';
        this.elNovoNivel.insertAdjacentElement('beforeend', vencer);
        vencer.style.left = vencerPosiXeY[0]+'px';
        vencer.style.top = vencerPosiXeY[1]+'px';
      
    }
    
    this.newNivel = function(baseX,baseY,vencerX,vencerY,callback){
        nNivel+=1;
        novoNivel[nNivel] = document.createElement("div");
        this.elNovoNivel = novoNivel[nNivel];
        
        novoNivel[nNivel].id = nNivel;
        novoNivel[nNivel].className = 'telaJogo';
        
        document.querySelector('#container').insertAdjacentElement('beforeend', novoNivel[nNivel]);
        
        //novoNivel[nNivel].style.display = 'none';
        basePosi = [baseX,baseY];
        vencerPosiXeY = [vencerX,vencerY] ;
                      
        callback();
        criaElemento.newVencer();
    
    }
    this.newJogador = function(){
        const novoJogador = document.createElement("div");
        novoJogador.id = 'jog';
        document.querySelector('#container').insertAdjacentElement('beforeend', novoJogador);
       novoJogador.style.width=tamanhoJogador[0]+'px';
        novoJogador.style.height=tamanhoJogador[1]+'px';
        
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

       tamanhoObstaculoSup[contadorObstaculoSup][0]=30;
        tamanhoObstaculoSup[contadorObstaculoSup][1]=30;
        
        novoObstaculo[contadorObstaculoSup].style.left=posicaoObstaculoSup[contadorObstaculoSup][0]+'px';
        novoObstaculo[contadorObstaculoSup].style.top=posicaoObstaculoSup[contadorObstaculoSup][1]+'px';
        
        novoObstaculo[contadorObstaculoSup].style.width=tamanhoObstaculoSup[contadorObstaculoSup][0]+'px';
        novoObstaculo[contadorObstaculoSup].style.height=tamanhoObstaculoSup[contadorObstaculoSup][1]+'px';

             contadorObstaculoSup++;
    }
   
    this.newObst = function(posiX,posiY,direX,direY,tamX,tamY,vel){
    const novoObst = document.createElement("div");
    novoObst.className = 'obstaculos';

    this.elNovoNivel.insertAdjacentElement('beforeend', novoObst);

    tamanhoObstaculo[0]=tamX;
    tamanhoObstaculo[1]=tamY;


    novoObst.style.width=tamanhoObstaculo[0] +"px";
    novoObst.style.height=tamanhoObstaculo[1] +"px";

    novoObst.style.left=posiX +"px";
    novoObst.style.top=posiY +"px";



    function moveObst(){
        posiY+=direY*vel; 
        posiX+=direX*vel; 
      
       novoObst.style.left=posiX+"px";
        novoObst.style.top=posiY+"px";
        if(posiY+tamanhoObstaculo[1] > limiteCampoBaixo){
        direY=-1;
        }else if(posiY <  limiteCampoCima){
            direY=1;      
        }
        if(posiX+tamanhoObstaculo[0] > limiteCampoDir){
        direX=-1;
        }else if(posiX <  limiteCampoEsq){
            direX=1;     
        }
    }
     function logicaColisao(){
        let Ry ;
        let Rx ;
           if(jogPosiX > posiX-tamanhoObstaculo[0] && jogPosiX < posiX+tamanhoObstaculo[0]  && jogPosiY > posiY-tamanhoObstaculo[1]  && jogPosiY < posiY+tamanhoObstaculo[1]){
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
                frameObst=setInterval(function(){


                    tamanhoObstaculo[0]+=cresc;
                    tamanhoObstaculo[1]+=cresc;
                    novoObst.style.width=tamanhoObstaculo[0] +"px";
                    novoObst.style.height=tamanhoObstaculo[1] +"px";
                    if(tamanhoObstaculo[0]<5 &&tamanhoObstaculo[1]<5){
                        
                       cresc=1;
                       
                    }else if(tamanhoObstaculo[0]>150 && tamanhoObstaculo[1]>150){
                        cresc=-1;
                        
                    }
                    console.log(cresc);

                }, 200)
}

}



frameRequest=setInterval(function(){verificaRequestFrame = true}, 250)
function enterFrame(){
    attPosiJog();    

    logicaObstaculoSup();
    if(validaBarreira == true){
        logicaBarreiraObstaculo(); 
    }
    base();
    moveObstaculoSup();
    logicaBarreira();
    validaMovimento(); 
    if(validaColisao==true){
        verificaColisao();
    } 
    verificaVencedor();
    verificaColisaoX = false;
    verificaColisaoY = false;   
    verificaColisao2X = false;
    verificaColisao2Y = false;  
 
}