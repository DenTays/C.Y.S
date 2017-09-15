//75874


let pjs = new PointJS('2d', 700, 700, {backgroundColor : '#383F5B'});

let game = pjs.game;
let camera = pjs.camera;
let point = pjs.vector.point;
let OOP = pjs.OOP;
let math = pjs.math;
let mouse = pjs.mouseControl.initMouseControl();
let key = pjs.keyControl.initKeyControl();
let system = pjs.system;

pjs.mouseControl.setCursorImage("img/cursor1.png");

let color = ['red', 'yellow', 'blue', 'black', 'orange'];
let index = pjs.math.random(0, color.length-1);

let width = game.getWH().w;
let height = game.getWH().h;

let music = pjs.audio.newAudio('msc/001.mp3', 1);

let max = 4000;



let fon = game.newImageObject({
	file : 'img/bg.jpg', 
	x: 0, 
	y: 0, 
	w: max, 
	h: max
});

let message = game.newTextObject({
	x : 0, y : 0,
	size : 25,
	color : 'black'
}) ;

let map = game.newRectObject({
	w : 150,
	h : 150,
	fillColor : 'black',
	alpha : 0.5
});

let cell = game.newCircleObject({
	radius : 2,
	fillColor : 'white'
});
let fireCell = game.newCircleObject({
	radius : 2,
	fillColor : 'orange'
});

let player = game.newImageObject({
	x : 50, y : 40,
	w : 40, h : 60,
	file : 'img/player.png'
});

let settings = game.newImageObject({
	x : 150, y : 150,
	w : 80, h : 80,
	file : 'img/house.png',
	alpha : 0.8
});
let inventory = game.newRectObject({
	x : 0, y : 0,
	w : width, h : height,
	fillColor : 'grey',
	alpha : 0.7
})
let boat = game.newImageObject({
	x : -60, y : 10,
	file : 'img/boat.png',
	w : 60, h : 100,
	angle : -90
})

let log = game.newImageObject({
	x : 20, y : 40,
	w : 70, h : 70,
	file : 'img/log.png'
})

let stone = game.newImageObject({
	x : 20, y : 40,
	w : 70, h : 70,
	file : 'img/stone.png'
});

let coinBB = game.newImageObject({
	x : 20, y : 40,
	w : 70, h : 70,
	file : 'img/coin.png'
});

let heart = game.newImageObject({
	x : 20, y : 40,
	w : 60, h : 60,
	file : 'img/hearts.png'
});
let trophy = game.newImageObject({
	x : 20, y : 40,
	w : 70, h : 70,
	file : 'img/trophy.png'
});

let craftinfo = game.newTextObject({
	x : 10, y : height - 100,
	size : 15, color : 'black',
	alpha : 1, text : '-'
})
let progress = pjs.resources.getProgress();




//enemies
let rect = game.newImageObject({
	x : math.random(0, max), y : math.random(0, max),
	w : 70, h : 70,
	file : 'img/behold.png'
});
let rect2 = game.newImageObject({
	x : math.random(0, max), y : math.random(0, max),
	w : 70, h : 70,
	file : 'img/behold.png'
});
let rect3 = game.newImageObject({
	x : math.random(0, max), y : math.random(0, max),
	w : 70, h : 70,
	file : 'img/behold.png'
})


let pig = game.newImageObject({
	x : math.random(0, max), y : math.random(0, max),
	w : 70, h : 70,
	file : 'img/pig.png'
});
let pig2 = game.newImageObject({
	x : math.random(0, max), y : math.random(0, max),
	w : 70, h : 70,
	file : 'img/pig.png'
});

let distp = game.newRectObject({
	x : 0, y : 0,
	w : 500, h : 500,
	fillColor : 'black',
	alpha : 0
});
let distp2 = game.newRectObject({
	x : 0, y : 0,
	w : 500, h : 500,
	fillColor : 'black',
	alpha : 0
});



let dist = game.newRectObject({
	x : 0, y : 0,
	w : 1000, h : 1000,
	fillColor : 'black',
	alpha : 0
});
let dist2 = game.newRectObject({
	x : 0, y : 0,
	w : 1000, h : 1000,
	fillColor : 'black',
	alpha : 0
});
let dist3 = game.newRectObject({
	x : 0, y : 0,
	w : 1000, h : 1000,
	fillColor : 'black',
	alpha : 0
});



//enemies end


