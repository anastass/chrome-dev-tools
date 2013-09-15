var idbSupported = false;
var db;

document.addEventListener("DOMContentLoaded", function(){

    if("indexedDB" in window) { // check if indexDB is supported by the browser
        idbSupported = true;
    }

    if(idbSupported) {
        var openRequest = indexedDB.open("test_v2",2); // change version number to fire onupgradeneeded event

        openRequest.onupgradeneeded = function(e) {
            console.log("running onupgradeneeded");
            var thisDB = e.target.result;

            if(!thisDB.objectStoreNames.contains("firstOS")) {
                thisDB.createObjectStore("firstOS");
            }

            if(!thisDB.objectStoreNames.contains("secondOS")) {
                thisDB.createObjectStore("secondOS");
            }
        }

        openRequest.onsuccess = function(e) {
            console.log("Success!");
            db = e.target.result;
        }

        openRequest.onerror = function(e) {
            console.log("Error");
            console.dir(e);
        }

    }

},false);