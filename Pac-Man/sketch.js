var pac = [];
var pacman = 6;
var xPos = 0;
var yPos = 20;
var pacDist = 80;
var diam = 0;

function setup() {
  createCanvas(600,600);

  // Initial Pacmen cluster
  for (var i = 0; i < pacman; i++) {
    pac[i] = (new PacMan((i+1) * pacDist, height * (i / pacman)));
  }

}

function draw() {
  var posArray = [];

  background(0);
  for (var i = 0; i < pac.length; i++) {
    posArray = pac.slice(0,i);
    tempArr = posArray.concat(pac.slice(i+1, pac.length));
    pac[i].checkPos(posArray);
    pac[i].draw();
  }
  // fill(255);
  // text(pac.length,20,20);

}
