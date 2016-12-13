function Keyboard( whtX, whtY, blkX, faders, knobs ) {

  this.blkX = blkX;       //96;
  this.blkY = whtY*(3/4);       //330;
  this.blkW = 70;
  this.blkH = 100;
  this.blkFill = 0;
  this.blkFrqArr = [138.591, 155.563, null, 184.997, 207.652, 233.082, null];

  this.whtX = whtX;       //35;
  this.whtY = whtY;       //450;
  this.whtW = 70;
  this.whtH = 100;
  this.whtFill = 255;
  this.whtFrqArr = [130.81,146.83,164.81,174.61,196.00,220.00,246.94,261.63];

  this.whtOct = 8;
  this.octave = 12;
  this.whtKeys = [0, 0, 0, 0, 0, 0, 0, 0];
  this.blkKeys = [0, 0, 0, 0, 0, 0, 0];

  // S Y N T H E S I S
  this.osc;
  this.oscShapes = ['sine', 'triangle', 'sawtooth', 'square'];
  this.oscType;
  this.playing = false;
  this.pianoKeyDown = false;
  this.oscArr = [];

  this.attackLevel = 1.0;
  this.releaseLevel = 0.0;

  this.faders = faders;
  this.knobs = knobs;

  this.env;
  this.osc;

  // F I L T E R   F * % #
  this.freq = 0;

}

Keyboard.prototype.oscSetup = function() {
  this.env = new p5.Env();
  // this.env.setADSR(.5, 0, 1, 1);
  this.env.setADSR(this.faders.envAttMod.getValue(), 0, 1, 1);
  this.env.setRange(this.attackLevel, this.releaseLevel);

  // osc.connect(filter);
  this.filter = new p5.BandPass();
  this.osc = new p5.Oscillator();
  // this.osc.freq(360);
  this.osc.amp(this.env);
  this.osc.setType('square');
  this.osc.start();
};

Keyboard.prototype.oscLoop = function() {
  this.env.setADSR(this.faders.envAttMod.getValue(), this.faders.envDecMod.getValue(), this.faders.envSusMod.getValue(), this.faders.envRelMod.getValue());
  // this.filter.freq(this.knobs.filtFreqMod.getValue());
};

Keyboard.prototype.drawKeys = function() {
  // background(155);
  noStroke();

  if (!this.playing) {
    this.osc.amp(0);
  }
  if (this.playing) {
    this.env.play();
    this.osc.amp(this.env);
  }

  for (var j = 0; j < this.blkKeys.length; j++) {
    fill(0);
    push();
    rect(this.blkX + [j] * 125, this.blkY, this.blkW, this.blkH, 5);
    if (this.pianoKeyDown && mouseX >= (this.blkX + [j] * 125) - (this.blkW / 2) && mouseX <= (this.blkX + [j] * 125) + (this.blkW / 2)
    && mouseY >= this.blkY - (this.blkH / 2) && mouseY <= this.blkY + ( this.blkH / 2) ) {
      fill(255, 0, 0);
      this.osc.freq(this.blkFrqArr[j]);
      this.playing = true;
    }
    rect(this.blkX + [j] * 125, this.blkY, this.blkW, this.blkH, 5);
    pop();

  }

  // White Key functionality
  for (var i = 0; i < this.whtKeys.length; i++) {
    fill(255);
    push();
    if (this.pianoKeyDown && mouseX >= (this.whtX + [i] * 125) - (this.whtW / 2) && mouseX <= (this.whtX + [i] * 125) + (this.whtW / 2)
    && mouseY >= this.whtY - (this.whtH / 2) && mouseY <= this.whtY + ( this.whtH / 2) ) {
      fill(255, 0, 0);
      this.osc.freq(this.whtFrqArr[i]);
      this.playing = true;
    }
    rect(this.whtX + [i] * 125, this.whtY, this.whtW, this.whtH, 5);
    pop();
    // I need to find a way to make an exception for blkKeys[2] and ensure it's not a valid button.
  }

  //  console.log(this.playing);
  //  text("X:  " + constrain(mouseX, 0, width), 25, 60);
  //  text("Y:  " + constrain(mouseY, 0, height), 80, 60);

};

Keyboard.prototype.keySelect = function() {
  this.pianoKeyDown = true;
};

Keyboard.prototype.keyRelease = function() {
  this.playing = false;
  this.pianoKeyDown = false;
};
