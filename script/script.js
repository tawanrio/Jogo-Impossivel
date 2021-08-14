var vencerPosiXeY=[];

var tamanhoJogador = [30, 30];
var tamanhoObstaculo = [35,35];

//var tamanhoObstaculoSup = [[],[]];
var tamanhoObstaculoSup = [];
var posicaoObstaculoSup = [];
//var posicaoObstaculoSup = [[],[],[]];
var contadorObstaculoSup = 0;
var direObstSupX = [];
var direObstSupY = [];


var novoNivel =[];
var nNivel=0;
var nFase=1;

var tamanhoBarreira = [];
var posicaoBarreira = [];
var contador = 0;

var jogadorVel=5;

var obstaculoVel=[];

var criaElemento = new novaFase();

var verificaRequestFrame = false;

var tempInicio;
/*
            --------INSTRUÇÃO PARA CRIAR OBSTACULOS--------

    Deve ser instanciado o objeto newObst 



*/

timeMovePlayer = setInterval(enterFrame , 15);
criaElemento.newJogador();

criaElemento.newNivel(0,0,function(){});


function nivel1(){
    verificaRequestFrame == true;
   tempIncio = setTimeout(function(){
    criaElemento.newNivel(1000,200,function(){
    
        criaElemento.newBarreira(-50,0);

        criaElemento.newObstaculoSup(150,0,0,1,4);
        criaElemento.newObstaculoSup(250,520,0,1,4);
        criaElemento.newObstaculoSup(350,0,0,1,4);
        criaElemento.newObstaculoSup(450,520,0,1,4);
        criaElemento.newObstaculoSup(550,0,0,1,4);    
        criaElemento.newObstaculoSup(650,520,0,1,4);
        criaElemento.newObstaculoSup(750,0,0,1,4);
        criaElemento.newObstaculoSup(850,520,0,1,4);
        
        
        /*
    */
    
    });
}, 500);
}
function nivel2(){
    verificaRequestFrame == true;
    tempIncio = setTimeout(function(){
    criaElemento.newNivel(1000,200,function(){
        criaElemento.newBarreira(-50,0);
        
       // criaElemento.newObstaculoSup(0,0,1,1,3);
       // criaElemento.newObstaculoSup(0,520,1,1,3);
      //  criaElemento.newObstaculoSup(1000,0,1,1,3);
      //  criaElemento.newObstaculoSup(1000,520,1,1,3);
        criaElemento.newObstaculoSup(0,10,1,0,3);
        criaElemento.newObstaculoSup(1000,110,1,0,3);
        criaElemento.newObstaculoSup(0,210,1,0,3);
        criaElemento.newObstaculoSup(1000,310,1,0,3);
        criaElemento.newObstaculoSup(0,410,1,0,3);
        criaElemento.newObstaculoSup(1000,510,1,0,3);
        
    });
}, 500);
}
function nivel3(){
    //fase Wallace
    verificaRequestFrame == true;
    tempIncio = setTimeout(function(){
    criaElemento.newNivel(1000,200,function(){
        criaElemento.newBarreira(-50,0);

    for(let i=1;i<5;i++){
        criaElemento.newObstaculoSup(i*100,000,1,1,0);
        criaElemento.newObstaculoSup(i*200,100,0,1,0);
     

        criaElemento.newObstaculoSup(i*100,300,1,1,1);
       criaElemento.newObstaculoSup(i*200,110,0,0,0);
        criaElemento.newObstaculoSup(i*200,410,0,0,0);
        criaElemento.newObstaculoSup(i*100,500,1,1,0);
  }
        
    });
}, 500);
}
function nivel4(){
    //tawan
    verificaRequestFrame == true
    tempIncio = setTimeout(function(){
        criaElemento.newNivel(1000,200,function(){
            criaElemento.newBarreira(-50,0);

        criaElemento.newObstaculoSup(150,0,0,1,0);  
        criaElemento.newObstaculoSup(250,520,0,1,0);
        criaElemento.newObstaculoSup(350,0,0,1,0);
        criaElemento.newObstaculoSup(450,520,0,1,0);
        criaElemento.newObstaculoSup(550,0,0,1,0);
        criaElemento.newObstaculoSup(650,520,0,1,0);
        criaElemento.newObstaculoSup(750,0,0,1,0);
        criaElemento.newObstaculoSup(850,520,0,1,0);
        criaElemento.newObstaculoSup(0,0,1,1,0);
        criaElemento.newObstaculoSup(0,520,1,1,0);
        criaElemento.newObstaculoSup(1000,0,1,1,0);
        criaElemento.newObstaculoSup(1000,520,1,1,0);
        criaElemento.newObstaculoSup(0,10,1,0,0);
        criaElemento.newObstaculoSup(1000,110,1,0,0);
        criaElemento.newObstaculoSup(0,210,1,0,0);
        criaElemento.newObstaculoSup(1000,310,1,0,0);
        criaElemento.newObstaculoSup(0,410,1,0,0);
        criaElemento.newObstaculoSup(1000,510,1,0,0);
        
    });
}, 500);
}
function nivel5(){
    verificaRequestFrame == true
    tempIncio = setTimeout(function(){
        criaElemento.newNivel(1000,200,function(){

            criaElemento.newObst(400,400,0,1,0);

        criaElemento.newObstaculoSup(300,200,0,1,0);
        criaElemento.newObstaculoSup(400,200,0,1,0);
     
        criaElemento.newObst(150,0,0,1,0);  
        criaElemento.newObst(250,520,0,1,0);
        criaElemento.newObst(350,0,0,1,0);
  
           
        
        criaElemento.newBarreira(100,000,005,450);
        criaElemento.newBarreira(100,450,105,005);
        criaElemento.newBarreira(200,0,5,450,000);



        criaElemento.newBarreira(200,000,005,450);
        criaElemento.newBarreira(100,450,5,005);/*
        criaElemento.newBarreira(200,0,5,450,000);

        criaElemento.newBarreira(300,100,5,450,0);
        criaElemento.newBarreira(300,100,105,5);
        criaElemento.newBarreira(400,100,5,450,0);

        criaElemento.newBarreira(500,0,5,450,0);
        criaElemento.newBarreira(500,450,105,5);
        criaElemento.newBarreira(600,0,5,450,0);

        criaElemento.newBarreira(700,100,005,450,);
        criaElemento.newBarreira(700,100,105,005);
        criaElemento.newBarreira(800,100,005,450,0);

        criaElemento.newBarreira(900,0,5,450);
        criaElemento.newBarreira(900,450,105,5);
        criaElemento.newBarreira(1000,0,5,450);

*/

    });
}, 500);
}
function nivel6(){
    verificaRequestFrame == true
    tempIncio = setTimeout(function(){
        criaElemento.newNivel(1000,200,function(){
            criaElemento.newObst(400,400,0,1,0);

           
            criaElemento.newBarreira(100,0,5,450);
            criaElemento.newBarreira(100,450,105,5);
            criaElemento.newBarreira(200,0,5,450);

            criaElemento.newBarreira(300,100,5,450);
            criaElemento.newBarreira(300,100,105,5);
            criaElemento.newBarreira(400,100,5,450);

            criaElemento.newBarreira(500,0,5,450);
            criaElemento.newBarreira(500,450,105,5);
            criaElemento.newBarreira(600,0,5,450);

            criaElemento.newBarreira(700,100,5,450);
            criaElemento.newBarreira(700,100,105,5);
            criaElemento.newBarreira(800,100,5,450);

            criaElemento.newBarreira(900,0,5,450);
            criaElemento.newBarreira(900,450,105,5);
            criaElemento.newBarreira(1000,0,5,450);



    });
}, 500);
}
/*
function nivel7(){
    verificaRequestFrame == true
    tempIncio = setTimeout(function(){
        criaElemento.newNivel(1000,200,function(){
            criaElemento.newBarreira(0,0);
        criaElemento.newObst(150,0,0,1,0);  

    });
}, 300);
}
function nivel8(){
    verificaRequestFrame == true
    tempIncio = setTimeout(function(){
        criaElemento.newNivel(1000,200,function(){
            criaElemento.newBarreira(0,0);
        criaElemento.newObst(150,0,0,1,0);  

    });
}, 300);
}
function nivel9(){
    verificaRequestFrame == true
    tempIncio = setTimeout(function(){
        criaElemento.newNivel(1000,200,function(){
            criaElemento.newBarreira(0,0);
        criaElemento.newObst(150,0,0,1,0);  

    });
}, 300);
}
function nivel10(){
    verificaRequestFrame == true
    tempIncio = setTimeout(function(){
        criaElemento.newNivel(1000,200,function(){
            criaElemento.newBarreira(0,0);
        criaElemento.newObst(150,0,0,1,0);  

    });
}, 300);
}*/
function chamaFase(){
 
    
    switch (nFase){
        case 1:
            nivel1();
        break;
        case 2:
            nivel2();
        break;
        case 3:
            nivel3();
        break;
        case 4:
            nivel4();
        break;
        case 5:
            nivel5();
        break;
        case 6:
            nivel6();
        break;
    }  

}
 function parar(){
    clearInterval(testetime);
  
 }




