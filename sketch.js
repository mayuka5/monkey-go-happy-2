
var bananaimg , obstacleImage ,obstaclegroup,score;
var monkey ,playerRunning
var ground;
var backgroundimg
var score;  
var monkey  
var ground
var playerRunning
var bkg
var bananaGroup;

function preload(){
  backgroundimg=loadImage("jungle.png")
  playerRunning=loadAnimation("Monkey_01.png","Monkey_02.png",  "Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaimg=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
   bkg =createSprite(0,0,400,400);
  bkg.addImage("background",backgroundimg);
  bkg.velocityX = -2;
  bkg.scale=3;
   score=0;
  
   obstaclesGroup = new Group();
  bananaGroup=new Group();
   //obstaclegroup.addImage("image",obstacleImage) 
   monkey=createSprite(50,380,10,10);
  monkey.addAnimation("running",playerRunning)
  monkey.scale=0.1;
   ground=createSprite(400,380,800,20);
  ground.visible=false;
  //var bananas =createSprite()
  
}

function draw() {
  background(220);
  
  score = score + Math.round(getFrameRate()/80);
  
  
  spawnobstacles();
  spawnfruits();
  
  if(obstaclesGroup.isTouching(monkey)){
  monkey.scale=0.2;
  }
  
  if (bkg.x < 0){
    bkg.x = bkg.width/2;
  }
  
  
  //console.log(monkey.y);
  
   if(keyDown("space") ){
    monkey.velocityY = -15 ;
   }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  drawSprites();
   text("SurvivalTime: "+ score, 250, 100)
  
  switch (score){
  
    case 10: monkey.scale=0.12;
      break;
  case 20: monkey.scale=0.14;
      break;
  case 30: monkey.scale=0.16;
      break;
  case 40: monkey.scale=0.18;
      break;
 
  
  }
  
  
}
function spawnobstacles() {
  //write code here to spawn the obstacles
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(600,360,40,10);
     
    obstacle.addImage("image",obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;    
    obstaclesGroup.add(obstacle);
  }
  
}
function spawnfruits() {
  //write code here to spawn the obstacles
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,300,10,10);
     banana.y=Math.round(random(240,300));
    banana.addImage("image",bananaimg);
    banana.scale = 0.05;
    banana.velocityX = -3;
    banana.lifetime = 200;    
    bananaGroup.add(banana);
  }
}