let sticks = []
OOP.fillArr(sticks, 50, function () {
	return game.newRectObject({
		position : point(math.random(50, max - 50), math.random(50, max - 50)),
		w : 10, h : 60,
		fillColor : 'brown',
		strokeColor : 'black',
		strokeWidth : 1,
		angle : math.random(0, 179)
	});
})
let rocks = []
OOP.fillArr(rocks, 40, function () {
	return game.newRectObject({
		position : point(math.random(50, max - 50), math.random(50, max - 50)),
		w : 30, h : 30,
		fillColor : 'grey',
		strokeColor : 'black',
		strokeWidth : 1
	});
})
let coins = []
OOP.fillArr(coins, 60, function () {
	return game.newCircleObject({
		position : point(math.random(30, max - 150), math.random(30, max - 150)),
		radius : 15,
		fillColor : 'gold',
		strokeWidth : 2, strokeColor : 'black'
	})
})
let trees = [];
OOP.fillArr(trees, 90, function () {
	return game.newImageObject({
		position : point(math.random(30, max - 150), math.random(30, max - 150)),
		w : 250, h : 250,
		file : 'img/tree.png',
		alpha : 0.9
	})
});
let bushes = [];
OOP.fillArr(bushes, 100, function () {
	return game.newImageObject({
		position : point(math.random(30, max - 150), math.random(30, max - 150)),
		width : 150, height : 150,
		file : 'img/bush.png',
		alpha : 0.95
	});
});
let stones = [];
OOP.fillArr(stones, 100, function () {
	return game.newRectObject({
		position : point(math.random(30, max - 150), math.random(30, max - 150)),
		w : 100, h : 100,
		fillColor : '#474747',
		strokeColor : 'black',
		strokeWidth : 1
	});
});
let mushroom = [];
OOP.fillArr(mushroom, 20, function () {
	return game.newImageObject({
		position : point(math.random(30, max - 150), math.random(30, max - 150)),
		w : 40, h : 40,
		file : 'img/mushroom.png',
		angle : math.random(0, 359)
	});
});



let tomahawk = game.newImageObject({
	x : 10, y : height-90,
	w : 70, h : 70,
	file : 'img/tomahawk.png',
	alpha : 0.2
})
let armor = game.newImageObject({
	x : 10, y : height-90,
	w : 70, h : 70,
	file : 'img/armor.png',
	alpha : 0.2
})
let bo = game.newImageObject({
	x : 10, y : height-90,
	w : 70, h : 70,
	file : 'img/bo.png',
	alpha : 0.2
});
let robe = game.newImageObject({
	x : 10, y : height-90,
	w : 70, h : 70,
	file : 'img/robe.png',
	alpha : 0.2
});
let shield = game.newImageObject({
	x : 10, y : height-90,
	w : 70, h : 70,
	file : 'img/shield.png',
	alpha : 0.2
});
let teleport = game.newImageObject({
	x : 10, y : height-90,
	w : 70, h : 70,
	file : 'img/teleport.png',
	alpha : 0.2
});
let skillrunning1 = game.newImageObject({
	x : 10, y : height-90,
	w : 90, h : 90,
	file : 'img/run.png',
	alpha : 0.5
});
let skillrunning2 = game.newImageObject({
	x : 10, y : height-90,
	w : 90, h : 90,
	file : 'img/run2.png',
	alpha : 0.5
});
let fire = game.newImageObject({
	x : -8000, y : 10,
	w : 80, h : 80,
	file : 'img/fire.png'
});


let cold = game.newImageObject({
	x : 10, y : 10,
	w : 70, h : 70,
	file : 'img/cold.png'
});


let progressHealth = game.newRectObject({
	x : 20, y : 40,
	w : 100, h : 28,
	fillColor : 'red'
});
let rectHealth = game.newRectObject({
	x : 20, y : 40,
	w : 102, h : 30,
	fillColor : 'white',
	strokeWidth : 2,
	strokeColor : 'black'
});

let progressxp = game.newRectObject({
	x : 20, y : 40,
	w : 0, h : 28,
	fillColor : 'lime'
});
let rectxp = game.newRectObject({
	x : 20, y : 40,
	w : 202, h : 30,
	fillColor : 'white',
	strokeWidth : 2,
	strokeColor : 'black'
});




let coinCount = 0;
let stickCount = 0;
let rockCount = 0;
let health = 100;
let healthe1 = 80,
		healthe2 = 80,
		healthe3 = 80;
