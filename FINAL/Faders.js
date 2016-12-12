function Fader(xPos,yPos,handW,handH,initVal,outputMin,outputMax) {
    // xPos and yPos mark the center of the object.
    this.xPos = xPos;
    this.yPos = yPos;
    this.railLeft = xPos - 10;   //280;
    this.railRight = xPos + 10;  //320;
    this.railBot = yPos + ( yPos / 2 );     //500;
    this.railTop = yPos - ( yPos / 2 );     //120;
    this.railHeight = this.railBot - this.railTop;     //120;
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

    this.outputMin = outputMin;
    this.outputMax = outputMax;

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
    this.fadeY = map(this.value, 0, 1, this.railTop, this.railBot);
    fill(this.red,this.green,this.blue);
    rect(this.fadeX, this.fadeY, this.fadeW, this.fadeH,15);
    pop();
};
// Keep value between 0 & 1
Fader.prototype.selectFader = function() {
    if ( mouseIsPressed && !this.active && mouseX >= this.fadeX-this.fadeW/2 && mouseX <= this.fadeX+this.fadeW/2
        && mouseY >= this.fadeY-this.fadeH/2 && mouseY <= this.fadeY+this.fadeH/2 ) {
        this.active = true;
        this.deltaStartX = mouseX; //Saves mouseX INITIAL click pos. to memory
        this.deltaStartY = mouseY; //Saves mouseY INITIAL click pos. to memory
    } else if (!mouseIsPressed) {
        this.active = false;
    }
};

Fader.prototype.updateValue = function() {
    if ( this.active && mouseX >= this.fadeX-this.fadeW/2 && mouseX <= this.fadeX+this.fadeW/2 && mouseY >= this.fadeY-this.fadeH/2 && mouseY <= this.fadeY+this.fadeH/2 ) {
        // this.value = constrain( map(mouseY, 0, height, -2, 2), -1, 1 );
        if (mouseY > this.deltaStartY) {
            // South
            this.deltaDir = 1;
        } else {
            // North
            this.deltaDir = -1;
        }
        // distance traveled since mouse click
        // this.delta = dist(this.deltaStartX, this.deltaStartY, mouseX, mouseY);
        //
        this.delta = map(constrain(mouseY, this.railTop, this.railBot), this.railBot, this.railTop, 0, 1) * this.deltaDir;

        this.value = constrain(this.holdValue + this.delta, 0, 1);

        // console.log(this.delta);
    }
};

Fader.prototype.unselectFader = function() {
    if (this.active) {
        this.active = false;
        this.holdValue = this.value; //Knob value memory
    }
};

Fader.prototype.getValue = function() {
  var outputVal;
  outputVal = map(this.value,0,1,this.outputMin,this.outputMax);
  return outputVal;
};
