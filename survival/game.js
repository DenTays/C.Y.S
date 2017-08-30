//75874


var pjs = new PointJS('2d', 700, 700, {backgroundColor : '#383F5B'});

var game = pjs.game;
var camera = pjs.camera;
var point = pjs.vector.point;
var OOP = pjs.OOP;
var math = pjs.math;
var mouse = pjs.mouseControl.initMouseControl();
var key = pjs.keyControl.initKeyControl();

pjs.mouseControl.setCursorImage("img/cursor1.png");

var color = ['red', 'yellow', 'blue', 'black', 'orange'];
var index = pjs.math.random(0, color.length-1);

var width = game.getWH().w;
var height = game.getWH().h;

var music = pjs.audio.newAudio('msc/001.mp3', 1);

var max = 4000;



var fon = game.newImageObject({
	file : 'img/bg.jpg', 
	x: 0, 
	y: 0, 
	w: max, 
	h: max
})

var message = game.newTextObject({
	x : 0, y : 0,
	size : 20,
	color : 'black'
}) 

var map = game.newRectObject({
	w : 150,
	h : 150,
	fillColor : 'black',
	alpha : 0.5
})

var cell = game.newCircleObject({
	radius : 2,
	fillColor : 'white'
})

var player = game.newCircleObject({
	x : max/2, y : max/2,
	radius : 20,
	fillColor : color[index]
})

var button = game.newImageObject({
	x : 150, y : 150,
	w : 80, h : 80,
	file : 'img/cancel.png',
	alpha : 0.8
})
var inventory = game.newRectObject({
	x : 0, y : 0,
	w : width-10, h : height-100,
	fillColor : 'grey',
	alpha : 0.95
})
var boat = game.newImageObject({
	x : -130, y : 10,
	file : 'img/boat.png',
	w : 60, h : 100,
	angle : -90
})

var log = game.newImageObject({
	x : 20, y : 40,
	w : 70, h : 70,
	file : 'img/log.png'
})

var stone = game.newImageObject({
	x : 20, y : 40,
	w : 70, h : 70,
	file : 'img/stone.png'
})

var coinBB = game.newImageObject({
	x : 20, y : 40,
	w : 70, h : 70,
	file : 'img/coin.png'
})

var heart = game.newImageObject({
	x : 20, y : 40,
	w : 70, h : 70,
	file : 'img/hearts.png'
})


//enemies
var rect = game.newImageObject({
	x : math.random(0, max), y : math.random(0, max),
	w : 70, h : 70,
	file : 'img/spider.png'
})
var rect2 = game.newImageObject({
	x : math.random(0, max), y : math.random(0, max),
	w : 70, h : 70,
	file : 'img/spider.png'
})
var rect3 = game.newImageObject({
	x : math.random(0, max), y : math.random(0, max),
	w : 70, h : 70,
	file : 'img/spider.png'
})



var dist = game.newRectObject({
	x : 0, y : 0,
	w : 1000, h : 1000,
	fillColor : 'black',
	alpha : 0
});
var dist2 = game.newRectObject({
	x : 0, y : 0,
	w : 1000, h : 1000,
	fillColor : 'black',
	alpha : 0
});
var dist3 = game.newRectObject({
	x : 0, y : 0,
	w : 1000, h : 1000,
	fillColor : 'black',
	alpha : 0
});



//enemies end


