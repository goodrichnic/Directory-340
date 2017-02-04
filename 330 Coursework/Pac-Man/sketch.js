var pac = [];
var pacman = 5;
var xPos = 0;
var yPos = 20;
var pacDist = 80;
var diam = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);

  // Initial Pacmen cluster
  for (var i = 0; i < pacman; i++) {
    // pac[i] = (new PacMan((i+1) * pacDist, height * (i / pacman)));
      pac[i] = (new PacMan(width * (i/pacman), height * (i / pacman)));
  }

}

function draw() {
  // var pacArray = [];

  background(255,0,255);
  for (var i = 0; i < pac.length; i++) {
    pac[i].checkPos(pac,i);

    pac[i].draw();
  }
  // fill(255);
  // text(pac.length,20,20);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


// slice is extracting everything between zero and whichever zero-base of i the function has reached.

// concatenating pacArray[] and pac[]
