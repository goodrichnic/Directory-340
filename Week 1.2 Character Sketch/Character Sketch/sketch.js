function setup() {
  createCanvas(700,700)
  background('#000000')
}

function draw() {
  
  //Facial bulk is gray. Ellipse Coordinated=(x,y,w,[h])
  noStroke()//for both facial constructive pieces.
  fill('#7c7c7c')//gray
  ellipse(350,249,522,276)//top half of exterior
  ellipse(350,434,296,342)//bottom half of ext.
  
  //facial interior is pink:two overlapping similar ellipses.
  fill('#fc5e8f')//pink
  rect(140,175,416,149,100)//top half of interior
  ellipse(350,409,191,276)//bottom half of int.
  
  //FOREHEAD LINES
  stroke('#000000')//eliminating noStroke command
  line(234,194,466,194)//top wrinkle
  line(187.5,216,512.5,216)//bottom wrinkle
  
  
  //Eyes use 'interior pink' rectangles to mask them and appear only partly open.
 
 //EYES
  fill('white')//EYE COLOR
  noStroke()
  ellipse(248,273,100,61)//right eye
  ellipse(451,273,100,61)//left eye
  
  //PUPILS
  fill('black')
  ellipse(248,266,31)
  ellipse(451,266,31)
  
  //PINK MASKING RECTANGLES
  fill('#fc5e8f')
  rect(173,235,149,21)//right eye
  rect(376,235,149,21)//Left eye
  
  //MOUTH
  fill('black')
  ellipse(350,454,78)
  
  //NOSE: two lines at oppsing, equal angles.
  stroke('black')
  line(340.02,320.32,323.98,363.09)//right nostril
  line(359.98,320.32,376.02,363.09)//left nostril
  
}