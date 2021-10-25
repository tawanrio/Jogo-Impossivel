function chamaFase(){
    switch (nFase){
        case 1:
            nFase=1;
            nivel1();
        break;
        case 2:
            nFase=2;
            nivel2();
        break;
        case 3:
            nFase=3;
            nivel3();
        break;
        case 4:
            nFase=4;
            nivel4();
        break;
        case 5:
            nFase=5;
            nivel5();
        break;
        case 6:
            nFase=6;
            nivel6();
        break;
        case 7:
            nFase=7;
            nivel7();
        break;
        case 8:
            nFase=8;
            nivel8();
        break;
        case 9:
            nFase=9;
            nivel9();
        break;
        case 10:
            nFase=10;
            nivel10();
        break;
    }  
}

document.getElementById('jogar').addEventListener('click', function(){
     
  document.querySelector('#telaInicio').style.display = 'none';
  document.querySelector('#numFase').innerText ='Fase: '+ nFase;

  somClick.play();
  document.getElementById('audioFundo').play();
  document.getElementById('audioMenu').pause();


  //altera a linha aqui para mudar a fase
  nivel7();


  iniciar();
     
 })
function nivel1(){
    
    tempIncio = setTimeout(function(){
    criaElemento.newNivel(0,220,1000,230,function(){
        

        criaElemento.newBase();
     
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
       
    criaElemento.newNivel(0,220,1000,230,function(){
        criaElemento.newBase();
     
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
    criaElemento.newNivel(0,220,1000,230,function(){
        criaElemento.newBase();
       
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
        criaElemento.newNivel(0,220,1000,230,function(){
            criaElemento.newBase();
      

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
        criaElemento.newNivel(0,0,980,0,function(){
            criaElemento.newBase();
          
            criaElemento.newObstaculoSup(55,523,0,1,4);
            criaElemento.newObstaculoSup(120,405,0,1,4);

            criaElemento.newObstaculoSup(155,275,1,0,1.8);

            criaElemento.newObstaculoSup(775,275,1,0,1.8);

            criaElemento.newObstaculoSup(255,0,0,1,4);
            criaElemento.newObstaculoSup(323,120,0,1,4);

            criaElemento.newObstaculoSup(362,0,0,1,4);
            criaElemento.newObstaculoSup(418,520,0,1,4);
            
            criaElemento.newObstaculoSup(563,520,0,1,4);
            criaElemento.newObstaculoSup(618,0,0,1,4);
            
            criaElemento.newObstaculoSup(460,523,0,1,4);
            criaElemento.newObstaculoSup(520,405,0,1,4);
            
            criaElemento.newObstaculoSup(660,0,0,1,4);
            criaElemento.newObstaculoSup(720,120,0,1,4);

            criaElemento.newObstaculoSup(860,523,0,1,4);
            criaElemento.newObstaculoSup(920,405,0,1,4);
            
            
        
        criaElemento.newBarreira(57,000,95,395);
        
        criaElemento.newBarreira(257,150,95,395);;

        criaElemento.newBarreira(457,0,95,395);
       

        criaElemento.newBarreira(657,150,95,395);
      

        criaElemento.newBarreira(857,0,95,395);
      



    });
}, 250);
}
function nivel6(){
    tempIncio = setTimeout(function(){
        verificaRequestFrame == true
        criaElemento.newNivel(0,220,1000,230,function(){
          
            criaElemento.newBase();
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
        criaElemento.newNivel(0,420,1000,0,function(){
            criaElemento.newBase();
             criaElemento.newObstaculoSup(0,0,1,1,3);
             criaElemento.newObstaculoSup(300,0,0,1,4.2);
             criaElemento.newObstaculoSup(100,0,0,1,4.2);
             criaElemento.newObstaculoSup(500,0,0,1,4.2);
             criaElemento.newObstaculoSup(700,0,0,1,4.2);
             criaElemento.newObstaculoSup(600,0,1,1,3);

             criaElemento.newObstaculoSup(400,200,0,1,4.2);
             criaElemento.newObstaculoSup(200,200,0,1,4.2);
             criaElemento.newObstaculoSup(600,200,0,1,4.2);
             criaElemento.newObstaculoSup(800,200,0,1,4.2);
             criaElemento.newObstaculoSup(200,300,-1,-1,3);

             criaElemento.newObstaculoSup(190,500,0,1,4.2);
             criaElemento.newObstaculoSup(390,500,0,1,4.2);
             criaElemento.newObstaculoSup(590,500,0,1,4.2);
             criaElemento.newObstaculoSup(790,500,0,1,4.2);
             criaElemento.newObstaculoSup(970,500,0,1,4.2);
             
         
         
            
 

     criaElemento.newBarreira(70,150,800,50);
     criaElemento.newBarreira(0,500,100,50);
     criaElemento.newBarreira(190,350,790,50);
     criaElemento.newBarreira(70,150,50,400);
     criaElemento.newBarreira(950,0,50,400);


    });
}, 250);
}
function nivel8(){
    verificaRequestFrame == true
    tempIncio = setTimeout(function(){
        criaElemento.newNivel(0,220,1000,400,function(){
            criaElemento.newBase();
            let i=0;
            do {
                criaElemento.newObstaculoSup(i*42+10,15,0,0,2);
                i++
            } while (i<25);

            let i1=0;
            do {
                criaElemento.newObstaculoSup(i1*42+10,60,0,0,2);
                i1++
            } while (i1<25);
            /*let i2=0;
            do {
                criaElemento.newObstaculoSup(i2*42+10,105,0,0,2);
                i2++
            } while (i2<25);


            let i3=0;
            do {
                criaElemento.newObstaculoSup(i3*42+10,415,0,0,2);
                i3++
            } while (i3<25);
*/
            let i4=0;
            do {
                criaElemento.newObstaculoSup(i4*42+10,460,0,0,2);
                i4++
            } while (i4<25);
            let i5=0;
            do {
                criaElemento.newObstaculoSup(i5*42+10,505,0,0,2);
                i5++
            } while (i5<25);
            let i6=0;
            do {
                criaElemento.newObstaculoSup(i6*42+10,i6*45+150,0,0,2);
                i6++
            } while (i6<5);
            let i7=0;
            do {
                criaElemento.newObstaculoSup(270,i7*45+240,0,0,2);
                i7++
            } while (i7<5);
            let i8=0;
            do {
                criaElemento.newObstaculoSup(i8*42+270,i8*45+100,0,0,2);
                i8++
            } while (i8<7);
            let i9=0;
            do {
                criaElemento.newObstaculoSup(i9*42+510,i9*45+200,0,0,2);
                i9++
            } while (i9<6);
            let i10=0;
            do {
                criaElemento.newObstaculoSup(765,i10*45+100,0,0,2);
                i10++
            } while (i10<6);
            let i11=0;
            do {
                criaElemento.newObstaculoSup(900-i11*42,i11*45+335,0,0,2);
                i11++
            } while (i11<3);

            criaElemento.newObstaculoSup(900,285,0,0,2);
            criaElemento.newObstaculoSup(900,240,0,0,2);
            criaElemento.newObstaculoSup(900,185,0,0,2);
            criaElemento.newObstaculoSup(900,140,0,0,2);
            criaElemento.newObstaculoSup(940,140,0,0,2);
            criaElemento.newObstaculoSup(986,210,0,0,2);
            criaElemento.newObstaculoSup(1024,210,0,0,2);
           
            criaElemento.newObstaculoSup(940,285,0,0,2);
            criaElemento.newObstaculoSup(986,365,0,0,2);
            criaElemento.newObstaculoSup(1024,365,0,0,2);


    });
}, 250);
}
function nivel9(){
    verificaRequestFrame == true
    tempIncio = setTimeout(function(){
        criaElemento.newNivel(0,220,1000,230,function(){
            criaElemento.newBase();

            for(let i=0;i<6;i++){
                criaElemento.newObstaculoSup(i*150+95,0,0,1,3);
                criaElemento.newObstaculoSup(i*150+145,0,0,1,4);
                criaElemento.newObstaculoSup(i*150+195,0,0,1,5);
            }
    });
}, 250);
}
function nivel10(){
    verificaRequestFrame == true
    tempIncio = setTimeout(function(){
        criaElemento.newNivel(0,220,1000,230,function(){
            criaElemento.newBase();
          
    });
}, 250);
}