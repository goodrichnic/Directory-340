// constructor function
function DrawEnemy(scW,scH,enemyX,enemyY,speedX,speedY,radius) {
  this.scW = scW;
  this.scH = scH;
  this.enemyX = enemyX;
  this.enemyY = enemyY;
  this.speedX = speedX;
  this.speedY = speedY;
  this.radius = radius;
}

// Prototype
DrawEnemy.prototype.draw = function() {

  fill(255, 0, 255);

// Right edge check
  if (this.enemyX > this.scW) {
    this.speedX = this.speedX * (-1);
// Left edge check
  } else if (this.enemyX < this.scW - this.scW) {
    this.speedX = 5;
  }
  // Bottom edge check
  if (this.enemyY > this.scH) {
    this.speedY = this.speedY * (-1);
  //  Top edge check
  } else if (this.enemyY < this.scH - this.scH) {
    this.speedY = 5;
  }
// Move the ball loop (x+speed)
  this.enemyX = this.enemyX + this.speedX;
  this.enemyY = this.enemyY + this.speedY;

  ellipse(this.enemyX, this.enemyY, this.radius, this.radius);
  // rect(300,300,20,20);
};

// function BrickBounce() {
//   this.
// }

// if (x > width) {
//      speed = speed*(-1);
// } else if (x < 0){
//      speed = 6;
// }
// x = x + speed
