var vencerPosiXeY=[];

var tamanhoJogador = [30, 30];
var tamanhoObstaculo = [25, 25];
var novoNivel =[];
var nNivel=0;
var nFase=1;

var jogadorVel=5;

var obstaculoVel=[4,3,5];

var criaElemento = new novaFase();

var verificaRequestFrame = false;

var tempInicio;
/*
            --------INSTRUÇÃO PARA CRIAR OBSTACULOS--------

    Deve ser instanciado o objeto newObst 



criaElemento.newNivel(1,1000,0,function(){
    //fase Wallace
  //  for(let i=1;i<5;i++){
       // criaElemento.newObst(i*100,000,1,1,0);
   //    criaElemento.newObst(i*100,100,0,1,1);
        criaElemento.newObst(200,0,0,1,0);
        criaElemento.newObst(400,550,0,1,0);

    /*    criaElemento.newObst(i*100,300,1,1,2);
        criaElemento.newObst(i*200,400,0,0,0);
        criaElemento.newObst(i*100,500,1,1,1);
     //  }
});
*/
/*
criaElemento.newNivel(1,1000,210,function(){
 
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
*/
criaElemento.newJogador();

criaElemento.newNivel(0,0,function(){});


function nivel1(){
    verificaRequestFrame == true
   tempIncio = setTimeout(function(){

    timeMovePlayer = setInterval(enterFrame , 20);
    criaElemento.newNivel(1000,200,function(){
     
        criaElemento.newObst(150,0,0,1,0);  
        criaElemento.newObst(250,520,0,1,0);
        criaElemento.newObst(350,0,0,1,0);
        criaElemento.newObst(450,520,0,1,0);
        criaElemento.newObst(550,0,0,1,0);
        criaElemento.newObst(650,520,0,1,0);
        criaElemento.newObst(750,0,0,1,0);
        criaElemento.newObst(850,520,0,1,0);

    
    });
}, 500);
}
function nivel2(){
    verificaRequestFrame == true
    tempIncio = setTimeout(function(){

    timeMovePlayer = setInterval(enterFrame , 20);
    criaElemento.newNivel(1000,200,function(){
        
        
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
}, 500);
}
function nivel3(){
    verificaRequestFrame == true
    tempIncio = setTimeout(function(){

    timeMovePlayer = setInterval(enterFrame , 20);
    criaElemento.newNivel(1000,200,function(){
        
        
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
}, 500);
}
function nivel4(){
    verificaRequestFrame == true
    tempIncio = setTimeout(function(){

    timeMovePlayer = setInterval(enterFrame , 20);
    criaElemento.newNivel(1000,200,function(){
        
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
}, 500);
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
timeMovePlayer = setInterval(enterFrame , 20);
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
    verificaRequestFrame = false;
    console.log("oi");
 
 })



function novaFase(){
    
    this.elNovoNivel;
    this.elProximoNivel;

    this.newVencer = function(){
        const vencer = document.createElement("div");
        vencer.id = 'vencer';
        this.elNovoNivel.insertAdjacentElement('beforeend', vencer);
        vencer.style.left = vencerPosiXeY[0]+'px';
        vencer.style.top = vencerPosiXeY[1]+'px';

       

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
        
    
        
        //console.log(nFase);
 
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
        
             
                
            jogDireX = 0;
            jogDireY = 25;
            jogPosiX=jogDireX*jogadorVel;
            jogPosiY=jogDireY*jogadorVel; 
            jog.style.left = jogPosiX+'px';
            jog.style.top = jogPosiY+'px';
        
            
              nFase+=1;
           
            document.querySelector('.telaJogo').remove();

            clearInterval(timeMovePlayer);
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
    validaMovimento();
    verificaColisao();
    
    verificaColisaoX = false;
    verificaColisaoY = false;   
    verificaColisao2X = false;
    verificaColisao2Y = false;  
  
}




