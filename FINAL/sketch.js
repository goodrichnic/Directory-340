var knobs = [];
var fader;

var keyboard;

var faders = {};
var knobs = {};

var oscType;
var waveFormVal;

function setup() {

  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  keyboard = new Keyboard(width/6,500,width/(4.6),faders, knobs);
                                      // MODULATION \\
  // Envelope
  faders.envAttMod = new Fader( 100, 100, 60, 20, 0.1, 0, 1);
  faders.envDecMod = new Fader( 200, 100, 60, 20, 0.2, 0, 1);
  faders.envSusMod = new Fader( 300, 100, 60, 20, 1.0, 0, 1);
  faders.envRelMod = new Fader( 400, 100, 60, 20, 0.5, 0, 1);
  // Sound initiation
  keyboard.oscSetup();
  // F i l t e r
  knobs.filtFreqMod = new Knob(800, 100, 60, 1, 0, 1);
  knobs.filtResMod = new Knob(900, 100, 60, 0, 0, 1);
  // W A V E  F O R M
  waveFormVal = new Knob(600, 200, 120, -1, 0, 3);
}

function draw() {
  background('#f592ae');
  oscType = map(waveFormVal.getValue(),0,height/20,0,3);
  keyboard.osc.setType(keyboard.oscShapes[oscType]);
  // Oscillator Functionality
  keyboard.oscLoop();
  console.log(waveFormVal.outputVal);
// Create Piano keys
  keyboard.drawKeys();
// Create Faders for Envelope
  faders.envAttMod.drawFader();
  faders.envDecMod.drawFader();
  faders.envSusMod.drawFader();
  faders.envRelMod.drawFader();
// Create Filter Knobs
  knobs.filtFreqMod.drawKnob();
  knobs.filtResMod.drawKnob();
  // Wavform Selector
  waveFormVal.drawKnob();
}

function mousePressed() {
// Envelope Faders
  faders.envAttMod.selectFader();
  faders.envDecMod.selectFader();
  faders.envSusMod.selectFader();
  faders.envRelMod.selectFader();
// Piano Keyboard Clicking
  keyboard.keySelect();
// Filter Knob clicked
knobs.filtFreqMod.selectKnob();
knobs.filtResMod.selectKnob();
// waveFormVal Selector Clicked
waveFormVal.selectKnob();
}
function mouseDragged() {
// Envelope Faders Value modulator
  faders.envAttMod.updateValue();
  faders.envDecMod.updateValue();
  faders.envSusMod.updateValue();
  faders.envRelMod.updateValue();
  // filter knobs
  knobs.filtFreqMod.updateValue();
  knobs.filtResMod.updateValue();
  // waveFormVal Selector Value
  waveFormVal.updateValue();
}
function mouseReleased() {
// Envelope Faders
  faders.envAttMod.unselectFader();
  faders.envDecMod.unselectFader();
  faders.envSusMod.unselectFader();
  faders.envRelMod.unselectFader();
// Piano Keyboard Mouse release
  keyboard.keyRelease();
// Filter knobs
knobs.filtFreqMod.unselectKnob();
knobs.filtResMod.unselectKnob();
// waveFormVal Selector
waveFormVal.unselectKnob();
}

function keyPressed() {
  keyboard.asciiTrig();
}
