function PacMan(pacX,pacY) {
  // Body variables
  this.pacX = pacX;
  this.pacY = pacY;
  this.diam = 80;
  this.radius = this.diam/2;
  // EYES
  this.eyeDiam = 10;
  this.eyeX = this.pacX + 5;
  this.eyeY = this.pacY - 22;
  // MOUTH
  this.mouthAngle = 1/6;
  this.speed = 6;

}

PacMan.prototype.draw = function() {

  // Body
  fill(256,256,0);
  arc(this.pacX,this.pacY,this.diam,this.diam,PI*this.mouthAngle,-PI*this.mouthAngle);
  // Eye
  noStroke();
  fill(0);
  ellipse(this.eyeX,this.eyeY,this.eyeDiam,this.eyeDiam/1.2);
  // Pupil
  fill(255,0,0);
  ellipse(this.eyeX+1.5,this.eyeY,this.eyeDiam/2,this.eyeDiam/4);
};
x
