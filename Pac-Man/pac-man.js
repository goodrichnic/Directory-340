// !!PacMan Constructor!!
function PacMan(pacX,pacY) {
  // Body variables
  this.pacX = pacX;
  this.pacY = pacY;
  this.diam = 80;
  this.radius = this.diam/2;
  // EYES
  this.eyeDiam = 10;
  this.eyeX = this.pacX + 5;
  this.eyeY = this.pacY - 22;
  // MOUTH
  this.mouthAngle = 1/6;
  this.mouthSpeed = random(10);
  // Movement
  this.speed = random(10);
  this.direction = 0;
  this.hold = false;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.maxDirChange = 4;
  // Timing
  this.curTime = 0;
  this.maxTime = 8;
  this.targetTime = random(this.maxTime);
  this.curDist = 0;
  this.minDist = 0;
  this.xDiff = 0;
  this.yDiff = 0;
  this.change = 0;

}

// PAC-MAN OBJECT
PacMan.prototype.draw = function() {
  this.move();
  this.timer();


  if ( this.direction === 0 ) {
  } else if ( this.direction === 1 ) {
    rotate(PI/2);
  } else if ( this.direction === 2 ) {
    scale(-1, 1);
  } else if ( this.direction === 3 ) {
    rotate(-PI/2);
  }
  // Body
  noStroke();
  fill(256,256,0);
  arc(this.pacX,this.pacY,this.diam,this.diam,PI*this.mouthAngle,-PI*this.mouthAngle);
  // Eye
  fill(0);
  ellipse(this.pacX + 5,this.pacY - 22,this.eyeDiam,this.eyeDiam/1.2);
  // Pupil
  fill(255,0,0);
  ellipse(this.pacX + 6.5, this.pacY - 22,this.eyeDiam/2,this.eyeDiam/4);

};


// MAKE PACMAN MOVE AROUND
PacMan.prototype.move = function() {
  if (!this.hold) {
    this.pacX += this.xSpeed;
    this.pacY += this.ySpeed;
    this.eyeX += this.xSpeed;
    this.eyeY += this.ySpeed;
  }

  // Check Pacmen against walls
  // Pacman X-AXIS
  if (this.pacX + this.diam/2 >= width) {
    this.pacX += this.xSpeed * (-1);
  } else if (this.pacX <= 0) {
    this.xSpeed = this.xSpeed;
  }
  // Pacman Y-AXIS
  if (this.pacY + this.diam/2 >= height) {
    this.pacY += this.ySpeed * (-1);
  } else if (this.pacY <= 0) {
    this.ySpeed = 2;
    this.pacY += this.ySpeed;
  }
  // EYE X-AXIS
  if (this.eyeX >= width) {
    this.eyeX += this.xSpeed * (-1);
  } else if (this.eyeX <= 0) {
    this.eyeX += this.xSpeed;
  }
  // EYE Y-AXIS
  if (this.eyeY >= height) {
    this.eyeY += this.ySpeed * (-1);
  } else if (this.eyeY <= 0) {
    this.eyeY += this.ySpeed;
  }

};

// Pacman v. Pacman
// PacMan.prototype.objectCheck = function() {
// if (pacX[i] + (this.diam/2) >= pacX[1] + (this.diam/2) &&
//     pacX[0] + (this.diam/2) >= pacX[2] + (this.diam/2) &&
//     pacX[0] + (this.diam/2) >= pacX[3] + (this.diam/2) &&
//     pacX[0] + (this.diam/2) >= pacX[4] + (this.diam/2)) {
//       this. speed = this.speed * (-1);
//     }
//   };

// FIGURE OUT WHAT THIS DOES
PacMan.prototype.timer = function() {
  var curTime = this.curTime ;
  if ( curTime >= this.targetTime*frameRate() ){
    // change direction and update timer
    this.changeDirection();
  } else {
    this.curTime++;
  }
};

PacMan.prototype.changeDirection = function () {
  var newDirection;

  this.curTime = 0;
  this.targetTime = random(this.maxTime);

  do {
    newDirection = floor(random(4));
  } while (newDirection == this.direction);

  this.direction = this.newDirection;

  this.change = random(this.maxDirChange);

  if(newDirection === 0) {
    this.xSpeed = this.change;
    this.ySpeed = 0;
  } else if (newDirection === 1) {
    this.xSpeed = 0;
    this.ySpeed = this.change;
  } else if (newDirection === 2) {
    this.xSpeed = -this.change;
    this.ySpeed = 0;
  } else if (newDirection === 3) {
    this.xSpeed = 0;
    this.ySpeed = -this.change;
  }
};



// FIGURE OUT WHAT THIS DOES
PacMan.prototype.checkPos = function(pacArray) {
  var minDist = 0;
  var curDist = 0;
  var xDiff = 0;
  var yDiff = 0;

  this.wait = false;
  for (var i = 0; i < pacArray.length; i++) {
    curDist = dist(this.pacX, this.pacY, pacArray[i].pacX, pacArray[i].pacY);
    // minDist = sqrt(pow(this.diam,2) + pow(pacArray[i].diam,2));
    minDist = this.radius + abs(this.xSpeed) + abs(this.ySpeed) + pacArray[i].radius;

    xDiff = pacArray[i].pacX - this.pacX;
    yDiff = pacArray[i].pacY - this.pacY;

    if ( this.direction === 0 && curDist <= minDist && xDiff > 0 ) {
      // check for conflict to the east
      this.wait = true;
    } else if ( this.direction == 1 && curDist <= minDist && yDiff > 0 ) {
      // check for conflicts to the south
      this.wait = true;
    } else if ( this.direction == 2 && curDist <= minDist && xDiff < 0 ) {
      // check for conflicts to the south
      this.wait = true;
    } else if ( this.direction == 3 && curDist <= minDist && yDiff < 0 ) {
      // check for conflicts to the south
      this.wait = true;
    }
  }
};
