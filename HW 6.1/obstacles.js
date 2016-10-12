function Walls(xPos, yPos, w, h) {

  this.x = xPos;
  this.y = yPos;
  this.w = w;
  this.h = h;
}

Walls.prototype.draw = function() {
  fill(0,255,0);
  rect(this.x, this.y, this.w, this.h);
};
