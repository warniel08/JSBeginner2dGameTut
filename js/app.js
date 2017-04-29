requirejs.config({
	"baseUrl": "js",
	"paths": {
		// Libs
		"Class": "libs/class",
		"Jquery": "libs/jquery",
		// Classes
        "Assets": "app/classes/gfx/Assets",
        "Display": "app/classes/display/Display",
        "Game": "app/classes/Game",
        "ImageLoader" : "app/classes/gfx/ImageLoader",
        "Launcher": "app/classes/Launcher",
        "SpriteSheet": "app/classes/gfx/SpriteSheet"
	}
});

require(['app/main']);