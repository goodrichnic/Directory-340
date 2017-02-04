var mouth = 0;
var eyesOpen = false;


function setup() {
     createCanvas(600, 600);
     rectMode(CENTER);
}

function eyes() {
     strokeWeight(5);
     stroke(200, 0, 255);
     if (eyesOpen) {
          ellipse(250, 260, 30, 30);
          ellipse(345, 260, 30, 30);
     } else {
          line(235, 260, 280, 260);
          line(320, 260, 365, 260);
     }




}

function draw() {

     mouth = map(mouseX, 0, 600, 200, 0);

     background(0);

     // Main Head Component
     fill(0, 100, 100);
     if (mouseX >= 200 && mouseX <= 400 && mouseY >= 200 && mouseY <= 400) {
          fill(0, 150, 150)
     }
     if (mouseIsPressed) {
          if (mouseX >= 200 && mouseX <= 400 && mouseY >= 200 && mouseY <= 400) {
               fill(250, 0, 10);
               eyesOpen = true;
          }
     } else {
          eyesOpen = false;
     }
     noStroke();
     rect(300, 300, 200, 200, 30);



     fill(200, 0, 255);
     ellipse(300, 350, mouth, 10);

     eyes();

}