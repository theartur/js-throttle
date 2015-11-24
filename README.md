JS TROTTLE

Control your insane event firing with universal Javascript

USAGE:

The following code will fire writeFile forever, but only if the last fire was 250 miliseconds ago

while (true) {

	throttle(fs.writeFile, 250)("myfile.json", myData, myCallback);
	
}
