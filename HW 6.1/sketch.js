var r = [];

function setup() {
  createCanvas(600, 600);
  // Set up grid with randomly selected visible elements
  // to generate random field of rectangles.
  for (var y = 0; y < height; y += 20) {
    for (var x = 0; x < width; x += 40) {
      if ( floor(random(32)) === 0 ) {
        r.push(new Walls(x, y, random(40,50), random(10,30)));
      }
    }
  }
}

function draw() {
  background(90);

  for (var i = 0; i < r.length; i++) {
    r[i].draw();
  }

  text(r.length, 20, 20);
  new Enemy(10,10,width,height,5,5);
}
