var x = 0;
var speed = 6
var stop = true
var start = false
var xHault = false

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER)
}

function draw() {
  
  background(0);
  
//   Button


noStroke();
fill(200);

if(mouseX >= 250 && mouseX <= 350 && mouseY >= 35 && mouseY <= 85){
     fill(150);
    if(mouseIsPressed){
         fill(200,0,20);
  }
}



rect(300,60,100,50,25);


  stroke(255);
  strokeWeight(4);
  noFill();
  
  
//   SHAPE CONTROLS
    if (mouseX > 300) {
       rect(x,200,100,100);
  }  else {ellipse(x,200,100,100);
       
  }
 
//   WALL BOUNCING ANIMATIONS
//   x + (-3) = x-3 Direction Changes
  if (x > width) {
       speed = speed*(-1);
  } else if (x < 0){
       speed = 6;
  }


  x = x + speed

if (xHault){
     x=0
}

if   (stop){
     noStroke();
     fill(0);
     textAlign(CENTER);
     text("STOP",300,64);
     }
if   (start){
     noStroke();
     fill(0);
     textAlign(CENTER);
     text("START",300,64);
     }

}

function mousePressed() {
  if (mouseX >= 250 && mouseX <= 350 && mouseY >= 35 && mouseY <= 85){
     stop = !stop //This makes Stop animate
     start = !start  //This animates Start
     xHault = !xHault //THIS STOPS THE BALL
  }

}