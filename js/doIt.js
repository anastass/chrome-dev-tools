function doIt() {
	console.log("Do it");

	console.time("Steps time"); /* timer */
		console.group("%cSteps", "font-size: x-large; color: green"); /* styling */
			stepOne();
			stepTwo();
			stepThree();
		console.groupEnd();
	console.timeEnd("Steps time");
}

function stepOne() {
	console.group("Step One");
		console.log("1.1");
		console.log("1.2");
		console.log("1.3");
	console.groupEnd();
}

function stepTwo() {
	console.warn("Warning");
}

function stepThree() {
	console.log("Simulate error");
	//debugger; /* calling debugger */
	console.error("Error");
}