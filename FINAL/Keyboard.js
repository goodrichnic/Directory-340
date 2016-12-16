function Keyboard( whtX, whtY, blkX, faders, knobs ) {
  // Black Keys
  this.blkX = blkX;       //96;
  this.blkY = whtY*(3/4);       //330;
  this.blkW = 70;
  this.blkH = 100;
  this.blkFill = 0;
  this.blkFrqArr = [138.591, 155.563, 174.61, 196.00, 220.00, 246.94, 277.18];
  // White Keys
  this.whtX = whtX;       //35;
  this.whtY = whtY;       //450;
  this.whtW = 70;
  this.whtH = 100;
  this.whtFill = 255;
  this.whtFrqArr = [130.81,146.83,164.81,184.997,207.652,233.082,261.63,293.66];
  // Octaves & Arrays
  this.whtOct = 8;
  this.blkOct = 7;
  this.octave = 12;
  this.whtKeys = [0, 0, 0, 0, 0, 0, 0, 0];
  this.blkKeys = [0, 0, 0, 0, 0, 0, 0];
  // S Y N T H E S I S
  this.oscShapes = ['sine', 'triangle', 'sawtooth', 'square'];
  this.waveFormSelect;
  this.oscType = this.waveFormSelect;
  this.playing = false;
  this.pianoKeyDown = false;
  // Envelope Extremes
  this.attackLevel = 1.0;
  this.releaseLevel = 0.0;
  // Modifying Objects
  this.faders = faders;
  this.knobs = knobs;
  // Class Function titles (p5.Sound Library)
  this.env;
  this.osc;
// ascii codes
  this.whtKeyBoard = [97,115,100,102,103,104,106,107,108]; //A-K
  this.blkKeyBoard = [119,101,116,121,117]; //W-E & T-U

  this.isVisible = true;
}

Keyboard.prototype.oscSetup = function() {
  this.env = new p5.Env();
  this.env.setADSR(this.faders.envAttMod.getValue(), 0, 1, 1);
  this.env.setRange(this.attackLevel, this.releaseLevel);
  this.filter = new p5.BandPass();
  this.osc = new p5.Oscillator();
  this.osc.amp(this.env);
  // this.osc.setType(this.oscShapes[this.waveFormSelect]);
  this.osc.disconnect();
  this.osc.connect(this.filter);
  this.osc.start();
};

Keyboard.prototype.oscLoop = function() {
  this.env.setADSR(this.faders.envAttMod.getValue(), this.faders.envDecMod.getValue(), this.faders.envSusMod.getValue(), this.faders.envRelMod.getValue());
  this.filter.freq(map(this.knobs.filtFreqMod.getValue(),0,height/24,10,22050));
  this.filter.res(map(this.knobs.filtResMod.getValue(),0,height/24,1,1000));
  // this.waveFormSelect = map(this.knobs.waveFormVal.getValue(),0,height/20,0,3);
  this.osc.setType('square');
};

Keyboard.prototype.drawKeys = function() {
  noStroke();

  if (!this.playing) {
    this.osc.amp(0);
  }
  if (this.playing) {
    this.env.play();
    this.osc.amp(this.env);
  }
  // Black Key Functionality
  for (var j = 0; j < this.blkKeys.length; j++) {
    if ( this.blkKeys[j] !== this.blkKeys[0,1,3,4,5] ) {
      this.isVisible = false;
    }
    if ( this.blkKeys[j] == this.blkKeys[0,1,3,4,5] ){
    this.visible = true;
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
    // I need to find a way to make an exception for blkKeys[2,6] and ensure it's not a valid button.
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

Keyboard.prototype.asciiTrig = function() {
  // TRIALS
  if (keyCode === LEFT_ARROW) {
    this.osc.start();
    this.osc.freq(440);
  } else if (keyCode === RIGHT_ARROW) {
    this.osc.start();
    this.osc.freq(600);
  }
};
