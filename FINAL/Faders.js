function Fader(xPos,yPos,handW,handH,initVal) {
  // xPos and yPos mark the center of the object.
  this.xPos = xPos;
  this.yPos = yPos;
  this.railLeft = xPos - ( xPos / 28 );   //280;
  this.railRight = xPos + ( xPos / 28 );  //320;
  this.railBot = yPos + ( yPos / 2 );     //500;
  this.railTop = yPos - ( yPos / 2 );     //120;
  this.fadeY = yPos + ( yPos / 2 );       //500;
  this.fadeX = xPos;                      //300;
  this.fadeTop = yPos - ( yPos / 2 );     //120;
  this.fadeBot = yPos + ( yPos / 2 );     //499;
  this.fadeW = handW;                     //70;
  this.fadeH = handH;                     //20;

  this.value = initVal;
  this.holdValue = initVal;
  this.delta = 0;
  this.deltaStartX = 0;
  this.deltaStartY = 0;
  this.deltaDir = 0;

  this.active = false;
}

// SUCCESS
Fader.prototype.drawFader = function() {
  // Fader rails
  push();
  // translate(xPos,yPos);
  stroke(255, 255, 255);
  line(this.railLeft, this.railTop, this.railLeft, this.railBot); //left line
  line(this.railRight, this.railTop, this.railRight, this.railBot); //right line

  // Fader handle
  noStroke();
  fill(this.red,this.green,this.blue);
  rect(this.fadeX, this.fadeY, this.fadeW, this.fadeH,15);
  pop();
};
// Keep value between 0 & 1
Fader.prototype.selectFader = function() {
  var initDist;
  initDist = dist(this.fadeX, this.fadeY, mouseX, mouseY);
  if ( !this.active && initDist <= this.fadeW && initDist <= this.fadeH ) {
    this.active = true;
    this.deltaStartX = mouseX; //Saves mouseX INITIAL click pos. to memory
    this.deltaStartY = mouseY; //Saves mouseY INITIAL click pos. to memory
  }
};

Fader.prototype.updateValue = function() {
  if (this.active) {
    // this.value = constrain( map(mouseY, 0, height, -2, 2), -1, 1 );
    if (mouseY > this.deltaStartY) {
      // South
      this.deltaDir = 1;
    } else {
      // North
      this.deltaDir = -1;
    }
    // distance traveled since mouse click
    this.delta = dist(this.deltaStartX, this.deltaStartY, mouseX, mouseY);
    //
    this.delta = map(this.delta, 0, height, 0, 1) * this.deltaDir;

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

// Fader.prototype.faderMove = function() {
// Changes fader Y-value when holding handle
//   if( mouseX >= this.fadeX - (this.fadeW / 2) - 5 && mouseX <= this.fadeX + (this.fadeW / 2) + 5
//   && mouseY >= this.fadeY - (this.fadeH/2) - 5 && mouseY <= this.fadeY +(this.fadeH/2) + 5 ) {
//     this.fadeY = mouseY;
//   }
//   if( mouseY <= this.railTop ){
//     this.fadeY = this.railTop;
//   }
//   if( mouseY >= this.railBot ){
//     this.fadeY = this.railBot-1;
//   }
// };
