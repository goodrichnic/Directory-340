var r = [];
var enemy;

function setup() {
  createCanvas(600, 600);
  enemy = new DrawEnemy(width,height,10,10,random(6),random(10),20);
  // Set up grid with randomly selected visible elements
  // to generate random field of rectangles.
  // for (var y = 0; y < height; y += 20) {
  //   for (var x = 0; x < width; x += 40) {
  //     if ( floor(random(16)) === 0 ) {
  //       r.push(new Walls(x, y, random(40,50), random(10,30),color(0,0,255)));
  //     }
  //   }
  // }
}

function draw() {
  background(152,151,164);

  for (var i = 0; i < r.length; i++) {
// if the ball's horizontal position is >= the 'x' variable of the object r[i]
// if the ball goes past
    if (enemy.enemyX >= r[i].x - enemy.radius/2 && enemy.enemyX <= r[i].x + r[i].w
        && enemy.enemyY >= r[i].y - enemy.radius/2 && enemy.enemyY <= r[i].y + r[i].h) {
        if (enemy.enemyX - enemy.radius >= r[i].x + r[i].w
            && enemy.enemyX + enemy.radius <= r[i].x - r[i].w) {
          enemy.speedX = enemy.speedX * (-1);
        } else {
          enemy.speedY = enemy.speedY * (-1);
        }
        if (enemy.enemyY - enemy.radius >= r[i].y + r[i].h
            && enemy.enemyY + enemy.radius <= r[i].y + r[i].h) {
          enemy.speedY = enemy.speedY * (-1);
        } else {
          enemy.speedX = enemy.speedX * (-1);
        }

      r[i].clr = color(random(245,255),random(200,205),random(200,205));
    }

    r[i].draw();
  }
  enemy.draw();
  // text(r.length, 20, 20);

}


function mousePressed(){
  for (var y = 0; y < height; y += 20) {
    for (var x = 0; x < width; x += 40) {
      if ( floor(random(16)) === 0 ) {
        r.push(new Walls(x, y, random(40,50), random(10,30),color(145,167,241)));
      }
    }
  }
}
// function collisionCheck(ball,block) {
//
// }
