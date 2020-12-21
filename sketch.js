var bullet,wall;
var speed,weight,thicknes;

function setup() {
  createCanvas(800,400);
  bullet = createSprite(80, 200, 5, 10);
  bullet.debug = false;

  speed=random(22,55);
  weight=random(500,1500);
  thicknes = random(23,80);

  bullet.velocityX = speed;

  wall = createSprite(400,200,thicknes,height/2);
  wall.shapeColour="grey";
}

function draw() {
  background("black");

  Collided();

if(Collided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thicknes*thicknes*thicknes);

  if(damage>10){
    wall.shapeColor = "red";
  }

  if(damage<10){
    wall.shapeColor = "green";
  }

}

  drawSprites();
}

function Collided(lbullet,lwall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
    return false
}