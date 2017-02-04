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
  this.wait = false;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.maxDirChange = 4;
  this.east = 0;
  this.south = 1;
  this.west = 2;
  this.north = 3;
  // Timing
  this.curTime = 0;
  this.maxTime = 10;
  this.targetTime = random(this.maxTime);
  this.curDist = 0;
  this.minDist = 0;
  this.xDiff = 0;
  this.yDiff = 0;
  this.change = 0;
  this.minDist = 0;
  this.curDist = 0;
  this.xDiff = 0;
  this.yDiff = 0;

}

// PAC-MAN OBJECT
PacMan.prototype.draw = function() {
  this.move();
  this.timer();
  // this.pacCheck();

  // Body
  noStroke();
  fill(256,256,0);
  if ( this.xSpeed === 0 ) {
  } else if ( this.xSpeed === 1 ) {
    rotate(PI/2);
  } else if ( this.xSpeed === 2 ) {
    scale(-1, 1);
  } else if ( this.xSpeed === 3 ) {
    rotate(-PI/2);
  }
  push();
  arc(this.pacX,this.pacY,this.diam,this.diam,PI*this.mouthAngle,-PI*this.mouthAngle);
  // Eye
  fill(0);
  // translate(50,50);
  ellipse(this.pacX + 5,this.pacY - 22,this.eyeDiam,this.eyeDiam/1.2);
  // Pupil
  fill(255);
  ellipse(this.pacX + 6.5, this.pacY - 22,this.eyeDiam/3,this.eyeDiam/3);
  pop();

};


// MAKE PACMAN MOVE AROUND
PacMan.prototype.move = function() {
  if (!this.wait) {
    this.pacX += this.xSpeed;
    this.pacY += this.ySpeed;
    this.eyeX += this.xSpeed;
    this.eyeY += this.ySpeed;
  }

  // Check Pacmen against walls
  // Pacman X-AXIS
  if (this.pacX + this.diam/2 >= width) {
    // east limiter (east = (width,y)) direction = 0
    this.xSpeed = random(this.west, this.north, this.south);
    this.pacX += (this.xSpeed*(-1));
  } else if (this.pacX - this.diam/2 <= 0) {
    // West limiter (west = (0,y)) direction = 2
    this.xSpeed = random(this.east,this.north,this.south);
    this.pacX += this.xSpeed;
  }
  // Pacman Y-AXIS
  if (this.pacY + this.diam/2 >= height) {
    // south limiter direction = 1
    this.ySpeed = random(this.north,this.west,this.east);
    this.pacY += (this.ySpeed*(-1));
  } else if (this.pacY - this.diam/2 <= 0) {
    // North limiter (north = (x,0)) direction = 3
    this.ySpeed = random(this.south,this.east,this.west);
    this.pacY += this.ySpeed;
  }
  // EYE X-AXIS
  if (this.eyeX >= width) {
    this.eyeX += random(4);
  } else if (this.eyeX <= 0) {
    this.eyeX += this.xSpeed;
  }
  // EYE Y-AXIS
  if (this.eyeY >= height) {
    this.eyeY += this.ySpeed * (-1);
  } else if (this.eyeY <= 0) {
    this.eyeY += this.ySpeed;
  }

  if (this.pacX + this.diam/2 >= width) {

  } else if (this.pacX - this.diam/2 <= width) {

  }
  if (this.paxcY + this.diam/2 >= height) {

  }
};

// Pacman v. Pacman
// PacMan.prototype.pacCheck = function() {
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
  if ( curTime >= this.targetTime * frameRate() ){
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

  this.direction = newDirection;

  this.change = random(this.maxDirChange);

  if(newDirection === 0) {
    // east
    this.xSpeed = this.change;
    this.ySpeed = 0;
  } else if (newDirection === 1) {
    // south
    this.xSpeed = 0;
    this.ySpeed = this.change;
  } else if (newDirection === 2) {
    // west
    this.xSpeed = -this.change;
    this.ySpeed = 0;
  } else if (newDirection === 3) {
    // north
    this.xSpeed = 0;
    this.ySpeed = -this.change;
  }
};

PacMan.prototype.checkPos = function(pacArr,idx) {
  var otherX = 0;
  var otherY = 0;
  var otherRad = 0;
  var disto = 0;
  var maxDist = 0;
  this.wait = false;

  for (var c = 0; c < pacArr.length; c++) {
    if(c != idx) {
      // We are always comparing THIS pacman to the OTHER pacmen
      otherX = pacArr[c].pacX;
      otherY = pacArr[c].pacY;
      otherRad = pacArr[c].radius;
      disto =  dist(otherX,otherY,this.pacX,this.pacY);
      maxDist = otherRad + this.radius + abs(this.xSpeed) + abs(this.ySpeed);

      if(disto <= maxDist) {
        // this.wait = true;
        // east check
        if(this.direction == 0 & otherX >=this.pacX) {
          this.wait = true;
        }
        // west check
        if(this.direction == 2 & otherX <= this.pacX) {
          this.wait == true;
        }
        // north check
        if(this.direction == 3 & otherY <= this.pacY) {
          this.wait = true;
        }
        // south check
        if(this.direction == 1 & otherY >= this.pacY) {
          this.wait = true;
        }
      }

    }
  }
};

// FIGURE OUT WHAT THIS DOES
// PacMan.prototype.checkPos = function(pacArray) {
//   var minDist = 0;
//   var curDist = 0;
//   var xDiff = 0;
//   var yDiff = 0;
//
//   this.wait = false;
//   for (var i = 0; i < pacArray.length; i++) {
//     curDist = dist(this.pacX, this.pacY, pacArray[i].pacX, pacArray[i].pacY);
//     // minDist = sqrt(pow(this.diam,2) + pow(pacArray[i].diam,2));
//     minDist = this.radius + abs(this.xSpeed) + abs(this.ySpeed) + pacArray[i].radius;
//
//     xDiff = pacArray[i].pacX - this.pacX;
//     yDiff = pacArray[i].pacY - this.pacY;
//
//     if ( this.direction === 0 && curDist <= minDist && xDiff > 0 ) {
//       // check for conflict to the east
//       this.wait = true;
//       this.xSpeed = random(this.west, this.north, this.south);
//     } else if ( this.direction === 1 && curDist <= minDist && yDiff > 0 ) {
//       // check for conflicts to the south
//       this.wait = true;
//     } else if ( this.direction === 2 && curDist <= minDist && xDiff < 0 ) {
//       // check for conflicts to the south
//       this.wait = true;
//     } else if ( this.direction === 3 && curDist <= minDist && yDiff < 0 ) {
//       // check for conflicts to the south
//       this.wait = true;
//     }
//   }
// };
