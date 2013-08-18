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

	document.getElementById('chrome-logo').className = "smallimage";

	useAssert();
	LoadResourceData();

	var worker = new Worker('js/task.js');
	worker.onmessage = function (e) {
		console.log(e.data);
	}
	worker.postMessage("Joe");
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
	//debugger; /* calling debugger */
	for (var i = 0; i < 10000; i++) {
		if (i % 100 == 0) {
			console.timeStamp("Setting " + i);
		}
		localStorage.setItem("buggy", i);
		//var d = document.createElement("div");
		//document.getElementByTagName("body")[0].appendChild(d);
	};
	console.debug("Simulate error");
	console.error("Error");
}

function useAssert() {
	console.group("%cAssert", groupStyle);
		console.assert(10 == 5 * 2);	// OK
		console.assert(10 == 3 * 2);	// fail
	console.groupEnd();
}


function LoadResourceData() {
	CreateSQLData();
	CreateIndexedDbData();
	CreateLocalAndSessionStorageData();
	CreateCookieData();
}

function CreateSQLData() {
	var db = openDatabase('testdb', '1.0', 'test database', 2 * 1024 * 1024);
	db.transaction(function (tx) {
		tx.executeSql('CREATE TABLE text(id unique, data)');
		tx.executeSql('INSERT INTO text(id, data) VALUES (1, "text")');
	});
}

function CreateIndexedDbData() {
	console.group('IndexDB');
		var db;
		var request = indexedDB.open('IndexDB Test DB', 7);
		
		request.onerror = function(event) {
			console.log("Coulden't use IndexDB");
		};
		request.onsuccess = function (event) {
			db = request.result;
			console.log("Opened database!");
		};

		var customerData = [
			{id: 1, name: "Joe"},
			{id: 2, name: "Bob"}
		];

		request.onerror = function(event) {
		};
		request.onupgradeneeded = function(event) {
			console.log("Upgrading database");
			var db = event.target.result;

			if (db.objectStoreNames.contains("customers")) {
				db.deleteObjectStore("customers");
			}

			var objectStore = db.createObjectStore("customers", { keyPath: "id"});
			objectStore.createIndex("name", "name", { unique: false});

			for (var i in customerData) {
				console.log("Adding customer: %s", i.name);
				objectStore.add(customerData[i]);
			}
		}
	console.groupEnd('IndexDB');
}

function CreateLocalAndSessionStorageData() {
	localStorage.setItem("test key", "test value");
	sessionStorage.setItem("test session key", "test session value");
}

function CreateCookieData() {
	document.cookie = "cookiekey = cookievalue";
}
