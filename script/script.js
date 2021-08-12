var vencerPosiXeY=[];

var tamanhoJogador = [30, 30];
var tamanhoObstaculo = [25, 25];
var novoNivel =[];
var nNivel=0;
var nFase=1;

var tamanhoBarreira = [[],[]];
var posicaoBarreira = [[],[]];
var contador = 0;

var jogadorVel=5;

var obstaculoVel=[4,3,5];

var criaElemento = new novaFase();

var verificaRequestFrame = false;

var tempInicio;
/*
            --------INSTRUÇÃO PARA CRIAR OBSTACULOS--------

    Deve ser instanciado o objeto newObst 



*/

timeMovePlayer = setInterval(enterFrame , 20);
criaElemento.newJogador();

criaElemento.newNivel(0,0,function(){});


function nivel1(){
    verificaRequestFrame == true
   tempIncio = setTimeout(function(){

   // timeMovePlayer = setInterval(enterFrame , 20);
    criaElemento.newNivel(1000,200,function(){

        criaElemento.newBarreira(200,0,200,500);
        
        criaElemento.newBarreira(600,10,200,490);
     

        criaElemento.newObst(150,0,0,1,0);  
        criaElemento.newObst(250,520,0,1,0);
        criaElemento.newObst(350,0,0,1,0);
        criaElemento.newObst(450,520,0,1,0);
        criaElemento.newObst(550,0,0,1,0);
        criaElemento.newObst(650,520,0,1,0);
        criaElemento.newObst(750,0,0,1,0);
        criaElemento.newObst(850,520,0,1,0);
        
        
    
    
    });
}, 300);
}
function nivel2(){
    verificaRequestFrame == true
    tempIncio = setTimeout(function(){

  //  timeMovePlayer = setInterval(enterFrame , 20);
    criaElemento.newNivel(1000,200,function(){

        criaElemento.newBarreira(100,0,200,240);
        criaElemento.newBarreira(100,320,200,230);

        
        criaElemento.newBarreira(650,0,200,240);
        criaElemento.newBarreira(650,320,200,230);
        
        
        criaElemento.newObst(0,0,1,1,0);
        criaElemento.newObst(0,520,1,1,0);
        criaElemento.newObst(1000,0,1,1,0);
        criaElemento.newObst(1000,520,1,1,0);
        criaElemento.newObst(0,10,1,0,0);
        criaElemento.newObst(1000,110,1,0,0);
        criaElemento.newObst(0,210,1,0,0);
        criaElemento.newObst(1000,310,1,0,0);
        criaElemento.newObst(0,410,1,0,0);
        criaElemento.newObst(1000,510,1,0,0);
        
    });
}, 300);
}
function nivel3(){
    verificaRequestFrame == true
    tempIncio = setTimeout(function(){

    //timeMovePlayer = setInterval(enterFrame , 20);
    criaElemento.newNivel(1000,200,function(){
        
        criaElemento.newBarreira(0,0);
       //fase Wallace
    for(let i=1;i<5;i++){
        criaElemento.newObst(i*100,000,1,1,0);
        criaElemento.newObst(i*200,100,0,1,0);
     
        //criaElemento.newObst(i*400,550,0,1,0);
        criaElemento.newObst(i*100,300,1,1,1);
       criaElemento.newObst(i*200,110,0,0,0);
        criaElemento.newObst(i*200,410,0,0,0);
        criaElemento.newObst(i*100,500,1,1,0);
  }
        
    });
}, 300);
}
function nivel4(){
    verificaRequestFrame == true
    tempIncio = setTimeout(function(){

      //  timeMovePlayer = setInterval(enterFrame , 20);
        criaElemento.newNivel(1000,200,function(){
            criaElemento.newBarreira(0,0);
        //tawan
        criaElemento.newObst(150,0,0,1,0);  
        criaElemento.newObst(250,520,0,1,0);
        criaElemento.newObst(350,0,0,1,0);
        criaElemento.newObst(450,520,0,1,0);
        criaElemento.newObst(550,0,0,1,0);
        criaElemento.newObst(650,520,0,1,0);
        criaElemento.newObst(750,0,0,1,0);
        criaElemento.newObst(850,520,0,1,0);
        criaElemento.newObst(0,0,1,1,0);
        criaElemento.newObst(0,520,1,1,0);
        criaElemento.newObst(1000,0,1,1,0);
        criaElemento.newObst(1000,520,1,1,0);
        criaElemento.newObst(0,10,1,0,0);
        criaElemento.newObst(1000,110,1,0,0);
        criaElemento.newObst(0,210,1,0,0);
        criaElemento.newObst(1000,310,1,0,0);
        criaElemento.newObst(0,410,1,0,0);
        criaElemento.newObst(1000,510,1,0,0);
        
    });
}, 300);
}
 
 
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
    }
    

}
 function parar(){
    clearInterval(testetime);
    console.log("oi2");
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
  
  
          nivel2();
    
            
       

})
document.getElementById('apaga').addEventListener('click', function(){
    
   
    //document.getElementById('1').style.display = 'none';
    //document.getElementById('1').remove();
   // parar();
   logicaBarreira();
 
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

      
function novaFase(){
    
    this.elNovoNivel;
    this.elProximoNivel;
   
   

    this.newBarreira = function(posiBarrX,posiBarrY,tamBarrX,tamBarrY){
        const barreira = document.createElement('div');
        barreira.id = 'barreira';
        this.elNovoNivel.insertAdjacentElement('beforeend', barreira);

      //  console.log(contador);
         posicaoBarreira[contador] = [posiBarrX,posiBarrY];

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

        

       clearInterval(enterFrame);

    }
    
    this.newNivel = function(vencerX,vencerY,callback){
        //console.log(nFase);

        nNivel+=1;
        novoNivel[nNivel] = document.createElement("div");
        this.elNovoNivel = novoNivel[nNivel];
        
        novoNivel[nNivel].id = nNivel;
        novoNivel[nNivel].className = 'telaJogo';
        
        document.querySelector('#container').insertAdjacentElement('beforeend', novoNivel[nNivel]);
        
        //novoNivel[nNivel].style.display = 'none';
        vencerPosiXeY = [vencerX,vencerY] ;
        
       // timeMovePlayer = setInterval(enterFrame , 20);
        
        
 
        callback();
        criaElemento.newVencer();
       
        
    }
    this.newJogador = function(){
        const novoJogador = document.createElement("div");
        novoJogador.id = 'jog';
        document.querySelector('#container').insertAdjacentElement('beforeend', novoJogador);
    }

    this.newObst = function(posiX,posiY,direX,direY,vel){
    const novoObst = document.createElement("div");
    novoObst.className = 'obstaculos';
  
    this.elNovoNivel.insertAdjacentElement('beforeend', novoObst);
    novoObst.style.left=posiX +"px";
    novoObst.style.top=posiY +"px";
     requestFrame(posiX,posiY,direX,direY,vel);

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
        function verificaVencedor(){
            let fimVencerY = vencerPosiXeY[1]+75;
            let fimVencerX = vencerPosiXeY[0]+70;
            if(jogPosiX >= vencerPosiXeY[0] && jogPosiY >= vencerPosiXeY[1]+35 && jogPosiX < fimVencerX && jogPosiY < fimVencerY){
                let i= 0
                console.log(tamanhoBarreira[i][0]);
              for( i ; i < contador; i++){
                    tamanhoBarreira[i][0]=0;
                    posicaoBarreira[i][0]=0;
                    tamanhoBarreira[i][1]=0;
                    posicaoBarreira[i][1]=0;

                    console.log(tamanhoBarreira[i][0]);
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
        function requestFrame(){
           if(verificaRequestFrame == true){
            moveObst();
            logicaColisao();
            verificaVencedor();
             anima=requestAnimationFrame(requestFrame)
           }
            }
           
}



}
function enterFrame(){
    attPosiJog();     
     logicaBarreira();
    validaMovimento();
    verificaColisao();
    
    verificaColisaoX = false;
    verificaColisaoY = false;   
    verificaColisao2X = false;
    verificaColisao2Y = false;  
  
}
/*
function enterFrame(){
    attPosiJog();
   
    validaMovimento();
    verificaColisao();
    
    verificaColisaoX = false;
    verificaColisaoY = false;   
    verificaColisao2X = false;
    verificaColisao2Y = false;  
  
}

*/