let healthp1 = 50,
	healthp2 = 50;

let uron = 1;
let uron2 = 0;

let dmg = 1;
let dmg2 = 0.5;

let armorH = false;
let tomahawkH = false;
let boH = false;
let robeH = false;
let shieldH = false;
let fireH = false;
let teleportH = false;
let runS1 = false;
let runS2 = false;

let enemyVision1 = false,
	enemyVision2 = false,
	enemyVision3 = false;

let xp = 0;

let ubiystva = 0;

let temperature = 30;
let tempround = 30;
let isDying = false;

let n = 0.1;	
let isBuyed = false;
let speedplayer = 2.5;


player.keyMove = function (){
		player.dx = player.dy = 0;
		if (key.isDown('W')) {
			player.dy-=speedplayer;
		};
		if (key.isDown('S')) {
			player.dy+=speedplayer;
		};
		if (key.isDown('D')) {
			player.dx+=speedplayer;
		};
		if (key.isDown('A')) {
			player.dx-=speedplayer;
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
pig.collision = function (arr) {
	OOP.forArr(arr, function (el) {
		if (pig.isIntersect(el)) {
			if (pig.dx > 0 && pig.x < el.x) {
				pig.dx = 0
			}
			if (pig.dx < 0 && pig.x > el.x) {
				pig.dx = 0
			}
			if (pig.dy > 0 && pig.y < el.y) {
				pig.dy = 0
			}
			if (pig.dy < 0 && pig.y > el.y) {
				pig.dy = 0
			}
		}
	});
};
pig2.collision = function (arr) {
	OOP.forArr(arr, function (el) {
		if (pig2.isIntersect(el)) {
			if (pig2.dx > 0 && pig2.x < el.x) {
				pig2.dx = 0
			}
			if (pig2.dx < 0 && pig2.x > el.x) {
				pig2.dx = 0
			}
			if (pig2.dy > 0 && pig2.y < el.y) {
				pig2.dy = 0
			}
			if (pig2.dy < 0 && pig2.y > el.y) {
				pig2.dy = 0
			}
		}
	});
};



game.newLoop('game', function () {


	if (health <= 0) {
		game.setLoop('gameover')
	}
	
	//music.play();
	message.setPositionS(point(190, 120))

	
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
	camera.moveTimeC(player, 10);



	if (player.isDynamicIntersect((rect.getDynamicBox()))) {
		health-=dmg;
		health-=dmg2;
		healthe1 -= uron;
		healthe1 -= uron2;
		progressHealth.w -= dmg;
		progressHealth.w -= dmg2;
		message.reStyle({
			text : 'Противник: '+ healthe1
		})
	}

	if (player.isDynamicIntersect((rect2.getDynamicBox()))) {
		health-=dmg;
		health-=dmg2;
		healthe2 -= uron;
		healthe2 -= uron2;
		progressHealth.w -= dmg;
		progressHealth.w -= dmg2;
		message.reStyle({
			text : 'Противник: '+ healthe2
		})
	}

	if (player.isDynamicIntersect((rect3.getDynamicBox()))) {
		health-=dmg;
		health-=dmg2;
		healthe3 -= uron;
		healthe3 -= uron2;
		progressHealth.w -= dmg;
		progressHealth.w -= dmg2;
		message.reStyle({
			text : 'Противник: '+ healthe3
		})
	}


	if (player.isDynamicIntersect((pig.getDynamicBox()))) {
		healthp1 -= uron;
		healthp1 -= uron2;
		message.reStyle({
			text : 'Противник: '+ healthp1
		})
	}
	if (player.isDynamicIntersect((pig2.getDynamicBox()))) {
		healthp2 -= uron;
		healthp2 -= uron2;
		message.reStyle({
			text : 'Противник: '+ healthp2
		})
	}

	if (healthe1 <= 0) {
		rect.x = math.random(0, max);
		rect.y = math.random(0, max);
		healthe1 = 90;
		ubiystva += 1;
		console.log(ubiystva);
		if (coinCount<=500)
		coinCount+=15;
		if (xp < 200) {
			xp += 3;
			progressxp.w += 3
		}
	}
	if (healthe2 <= 0) {
		rect2.x = math.random(0, max);
		rect2.y = math.random(0, max);
		healthe2 = 90;
		ubiystva += 1;
		console.log(ubiystva);
		if (coinCount<=500)
		coinCount+=15;
		if (xp < 200) {
			xp += 3;
			progressxp.w += 3
		}
	}
	if (healthe3 <= 0) {
		rect3.x = math.random(0, max);
		rect3.y = math.random(0, max);
		healthe3 = 90;
		ubiystva += 1;
		console.log(ubiystva);
		if (coinCount<=500)
		coinCount+=15;
		if (xp < 200) {
			xp += 3;
			progressxp.w += 3
		}
	}

	if (healthp1 <= 0) {
		pig.x = math.random(0, max);
		pig.y = math.random(0, max);
		healthp1 = 50;
		ubiystva += 1;
		console.log(ubiystva);
		if (coinCount<=500)
		coinCount+=5;
		if (health >= 80) {
			health = 100;
			progressHealth.w = 100;
		} else if (health < 80) {
			health += 20;
			progressHealth.w += 20;
		}
		if (xp < 200) {
			xp += 2;
			progressxp.w += 2
		}
		
	}
	if (healthp2 <= 0) {
		pig2.x = math.random(0, max);
		pig2.y = math.random(0, max);
		healthp2 = 50;
		ubiystva += 1;
		console.log(ubiystva);
		if (coinCount<=500) {
			coinCount+=5;
		}
		if (health >= 80) {
			health = 100;
			progressHealth.w = 100;
		} else if (health < 80) {
			health += 20;
			progressHealth.w += 20;
		}
		if (xp < 200) {
			xp += 2;
			progressxp.w += 2
		}
	}


	if (player.isIntersect(distp)) {
		if (player.x > distp.x && player.x < pig.x) {
			pig.setFlip(false, false);
				pig.x += 1;
		} else if (player.x > distp.x && player.x > pig.x) {
			pig.setFlip(true, false);
			pig.x -= 1;
		};
		if (player.y > distp.y && player.y < pig.y) {
			pig.y += 1;
		} else if (player.y > distp.y && player.y > pig.y) {
			pig.y -= 1;
		};
	};


	if (player.isIntersect(distp2)) {
		if (player.x > distp2.x && player.x < pig2.x) {
			pig2.setFlip(false, false);
			pig2.x += 1;
		} else if (player.x > distp2.x && player.x > pig2.x) {
			pig2.setFlip(true, false);
			pig2.x -= 1;
		};
		if (player.y > distp2.y && player.y < pig2.y) {
			pig2.y += 1;
		} else if (player.y > distp2.y && player.y > pig2.y) {
			pig2.y -= 1;
		};
	};
	if (pig.x < -30 || pig.y < -30) {
		healthp1 = 0;
	}
	if (pig2.x < -30 || pig2.y < -30)  {
		healthp2 = 0;
	};
	if (pig.x > max + 20 || pig.y > max + 20) {
		healthp1 = 0;
	}
	if (pig2.x > max + 20 || pig2.y > max + 20)  {
		healthp2 = 0;
	};


	player.keyMove();
	player.collision(stones);
	player.move(point(player.dx, player.dy));

	pig.collision(stones);
	pig2.collision(stones);

	inventory.setPositionS(point(5, 50));
	inventory.setVisible( false );
	inventory.draw();
	fon.draw();
	fire.draw();

	
	dist.setPosition(point(rect.x-dist.w/2+rect.w/2, rect.y-dist.h/2+rect.h/2));
	dist.draw();
	dist2.setPosition(point(rect2.x-dist2.w/2+rect2.w/2, rect2.y-dist2.h/2+rect2.h/2));
	dist2.draw();
	dist3.setPosition(point(rect3.x-dist3.w/2+rect3.w/2, rect3.y-dist3.h/2+rect3.h/2));
	dist3.draw();
	distp.setPosition(point(pig.x-distp.w/2+pig.w/2, pig.y-distp.h/2+pig.h/2));
	distp.draw();
	distp2.setPosition(point(pig2.x-distp2.w/2+pig2.w/2, pig2.y-distp2.h/2+pig2.h/2));
	distp2.draw();
	OOP.drawArr(coins);
	OOP.drawArr(mushroom);
	OOP.drawArr(stones);
	OOP.drawArr(sticks);
	OOP.drawArr(rocks);
	boat.draw();
	pig.draw();
	pig2.draw();
	player.draw();
	OOP.drawArr(bushes);
	OOP.drawArr(trees);
	rect.draw();
	rect2.draw();
	rect3.draw();
	map.setPositionS(point(width-120, height-120));
	map.draw();
	settings.setPositionS(point(width-90, 5));
	settings.draw();
	tomahawk.setPositionS(point(10, height-80));
	tomahawk.draw();
	armor.setPositionS(point(90, height-80));
	armor.draw();
	bo.setPositionS(point(170, height-80));
	bo.draw();
	robe.setPositionS(point(250, height-80));
	robe.draw();
	shield.setPositionS(point(330, height-80));
	shield.draw();

	log.setPositionS(point(20, 20));
	log.draw();
	stone.setPositionS(point(150, 20));
	stone.draw();
	coinBB.setPositionS(point(280, 20));
	coinBB.draw();
	heart.setPositionS(point(15, 170))
	heart.draw()
	

	cell.setPositionS(point(width-120, height-120))
	cell.move(point(player.getPosition(1).x/35, player.getPosition(1).y/35))
	cell.draw()
	if (fireH) {
		fireCell.setPositionS(point(width-120, height-120))
		fireCell.move(point(fire.getPosition(1).x/35, fire.getPosition(1).y/35));
		fireCell.draw();
	}
	rectHealth.setPositionS(point(80, 184));
	rectHealth.draw();
	progressHealth.setPositionS(point(82, 186));
	progressHealth.draw();

	rectxp.setPositionS(point(400, 20));
	rectxp.draw();
	progressxp.setPositionS(point(402, 22));
	progressxp.draw();

	pjs.brush.drawTextS({
		x : 450, y : 30,
		size : 15, color : 'black',
		text : 'EXPERIENCE'
	})

	craftinfo.setPositionS(point(10, height - 100));
	craftinfo.draw();

	cold.setPositionS(point(10, 95));
	cold.draw();

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
  		text : 'C: '+tempround,
  		x :80, y : 120,
  		color : "black",
  		size : 25
	});

	message.draw()

	player.rotate(mouse.getPosition())
	

	pjs.vector.moveCollisionAngle(player, coins, 0, function (player, coin) {
		if (coinCount <= 500) {
    	coinCount++
    	coin.x = math.random(0, max)
    	coin.y = math.random(0, max)
    	if (xp < 200) {
			xp += 0.5;
			progressxp.w += 0.5;
		}
    	}
    	
    });
    pjs.vector.moveCollisionAngle(player, sticks, 0, function (player, stick) {
    	if (stickCount <= 500) {
    	stickCount++
    	stick.x = math.random(0, max)
    	stick.y = math.random(0, max)
    	if (xp < 200) {
			xp += 0.5;
			progressxp.w += 0.5;
		}
    	}
    	
    });
    pjs.vector.moveCollisionAngle(player, rocks, 0, function (player, rock) {
    	if (rockCount <= 500) {
    	rockCount++
    	rock.x = math.random(0, max)
    	rock.y = math.random(0, max)
    	if (xp < 200) {
			xp += 0.5;
			progressxp.w += 0.5;
		}
    	}
    	
    });
    pjs.vector.moveCollisionAngle(player, mushroom, 0, function (player, m) {
    	if (health >= 95 && health < 100) {
    		health = 100;
    		progressHealth.w = 100;
	    	m.x = math.random(0, max);
	    	m.y = math.random(0, max);
	    	if (xp < 200) {
			xp += 0.5;
			progressxp.w += 0.5;
			}
    	} else if (health < 95) {
	    	health+=5;
	    	progressHealth.w += 5;
	    	m.x = math.random(0, max);
	    	m.y = math.random(0, max);
	    	if (xp < 200) {
			xp += 0.5;
			progressxp.w += 0.5;
			}
    	};
    	
    });
    let speed = 2; 

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
	}


	let skillsenter = game.newTextObject({
		x : width - 200, y : 72,
		size : 25, color : 'white',
		text : 'Skills'
	});
	pjs.brush.drawRectS({
		x : width - 170, y : 54,
		w : 70, h : 29,
		fillColor : 'black', strokeColor : 'white',
		strokeWidth : 2
	})
	skillsenter.setPositionS(point(width - 168, 60))
	skillsenter.draw();
	if (mouse.isPeekObject('LEFT', skillsenter)) {
		game.setLoop('skills')
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
	if (stickCount >= 4 && coinCount >= 50 && robeH == false) {
		if (mouse.isPeekObject('LEFT', robe)) {
			robeH = true;
			stickCount -= 4;
			coinCount -= 50;
			robe.setAlpha(0.9);
		}
	}
	if (stickCount >= 15 && rockCount >= 20 && shieldH == false) {
		if (mouse.isPeekObject('LEFT', shield)) {
			shieldH = true;
			stickCount -= 15;
			rockCount -= 20;
			shield.setAlpha(0.9);
		}
	}

	if (tomahawkH) {
		uron = 2;
	}
	if (armorH) {
		dmg = 0.5;
		player.setImage( "img/playerinarmor.png" );
	}
	if (boH) {
		uron2 = 1;
	}
	if (robeH) {
		n = 0.01;	
	}
	if (robeH && armorH === false) {
		player.setImage( "img/playerinrobe.png" );
	}
	if (shieldH) {
		dmg2 = 0;
	}
	if (mouse.isInObject(tomahawk) && tomahawkH == false) {
		tomahawk.setAlpha(0.7)
		craftinfo.setAlpha(0.9);
		craftinfo.reStyle({
			text : 'Craft: 10 logs, 8 stones'
		});
	} 
	else if (tomahawkH) {
		craftinfo.reStyle({
			text : '-'
		});
		tomahawk.setAlpha(0.9)
	} else {
		tomahawk.setAlpha(0.2);
	}
	if (mouse.isInObject(armor) && armorH == false) {
		armor.setAlpha(0.7);
		craftinfo.reStyle({
			text : 'Craft: 5 logs, 15 stones, 40 coins'
		});
	} else if (armorH) {
		armor.setAlpha(0.9);
		craftinfo.reStyle({
			text : '-'
		});
	} else {
		armor.setAlpha(0.2);
	}
	if (mouse.isInObject(bo) && boH == false) {
		craftinfo.reStyle({
			text : 'Craft: 10 logs, 2 stones'
		});
		bo.setAlpha(0.7);
	} else if (boH) {
		bo.setAlpha(0.9);
		craftinfo.reStyle({
			text : '-'
		});
	} else {
		bo.setAlpha(0.2);
	};
	if (mouse.isInObject(robe) && robeH == false) {
		craftinfo.reStyle({
			text : 'Craft: 4 logs, 50 coins'
		});
		robe.setAlpha(0.7);
	} else if (robeH) {
		craftinfo.reStyle({
			text : '-'
		});
		robe.setAlpha(0.9);
	} else {
		robe.setAlpha(0.2);
	};
	if (mouse.isInObject(shield) && shieldH == false) {
		craftinfo.reStyle({
			text : 'Craft: 15 logs, 20 stones'
		});
		shield.setAlpha(0.7);
	} else if (shieldH) {
		craftinfo.reStyle({
			text : '-'
		});
		shield.setAlpha(0.9);
	} else {
		shield.setAlpha(0.2);
	};

	
	if (mouse.isPress('RIGHT') && stickCount >= 10 && fireH == false) {
		stickCount -= 10;
		fire.setPositionC(mouse.getPosition());
		fireH = true;

	};
	player.setShadow({
		shadowColor : 'black',
		shadowBlur : 5,
		shadowX : 1, shadowY : 1
	});
	fire.setBox({
   		offset : point(-50, -50), 
   		size : pjs.vector.size(100, 100) 
 	});

	if (player.isIntersect(fire)) {
		if (health < 100) {
			health += 0.01;
			isDying = false;
			progressHealth.w += 0.01;
		};

		if (temperature < 30) {
			temperature += 1;
		};
 	};
 	if (temperature > -15) {
		temperature -= n;
 	}
 	if (temperature <= -15) {
 		health -= 0.01;
 		isDying = true;
 		message.reStyle({
			text : 'Too cold.'
		});
 	}
 	if (isDying) {
 		progressHealth.w -= 0.01;
 	}
 	tempround = 1 * Math.round(temperature);

 	if (mouse.isPeekObject('LEFT', settings)) {
 		game.setLoop('menu')
 	}

 	

});


