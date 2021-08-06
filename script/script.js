var vencerPosiXeY=[];

var tamanhoJogador = [30, 30];
var tamanhoObstaculo = [25, 25];



var jogadorVel=5;

var obstaculoVel=[4,3,5];

var criaElemento= new novaFase();

/*
            --------INSTRUÇÃO PARA CRIAR OBSTACULOS--------

    Deve ser instanciado o objeto newObst 

*/

criaElemento.newNivel(5,1000,210,function(){
 
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
criaElemento.newJogador();

capturaElementosDom();
window.addEventListener('keydown', capturaTeclaPress);
window.addEventListener('keyup', capturaTeclaSolt);
timeMovePlayer = setInterval(enterFrame , 20);

document.getElementById('botao').addEventListener('click', function(){
    nivel1.style.display = 'none';
})

function novaFase(){
    
    this.newNivel = function(id,vencerX,vencerY,callback){
        const novoNivel = document.createElement("div");
        const vencer = document.createElement("div");

        let nivel = [id]
        novoNivel.id = id;
       
        novoNivel.className = 'telaJogo'
        vencer.id = 'vencer';

        document.querySelector('#container').insertAdjacentElement('beforeend', novoNivel);
        document.querySelector('#container').insertAdjacentElement('beforeend', vencer);

        //style.display = 'none';
        vencerPosiXeY = [vencerX,vencerY] ;
        
        vencer.style.left = vencerPosiXeY[0]+'px';
        vencer.style.top = vencerPosiXeY[1]+'px';
        
        callback();

    }
    this.newJogador = function(){
        const novoJogador = document.createElement("div");
        novoJogador.id = 'jog';
        document.querySelector('#container').insertAdjacentElement('beforeend', novoJogador);
    }

    this.newObst = function(posiX,posiY,direX,direY,vel){
    const novoObst = document.createElement("div");
    novoObst.className = 'obstaculos';
    document.querySelector('.telaJogo').insertAdjacentElement('beforeend', novoObst);
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
        function requestFrame(){
            moveObst();
            logicaColisao();
            
        anima=requestAnimationFrame(requestFrame)
            }
    
}

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
  
}




