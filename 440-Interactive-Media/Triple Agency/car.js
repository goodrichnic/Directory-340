function Car(posX, posY) {

     this.carArr = [];
     this.carAmt = 4;
     this.carWidth = 20;
     this.carHeight = 5;
     this.speed = 0;
     this.trackW = width * (2/3);
     this.trackH = height / 3;
     this.trackDist = this.trackW - this.trackW/2;
     this.trackBot = height * (2/3);
     this.lapCount = 0;
     this.rot = 0;
     // Vectors
     this.pos = createVector(posX,posY);
     this.velocity = createVector(0, 0);
     this.accel = createVector(0, 0);

     this.color = color(random(255),random(255),random(255));

     this.prevPos = createVector(0,0);
}




Car.prototype.draw = function() {

     push();
     noStroke();
     fill(255, 0, 0);
     rotate(this.rot);
     rect(this.pos.x,this.pos.y,this.carWidth,this.carHeight);
     pop();

};




Car.prototype.path = function() {

     // Keep on Track
     // if x is greater than 2/3 the screen
     if (this.pos.x >= this.trackW) {
          // Car goes right, stops and moves up
          // this.pos.x === this.pos.x;
          this.pos.y = this.pos.y - this.speed;
          // this.rot = PI/3;

     } else if (this.pos.x < this.trackDist) {
          // this.pos.x === this.pos.x;
          this.pos.y += this.speed;
     }
     if (this.pos.y <= this.trackH) {
          // Car goes up stops and moves left
          this.pos.y = this.trackH;
          this.pos.x -= this.speed;
     } else if (this.pos.y >= this.trackH * 2) {
          this.pos.x += this.speed;
     }

     // position is where the point lies
     // velocity is amount position changes; the difference
     // acceleration is how much we move velocity by


     // Speed Control
     if (this.speed <= 12){
          if (this.pos.y <= height * (1/3) || this.pos.y >= height * (2/3))
          this.speed += 0.1;
          if (this.pos.x >= width * (2/3) || this.pos.x <= width * (1/3)) {
               this.speed -= 0.125;
          } else if (this.pos.x >= width * (2/3) || this.pos.x <= width * (1/3)) {
               this.speed -= 0.125;
          }
     }
     // if (this.speed <= 12){
     //      if (this.pos.y <= height * (1/3) || this.pos.y >= height * (2/3))
     //      this.speed += 0.1;
     //      if (this.pos.x >= width * (2/3) || this.pos.x <= width * (1/3)) {
     //           this.speed -= 0.125;
     //      } else if (this.pos.x >= width * (2/3) || this.pos.x <= width * (1/3)) {
     //           this.speed -= 0.125;
     //      }
     // }
     this.pos.add(this.velocity);




     // noStroke();
     // fill(255);
     // text(this.speed,100,100);
};




Car.prototype.finish = function() {

     for (var k = 0; k < 8; k++) {
          noStroke();
          fill(0);
          rect((width/2)-10, (height/2) + (28*k), 12, 12 );
     }

     if (this.pos.x >= (width/2) - 1 && this.pos.x <= (width/2) + 1 && this.pos.y >= (height * 2/3)) {
          this.lapCount++;
     }

     textSize(30);
     fill(255);
     text(this.lapCount,100,100);
};




Car.prototype.drawTwo = function() {
     // this.acceler();
     this.drawTrack();
     this.path();
     // this.acceler();
     this.finish();

     push();
     translate(this.pos.x,this.pos.y);

     // Calculates rotation of Vector "Velocity"
     this.rot = this.velocity.heading();
     rotate(this.rot + HALF_PI);

     noStroke();
     fill(this.color);
     rect(0,0,this.carWidth,this.carHeight);
     pop();

};




Car.prototype.checkPos = function() {

     var otherX = 0;
     var otherY = 0;
     var otherSize = 0;
     var disto = 0;
     var maxDist = 0;

     for (var c = 0; c < array.length; c++) {
          array[c]
     }

};




Car.prototype.drawTrack = function() {
     noFill();
     stroke(180,180,180,50);
     strokeWeight(175);
     rect(width/2, height/2, width/3, height/3,50);
};
