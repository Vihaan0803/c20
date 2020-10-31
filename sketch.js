var car, wall 
var speed, weight 
function setup() {
  createCanvas(1600,1600);
  car = createSprite(50, 200, 50, 50);
speed = random(55,90)
weight = random(400,1500) 
wall = createSprite(1500,200,60,height/2)
car.velocityX=speed 
}

function draw() {
  background(0);  
  drawSprites();
  if(wall.x-car.x<wall.width/2+car.width/2){
    deformation=(0.5*weight*speed*speed)/22500
    car.velocityX=0
    if(deformation<100){
      car.shapeColor="green"
    }
    else if(deformation>100&&deformation<180){
      car.shapeColor = "yellow"
    }
    else if(deformation>180){
      car.shapeColor="red"
    }
  }
}