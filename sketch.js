var scatterY = 100;
var scatterWidth = 1000;
// var circleH = random(250,750); //Can I not have random variables????
var rectAlpha = 100 

// P5 wouldn't read 'x' value EVER!
var wtf = {
  x:500,
  y:500,
  diam:500,
}

function setup() {
  createCanvas(1000,1000)
  background(0)
  frameRate(24)
}

function draw() {
  
  // Animations for paintbrush
  scatterY = scatterY + 2; //Moves inner ellipses down
  scatterWidth = scatterWidth*0.99; //
  rectAlpha = rectAlpha - 20 //edge opacity. Why won't they disappear?
  
  //Animated Paintbrush 
  fill(random(0,255),mouseY,mouseX,25);
  noStroke();
  ellipse(random(250,750),scatterY,scatterWidth,mouseX);
  
  
  // Flashing light borders
  fill(random(0,100),random(0,200),random(0,100))
  // Wouldn't work with Object Variable
  ellipse(250,mouseY,50,4000)
  ellipse(750,mouseY,50,4000)
  


  fill(255,60,50,rectAlpha)
  rect(0,0,250,1000)
  rect(750,0,250,1000)
  
// mask.position(windowWidth/2, mouseY+1)
// rect(mouseX,20,60,60)
 
}