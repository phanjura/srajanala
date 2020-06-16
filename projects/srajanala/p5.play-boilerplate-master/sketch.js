var bullet,wall;
var speed,weight;
var thickness;
var damage;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,70,10);
  bullet.shapeColor = "white";

  thickness = random(22,83);  

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "#FF007F";

  speed = random(223,321);
  weight = random(30,52);

  bullet.velocityX = speed;

 
}

function draw() {
  background(0,0,0);

  if(bullet.collide(wall)){
    bullet.velocityX = 0;
    damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
  }

  if(damage>10){
    wall.shapeColor = "red";
  }

  if(damage<=4){
    wall.shapeColor = "green";
  }
  drawSprites();
}











