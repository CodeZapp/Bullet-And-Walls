var wall, thickness;

var bullet, speed, weight;

function setup() {
  createCanvas(1600, 400);
 
  thickness = random(22, 83)

  wall = createSprite(1200, 200, thickness, 200);
  wall.shapeColor = color(80, 80, 80)

  speed = random(223, 321)

  weight = random(30, 52)
  
  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor = color(255, 255, 255)
  bullet.velocityX = speed;
}

function draw() {
  background(0, 0, 0);  
  
  if (hasCollided(bullet, wall)) {
      bullet.velocityX = 0;
      
      var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
  
      if (damage > 10) {
          wall.shapeColor = color(255, 0, 0);
      }

      if (damage < 10) {
          wall.shapeColor = color(0, 255, 0);
      }
  }
  
  bullet.collide(wall);

  drawSprites();
}

function hasCollided(Lbullet, Lwall) {
         bulletRightEdge = Lbullet.x + Lbullet.width;
         
         wallLeftEdge = Lwall.x;

         if (bulletRightEdge >= wallLeftEdge) {
         return true;  
         } else {
         return false;  
         }
}