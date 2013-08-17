var groupStyle = "font-size: large; color: green";

function doIt() {
	console.log("Do it");

	console.time("Steps time"); 	// timer
		console.group("%cSteps", groupStyle); 	// styling
			stepOne();
			stepTwo();
			stepThree();
		console.groupEnd();
	console.timeEnd("Steps time");

	useAssert();
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
	console.debug("Simulate error");
	//debugger; /* calling debugger */
	console.error("Error");
}

function useAssert() {
	console.group("%cAssert", groupStyle);
		console.assert(10 == 5 * 2);	// OK
		console.assert(10 == 3 * 2);	// fail
	console.groupEnd();
}