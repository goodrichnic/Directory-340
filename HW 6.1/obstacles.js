function Walls(xPos, yPos, w, h,clr) {

  this.x = xPos;
  this.y = yPos;
  this.w = w;
  this.h = h;
  this.clr = clr;
}

Walls.prototype.draw = function() {
  fill(this.clr);
  rect(this.x, this.y, this.w, this.h);
};
