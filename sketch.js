var bullet,wall;
var speed,weight,thikness;
var damage;

function setup() {
  createCanvas(1600,400);
  
  speed = random(80,120)
  weight = random(400,1500)
  thikness = random(40,85)

  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = "white"

  wall = createSprite(1200, 200, thikness, height/2)
  wall.shapeColor = "#505050"
}

function draw() {
  background("black");

  if(wall.x - bullet.x < wall.width/2 + bullet.width/2){
    bullet.collide(wall);

    damage = (0.5 * weight * speed * speed)/(thikness * thikness * thikness)
    
    if(damage > 10){
      wall.shapeColor = "red"
    }else{
      wall.shapeColor = "green"
  }
}

  drawSprites();

}