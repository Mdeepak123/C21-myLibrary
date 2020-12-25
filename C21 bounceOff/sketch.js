var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -1;
  fixedRect.velocityY = +1;
}

function draw() {
  background(0);  

  bounceOff(movingRect,fixedRect);
  
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }

  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  
  }

  drawSprites();
}