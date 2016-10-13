var r = [];
var enemy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  enemy = new DrawEnemy(width,height,0,0,random(10),random(10),20);
  // Set up grid with randomly selected visible elements
  // to generate random field of rectangles.
  frameRate(60);
}

function draw() {
  background(167,205,222);

  for (var i = 0; i < r.length; i++) {
    // if the ball's horizontal position is >= the 'x' variable of the object r[i]
    // if the ball goes past
    if (enemy.enemyX + enemy.radius/2 >= r[i].x && enemy.enemyX + enemy.radius/2 <= r[i].x + r[i].w && enemy.enemyY + enemy.radius/2 >= r[i].y && enemy.enemyY <= r[i].y + r[i].h) {
        if (enemy.enemyX + enemy.radius/2 <= r[i].x + r[i].w && enemy.enemyX + enemy.radius/2 >= r[i].x - r[i].w) {
            enemy.speedX = enemy.speedX * (-1);
            enemy.speedY = enemy.speedY * (-1);
          } else {
            enemy.speedY = enemy.speedY * (-1);
          }
          if (enemy.enemyY + enemy.radius/2 <= r[i].y + r[i].h && enemy.enemyY + enemy.radius/2 >= r[i].y + r[i].h) {
              enemy.speedY = enemy.speedY + random(1,2) * (-1);
              enemy.speedX = enemy.speedX - random(1,2) * (-1);

            } else {
              enemy.speedX = enemy.speedX + random(1,2) * (-1);
            }

            // r[i].clr = color(145,167,211);
            r[i].w = 0;
            r[i].h = 0;
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
              r.push(new Walls(x, y, random(40,50), random(10,30),color(249,202,201)));
            }
          }
        }
      }
      function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
      }
      // function collisionCheck(ball,block) {
      //
      // }
