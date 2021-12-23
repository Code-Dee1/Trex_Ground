var Edges;
var ground,ground_image;
var trex ,trex_running;
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png") 
ground_image=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  Edges=createEdgeSprites();
  //create a trex sprite
 trex=createSprite(40,175,20,40)
 trex.addAnimation("running",trex_running)
 trex.scale=0.5

 ground=createSprite(200,185,400,10)
 ground.velocityX=-4
ground.addImage(ground_image)
 ground.x=ground.width/2
}

function draw(){
  background(220)
  if (keyDown("Space")){
    trex.velocityY=-10
  }
  trex.velocityY = trex.velocityY+0.8
  if(ground.x<30){
    ground.x=ground.width/2
  }
  trex.collide(ground);
drawSprites();
}
