var knobs = [];
var fader;

var keyboard;

var envAttMod;
var envDecMod;
var envSusMod;
var envRelMod

;
function setup(){

  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  // establish knob class.
  knobs[0] = new Knob(300, 300, 100, -1);
  fader = new Fader( 1200, 100,60,20,1 );
  keyboard = new Keyboard(width/6,500,width/(4.6));

                              // MODULATION \\
  // Envelope
  env = new p5.Env();
  env.setADSR(0.1, 0, 1, 0.5);
  envAttMod = new Fader( 100, 100, 60, 20, 1 , 0, 0.5);
  envDecMod = new Fader( 200, 100, 60, 20, 1 );
  envSusMod = new Fader( 300, 100, 60, 20, 1 );
  envRelMod = new Fader( 400, 100, 60, 20, 1 );

  // Sound initiation


}

function draw() {
  background(0);
  // K N O B draw a single knob of index #i
  for( var i = 0; i < knobs.length; i++ ) {
    knobs[i].drawShape();
  }
  keyboard.drawKeys();
  // fader.drawFader(); // T E S T E R

  env.setADSR(envAttMod.getValue(), 0,1,0.6);
  envAttMod.drawFader();
  envDecMod.drawFader();
  envSusMod.drawFader();
  envRelMod.drawFader();
}

// K N O B Interactions
// K N O B knows it's clicked.
function mousePressed() {
  for( var i=0; i<knobs.length; i++ ){
    knobs[i].selectKnob();
  }
  // fader.selectFader();
  envAttMod.selectFader();
  envDecMod.selectFader();
  envSusMod.selectFader();
  envRelMod.selectFader();

  keyboard.keySelect();

}
// K N O B knows it's being moved; turned.
function mouseDragged() {
  for( var i=0; i<knobs.length; i++ ){
    knobs[i].updateValue();
  }
  // fader.updateValue();
  envAttMod.updateValue();
}
// K N O B Mouse stays where click is released.
function mouseReleased() {
  for( var i=0; i<knobs.length; i++ ){
    knobs[i].unselectKnob();
  }
  // fader.unselectFader();
  envAttMod.unselectFader();
  envDecMod.unselectFader();
  envSusMod.unselectFader();
  envRelMod.unselectFader();

  keyboard.keyRelease();
}