game.newLoop('menu', function () {
	game.fill('black');
	
	
	pjs.brush.drawRect({
		x : width / 2 - 70, y : height / 2 - 50,
		w : 143, h : 40,
		fillColor : 'black',
		strokeWidth : 3,
		strokeColor : 'white'
	});
	pjs.brush.drawRect({
		x : width / 2 - 70, y : height / 2,
		w : 143, h : 40,
		fillColor : 'black',
		strokeWidth : 3,
		strokeColor : 'white'
	});
	let start = game.newTextObject({
		text : 'SURVIVE',
		x : width / 2 - 65, y : height / 2 - 40,
		size : 30, 
		color : 'white'
	});
	let vk = game.newTextObject({
		text : 'VK',
		x : width / 2 - 20, y : height / 2 + 10,
		size : 30, 
		color : 'white'
	});
	let award = game.newRectObject({
		x : 299, y : 30,
		w : 193, h : 30,
		fillColor : 'gold',
		strokeColor : 'orange',
		strokeWidth : 3
	})
	start.draw();
	vk.draw()

	if (mouse.isPeekObject('LEFT', start)) {
		game.setLoop('game');
	};
	if (mouse.isPeekObject('LEFT', vk)) {
		document.location.reload()
	};
	
	if (ubiystva >= 3) {
		trophy.setPositionS(point(20, 10));
		trophy.draw();
		pjs.brush.drawTextS({
			text : 'Killed 3 enemies!',
			size : 20, color : 'gold',
			x : 100, y : 38
		});
		if (mouse.isPeekObject('LEFT', award)) {
			coinCount += 50;
			isBuyed = true;
		}
		if (isBuyed == false) {
		award.draw();
		pjs.brush.drawTextS({
			text : 'Claim award!',
			size : 28, color : 'black',
			x : 304, y : 35
		});
		
		};

	};

});

