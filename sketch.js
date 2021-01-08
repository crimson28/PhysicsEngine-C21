var fixedRect,movingRect;

var newRect;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  newRect= createSprite(300,300,50,80);
  
  movingRect= createSprite(400, 200, 80, 30);

  movingRect.velocityX= -3;


  fixedRect.velocityX= 2;


  fixedRect.shapeColor= "green";
  movingRect.shapeColor= "green";
  newRect.shapeColor= "green";
  

}

function draw() {
  background(255,255,255);  
  // movingRect.x=World.mouseX;
  // movingRect.y=World.mouseY;

  // if(isTouching(movingRect,newRect)){
       
  //       movingRect.shapeColor="red";
  //       newRect.shapeColor="red";
  
  // }
  // else{

  //       movingRect.shapeColor="green";
  //       newRect.shapeColor="green";

  // }
  
  bounceOff(fixedRect,movingRect);

  drawSprites();
}

