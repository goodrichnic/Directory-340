// constructor function
function Enemy(scW,scH,enemyX,enemyY,speedX,speedY) {
  this.scW = scW;
  this.scH = scH;
  this.enemyX = enemyX;
  this.enemyY = enemyY;
  this.speedX = speedX;
  this.speedY = speedY;
}

// Prototype (blueprint,sheet music, recipe)
Enemy.prototype.draw = function() {

  fill(255, 0, 255);


// If the ball goes to the right edge it turns around.
  if (this.enemyX > this.scW) {
    this.speedX = this.speedX * (-1);
// If the ball goes to the left edge it turns around.
  } else if (this.enemyX < this.scW - this.scW) {
    this.speedX = 5;
  }
  if (this.enemyY > this.scH) {
    this.speedY = this.speedY * (-1);
  } else if (this.enemyY < this.scH - this.scH) {
    this.speedY = 5;
  }

  this.enemyX = this.enemyX + this.speedX;
  this.enemyY = this.enemyY + this.speedY;

  ellipse(this.enemyX + this.speed, this.enemyY + this.speed, 20, 20);
  // rect(300,300,20,20);
};

// if (x > width) {
//      speed = speed*(-1);
// } else if (x < 0){
//      speed = 6;
// }
// x = x + speed