var sticks = []
OOP.fillArr(sticks, 80, function () {
	return game.newRectObject({
		position : point(math.random(50, max - 50), math.random(50, max - 50)),
		w : 10, h : 60,
		fillColor : 'brown',
		strokeColor : 'black',
		strokeWidth : 1,
		angle : math.random(0, 179)
	});
})
var rocks = []
OOP.fillArr(rocks, 70, function () {
	return game.newRectObject({
		position : point(math.random(50, max - 50), math.random(50, max - 50)),
		w : 30, h : 30,
		fillColor : 'grey',
		strokeColor : 'black',
		strokeWidth : 1
	});
})
var coins = []
OOP.fillArr(coins, 50, function () {
	return game.newCircleObject({
		position : point(math.random(50, max - 50), math.random(50, max - 50)),
		radius : 15,
		fillColor : 'gold',
		strokeWidth : 2, strokeColor : 'black'
	})
})
var trees = [];
OOP.fillArr(trees, 90, function () {
	return game.newImageObject({
		position : point(math.random(50, max - 50), math.random(50, max - 50)),
		w : 250, h : 250,
		file : 'img/tree.png',
		alpha : 0.9
	})
});
var bushes = [];
OOP.fillArr(bushes, 100, function () {
	return game.newImageObject({
		position : point(math.random(0, max), math.random(0, max)),
		width : 150, height : 150,
		file : 'img/bush.png',
		alpha : 0.95
	});
});
var stones = [];
OOP.fillArr(stones, 100, function () {
	return game.newRectObject({
		position : point(math.random(0, max), math.random(0, max)),
		w : 100, h : 100,
		fillColor : '#474747',
		strokeColor : 'black',
		strokeWidth : 1
	});
});
var mushroom = [];
OOP.fillArr(mushroom, 30, function () {
	return game.newImageObject({
		position : point(math.random(0, max - 50), math.random(0, max - 50)),
		w : 40, h : 40,
		file : 'img/mushroom.png',
		angle : math.random(0, 359)
	});
});



var tomahawk = game.newImageObject({
	x : 10, y : height-90,
	w : 70, h : 70,
	file : 'img/tomahawk.png',
	alpha : 0.2
})
var armor = game.newImageObject({
	x : 10, y : height-90,
	w : 70, h : 70,
	file : 'img/armor.png',
	alpha : 0.2
})
var bo = game.newImageObject({
	x : 10, y : height-90,
	w : 70, h : 70,
	file : 'img/bo.png',
	alpha : 0.2
})
var fire = game.newImageObject({
	x : -8000, y : 10,
	w : 70, h : 70,
	file : 'img/fire.png'
})







var coinCount = 0;
var stickCount = 0;
var rockCount = 0;
var health = 100;
var healthe1 = 90,
		healthe2 = 90,
		healthe3 = 90;
var uron = 1;
var uron2 = 0;

var dmg = 1;

var armorH = false;
var tomahawkH = false;
var boH = false;
var fireH = false;

var enemyVision1 = false,
	enemyVision2 = false,
	enemyVision3 = false;

var ubiystva = 0;	



player.keyMove = function (){
		player.dx = player.dy = 0;
		if (key.isDown('W')) {
			player.dy-=3;
		};
		if (key.isDown('S')) {
			player.dy+=3;
		};
		if (key.isDown('D')) {
			player.dx+=3;
		};
		if (key.isDown('A')) {
			player.dx-=3;
		};
	};

player.collision = function (arr) {
	OOP.forArr(arr, function (el) {
		if (player.isIntersect(el)) {
			if (player.dx > 0 && player.x < el.x) {
				player.dx = 0
			}
			if (player.dx < 0 && player.x > el.x) {
				player.dx = 0
			}
			if (player.dy > 0 && player.y < el.y) {
				player.dy = 0
			}
			if (player.dy < 0 && player.y > el.y) {
				player.dy = 0
			}
		}
	});
};



