var url = "http://api.dirble.com/v2/stations?token=3bfc51367e8c88ab642fd02079";
var para; // Paragraph element in the DOM
var idx = 0; // Index to cycle through the data array
var radioData; // variable to assign JSON object too

function setup() {
  // createCanvas(600,600);
  noCanvas();
  loadJSON(url, cbGlassData);
  para = createP();
}

function draw(){

  if( frameCount % 60 === 0 ){
  // Do me!
    para.html(radioData[idx].name);

    // increment the index and start
    idx++;
    if( idx > radioData.length ){
      idx = 0;
    }
  }

}

function cbGlassData(data) {

  console.log(data[0].image.url);
  console.log(data[0].name);

  // createImg(data[0].image.url);
  // createP(data[0].name);


  for (var n = 0; n < data.length; n++) {
    console.log(data[n].name);
    // text(data[i].name)
  }

  // pulling in our data and assigning it to the global variable 'radioData'
  radioData = data;
}
