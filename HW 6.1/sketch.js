var r = [];
var enemy;

function setup() {
  createCanvas(600, 600);
  enemy = new DrawEnemy(width,height,10,10,random(5),random(5),20);
  // Set up grid with randomly selected visible elements
  // to generate random field of rectangles.
  for (var y = 0; y < height; y += 20) {
    for (var x = 0; x < width; x += 40) {
      if ( floor(random(32)) === 0 ) {
        r.push(new Walls(x, y, random(40,50), random(10,30),color(0,0,255)));
      }
    }
  }
}

function draw() {
  background(0);

  for (var i = 0; i < r.length; i++) {
    if (enemy.enemyX >= r[i].x && enemy.enemyX <= r[i].x+r[i].w
        && enemy.enemyY >= r[i].y && enemy.enemyY <= r[i].y + r[i].h) {

        if (enemy.enemyX - enemy.radius >= r[i].x && enemy.enemyX + enemy.radius <= r[i].x+r[i].w) {
          enemy.speedX = enemy.speedX * (-1);
        } else {
          enemy.speedY = enemy.speedY * (-1);
        }

      r[i].clr = color(random(256),random(256),random(256));
    }

    r[i].draw();
  }
  enemy.draw();
  // text(r.length, 20, 20);

}

// function collisionCheck(ball,block) {
//
// }
