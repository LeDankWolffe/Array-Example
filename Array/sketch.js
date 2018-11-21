//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
function setup() {
  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log("Initialization: OK")
  createCanvas(500,500);
}

//Rendering function
function draw() {
  //Set a background color
  background(255, 255, 255);

  var cars = ["Saab", "Volvo", "BMW"];
  var x = cars[1];


//  var cars is the array which contains the text
// it will pick what the text will be displayed
// For example: when 0 = Saab, 1 = Volvo and 2 = BMW
// x = cars[1] for Volvo

var i = [];
i[0] = 'example';

// empty array 

  //Print a message to the console - to view using Chrome:
  //View > Developer > Developer Tools > Console
  console.log(x)
  noLoop();
}
