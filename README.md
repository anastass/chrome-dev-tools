chrome-dev-tools
================

Code based on Using The Chrome Developer Tools with John Sonmez (pluralsight.com)

## Commands ##

	// Logging
	console.log("<message>");
	console.warn("<message>");
	console.error("<message>");

	console.debug("<message>");

	// Logging objects
	console.log(document);			// DOM format
	console.dir(document);			// JavaScript format

	// Grouping
	console.group("<name>");
		...
	console.groupEnd();

	console.group("%c<name>", "<style>");

	// Formatting
	%s 		- string
	%d, %i 	- integer
	%f		- floating point
	%o		- DOM object
	%O 		- JavaScript object
	%c		- styled with CSS

	// Calling debugger
	debugger;

	// Assert
	console.assert(10 == 5 * 2);	// OK
	console.assert(10 == 3 * 2);	// fail

	// Timing
	console.time("<label>"); 
		...
	console.timeEnd("<label>"); 

	// Selectors
	$(selection)
	$$(selection)
	$x(xpath)

	inspect($(selection))

	insprct($("h1"));
	inspect($(".row"));
	inspect($("#chrome-logo"));

	// Shortcuts
	Shitft-Ctrl-I, F12		- invoke Chrome Dev Tools
	Shitft-Ctrl-J			- console

	// Other commands
	clear()

## Related articles ##

- [Chrome Dev Tools: Markup and Style](http://net.tutsplus.com/tutorials/tools-and-tips/chrome-dev-tools-markup-and-style/)
- [Chrome Dev Tools: Networking and the Console](http://net.tutsplus.com/tutorials/chrome-dev-tools-networking-and-the-console/)

## Additional tips & tricks ##

- [Ten cool Chrome tricks you can use right now](http://www.techrepublic.com/blog/google-in-the-enterprise/ten-cool-chrome-tricks-you-can-use-right-now/)
- [Google Chrome Shortcuts](http://chromecheat.blogspot.co.at/2008/09/google-chrome-shortcuts.html)