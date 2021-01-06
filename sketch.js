var car,wall
var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(200,300,50,50);
  car.shapeColor="blue"
  wall=createSprite(800,300,20,80);
  wall.shapeColor="yellow"
  car.velocityX=4 
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red"
    fixedRect.shapeColor="red"
  } 
else{
  movingRect.shapeColor="green"
  fixedRect.shapeColor="green"
}
bounceOff(car,wall);
  drawSprites();
}

