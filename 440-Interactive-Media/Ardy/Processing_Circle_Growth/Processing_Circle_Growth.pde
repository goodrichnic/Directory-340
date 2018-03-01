import processing.serial.*;

Serial myPort;  // Create object from Serial class
int val;     // Data received from the serial port
//int    size;
String myString = null;
int lf = 10;    // Linefeed in ASCII

void setup()
{
  size(400,400);
  // I know that the first port in the serial list on my mac
  // is Serial.list()[0].
  // On Windows machines, this generally opens COM1.
  // Open whatever port is the one you're using.
  String portName = Serial.list()[1]; //change the 0 to a 1 or 2 etc. to match your port
  myPort = new Serial(this, portName, 9600);
}

void draw()
{
// VVVV IT WORKS VVVV
  background(0);
   while (myPort.available() > 0) {
    myString = myPort.readStringUntil(lf);
    if (myString != null) {
      try {
        val=Integer.parseInt(myString.trim());
        println(myString);
        println(val);
      } catch (NumberFormatException npe){
       // Not an integer so forget it
      }
    }
  }
println(val); //print it out in the console
//^^^^ REALLY ^^^^^


fill(255-val,val,val);
ellipse(width/2,height/2,val,val);
}