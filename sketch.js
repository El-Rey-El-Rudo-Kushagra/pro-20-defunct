var car1,car2,car3,car4,wall;
var speed,weight

function setup() {
  createCanvas(1920,930)

  speed=random(55,60)
  weight=random(400,1500)

//cars

car1= createSprite(1800,100,50,150);
car1.velocityX=speed;
car1.shapeColor=color(0,0,50)
if (keyCode==="h"){ 
  speed=5
} 

car2= createSprite(1800,300,50,150);
car2.velocityX=speed;
car2.shapeColor=color(29,184,223)

car3= createSprite(1800,500,50,150);
car3.velocityX=speed;
car3.shapeColor=color(200,200,232)

car4= createSprite(1800,700,50,150);
car4.velocityX=speed;
car4.shapeColor=color(97,97,129)

//wall 

 wall=createSprite(10,465,60,930)
 wall.shapeColor=color(55,145,142)
  
//lanes

 lane1=createSprite(960,200,1920,10)
 lane1.shapeColor=color(255,255,255)

 lane2=createSprite(960,400,1920,10)
 lane2.shapeColor=color(255,255,255)

 lane3=createSprite(960,600,1920,10)
 lane3.shapeColor=color(255,255,255)

//car 1 

  if(wall.x-car1.x<(car1.width+wall.width)/2)
  {
    car1.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car1.shapeColor=color(255,0,0);
    }
    if(deformation<180&&deformation>100)
    {
      car1.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car1.shapeColor=color(0,255,0);
    }
  }

//car 2

  if(wall.x-car2.x<(car2.width+wall.width)/2)
  {
    car2.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car2.shapeColor=color(255,0,0);
    }
    if(deformation<180&&deformation>100)
    {
      car2.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car2.shapeColor=color(0,255,0);
    }
  }

//car 3

  if(wall.x-car3.x<(car3.width+wall.width)/2)
  {
    car3.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car3.shapeColor=color(255,0,0);
    }
    if(deformation<180&&deformation>100)
    {
      car3.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car3.shapeColor=color(0,255,0);
    }
  }

//car 4

  if(wall.x-car4.x<(car4.width+wall.width)/2)
  {
    car4.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)5
    {
      car4.shapeColor=color(255,0,0);
    }
    if(deformation<180&&deformation>100)
    {
      car4.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car4.shapeColor=color(0,255,0);
    }
  }
}

function draw() { 
  background(50,50,50);  
  drawSprites();
}