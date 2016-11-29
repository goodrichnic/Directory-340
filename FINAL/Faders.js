function Fader(xPos,yPos,handW,handH,red,green,blue) {
  // red green and blue are the color values for the fader handle.
  // xPos and yPos mark the center of the object.
  this.red = red;
  this.green = green;
  this.blue = blue;
  this.xPos = xPos;
  this.yPos = yPos;
  this.railLeft = xPos - ( xPos / 32 );   //280;
  this.railRight = xPos + ( xPos / 32 );  //320;
  this.railBot = yPos + ( yPos / 2 );     //500;
  this.railTop = yPos - ( yPos / 2 );     //120;
  this.fadeY = yPos + ( yPos / 2 );       //500;
  this.fadeX = xPos;                      //300;
  this.fadeTop = yPos - ( yPos / 2 );     //120;
  this.fadeBot = yPos + ( yPos / 2 );     //499;
  this.fadeW = handW;                     //70;
  this.fadeH = handH;                     //20;
}

Fader.prototype.draw = function() {
  // Fader rails
  stroke(255, 255, 255);
  line(this.railLeft, this.railTop, this.railLeft, this.railBot); //left line
  line(this.railRight, this.railTop, this.railRight, this.railBot); //right line

  // Fader handle
  noStroke();
  fill(this.red,this.green,this.blue);
  rect(this.fadeX, this.fadeY, this.fadeW, this.fadeH,15);

Fader.prototype.faderMove = function() {
    // Changes fader Y-value when holding handle
    if( mouseX >= this.fadeX - (this.fadeW / 2) - 5 && mouseX <= this.fadeX + (this.fadeW / 2) + 5
    && mouseY >= this.fadeY - (this.fadeH/2) - 5 && mouseY <= this.fadeY +(this.fadeH/2) + 5 ) {
      this.fadeY = mouseY;
    }
    if( mouseY <= this.railTop ){
      this.fadeY = this.railTop;
    }
    if( mouseY >= this.railBot ){
      this.fadeY = this.railBot-1;
    }
  }
};
