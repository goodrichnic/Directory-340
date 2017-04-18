function Vwr(personX,personY,headDiam,bodyW,bodyH) {
     this.personX = personX;
     this.personY = personY;
     this.headDiam = headDiam;
     this.bodyH = bodyH;
     this.bodyW = bodyW;

}

Vwr.prototype.crowd = function() {
     // Heads
     noStroke();
     fill(0,255,0);
     ellipse(this.personX, this.personY, this.headDiam, this.headDiam);

     // Bodies
     fill(0,255,0);
     rect(this.personX, this.personY + 10,this.bodyW,this.bodyH, 5);
     rect(this.personX, this.personY + 12, this.bodyW,this.bodyH);
     // this.wander();
};

Vwr.prototype.wander = function() {

     if (this.personX >= width/3) {
     this.personX += random(-2);
     }
     this.personX += random(-5,5);
};
