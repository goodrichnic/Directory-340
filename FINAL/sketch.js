  var fader;

function setup(){
  createCanvas(600,600);
  rectMode(CENTER);
}

function draw() {
  background(0);
  fader = new Fader(100,100,32,10,240,0,100);

  fader.draw();

}

function mouseDragged() {
  fader.faderMove();
}
