var pjs = new PointJS(640, 480, {
	backgroundColor : '#EDEDED', // optional,
});
//pjs.system.initFullPage(); // for Full Page mode
// pjs.system.initFullScreen(); // for Full Screen mode (only Desctop)

var log    = pjs.system.log;     // log = console.log;
var game   = pjs.game;           // Game Manager
var point  = pjs.vector.point;   // Constructor for Point
var camera = pjs.camera;         // Camera Manager
var brush  = pjs.brush;          // Brush, used for simple drawing
var OOP    = pjs.OOP;            // Objects manager
var math   = pjs.math;           // More Math-methods
var rnd    = math.random;

var mouse = pjs.mouseControl.initMouseControl();
var touch = pjs.touchControl.initControl();
var width  = game.getWH().w; // width of scene viewport
var height = game.getWH().h; // height of scene viewport

var r = function (num) {
  return num * game.getResolution();
};

var draw = [];
var min_w = 30;
var max_w = 200;

OOP.fillArr(draw, 20, function () {
  var sp = r(rnd(1, 15));
  return game.newRectObject({
    x : r(rnd(0, 1000)),
    w : r(rnd(min_w, max_w)),
    h : r(rnd(min_w, max_w)),
    fillColor : '#D6D6D6',
    strokeColor : '#B9B9B9',
    strokeWidth : 1,
    userData : {
      fixY : r(rnd(0, height)),
      speed : sp,
      z : sp
    }
  });
});

pjs.zList.useZValue();
pjs.zList.init(draw);

pjs.system.setTitle('PointJS Game'); // Set Title for Tab or Window

// Game Loop
game.newLoopFromConstructor('menu2', function () {
	// Constructor Game Loop

  var myText = game.newTextObject({
    positionC : point(game.getWH2().w, game.getWH2().h), // central position of text
    size : r(100), // size text
    color : '#C2C2C2', // color text
    text : 'меню слева', // label
    alpha : 0, // alpha channel
    font : 'Arial' // font family
    ,strokeColorText : 'black',
     strokeWidthText : 1
  });

	this.update = function () {
		// Update function

    var mp = mouse.getPosition().y / 10;

    OOP.forArr(draw, function (d) {
      d.x -= d.speed;

      d.y = d.fixY - mp * d.z / 4;

      if (d.x + d.w < 0) {
        d.speed = d.z = rnd(1, 20, true);
        d.w = r(rnd(min_w, max_w));
        d.h = r(rnd(min_w, max_w));
        d.fixY = rnd(0, height);
        d.x = width;
      }

    });

    pjs.zList.update();
    pjs.zList.draw();

    myText.draw(); // drawing text
    myText.transparent(0.001); // change alpha [0..>..1]

    camera.setPosition(point(false, -r(40)+mp));

	};

});

game.startLoop('menu2');