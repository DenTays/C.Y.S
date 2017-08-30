

var pjs = new PointJS('2D', 640, 480, { // 16:9
	backgroundColor : '#BDCDDD' // if need
});

pjs.system.initFullPage();

var log    = pjs.system.log;     // log = console.log;
var game   = pjs.game;           // Game Manager
var point  = pjs.vector.point;   // Constructor for Point
var camera = pjs.camera;         // Camera Manager
var brush  = pjs.brush;          // Brush, used for simple drawing
var OOP    = pjs.OOP;            // Object's manager
var math   = pjs.math;           // More Math-methods
var levels = pjs.levels;         // Levels manager

var mouse = pjs.mouseControl.initControl();

var mw = new MW(pjs);

pjs.system.setTitle('PointJS Game'); // Set Title for Tab or Window

game.newLoopFromConstructor('myGame', function () {

	var info;

	this.entry = function () {

		info = mw.newInfoModal('Стихотворения', 'modal1.html', 0, 0, true);

		info.addEvent('end', 'click', function (e) {
			info.close();
		});

		info.addEvent('pressMe', 'click', function (e) {
			info.load('modal2.html', true);
		});

	};

	this.update = function () {
		game.clear();

		if (mouse.isPress('LEFT')) {
			info.reload();
		}

	};

});

game.startLoop('myGame');