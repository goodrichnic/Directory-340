var blkX = 96;
var blkY = 330;
var blkW = 70;
var blkH = 100;
var blkFill = 0;

var whtX = 35;
var whtY = 450;
var whtW = 70;
var whtH = 100;
var whtFill = 255;

var whtOct = 8
var octave = 12;
var whtKeys = [0, 1, 2, 3, 4, 5, 6, 7];
var blkKeys = [0, 1, 2, 3, 4, 5, 6];

function setup() {
     createCanvas(1000, 600);
       rectMode(CENTER);
}

function draw() {
     background(155);
     noStroke();

     for (var j = 0; j < blkKeys.length; j++) {
          fill(0);
          rect(blkX + [j] * 125, blkY, blkW, blkH, 5);
     }

     for (var i = 0; i < whtKeys.length; i++) {
          fill(255);
          if( mouseX >= (whtX + [i] * 125) - (whtW / 2) && mouseX <= (whtX + [i] * 125) + (whtW / 2) 
               && mouseY >= whtY - (whtH / 2) && mouseY <= whtY + (whtH / 2) ) {
               fill(255,0,0);
          }
          // if (dist(whtX, whtY, mouseX, mouseY) <= whtH || dist(whtX + whtW / 2, whtY + whtH / 2, mouseX, mouseY) <= whtW) {
          //      fill(255, 0, 0);
          // }
          rect(whtX + [i] * 125, whtY, whtW, whtH, 5);
          // I need to find a way to make a n exception for blkKeys[3] and unsure it's not a valid button.
     }



     text("X:  " + constrain(mouseX, 0, width), 25, 60);
     text("Y:  " + constrain(mouseY, 0, height), 80, 60);
}