capturaElementosDom();
window.addEventListener('keydown', capturaTeclaPress);
window.addEventListener('keyup', capturaTeclaSolt);
//timeMovePlayer = setInterval(enterFrame , 20);
timeteste = setInterval(function(){ verificaRequestFrame = true;}, 200);

document.getElementById('chama').addEventListener('click', function(){
    

   //document.getElementById('1').style.display = 'block';
  //inicio();
  
  document.querySelector('.telaJogo').remove();
  
  
          nivel1();
    

})
document.getElementById('apaga').addEventListener('click', function(){
    
   
    //document.getElementById('1').style.display = 'none';
    //document.getElementById('1').remove();
   // parar();
   moveObstaculoSup();
   logicaBarreiraObstaculo();
 
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

   
       if(jogPosiX > posicaoObstaculoSup[i][0]-35 && jogPosiX                  < posicaoObstaculoSup[i][0]+35 && jogPosiY > posicaoObstaculoSup[i][1]-35 && jogPosiY          < posicaoObstaculoSup[i][1]+35){
         
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
      
       var novoObstaculo = [];
        function moveObstaculoSup(){
            
            let i=0;
            for(i;i<contadorObstaculoSup;i++){
           //   while(i<contadorObstaculoSup){
               
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
              //i++;
           }
           }
           function logicaBarreiraObstaculo(){
         
            let i = 0;
            let b = 0;
            for (b ; b < 5; b++) {
             for (i ; i < contadorObstaculoSup; i++) {
                
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
             }
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
        posiY+= direY*obstaculoVel[vel]; 
        posiX+= direX*obstaculoVel[vel]; 
       
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
Frame();
function Frame(){
    console.log(verificaRequestFrame);
   if(verificaRequestFrame == true){
    moveObstaculoSup();
    logicaObstaculoSup();
    logicaBarreiraObstaculo();

    a
     anima=requestAnimationFrame(Frame)
   }
   
    }

function enterFrame(){
    if(verificaRequestFrame == true){
    attPosiJog();     
    logicaBarreira();
    validaMovimento();  
    verificaColisao();
    verificaVencedor();
    
    verificaColisaoX = false;
    verificaColisaoY = false;   
    verificaColisao2X = false;
    verificaColisao2Y = false;  
    }
}


/*
frame();
function frame(){
if(verificaRequestFrame == true){
    attPosiJog();     
    logicaBarreira();
    validaMovimento();
    moveObstaculoSup();
    logicaObstaculoSup();
    logicaBarreiraObstaculo();
    verificaColisao();
    verificaVencedor();
    
    verificaColisaoX = false;
    verificaColisaoY = false;   
    verificaColisao2X = false;
    verificaColisao2Y = false; 
    anima=requestAnimationFrame(frame);

    }
}

*/
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
    
     
    jogDireX = 0;
    jogDireY = 25;
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


