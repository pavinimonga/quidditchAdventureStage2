var canvas,harry,voldemort,bush1,bush2,bush3,bush4,fire1,fire2,ghost,ghost2,wall1,wall2,wall3,wall4,wall5,wall6;
var bg0,bg1,bg2,bg1img,bg2img,bg0img;
var harryimage,voldemortimage,bush1image,bush2image,bush3image,bush4image,fire1img,fire2img,ghostimg,ghost2img;
var wall1img,wall2img,wall3img,wall4img,wall5img,wall6img,backgroundimg;
var start,startimg;
var mazebackground,mazebgimg;
var gameState =0;


function preload(){
      bg0img=loadImage("../images/bg0.png");
      bg1img=loadImage("../images/bg1.jpg");
      bg2img=loadImage("../images/bg2.jpg");
      harryimage=loadImage("../images/harrypottergame.png");
      voldemortimage=loadImage("../images/voldemort.png");
      bush1image=loadImage("../images/bush1-removebg-preview.png");
      bush2image=loadImage("../images/bush2-removebg-preview.png");
      bush3image=loadImage("../images/bush3-removebg-preview.png");
      bush4image=loadImage("../images/bush4-removebg-preview.png");
      fire1img=loadImage("../images/fire1-removebg-preview.png");
      fire2img=loadImage("../images/fire2-removebg-preview.png");
      ghostimg=loadImage("../images/ghost-removebg-preview.png");
      ghost2img=loadImage("../images/ghosts-removebg-preview.png");
      wall1img=loadImage("../images/wall1.jpg");
      wall2img=loadImage("../images/wall2.jpg");
      wall3img=loadImage("../images/wall3.jpg");
      wall4img=loadImage("../images/wall4.jpg");
      wall5img=loadImage("../images/wall5.jpg");
      wall6img=loadImage("../images/wall6.jpg");
      startimg=loadImage("../images/start.png");
      mazebgimg=loadImage("../images/mazebg.jpg");
}

function setup(){
      createCanvas(windowWidth,windowHeight);

       //gamestate0
       startState();

       //gamestate1
     setMaze(); 
}

function draw(){
      background(0);
      
      if(gameState===0){
        bg0.visible = true;
        start.visible = true;
        startLevel();
      }

      if(gameState===1){
          bg1.visible=true;
      //     bush1.visible=true;
      //     bush2.visible=true;
      //     bush3.visible=true;
      //     bush4.visible=true;
      //     fire1.visible=true;
      //     fire2.visible=true;
      //     ghost.visible=true;
      //     ghosts.visible=true;
          wall1.visible=true;
          wall2.visible=true;
          wall3.visible=true;
      //     wall4.visible=true;
      //     wall5.visible=true;
      //     wall6.visible=true; 
      }
      drawSprites();
}

function startState(){

      bg0=createSprite(width/2,height/2-150,width,height);
      bg0.addImage(bg0img);
      bg0.scale=2;
      bg0.visible = false;

      start=createSprite(width/2,height/2+150,50,30);
      start.addImage(startimg);
      start.scale=0.5;
      start.visible = false;
      

}

function startLevel(){
    stroke("silver");
      strokeWeight(5);
      textSize(20);
      fill(255);
      text("Welcome to the Hogwarts World!\n Level 1: \n Use arrow keys to reach the final door..",width/2-150,height/2); 


      if(mousePressedOver(start)){
        clear();
        //game state changes to 1
        gameState=1;

      }
}

function setMaze(){
    bg1=createSprite(width/2,height/2,width,height);
    bg1.addImage(mazebgimg);
    bg1.scale=3;
    bg1.visible=false;
     
    bush1=createSprite(100,150,300,150);
    bush1.addImage(bush1image);
    bush1.scale=1;
    bush1.visible=false;

    bush2=createSprite(width/2-190,200,300,150);
    bush2.addImage(bush2image);
    bush2.scale=2;
    bush2.visible=false;

    bush3=createSprite(width/2,100,300,150);
    bush3.addImage(bush3image);
    bush3.scale=2;
    bush3.visible=false;

    bush4=createSprite(250,400,100,200);
    bush4.addImage(bush4image);
    bush4.scale=3;
    bush4.visible=false;

    fire1=createSprite(152,244,100,200);
    fire1.addImage(fire1img);
    fire1.scale=2;
    fire1.visible=false;

    fire2=createSprite(257,123,50,100);
    fire2.addImage(fire2img);
    fire2.scale=3;
    fire2.visible=false;

    harry=createSprite(48,390,50,50);
    harry.addImage(harryimage);
    harry.scale=2;
    harry.visible=false;

   
    wall1=createSprite(width/6-100,height-100,100,30);
    wall1.addImage(wall1img);
    wall1.scale=0.5;
    wall1.visible=false;

    wall2=createSprite(width/5,height-500,150,20);
    wall2.addImage(wall2img);
    wall2.scale=0.5;
    wall2.visible=false;

    wall3=createSprite(width/6,height-200,150,100);
    wall3.addImage(wall3img);
    wall3.scale=0.5;
    wall3.visible=false;

    wall4=createSprite(296,130,150,100);
    wall4.addImage(wall4img);
    wall4.scale=2;
    wall4.visible=false;

    wall5=createSprite(330,200,150,100);
    wall5.addImage(wall4img);
    wall5.scale=2;
    wall5.visible=false;

    wall6=createSprite(326,44,150,100);
    wall6.addImage(wall6img);
    wall6.scale=2;
    wall6.visible=false;
    
//    if(harry.isTouching(bush1||bush2||bush3||bush4||fire1||fire2||wall1||wall2||wall3||wall4||wall5||wall6)){
//       gameState===2;

// }
      // if(gameState===2){
      //       harry.x=48;
      //       harry.y=390;
      // }


     

}


  