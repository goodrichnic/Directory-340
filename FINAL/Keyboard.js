function Keyboard(whtX,whtY,blkX) {

this.blkX = blkX;       //96;
this.blkY = whtY*(3/4);       //330;
this.blkW = 70;
this.blkH = 100;
this.blkFill = 0;
this.blkFrqArr = [];

this.whtX = whtX;       //35;
this.whtY = whtY;       //450;
this.whtW = 70;
this.whtH = 100;
this.whtFill = 255;
this.whtFrqArr = [130.81,146.83,155.56,164.81,174.61,196.00,220.00,246.94,261.63];

this.whtOct = 8;
this.octave = 12;
this.whtKeys = [0, 1, 2, 3, 4, 5, 6, 7];
this.blkKeys = [0, 1, 2, 3, 4, 5, 6];

this.osc;
this.oscShapes = ['sine', 'triangle', 'sawtooth', 'square'];
this.oscType;
this.playing = false;
this.pianoKeyDown = false;
this.oscArr = [];

this.env,this.osc;
}

Keyboard.prototype.oscSetup = function() {
  this.osc = new p5.Oscillator();
  this.osc.freq(360);
  this.osc.amp(0);
  this.osc.start();
}
Keyboard.prototype.drawKeys = function() {
     background(155);
     noStroke();

     if (!this.playing) {
          this.osc.amp(0);
     }
     if (this.playing) {
          env.play;
          this.osc.amp(1);
     }

     for (var j = 0; j < this.blkKeys.length; j++) {
          fill(0);
          rect(this.blkX + [j] * 125, this.blkY, this.blkW, this.blkH, 5);
     }

     for (var i = 0; i < this.whtKeys.length; i++) {
          fill(255);
          if (this.pianoKeyDown && mouseX >= (this.whtX + [i] * 125) - (this.whtW / 2) && mouseX <= (this.whtX + [i] * 125) + (this.whtW / 2)
              && mouseY >= this.whtY - (this.whtH / 2) && mouseY <= this.whtY + ( this.whtH / 2) ) {
               fill(255, 0, 0);
               osc.freq(this.whtFrqArr[i]);
               this.playing = true;
          }
          rect(this.whtX + [i] * 125, this.whtY, this.whtW, this.whtH, 5);
          // I need to find a way to make a n exception for blkKeys[2] and unsure it's not a valid button.
     }

    //  console.log(this.playing);
    //  text("X:  " + constrain(mouseX, 0, width), 25, 60);
    //  text("Y:  " + constrain(mouseY, 0, height), 80, 60);

     oscArr = [i];
};

Keyboard.prototype.keySelect = function() {
     this.pianoKeyDown = true;
};

Keyboard.prototype.keyRelease = function() {
     this.playing = false;
     this.pianoKeyDown = false;
};
