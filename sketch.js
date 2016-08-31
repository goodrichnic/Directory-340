function setup() {
  createCanvas(1000,400,WEBGL);
  background('#fa7676')
}

function draw() {
  
  // fill('#00ff45');
  // stroke(255);
  // rect(50,100,100,70);
  
  //fill(150,0,150,85);
  //stroke('#ff0000');
  //triangle(100,100,50,50,50,200);
  
  // stroke(255,0,255)
  // ellipseMode(CORNER);
  // fill('#ff6996');
  // ellipse(50,100,120,120);
  
  // stroke(255);
  // line(50,100,500,500);
  // line(50,200,500,50);
  
  background(200);
  rotateX(frameCount * 10.0);
  rotateY(frameCount * 10.0);
  box(200,200,200);
}