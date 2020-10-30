var car, wall
var speed,weight,deformation

function setup() {
  createCanvas(1200,600);
  car = createSprite(50, 300, 70, 70);
  car.shapeColor = "white";
  car.debug = true;
  wall = createSprite(1150,300,60,300);
  wall.shapeColor = "green";
  wall.debug = true;
  speed=round(random(55,90))
  weight=round(random(400,1500))
deformation=(0.5*weight*speed*speed)/22500
car.velocityX=speed
}
function draw() {
  background(0,0,0);  
  

  if( isTouching(car,wall)){
    car.velocityX=0
    if(deformation>180){
      car.shapeColor="red"
    }else if(deformation<180&&deformation>80){
      car.shapeColor="yellow"

    }else if(deformation<80){
      car.shapeColor="green"
    }
    
  } 

  
  drawSprites();
}


