var MW = function (pjs) {
	'use sctrict';
	var system = pjs.system;
	var OOP    = pjs.OOP;

	var WIND = pjs.game.getWH();

	var body = document.body;

	// OOP.forEach(styles, function (val, id) {
	// 	st[id] = val;
	// });

	var stopProp = function (el) {
		var stop = function (e) {
			e.stopPropagation();
		};

		el.style.outline = 'none';

		el.addEventListener('touchstart',  stop, false);
		el.addEventListener('touchend',    stop, false);
		el.addEventListener('touchmove',   stop, false);
		el.addEventListener('mousedown',   stop, false);
		el.addEventListener('mousepress',  stop, false);
		el.addEventListener('mouseup',     stop, false);
		el.addEventListener('mousemove',   stop, false);
		el.addEventListener('keypress',    stop, false);
		el.addEventListener('keydown',     stop, false);
		el.addEventListener('keyup',       stop, false);
		el.addEventListener('click',       stop, false);
		el.addEventListener('wheel',       stop, false);
		el.addEventListener('mousewheel',  stop, false);
		el.addEventListener('contextmenu', stop, false);
		el.addEventListener('selectstart', stop, false);
		el.addEventListener('dragstart', stop, false);
		el.addEventListener('DOMMouseScroll', stop, false);

	};

	var readData = function (f, func) { // file, callback
		var getter = new XMLHttpRequest();
		getter.open('GET', f, true);

		getter.onreadystatechange = function () {
			if (getter.readyState == 4) {
				func(getter.responseText);
			}
		};

		getter.send();
	};

	var Manager = function (el, link, br) {
		var _mw = this;

		var st = el.style;
		this.loaded = false;

		var forLoad = [];

		this.addEvent = function (id, type, func) {
			if (this.loaded) {
				if (!document.getElementById(id)) return;
				document.getElementById(id).addEventListener(type, func);
			} else {
				forLoad.push(function () {
					if (!document.getElementById(id)) return;
					document.getElementById(id).addEventListener(type, func);
				});
			}
		};

		this.onload = function () {
			document.getElementById('_INFO_MODAL_WINDOW_TEXT_').scrollTop = 0;
			OOP.forArr(forLoad, function (f) {
				f();
			});
		};

		this.close  = function () {
			document.body.removeChild(el);
		};

		this.reload = function () {
			readData(link, function (data) {
				if (br)
					data = data.toString().replace(/\n/g, '<br>');
				system.addEvent('onload', '_INFO_MODAL_WINDOW_LOAD_', function () {
					document.getElementById('_INFO_MODAL_WINDOW_TEXT_').innerHTML = data;
					_mw.onload();
				});
			});
		};

		this.load = function (link2, br2) {
			readData(link2, function (data) {
				if (br2)
					data = data.toString().replace(/\n/g, '<br>');
				system.addEvent('onload', '_INFO_MODAL_WINDOW_LOAD_', function () {
					document.getElementById('_INFO_MODAL_WINDOW_TEXT_').innerHTML = data;
					_mw.onload();
				});
			});
		};

	};

	var top = function (name, closeText, height) {
		return '<table style="border-bottom: 1px solid;" width="100%" cellpadding="0" cellspacing="0"><tr><td style="color: white;" valign="middle" align="center">'+
		name
		+'</td><td style="cursor: pointer; background-color: #32585E; color: white;" onclick="document.body.removeChild(document.getElementById(\'_INFO_MODAL_WINDOW_\'));" width="10%" align="center" height="'+height+'" valign="middle">'+
		'<span style="overflow: hidden;">'+closeText+'</span>'
		+'</td></tr></table>';
	};

	var text = function (width, height, heightTop) {
		return '<div id="_INFO_MODAL_WINDOW_TEXT_" style="overflow: auto; padding: 5px; color: white; width: '+(width - 10)+'px; height: '+(height - heightTop - 11)+'px;">Закгрузка...</div>';
	};

	this.newInfoModal = function (name, link, W, H, br) {
		var el = system.newDOM('div');
		var st = el.style;
		el.id = '_INFO_MODAL_WINDOW_';

		var mgr = new Manager(el, link, br);

		st.width  = (W || WIND.w /2) +'px';
		st.height = (H || WIND.h / 2)+'px';
		st.backgroundColor = '#3D494B';
		st.border = '1px solid';

		st.left = WIND.w / 2 - parseInt(st.width) / 2 + 'px';
		st.top  = WIND.h / 2 - parseInt(st.height) / 2 + 'px';

		el.innerHTML = top(name || 'Info', ' X ', 50) + text(parseInt(st.width), parseInt(st.height), 50);

		readData(link, function (data) {
			if (br)
				data = data.toString().replace(/\n/g, '<br>');
			system.addEvent('onload', '_INFO_MODAL_WINDOW_LOAD_', function () {
				document.getElementById('_INFO_MODAL_WINDOW_TEXT_').innerHTML = data;
				mgr.loaded = true;
				mgr.onload();
			});
		});

		stopProp(el);

		return mgr;
	};


};