var cars =[];
var aud = [];

var hit = false;

function setup() {
     // cars = car.carAmt;
     createCanvas(windowWidth,windowHeight);
     rectMode(CENTER);
     for (var i = 0; i < 4; i++) {
          cars.push(new Car (width/3, (height * (2/3)) + (i * 20) ));
     }
     for (var j = 0; j < 25; j++) {
          aud.push(new Vwr(random(width/4),random(height),random(3,6),random(5,10),random(10,15)));
     }
}

function draw() {

     background(0);

     aud.forEach(function(audience, idx) {
          audience.crowd();
     });

     cars.forEach(function(car, idx) {
          car.drawTwo();
     });

}
