var knobs = [];
var fader;

function setup(){

  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  // establish knob class.
  // knobs[0] = new Knob(300, 300, 100, -1);
  fader = new Fader( width / 2, height / 2,120,60,1 );
  // faders[0] = new Fader(300,300,70,30,0);
}

function draw() {
  background(0);
  // K N O B draw a single knob of index #i
  for( var i = 0; i < knobs.length; i++ ) {
    knobs[i].drawShape();
  }

  fader.drawFader();
  fader.selectFader();
  fader.updateValue();
  // fader.
  // F A D E R Gets drawn of index #j
  // for( var j = 0; j < faders.length; j++ ) {
  //   faders[j].drawFader();
  // }
}

// K N O B Interactions
// K N O B knows it's clicked.
function mousePressed() {
  for( var i=0; i<knobs.length; i++ ){
    knobs[i].selectKnob();
  }
}
// K N O B knows it's being moved; turned.
function mouseDragged() {
  for( var i=0; i<knobs.length; i++ ){
    knobs[i].updateValue();
  }
}
// K N O B Mouse stays where click is released.
function mouseReleased() {
  for( var i=0; i<knobs.length; i++ ){
    knobs[i].unselectKnob();
  }
}

// F A D E R Gets drawn
