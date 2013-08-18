chrome-dev-tools
================

Code based on Using The Chrome Developer Tools with John Sonmez (pluralsight.com)

# Overview and Console ##

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

	inspect($("h1"));
	inspect($(".row"));
	inspect($("#chrome-logo"));

	// Monitor events
	monitorEvents($("h1"), "mouse");

	// Shortcuts
	Shitft-Ctrl-I, F12		- invoke Chrome Dev Tools
	Shitft-Ctrl-J			- console

	// Other commands
	clear()

# Elements Pannel ##

	// Shortcuts
	$n 						- where n=[0..4]; selects previously inspected element

# Resources And Network Panels #
	LoadResourceData() 		- console: load all resources

	- WebSQL
		Note: WebSQL is pritty much obsolette
		on database level SQL can be used
	- IndexedDB
	- Local and Session Storage
	- Cookies
		Note: To test cookie using local file with with chrome you have to enable them;
		      option '--enable-file-cookies'
	- Application Cache

	Tip: It is useful to check 'Disable cache (while DevTools is open)' (see Settings) 
	     when analyzing Network trafic

# Sources and Audit Panels #

# Miscellaneous ##

## Documentation ##

- [Chrome DevTools](https://developers.google.com/chrome-developer-tools/)
- [The Chromium Projects](http://www.chromium.org/getting-involved/dev-channel)

## Related articles ##

- [Chrome Dev Tools: Markup and Style](http://net.tutsplus.com/tutorials/tools-and-tips/chrome-dev-tools-markup-and-style/)
- [Chrome Dev Tools: Networking and the Console](http://net.tutsplus.com/tutorials/chrome-dev-tools-networking-and-the-console/)

## Additional tips & tricks ##

- [Ten cool Chrome tricks you can use right now](http://www.techrepublic.com/blog/google-in-the-enterprise/ten-cool-chrome-tricks-you-can-use-right-now/)
- [Google Chrome Shortcuts](http://chromecheat.blogspot.co.at/2008/09/google-chrome-shortcuts.html)
- [Cookbook Demo](http://ie.microsoft.com/testdrive/HTML5/Cookbook/) - leverage HTML5 AppCache and IndexedDB

## Other ##

	// SublimeText 2
	Use Shift-Ctrl-[ to fold code

## About the Author ##

John Sonmez is the founder of [Simple Programmer](http://simpleprogrammer.com/), a Pluralsight Author and Programmer, focused on making the complex simple.