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

pjs.system.initFPSCheck();

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

let crate = game.newImageObject({
	x : 150,
	y : 0,
	w : 60, h : 60,
	file : 'img/crate.png'
});

let settings = game.newImageObject({
	x : 150, y : 150,
	w : 80, h : 80,
	file : 'img/house.png',
	alpha : 0.6
});

let skillsenter = game.newImageObject({
	x : 150, y : 150,
	w : 80, h : 80,
	file : 'img/book.png',
	alpha : 0.6
});
let backpack = game.newImageObject({
	x : 150, y : 150,
	w : 80, h : 80,
	file : 'img/bag.png',
	alpha : 0.6
});
let chest2 = game.newImageObject({
	x : 150, y : 150,
	w : 80, h : 80,
	file : 'img/chest2.png',
	alpha : 0.6
});

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

let meat = game.newImageObject({
	x : 20, y : 40,
	w : 70, h : 70,
	file : 'img/meat.png'
});

let mr = game.newImageObject({
	x : 20, y : 40,
	w : 70, h : 70,
	file : 'img/musheat.png'
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
	w : 80, h : 80,
	file : 'img/behold.png'
});
let rect2 = game.newImageObject({
	x : math.random(0, max), y : math.random(0, max),
	w : 80, h : 80,
	file : 'img/behold.png'
});
let rect3 = game.newImageObject({
	x : math.random(0, max), y : math.random(0, max),
	w : 80, h : 80,
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
let pickaxe = game.newImageObject({
	x : 10, y : height-90,
	w : 70, h : 70,
	file : 'img/pickaxe.png',
	alpha : 0.2
});
let chest = game.newImageObject({
	x : 10, y : height-90,
	w : 110, h : 110,
	file : 'img/chest.png'
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
let skillgear1 = game.newImageObject({
	x : 10, y : height-90,
	w : 90, h : 90,
	file : 'img/gear.png',
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
let progressLoading = game.newRectObject({
	x : 20, y : 300, 
	w : 0, h : 70,
	fillColor : 'white',
	strokeWidth : 3,
	strokeColor : 'grey'
});




let coinCount = 0;
let stickCount = 0;
let rockCount = 0;
let meatCount = 0;
let mrCount = 0;
let health = 100;
let healthe1 = 80,
		healthe2 = 80,
		healthe3 = 80;
let healthp1 = 50,
	healthp2 = 50;

let uron = 1;
let uron2 = 0;
let uron3 = 0;

let dmg = 1;
let dmg2 = 0.5;


let armorH = false;
let tomahawkH = false;
let boH = false;
let robeH = false;
let shieldH = false;
let fireH = false;
let teleportH = false;
let pickH = false;
let runS1 = false;
let runS2 = false;
let gearS1 = false;


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
let ps = point()

let fps = pjs.system.getFPS();


player.keyMove = function (){
		if (key.isDown('W')) {
			ps.y = -speedplayer;
		} else if (key.isDown('S')) {
			ps.y = speedplayer;
		} else {
			ps.y = 0;
		}
		if (key.isDown('D')) {
			ps.x = speedplayer;
		} else if (key.isDown('A')) {
			ps.x = -speedplayer;
		} else {
			ps.x = 0;
		}
	};



game.newLoop('game', function () {


	if (health <= 0) {
		document.location.reload();
	}
	
	//music.play();
	message.setPositionS(point(30, 120))

	
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
	camera.moveTimeC(player, 0);

	

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
			xp += 8;
			progressxp.w += 8
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
			xp += 8;
			progressxp.w += 8
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
			xp += 8;
			progressxp.w += 8
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
		if (meatCount < 80) {
			meatCount += math.random(1, 3);
		};
		if (xp < 200) {
			xp += 3;
			progressxp.w += 3
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
		};
		if (meatCount < 80) {
			meatCount += math.random(1, 3);
		};
		if (xp < 200) {
			xp += 3;
			progressxp.w += 3
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
	player.move(point(player.dx, player.dy));
	pjs.vector.moveCollision(player, stones, ps)


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
	OOP.drawArr(sticks);
	OOP.drawArr(rocks);
	OOP.drawArr(stones);
	crate.draw();
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


	heart.setPositionS(point(160, 25))
	heart.draw()
	if (player.isIntersect(crate)) {
		coinCount += 5;
		rockCount += 10;
		stickCount += 10;
		meatCount += 1;
		mrCount += 5;
		crate.x = -4000;
	}

	cell.setPositionS(point(width-120, height-120))
	cell.move(point(player.getPosition(1).x/35, player.getPosition(1).y/35))
	cell.draw()
	if (fireH) {
		fireCell.setPositionS(point(width-120, height-120))
		fireCell.move(point(fire.getPosition(1).x/35, fire.getPosition(1).y/35));
		fireCell.draw();
	}
	rectHealth.setPositionS(point(230, 40));
	rectHealth.draw();
	progressHealth.setPositionS(point(232, 42));
	progressHealth.draw();

	rectxp.setPositionS(point(360, 40));
	rectxp.draw();
	progressxp.setPositionS(point(362, 42));
	progressxp.draw();

	pjs.brush.drawTextS({
		x : 415, y : 50,
		size : 15, color : 'black',
		text : 'EXPERIENCE'
	})



	cold.setPositionS(point(10, 20));
	cold.draw();




	pjs.brush.drawTextS({
  		text : 'C: '+tempround,
  		x :80, y : 45,
  		color : "black",
  		size : 25
	});

	message.draw()

	player.rotate(mouse.getPosition())
	

	pjs.vector.moveCollisionAngle(player, coins, 0, function (player, coin) {
		if (coinCount < 150) {
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
    	if (stickCount < 400) {
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
    	if (rockCount < 200) {
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
    	if (mrCount < 120) {
	    	m.x = math.random(0, max);
	   		m.y = math.random(0, max);
	   		mrCount++;
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


	skillsenter.setPositionS(point(width-90, 90));
	skillsenter.draw();
	if (mouse.isPeekObject('LEFT', skillsenter)) {
		game.setLoop('skills');
	}

	backpack.setPositionS(point(width-90, 170));
	backpack.draw();
	if (mouse.isPeekObject('LEFT', backpack)) {
		game.setLoop('inventory');
	}

	if (ubiystva >= 5 && isBuyed == false) {
		chest2.setPositionS(point(width-90, 260));
		chest2.draw();
		if (mouse.isPeekObject('LEFT', chest2)) {
			game.setLoop('awards');
			isBuyed = true
		};
	}
	
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
 		game.setLoop('pause')
 	}
 	pjs.brush.drawTextS({
		x : 10, y : height - 30,
		text : 'FPS: '+pjs.system.getFPS(),
		color : 'black',
		size : 15
	})
 	

});
let load1 = false;
game.newLoop('progressLoad', function () {
	game.fill('#1E1E1E');

	pjs.brush.drawRect({
		x : 20, y : 300,
		w : 660, h : 70,
		fillColor : '#1E1E1E',
		strokeWidth : 3,
		strokeColor : 'grey'
	})
	progressLoading.draw();
	progressLoading.w += 5;
	if (progressLoading.w >= 660) {
		game.setLoop('menu');
	}

})
game.newLoop('menu', function () {
	game.fill('#1E1E1E');
	

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
	start.draw();
	vk.draw()

	if (mouse.isPeekObject('LEFT', start)) {
		game.setLoop('game');
	};
	if (mouse.isPeekObject('LEFT', vk)) {
		document.location.reload()
	};
	
	

});


game.newLoop('skills', function () {
	game.fill('#1E1E1E');

	let exitskills = game.newTextObject({
		x : width - 120, y : 20,
		size : 30, color : 'white',
		text : 'EXIT'
	});
	exitskills.draw();
	if (mouse.isPeekObject('LEFT', exitskills)) {
		game.setLoop('game')
	}

	pjs.brush.drawImage({
		x : 190, y : 120,
		w : 70, h : 50,
		file : 'img/arrow.png'
	});

	pjs.brush.drawText({
		x : 30, y : 20,
		text : 'SKILLS', size : 30,
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
		text : 'Running: +0.5 speed'
	});
	text2.draw();

	skillgear1.setPosition(point(60, 260));
	skillgear1.draw();
	let text3 = game.newTextObject({
		x : 55, y : 360,
		size : 20, color : 'white',
		text : 'New gear'
	});
	text3.draw();

	if (mouse.isInObject(skillrunning1) && runS1 === false) {
		skillrunning1.setAlpha(0.8);
		pjs.brush.drawText({
			x : 62, y : 80,
			size : 15, color : 'white',
			text : 'Cost: 50XP'
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
			text : 'Cost: 70XP'
		});
	} else if (runS2) {
		skillrunning2.setAlpha(1);
	} else {
		skillrunning2.setAlpha(0.5);
	};
	if (mouse.isInObject(skillgear1) && gearS1 === false) {
		skillgear1.setAlpha(0.8);
		pjs.brush.drawText({
			x : 62, y : 240,
			size : 15, color : 'white',
			text : 'Cost: 40XP'
		});
	} else if (gearS1) {
		skillgear1.setAlpha(1);
	} else {
		skillgear1.setAlpha(0.5);
	};
	if (xp >= 50 && runS1 === false) {
		if (mouse.isPeekObject('LEFT', skillrunning1)) {
			xp -= 50;
			runS1 = true;
			progressxp.w -= 50;
		};
	};

	if (runS1) {
		speedplayer = 3;
	}

	if (xp >= 70 && runS2 === false) {
		if (mouse.isPeekObject('LEFT', skillrunning2)) {
			xp -= 70;
			runS2 = true;
			progressxp.w -= 70;
		};
	};

	if (runS2) {
		speedplayer = 3.5;
	};

	if (xp >= 40 && gearS1 === false) {
		if (mouse.isPeekObject('LEFT', skillgear1)) {
			xp -= 40;
			gearS1 = true;
			progressxp.w -= 40;
		};
	};


});
game.newLoop('pause', function () {
	
	pjs.brush.drawTextS({
		x : 293, y : 100,
		text : 'PAUSE', size : 40,
		color : 'black', strokeColor : 'white', strokeWidth : 1
	});
	let exittomenu = game.newTextObject({
		x : width / 2 - 40, y : height / 3 + 70,
		size : 30, text : 'MENU',
		color : 'white',
		strokeColorText : 'black', strokeWidthText : 1
	});
	exittomenu.draw();
	let cont = game.newTextObject({
		x : width / 2 - 72, y : height / 3,
		size : 30, text : 'CONTINUE',
		color : 'white',
		strokeColorText : 'black', strokeWidthText : 1
	});
	cont.draw();

	if (mouse.isPeekObject('LEFT', exittomenu)) {
		game.startLoop('menu');
	};
	if (mouse.isPeekObject('LEFT', cont)) {
		game.startLoop('game')
	};
});

game.newLoop('inventory', function () {
	game.fill('#1E1E1E');

	pjs.brush.drawText({
		x : 30, y : 20,
		text : 'RESOURCES',
		color : 'white',
		size : 30
	});
	log.setPosition(point(30, 70));
	log.draw();
	pjs.brush.drawRect({
		x : 30, y : 140,
		w : 70, h : 30,
		fillColor : 'white'
	});
	pjs.brush.drawText({
		x : 34, y : 144,
		text : stickCount,
		size : 20, color : 'black'
	});

	stone.setPosition(point(120, 70));
	stone.draw();
	pjs.brush.drawRect({
		x : 120, y : 140,
		w : 70, h : 30,
		fillColor : 'white'
	});
	pjs.brush.drawText({
		x : 124, y : 144,
		text : rockCount,
		size : 20, color : 'black'
	});

	coinBB.setPosition(point(210, 70));
	coinBB.draw();
	pjs.brush.drawRect({
		x : 210, y : 140,
		w : 70, h : 30,
		fillColor : 'white'
	});
	pjs.brush.drawText({
		x : 214, y : 144,
		text : coinCount,
		size : 20, color : 'black'
	});

	meat.setPosition(point(300, 70));
	meat.draw();
	pjs.brush.drawRect({
		x : 300, y : 140,
		w : 70, h : 30,
		fillColor : 'white'
	});
	pjs.brush.drawText({
		x : 304, y : 144,
		text : meatCount,
		size : 20, color : 'black'
	});


	mr.setPosition(point(390, 70));
	mr.draw();
	pjs.brush.drawRect({
		x : 390, y : 140,
		w : 70, h : 30,
		fillColor : 'white'
	});
	pjs.brush.drawText({
		x : 394, y : 144,
		text : mrCount,
		size : 20, color : 'black'
	});

	tomahawk.setPosition(point(30, 400));
	tomahawk.draw();

	armor.setPosition(point(120, 400));
	armor.draw();

	bo.setPosition(point(210, 400));
	bo.draw();

	robe.setPosition(point(300, 400));
	robe.draw();
	if (gearS1) {
	shield.setPosition(point(390, 400));
	shield.draw();

	pickaxe.setPosition(point(480, 400));
	pickaxe.draw();

	if (mouse.isInObject(shield) && shieldH == false) {
		pjs.brush.drawText({
			x : 20, y : height - 100,
			text : 'Craft: 15 wood, 20 stones :  + 0.5 armor',
			size : 15, color : 'white'
		});
		shield.setAlpha(0.7);
	} else if (shieldH) {
		shield.setAlpha(0.9);
	} else {
		shield.setAlpha(0.2);
	};

	if (mouse.isInObject(pickaxe) && pickH == false) {
		pjs.brush.drawText({
			x : 20, y : height - 100,
			text : 'Craft: 8 wood, 15 stones, 5 coins :  + 1 damage',
			size : 15, color : 'white'
		});
		pickaxe.setAlpha(0.7);
	} else if (pickH) {
		pickaxe.setAlpha(0.9);
	} else {
		pickaxe.setAlpha(0.2);
	};
	}

	pjs.brush.drawText({
		x : 30, y : 350,
		text : 'ITEMS',
		size : 30, color : 'white'
	})
	// crafting
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
	if (stickCount >= 10 && rockCount >= 20 && shieldH == false) {
		if (mouse.isPeekObject('LEFT', shield)) {
			shieldH = true;
			stickCount -= 10;
			rockCount -= 20;
			shield.setAlpha(0.9);
		}
	}
	if (stickCount >= 8 && rockCount >= 15 && coinCount >= 5 && pickH == false) {
		if (mouse.isPeekObject('LEFT', pickaxe)) {
			pickH = true;
			stickCount -= 8;
			rockCount -= 15;
			coinCount -= 5;
			pickaxe.setAlpha(0.9);
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
		uron2 = 0.5;
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
	if (pickH) {
		uron3 = 1;
	}

	
	if (mouse.isPeekObject('LEFT', meat) && meatCount > 0) {
		if (health <= 79) {
			health += 20;
			progressHealth.w += 20;
			meatCount--;
		} else if (health >= 80 && health < 100) {
			health = 100;
			progressHealth.w = 100;
			meatCount--;
		};
	};

	
    if (mouse.isPeekObject('LEFT', mr) && mrCount > 0) {
		if (health >= 96 && health < 100) {
    		health = 100;
    		progressHealth.w = 100;
    		mrCount--;
    	} else if (health < 96) {
	    	health+=4;
	    	progressHealth.w += 4;
	    	mrCount--;
    	};
	};	
	if (mouse.isInObject(tomahawk) && tomahawkH == false) {
		tomahawk.setAlpha(0.7)
		pjs.brush.drawText({
			x : 20, y : height - 100,
			text : 'Craft: 10 wood, 8 stones :  + 1 damage',
			size : 15, color : 'white'
		});
	} 
	else if (tomahawkH) {
		tomahawk.setAlpha(0.9)
	} else {
		tomahawk.setAlpha(0.2);
	}
	if (mouse.isInObject(armor) && armorH == false) {
		armor.setAlpha(0.7);
		pjs.brush.drawText({
			x : 20, y : height - 100,
			text : 'Craft: 5 wood, 15 stones, 40 coins :  + 0.5 armor',
			size : 15, color : 'white'
		});
	} else if (armorH) {
		armor.setAlpha(0.9);
	} else {
		armor.setAlpha(0.2);
	}
	if (mouse.isInObject(bo) && boH == false) {
		pjs.brush.drawText({
			x : 20, y : height - 100,
			text : 'Craft: 10 wood, 2 stones :  + 0.5 damage',
			size : 15, color : 'white'
		});
		bo.setAlpha(0.7);
	} else if (boH) {
		bo.setAlpha(0.9);
	} else {
		bo.setAlpha(0.2);
	};
	if (mouse.isInObject(robe) && robeH == false) {
		pjs.brush.drawText({
			x : 20, y : height - 100,
			text : 'Craft: 4 wood, 50 coins:  + warm',
			size : 15, color : 'white'
		});
		robe.setAlpha(0.7);
	} else if (robeH) {
		robe.setAlpha(0.9);
	} else {
		robe.setAlpha(0.2);
	};

	if (mouse.isInObject(log)) {
		log.setAlpha(0.7)
		pjs.brush.drawText({
			x : 20, y : height - 100,
			text : 'Wood',
			size : 15, color : 'white'
		});
	} else {
		log.setAlpha(1)
	};
	if (mouse.isInObject(stone)) {
		stone.setAlpha(0.7)
		pjs.brush.drawText({
			x : 20, y : height - 100,
			text : 'Stone',
			size : 15, color : 'white'
		});
	} else {
		stone.setAlpha(1)
	};
	if (mouse.isInObject(coinBB)) {
		coinBB.setAlpha(0.7)
		pjs.brush.drawText({
			x : 20, y : height - 100,
			text : 'Coin',
			size : 15, color : 'white'
		});
	} else {
		coinBB.setAlpha(1)
	};
	if (mouse.isInObject(meat)) {
		meat.setAlpha(0.7)
		pjs.brush.drawText({
			x : 20, y : height - 100,
			text : 'Meat :  + 20 health',
			size : 15, color : 'white'
		});
	} else {
		meat.setAlpha(1)
	};
	if (mouse.isInObject(mr)) {
		mr.setAlpha(0.7)
		pjs.brush.drawText({
			x : 20, y : height - 100,
			text : 'Mushroom :  + 4 health',
			size : 15, color : 'white'
		});
	} else {
		mr.setAlpha(1)
	};
	

	// crafting END

	let exittogame = game.newTextObject({
		x : width - 120, y : 20,
		size : 30, text : 'EXIT',
		color : 'white'
	});
	exittogame.draw();
	if (mouse.isPeekObject('LEFT', exittogame)) {
		game.startLoop('game')
	}
});
let mow = false;
let bb, gg, dd;
game.newLoop('awards', function () {
	game.fill('#1E1E1E');

	let key = game.newTextObject({
		x : width / 2 - chest.w / 3 + 3, y : 80,
		size : 25,
		color : 'white',
		text : 'OPEN'
	});

	let exitfromawards = game.newTextObject({
		x : width - 90, y : 20,
		size : 25,
		color : 'white',
		text : 'EXIT'
	});
	pjs.brush.drawRect({
		x : width / 2 - chest.w / 2 + 2, y : 130,
		w : 110, h : 90,
		fillColor : 'rgba(0, 0, 0, 0)',
		strokeColor : 'white', strokeWidth : 3
	});
	if (mow == true) {
		chest.setAlpha(0.6);
		key.setAlpha(0.6);
		pjs.brush.drawImageS({
			x : width / 2 - chest.w / 2, y : 125,
			w : 110, h : 110, 
			file : 'img/cross.png',
			alpha : 1
		})
	}
	
	key.draw();
	chest.setPosition(point(width / 2 - chest.w / 2, 120))
	chest.draw();
	exitfromawards.draw();
	if (mouse.isPeekObject('LEFT', exitfromawards) && mow == true) {
		game.startLoop('game');
	}
	if (mow == false) {
		pjs.brush.drawText({
			x : width / 2 - 150, y : 300,
			size : 20, text : 'Can contain: Wood, stone, meat',
			color : 'white'
		});
	}
	
	
	
	if (mouse.isPeekObject('LEFT', key) && mow == false) {
		bb = math.random(0, 25);
		stickCount += bb;
		gg = math.random(0, 20);
		rockCount += gg;
		dd = math.random(0, 8);
		meatCount += dd;
		mow = true;

	};
	if (mow == true) {
		pjs.brush.drawText({
			x : width / 2 - 135, y : 300,
			size : 20, text : 'Wood: '+bb+' Stone: '+gg+' Meat: '+dd,
			color : 'white'
		});
	}
})
let isHere1 = true;
game.newLoop('islands', function () {
	game.fill('#1E1E1E');

	let go1 = game.newTextObject({
		x : 140, y : 350,
		size : 25, text : 'Go here',
		color : 'white'
	})
	pjs.brush.drawImage({
		x : 130, y : 200,
		scale : 1.5,
		file : 'img/island1.png'
	});
	pjs.brush.drawRect({
		x : 130, y : 200,
		w : 120, h : 120,
		strokeColor : 'white',
		strokeWidth : 4,
		fillColor : 'rgba(0, 0, 0, 0)',
		alpha : 0.6
	});
	go1.draw()
	if (isHere1 == true) {
		if (mouse.isPeekObject('LEFT', go1)) {
			game.setLoop('hardcore');
		}
	}
})

game.startLoop('menu');