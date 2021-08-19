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
        case 7:
            nivel7();
        break;
        case 8:
            nivel8();
        break;
        case 9:
            nivel9();
        break;
        case 10:
            nivel10();
        break;
    }  
}
document.getElementById('jogar').addEventListener('click', function(){
  
  document.querySelector('#telaInicio').style.display = 'none';

  somClick.play();
  document.getElementById('audioFundo').play();
  document.getElementById('audioMenu').pause();
  iniciar();
  
  nivel1();
 })
function nivel1(){
    
    tempIncio = setTimeout(function(){
    criaElemento.newNivel(1000,200,function(){
        
     
        criaElemento.newObstaculoSup(150,0,0,1,4);
        criaElemento.newObstaculoSup(250,520,0,1,4);
        criaElemento.newObstaculoSup(350,0,0,1,4);
        criaElemento.newObstaculoSup(450,520,0,1,4);
        criaElemento.newObstaculoSup(550,0,0,1,4);    
        criaElemento.newObstaculoSup(650,520,0,1,4);
        criaElemento.newObstaculoSup(750,0,0,1,4);
        criaElemento.newObstaculoSup(850,520,0,1,4);
        
    
    });
}, 250);
}
function nivel2(){
    tempIncio = setTimeout(function(){
       
    criaElemento.newNivel(1000,200,function(){
     
    criaElemento.newObstaculoSup(0000,000,1,1,4);
    criaElemento.newObstaculoSup(0000,520,1,1,4);
    criaElemento.newObstaculoSup(1000,000,1,1,4);
    criaElemento.newObstaculoSup(1000,520,1,1,4);
    criaElemento.newObstaculoSup(0000,100,1,0,4);
    criaElemento.newObstaculoSup(1000,110,1,0,4);
    criaElemento.newObstaculoSup(0000,210,1,0,4);
    criaElemento.newObstaculoSup(1000,310,1,0,4);
    criaElemento.newObstaculoSup(0000,410,1,0,4);
    criaElemento.newObstaculoSup(1000,510,1,0,4);
        
    });
}, 250);
}
function nivel3(){
    //fase Wallace
    tempIncio = setTimeout(function(){
        verificaRequestFrame == true;
    criaElemento.newNivel(1000,200,function(){
       
    for(let i=1;i<5;i++){
        criaElemento.newObstaculoSup(i*100,000,1,1,4);
        criaElemento.newObstaculoSup(i*200,100,0,1,4);
        criaElemento.newObstaculoSup(i*100,300,1,1,4);
        criaElemento.newObstaculoSup(i*200,110,0,0,4);
        criaElemento.newObstaculoSup(i*200,410,0,0,4);
        criaElemento.newObstaculoSup(i*100,500,1,1,4);
  }
        
    });
}, 250);
}
function nivel4(){
    //tawan
    tempIncio = setTimeout(function(){
        verificaRequestFrame == true
        criaElemento.newNivel(1000,200,function(){
      

        criaElemento.newObstaculoSup(150,0,0,1,4);  
        criaElemento.newObstaculoSup(250,520,0,1,4);
        criaElemento.newObstaculoSup(350,0,0,1,4);
        criaElemento.newObstaculoSup(450,520,0,1,4);
        criaElemento.newObstaculoSup(550,0,0,1,4);
        criaElemento.newObstaculoSup(650,520,0,1,4);
        criaElemento.newObstaculoSup(750,0,0,1,4);
        criaElemento.newObstaculoSup(850,520,0,1,4);
        criaElemento.newObstaculoSup(0,0,1,1,4);
        criaElemento.newObstaculoSup(0,520,1,1,4);
        criaElemento.newObstaculoSup(1000,0,1,1,4);
        criaElemento.newObstaculoSup(1000,520,1,1,4);
        criaElemento.newObstaculoSup(0,10,1,0,4);
        criaElemento.newObstaculoSup(1000,110,1,0,4);
        criaElemento.newObstaculoSup(0,210,1,0,4);
        criaElemento.newObstaculoSup(1000,310,1,0,4);
        criaElemento.newObstaculoSup(0,410,1,0,4);
        criaElemento.newObstaculoSup(1000,510,1,0,4);
        
    });
}, 250);
}
function nivel5(){
    tempIncio = setTimeout(function(){
        verificaRequestFrame == true
        criaElemento.newNivel(1000,0,function(){
          
            criaElemento.newObstaculoSup(60,523,0,1,4);
            criaElemento.newObstaculoSup(120,410,0,1,4);

            criaElemento.newObstaculoSup(155,275,1,0,2);

            criaElemento.newObstaculoSup(775,275,1,0,2);

            criaElemento.newObstaculoSup(260,0,0,1,4);
            criaElemento.newObstaculoSup(320,120,0,1,4);

            criaElemento.newObstaculoSup(365,0,0,1,4);
            criaElemento.newObstaculoSup(415,520,0,1,4);
            
            criaElemento.newObstaculoSup(565,520,0,1,4);
            criaElemento.newObstaculoSup(615,0,0,1,4);
            
            criaElemento.newObstaculoSup(460,523,0,1,4);
            criaElemento.newObstaculoSup(520,410,0,1,4);
            
            criaElemento.newObstaculoSup(660,0,0,1,4);
            criaElemento.newObstaculoSup(720,120,0,1,4);

            criaElemento.newObstaculoSup(860,523,0,1,4);
            criaElemento.newObstaculoSup(920,410,0,1,4);
            
            
        
        criaElemento.newBarreira(57,000,105,400);
        

        criaElemento.newBarreira(257,150,100,400);;

        criaElemento.newBarreira(457,0,100,400);
       

        criaElemento.newBarreira(657,150,100,400);
      

        criaElemento.newBarreira(857,0,100,400);
      



    });
}, 250);
}
function nivel6(){
    tempIncio = setTimeout(function(){
        verificaRequestFrame == true
        criaElemento.newNivel(1000,200,function(){
          
           criaElemento.newObstaculoSup(140,0,0,1,5);
           criaElemento.newObstaculoSup(300,0,0,1,5);

           criaElemento.newObstaculoSup(140,500,0,1,5);
           criaElemento.newObstaculoSup(300,500,0,1,5);

           criaElemento.newObstaculoSup(640,0,0,1,5);
           criaElemento.newObstaculoSup(800,0,0,1,5);

           criaElemento.newObstaculoSup(640,500,0,1,5);
           criaElemento.newObstaculoSup(800,500,0,1,5);
           
           criaElemento.newObst(0,0,1,1,80,80,2);
           criaElemento.newObst(1000,0,1,1,80,80,2);
           criaElemento.newObst(1000,520,1,1,80,80,2);
           criaElemento.newObst(0,520,1,1,80,80,2);


           criaElemento.newObstaculoSup(0,350,1,0,5);
           criaElemento.newObstaculoSup(0,190,1,0,5);

           criaElemento.newObstaculoSup(400,350,1,0,5);
           criaElemento.newObstaculoSup(400,190,1,0,5);

           criaElemento.newObstaculoSup(1000,350,1,0,5);
           criaElemento.newObstaculoSup(1000,190,1,0,5);
           
            criaElemento.newBarreira(150,200,200,200);

            criaElemento.newBarreira(650,200,200,200);
           



    });
}, 250);
}
function nivel7(){
    verificaRequestFrame == true
    tempIncio = setTimeout(function(){
        criaElemento.newNivel(1000,200,function(){
            criaElemento.newBarreira(0,0);
      //  criaElemento.newObst(150,0,0,1,0);  

    });
}, 250);
}/*
function nivel8(){
    verificaRequestFrame == true
    tempIncio = setTimeout(function(){
        criaElemento.newNivel(1000,200,function(){
            criaElemento.newBarreira(0,0);
        criaElemento.newObst(150,0,0,1,0);  

    });
}, 250);
}
function nivel9(){
    verificaRequestFrame == true
    tempIncio = setTimeout(function(){
        criaElemento.newNivel(1000,200,function(){
            criaElemento.newBarreira(0,0);
        criaElemento.newObst(150,0,0,1,0);  

    });
}, 250);
}
function nivel10(){
    verificaRequestFrame == true
    tempIncio = setTimeout(function(){
        criaElemento.newNivel(1000,200,function(){
            criaElemento.newBarreira(0,0);
        criaElemento.newObst(150,0,0,1,0);  

    });
}, 250);
}*/