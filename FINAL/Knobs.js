function Knob(initX, initY, initDiam, initVal) {
     this.xpos = initX;
     this.ypos = initY;
     this.diam = initDiam;

     this.value = initVal;
     this.holdValue = initVal;
     this.delta = 0;
     this.deltaStartX = 0;
     this.deltaStartY = 0;
     this.deltaDir = 0;

     this.active = false;
}

// This gets called once ONCE because of function mousePressed()
Knob.prototype.selectKnob = function() {
     var initDist;
     initDist = dist(this.xpos, this.ypos, mouseX, mouseY);
     if (!this.active && initDist <= this.diam) {
          this.active = true;
          this.deltaStartX = mouseX;
          this.deltaStartY = mouseY;
     }
};

Knob.prototype.updateValue = function() {
     if (this.active) {
          // this.value = constrain( map(mouseY, 0, height, -2, 2), -1, 1 );
          if (mouseY > this.deltaStartY) {
               // South
               this.deltaDir = -1;
          } else {
               // North
               this.deltaDir = 1;
          }
          // distance traveled since mouse click
          this.delta = dist(this.deltaStartX, this.deltaStartY, mouseX, mouseY);
          //
          this.delta = map(this.delta, 0, height * 0.25, 0, 1) * this.deltaDir;

          this.value = constrain(this.holdValue + this.delta, -1, 1);

          console.log(this.delta);
     }
};

Knob.prototype.unselectKnob = function() {
     if (this.active) {
          this.active = false;
          this.holdValue = this.value; //Knob value memory
     }
};

Knob.prototype.drawShape = function() {
     noFill();
     stroke(255, 255, 255);
     strokeWeight(5);

     // Knob Parameters
     translate(this.xpos, this.ypos);
     stroke(255);

     rotate(map(this.value, -1, 1, (QUARTER_PI * 3), (-(QUARTER_PI * 3))));

     // Knob Shape
     arc(0, 0, this.diam, this.diam, PI * 1.75, PI + QUARTER_PI);
     line(0, -50, 0, 0);
};