game.newLoop('gameover', function () {
	game.fill('black');


	pjs.brush.drawTextS({
		x : width / 3 + 20, y : 180,
		size : 45, text : 'You died!',
		color : 'red'
	});

	let restart = game.newTextObject({
		x : width / 2 - 50, y : 300,
		size : 30, text : 'Restart',
		color : 'white', strokeColor : 'black'
	});
	restart.draw();
	if (mouse.isPeekObject('LEFT', restart)) {
		location.reload()
	}
});
game.newLoop('skills', function () {
	game.fill('black');

	let exitskills = game.newTextObject({
		x : width - 80, y : 10,
		size : 30, color : 'white',
		text : 'Exit'
	});
	exitskills.draw();
	if (mouse.isPeekObject('LEFT', exitskills)) {
		game.setLoop('game')
	}

	pjs.brush.drawImage({
		x : 190, y : 120,
		w : 70, h : 50,
		file : 'img/arrow.png'
	})

	pjs.brush.drawText({
		x : 20, y : 10,
		text : 'Skills', size : 30,
		color : 'white'
	});

	skillrunning1.setPosition(point(60, 100));
	skillrunning1.draw();
	let text1 = game.newTextObject({
		x : 10, y : 200,
		size : 20, color : 'white',
		text : 'Running: +0.5 speed'
	});
	text1.draw()

	skillrunning2.setPosition(point(290, 100));
	skillrunning2.draw();
	let text2 = game.newTextObject({
		x : 240, y : 200,
		size : 20, color : 'white',
		text : 'Running: +1 speed'
	});
	text2.draw();

	if (mouse.isInObject(skillrunning1) && runS1 === false) {
		skillrunning1.setAlpha(0.8);
		pjs.brush.drawText({
			x : 62, y : 80,
			size : 15, color : 'white',
			text : 'Cost: 80XP'
		});
	} else if (runS1) {
		skillrunning1.setAlpha(1);
	} else {
		skillrunning1.setAlpha(0.5);
	};
	if (mouse.isInObject(skillrunning2) && runS1 && runS2 === false) {
		skillrunning2.setAlpha(0.8);
		pjs.brush.drawText({
			x : 292, y : 80,
			size : 15, color : 'white',
			text : 'Cost: 100XP'
		});
	} else if (runS2) {
		skillrunning2.setAlpha(1);
	} else {
		skillrunning2.setAlpha(0.5);
	};
	if (xp >= 80 && runS1 === false) {
		if (mouse.isPeekObject('LEFT', skillrunning1)) {
			xp -= 80;
			runS1 = true;
			progressxp.w -= 80;
		};
	};

	if (runS1) {
		speedplayer = 3;
	}

	if (xp >= 100 && runS2 === false) {
		if (mouse.isPeekObject('LEFT', skillrunning2)) {
			xp -= 100;
			runS2 = true;
			progressxp.w -= 100;
		};
	};

	if (runS2) {
		speedplayer = 4;
	};


});
game.newLoop('tutorial', function () {
	game.fill('black');

	pjs.brush.drawText({
		x : 40, y : 20,
		text : ''
	})
	
});



game.startLoop('menu');