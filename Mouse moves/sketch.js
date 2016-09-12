var circleX = 100;
var circleW = 50
var circleY = random(2)


function setup() {
  createCanvas(1000,1000)
  background(0)
  frameRate(32)
}

function draw() {
  
  circleX = circleX + 2
  circleW = circleW++
  
  //Animated Paintbrush 
  fill(255,0,255,25)
  noStroke()
  ellipse(circleX,mouseX,circleW,100)
}