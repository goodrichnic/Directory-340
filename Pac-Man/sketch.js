var pac = [];
var pacman = 12;
var x = 300;
var y = 300;

function setup() {
  createCanvas(600,600);

  // Initial Pacmen cluster
  for (var i = 0; i < pacman; i++) {
    pac[i] = (new PacMan((i+1) * PacMan.diam, height * (i / pacman)));
  }
  pacc = new PacMan(x,y);
  background(0);
}

function draw() {

  pacc.draw();
  pac[i].draw();

}

// function mousePressed(){
//   for (var y = 0; y < height; y += 20) {
//     for (var x = 0; x < width; x += 40) {
//         pac.push(new PacMan(x, y));
//       }
//     }
//   }
