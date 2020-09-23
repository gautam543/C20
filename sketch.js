var movingRect;
var fixedRect;

function setup() {
 var canvas = createCanvas(800,400);
  movingRect=createSprite(600, 50, 50, 50);
movingRect.shapeColor="green"
fixedRect=createSprite(600,400,50,50)
fixedRect.shapeColor="green"
fixedRect.velocityY=-5;
movingRect.velocityY=5;
}

function draw() {
  background(0);  
  if(movingRect.y-fixedRect.y === movingRect.height/2+fixedRect.height/2){
 movingRect.velocityY = -(movingRect.velocityY)
 fixedRect.velocityY = -(fixedRect.velocityY)
 }
  drawSprites();

}