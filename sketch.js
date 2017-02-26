var s = 'sleep phase: light sleep';
var lastupdate = 0
var levelup = 3000
var state = 1

var img1,img2,img3,img2,img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24;
var img25,img26,img27,img28,img29,img30,img31,img32,img33,img34,img35,img36,img37,img38,img39,img40,img41;

var previousMillis = 0;
var i = 0;
//var imageList

function preload(){
  
  img1 = loadImage("assets/jellyfish1.png");
  img2 = loadImage("assets/jellyfish2.png");
  img3 = loadImage("assets/jellyfish3.png");
  img4 = loadImage("assets/jellyfish4.png");
  img5 = loadImage("assets/jellyfish5.png");
  img6 = loadImage("assets/jellyfish6.png");
  img7 = loadImage("assets/jellyfish7.png");
  img8 = loadImage("assets/jellyfish8.png");
  img9 = loadImage("assets/jellyfish9.png");
  img10 = loadImage("assets/jellyfish10.png");
  img11 = loadImage("assets/jellyfish11.png");
  img12 = loadImage("assets/jellyfish12.png");
  img13 = loadImage("assets/jellyfish13.png");
  img14 = loadImage("assets/jellyfish14.png");
  img15 = loadImage("assets/jellyfish15.png");
  img16 = loadImage("assets/jellyfish16.png");
  img17 = loadImage("assets/jellyfish17.png");
  img18 = loadImage("assets/jellyfish18.png");
  img19 = loadImage("assets/jellyfish19.png");
  img20 = loadImage("assets/jellyfish20.png");
  img21 = loadImage("assets/jellyfish21.png");
  img22 = loadImage("assets/jellyfish22.png");
  img23 = loadImage("assets/jellyfish23.png");
  img24 = loadImage("assets/jellyfish24.png");
  
  img25 = loadImage("assets/jellyfish.png");
  img26 = loadImage("assets/architecture.png");
  img27 = loadImage("assets/ash.png");
  img28 = loadImage("assets/building.png");
  img29 = loadImage("assets/city.png");
  img30 = loadImage("assets/cloud.png");
  img31 = loadImage("assets/color.png");
  img32 = loadImage("assets/deer.png");
  img33 = loadImage("assets/dragonfly.png");
  //img34 = loadImage("assets/elephant.png");
  // img35 = loadImage("assets/eye.png");
  // img36 = loadImage("assets/festival.png");
  // img37 = loadImage("assets/fish.png");
  // img38 = loadImage("assets/girl.png");
  // img39 = loadImage("assets/ice.png");
  // img40 = loadImage("assets/kids.png");
  // img41 = loadImage("assets/tree.png");
}
function setup() {
 createCanvas(800,600);
}

function draw() {
   
   if (state > 3){
        state = 1
      }
    
    
   if (millis()-lastupdate > levelup){
     
    lastupdate = millis()
    state = state +1
        
    }
    
    //stage 1 lightsleep, people still have image in brain, but become blur and unclear
    if (state == 1){
   
  imageList1 = [img1,img2,img3,img2,img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19];
  animaImage(width/2, height/2, 200, 100,imageList1);
    }
  
  //stage 2 deepsleep, no image only noise
  if (state == 2){
  imageList2 = [img20,img21,img22,img23,img24];
  animaImage(width/2, height/2, 200, 100,imageList2);
  }
  
  //stage 3 REM part, eyes rapid move, dream with different images.
  if (state == 3){
  imageList3 = [img25,img26,img27,img28,img29,img30,img31,img32,img33];
  animaImage(width/2, height/2, 200, 100,imageList3);
    
   }
  
  }
  
  //function for play animation
  //"x""y" is image center position, "imgSize" is size of image want to place, "intervel" is frame rate, "imageList" images be used for animation
  function animaImage(x,y,imgSize,intervel,imageList){
    
    if ((millis())- previousMillis >= intervel){
     background(120);
        if (i < imageList.length){
         var img = imageList[i];
         imageMode(CENTER);
         image(img,x,y,imgSize,imgSize);
        }
     i ++;
    if (i >= imageList.length){
      i = 0;
    }
    previousMillis = millis();
   } 
  }
  
  