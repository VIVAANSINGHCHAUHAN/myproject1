var gunImg,bulletImg,redballoonImg,blueballoonImg,greenballoonImg,backgroundImg,stoplineImg
var gun, bullet
var bulletGroup
var edges
var blueballoon;
var blueBalloonGroup;

function preload(){
    gunImg = loadImage("ak472.png");
    bulletImg = loadImage("bullet.jpg");
    redballoonImg = loadImage("balloonred.jpg");
    blueballoonImg = loadImage("balloonblue.jpg");
    greenballoonImg = loadImage("balloongreen.jpg");
    backgroundImg = loadImage("brickbackground.webp");
    stoplineImg = loadImage("stopline.png");
}

function setup(){
   createCanvas(1200,600);
   
   gun = createSprite(200,400);
   gun.addImage(gunImg);
   gun.scale = 0.5

   

   bulletGroup = new Group()
   blueBalloonGroup = new Group()
 
   edges = createEdgeSprites()
   
}

function draw(){
  background("white");

  if(keyDown("space")){
    bullet = createSprite(200,gun.y);
    bullet.addImage(bulletImg);
    bullet.scale = 0.05
    bullet.velocityX = 4;
    bulletGroup.add(bullet);
    bullet.lifetime = 300  
    }
  rect(280,1,20,600);
   
  gun.y = mouseY
  gun.collide(edges);

  if(bulletGroup.isTouching(blueBalloonGroup)){
    console.log("touch");
    blueBalloonGroup.destroyEach();
    bulletGroup.destroyEach();
  }

  

  spawnBlueBalloon();
  drawSprites()
}

function spawnBlueBalloon() {
  if(frameCount% 240 === 0){
     blueballoon = createSprite(1200,300,20,50);
     blueballoon.addImage(blueballoonImg)
     blueballoon.velocityX = -2;
     blueballoon.scale = 0.13
     blueballoon.y = random(10,500)
  }

}
