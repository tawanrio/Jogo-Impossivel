var verificaColisaoX , verificaColisao2X , verificaColisaoY , verificaColisao2Y = false;
var  tecla , jog ;
var flechaCima , flechaEsq , flechaDir , flechaBaixo = false;
var limiteCampoCima = -1;
var limiteCampoBaixo = 550;
var limiteCampoEsq = -1;
var limiteCampoDir = 1060;
var jogDireX=0;
var jogDireY=85;
var jogPosiX=0;
var jogPosiY=0;

var numeroMorte=0;

var validaBarreira = false;

var audioMenu = document.getElementById('audioMenu').play()

var somClick = document.getElementById('audioClick')
function capturaElementosDom(){
    jog=document.getElementById('jog');
    barreira=document.getElementById('barreira');
}


var mute=false;
/*
btnCredito.addEventListener('mouseenter', function(){
    document.getElementById('audioClick').play();
 
})
*/
document.getElementById('container').style.width = limiteCampoDir+'px';
document.getElementById('container').style.height = limiteCampoBaixo+'px';

document.getElementById('config').addEventListener('click',function(){
    somClick.play();
    jog.style.display ='none';
    document.getElementById('menuJogo').style.display = 'block';
    document.querySelector('.telaJogo').style.display = 'none';
     document.getElementById('controlador').style.display = 'none';
     document.getElementById('config').style.display = 'none';
    parar();
    
})
document.getElementById('fechaMenu').addEventListener('click',function(){
    somClick.play();
    document.getElementById('menuJogo').style.display = 'none';
    jog.style.display ='block';
    document.querySelector('.telaJogo').style.display = 'block';
    document.getElementById('controlador').style.display = 'flex';
    document.getElementById('config').style.display = 'block';
    iniciar();
})

document.getElementById('voltarT2').addEventListener('click', function(){
    parar();
    somClick.play();
    zeraJogo();
    document.getElementById('audioFundo').pause();
    document.getElementById('audioMenu').play();
    document.getElementById('config').style.display = 'none';
    document.getElementById('controlador').style.display = 'none';
    document.getElementById('menuJogo').style.display = 'none';
    document.querySelector('#telaInicio').style.display = 'block';
})
document.getElementById('btnSom').addEventListener('click', function(){
    somClick.play();
    if(mute==false){
        document.getElementById('audioFundo').muted=true;
        document.getElementById('btnSom').innerText= 'Música: Off'
        mute = true;
        }else{
            document.getElementById('audioFundo').muted=false;
            document.getElementById('audioFundo').play();
            document.getElementById('btnSom').innerText= 'Música: On'
            mute = false;
      
        }
        
})


document.getElementById('creditos').addEventListener('click', function(){
    document.querySelector('#telaInicio').style.display = 'none';
    document.querySelector('#telaCreditos').style.display = 'flex';
    somClick.play();
  
     
 })

 document.getElementById('btnVoltar').addEventListener('click', function(){
    somClick.play();
    document.querySelector('#telaInicio').style.display = 'block';
    document.querySelector('#telaCreditos').style.display = 'none';
     
 })

function limitaCampo(){
    if(jogPosiX+tamanhoJogador[0]> limiteCampoDir-6){
        flechaDir = false;
      
       
    }else if(jogPosiX < limiteCampoEsq){
        flechaEsq = false;
     
    }
    if(jogPosiY+tamanhoJogador[1] > limiteCampoBaixo-6){
       flechaBaixo = false;
    
    }else if(jogPosiY < limiteCampoCima){
        flechaCima = false;
      
    }
}
function validaMovimento(){
    switch(flechaBaixo){
        case true:
            jogDireY=1;
            jogPosiY+=jogDireY*jogadorVel;
            
        break;
        case false:
            jogDireY=0;
    }
    switch(flechaEsq){
        case true:
            jogDireX=-1;
            jogPosiX+=jogDireX*jogadorVel;
        break;
        case false:
            jogDireX=0; 
    }
    switch(flechaCima){
        case true:
            jogDireY=-1;
            jogPosiY+=jogDireY*jogadorVel;
        break;
        case false:
            jogDireY=0;  
    }
    switch(flechaDir){
        case true:
            jogDireX=1;
            jogPosiX+=jogDireX*jogadorVel;
        break;
        case false:
            jogDireX=0;
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
 
    jog.style.left = jogPosiX+'px';
    jog.style.top = jogPosiY+'px';
    limitaCampo(); 
    
}

function verificaColisao(){

    if(verificaColisaoX && verificaColisaoY || verificaColisao2X && verificaColisao2Y == true ){
        verificaColisaoX = false;
        verificaColisaoY = false;
        
       
        jogPosiX = basePosi[0];
        jogPosiY = basePosi[1]+28;
    
        jog.style.left = jogPosiX+'px';
        jog.style.top = jogPosiY+'px';
        numeroMorte++;
        document.getElementById('numMorte').innerText='Numero de Mortes:  '+numeroMorte;
        document.getElementById('audioSoco').play();
    
    }
}
function base(){
    let tamBase=[basePosi[0]+85-tamanhoJogador[0],basePosi[1]+90-tamanhoJogador[1]];

    if(jogPosiX+3 >= basePosi[0] && jogPosiY >= basePosi[1] && jogPosiX < tamBase[0] && jogPosiY < tamBase[1]){
        validaColisao = false;
      
      
    }else{
        validaColisao = true;
    }
}
function verificaVencedor(){
    let fimVencerY = vencerPosiXeY[1]+18;
    let fimVencerX = vencerPosiXeY[0]+30;
    if(jogPosiX >= vencerPosiXeY[0] && jogPosiY >= vencerPosiXeY[1] && jogPosiX < fimVencerX && jogPosiY < fimVencerY){
        
      
    zeraJogo();
    document.getElementById('audioVencer').play();
        
    verificaRequestFrame = false;
    
    nFase+=1;
    chamaFase();
    document.querySelector('#numFase').innerText ='Fase: '+ nFase;
    }  
}
function zeraJogo(){
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

    
    jogPosiX = basePosi[0];
    jogPosiY = basePosi[1]+40;

    jog.style.left = jogPosiX+'px';
    jog.style.top = jogPosiY+'px';

    document.querySelector('.telaJogo').remove();
}