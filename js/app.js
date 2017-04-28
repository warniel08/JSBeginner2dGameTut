requirejs.config({
	"baseUrl": "js",
	"paths": {
		// Libs
		"Class": "libs/class",
		"Jquery": "libs/jquery",
		// Classes
		"Launcher": "app/classes/Launcher",
        "Display": "app/class/Display"
	}
});

require(['app/main']);