game.newLoop('game', function () {

	

	if (health <= 0) {
		location.reload()
	}
	
	music.play();
	message.setPositionS(point(10, 130))
	
	message.reStyle({
		text : '-'
	})


	if (player.x <= fon.x-10) {
		player.x = -10;
	};
	if (player.y <= fon.y-10) {
		player.y = -10;
	};
	if (player.y >= fon.h+10) {
		player.y = max + 10;
	};
	if (player.x >= fon.w+10) {
		player.x = max + 10;
	};

	game.clear();
	camera.moveTimeC(player, 20);

	if (health <= 50) {
		message.reStyle({
		text : 'Фух, мне что-то не хорошо...'
		})
	}
	if (health <= 20) {
		message.reStyle({
		text : 'Как же плохо...'
		})
	};


	if (player.isDynamicIntersect((rect.getDynamicBox()))) {
		health-=dmg;
		healthe1 -= uron;
		healthe1 -= uron2;
		message.reStyle({
			text : 'Противник: '+ healthe1
		})
	}

	if (player.isDynamicIntersect((rect2.getDynamicBox()))) {
		health-=dmg;
		healthe2 -= uron;
		healthe2 -= uron2;
		message.reStyle({
			text : 'Противник: '+ healthe2
		})
	}

	if (player.isDynamicIntersect((rect3.getDynamicBox()))) {
		health-=dmg;
		healthe3 -= uron;
		healthe3 -= uron2;
		message.reStyle({
			text : 'Противник: '+ healthe3
		})
	}

	if (healthe1 <= 0) {
		rect.x = math.random(0, max);
		rect.y = math.random(0, max);
		healthe1 = 90;
		ubiystva += 1;
		console.log(ubiystva);
		if (coinCount<=500)
		coinCount+=100;

		health+=20;
	}
	if (healthe2 <= 0) {
		rect2.x = math.random(0, max);
		rect2.y = math.random(0, max);
		healthe2 = 90;
		ubiystva += 1;
		console.log(ubiystva);
		if (coinCount<=500)
		coinCount+=100;
		health+=20;
	}
	if (healthe3 <= 0) {
		rect3.x = math.random(0, max);
		rect3.y = math.random(0, max);
		healthe3 = 90;
		ubiystva += 1;
		console.log(ubiystva);
		if (coinCount<=500)
		coinCount+=100;
		health+=20;
	}


	player.keyMove()
	player.collision(stones);
	player.move(point(player.dx, player.dy))

	inventory.setPositionS(point(5, 50));
	inventory.setVisible( false )
	inventory.draw()
	fon.draw();
	fire.draw()
	
	dist.setPosition(point(rect.x-dist.w/2+rect.w/2, rect.y-dist.h/2+rect.h/2));
	dist.draw();
	dist2.setPosition(point(rect2.x-dist2.w/2+rect2.w/2, rect2.y-dist2.h/2+rect2.h/2));
	dist2.draw();
	dist3.setPosition(point(rect3.x-dist3.w/2+rect3.w/2, rect3.y-dist3.h/2+rect3.h/2));
	dist3.draw();
	OOP.drawArr(coins);
	OOP.drawArr(mushroom);
	OOP.drawArr(stones);
	OOP.drawArr(sticks);
	OOP.drawArr(rocks);
	player.draw();
	boat.draw()
	rect.draw();
	rect2.draw();
	rect3.draw();
	OOP.drawArr(bushes);
	OOP.drawArr(trees);
	map.setPositionS(point(width-120, height-120));
	map.draw();
	button.setPositionS(point(width-82, 1));
	button.draw()
	tomahawk.setPositionS(point(10, height-80));
	tomahawk.draw()
	armor.setPositionS(point(90, height-80));
	armor.draw()
	bo.setPositionS(point(170, height-80));
	bo.draw()

	log.setPositionS(point(20, 20))
	log.draw()
	stone.setPositionS(point(150, 20))
	stone.draw()
	coinBB.setPositionS(point(280, 20))
	coinBB.draw()
	heart.setPositionS(point(410, 20))
	heart.draw()
	

	cell.setPositionS(point(width-120, height-120))
	cell.move(point(player.getPosition(1).x/40, player.getPosition(1).y/40))
	cell.draw()
	message.draw()

	pjs.brush.drawTextS({
  		text : stickCount,
  		x :102, y : 65,
  		color : "brown",
  		size : 25
	});
	pjs.brush.drawTextS({
  		text : rockCount,
  		x :232, y : 65,
  		color : "black",
  		size : 25
	});
	pjs.brush.drawTextS({
  		text : coinCount,
  		x :362, y : 65,
  		color : "gold",
  		size : 25
	});
	pjs.brush.drawTextS({
  		text : health,
  		x :492, y : 65,
  		color : "red",
  		size : 25
	});
	

	pjs.vector.moveCollisionAngle(player, coins, 0, function (player, coin) {
		if (coinCount <= 500) {
    	coinCount++
    	coin.x = math.random(0, max)
    	coin.y = math.random(0, max)
    	}
    });
    pjs.vector.moveCollisionAngle(player, sticks, 0, function (player, stick) {
    	if (stickCount <= 500) {
    	stickCount++
    	stick.x = math.random(0, max)
    	stick.y = math.random(0, max)
    	}
    });
    pjs.vector.moveCollisionAngle(player, rocks, 0, function (player, rock) {
    	if (rockCount <= 500) {
    	rockCount++
    	rock.x = math.random(0, max)
    	rock.y = math.random(0, max)
    	}
    });
    pjs.vector.moveCollisionAngle(player, mushroom, 0, function (player, m) {
    	if (key.isDown('E') && health < 100) {
    		health+=5
    		m.x = math.random(0, max)
    		m.y = math.random(0, max)
    	}
    });
    var speed = 2; 

    if (player.isIntersect(bushes)) {
    	enemyVision1 = true;
    	enemyVision2 = true;
    	enemyVision3 = true;
    }

	if (player.isIntersect(dist)) {
		enemyVision1 = false
		if (player.x > dist.x && player.x < rect.x) {
			rect.x -= speed
		}
		if (player.x > dist.x && player.x > rect.x) {
			rect.x += speed
		}
		if (player.y > dist.y && player.y > rect.y) {
			rect.y += speed
		}
		if (player.y > dist.y && player.y < rect.y) {
			rect.y -= speed
		}
		rect.rotate(player.getPositionC());

	}
	if (player.isIntersect(dist2)) {
		enemyVision2 = false
		if (player.x > dist2.x && player.x < rect2.x) {
			rect2.x -= speed
		}
		if (player.x > dist2.x && player.x > rect2.x) {
			rect2.x += speed
		}
		if (player.y > dist2.y && player.y > rect2.y) {
			rect2.y += speed
		}
		if (player.y > dist2.y && player.y < rect2.y) {
			rect2.y -= speed
		}
		rect2.rotate(player.getPositionC());
	}
	if (player.isIntersect(dist3)) {
		if (player.x > dist3.x && player.x < rect3.x) {
			rect3.x -= speed
		}
		if (player.x > dist3.x && player.x > rect3.x) {
			rect3.x += speed
		}
		if (player.y > dist3.y && player.y > rect3.y) {
			rect3.y += speed
		}
		if (player.y > dist3.y && player.y < rect3.y) {
			rect3.y -= speed
		}
		rect3.rotate(player.getPositionC());0
	}

	
	

	

	


	if (stickCount >= 10 && rockCount >= 8 && tomahawkH == false) {
		if (mouse.isPeekObject('LEFT', tomahawk)) {
			tomahawkH = true;
			stickCount -= 10;
			rockCount -= 8;
			tomahawk.setAlpha(0.9);
		}
	}
	if (coinCount >= 40 && rockCount >= 15 && stickCount >= 5 && armorH == false) {
		if (mouse.isPeekObject('LEFT', armor)) {
			armorH = true;
			coinCount -= 40;
			rockCount -= 15;
			armor.setAlpha(0.9);
		}
	}
	if (rockCount >= 2 && stickCount >= 10 && boH == false) {
		if (mouse.isPeekObject('LEFT', bo)) {
			boH = true;
			rockCount -= 2;
			stickCount -= 10;
			bo.setAlpha(0.9);
		}
	}

	if (tomahawkH) {
		uron = 2
	}
	if (armorH) {
		dmg = 1
	}
	if (boH) {
		uron2 = 0.5
	}
	if (pjs.mouseControl.isInObject(tomahawk) && tomahawkH == false) {
		tomahawk.setAlpha(0.7)
	} 
	else if (tomahawkH) {
		tomahawk.setAlpha(0.9)
	} else {
		tomahawk.setAlpha(0.2);
	}
	if (pjs.mouseControl.isInObject(armor) && armorH == false) {
		armor.setAlpha(0.7);
	} else if (armorH) {
		armor.setAlpha(0.9);
	} else {
		armor.setAlpha(0.2);
	}
	if (pjs.mouseControl.isInObject(bo) && boH == false) {
		bo.setAlpha(0.7);
	} else if (boH) {
		bo.setAlpha(0.9);
	} else {
		bo.setAlpha(0.2);
	};

	
	if (mouse.isPress('RIGHT') && stickCount >= 10 && fireH == false) {
		stickCount -= 10;
		fire.setPositionC(mouse.getPosition());
		fireH = true;

	};

	if (player.isIntersect(fire)) {
		if (health < 100) {
			health += 0.01;
		};
 	};

 	if (mouse.isPeekObject('LEFT', button)) {
 		game.setLoop('menu')
 	}

 	health = 1 * health.toFixed(2);



	
	
});


game.newLoop('menu', function () {
	game.fill('black')


	if (mouse.isPress('LEFT')) {
		game.setLoop('game');
	};
});



game.startLoop('menu');