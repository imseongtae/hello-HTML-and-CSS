(function () {

	var list = document.querySelector('.lnb');
	var btn = document.getElementById('toggle_btn');
	var header = document.getElementById('header');
	var icon = document.querySelector('.icon');
	var hamburger = document.querySelector('.hamburger');

	window.onload = function () { scrollFunction() };
	window.onscroll = function () { scrollFunction() };


	function scrollFunction() {
		if (document.documentElement.scrollTop > 70) {
			var header = document.getElementById('header');
			if (!header.classList.contains('navbar_fixed')) {
				header.classList.add('navbar_fixed');
				document.getElementsByTagName('body')[0].style.marginTop = '70px';
				header.style.display = 'none';
				setTimeout(function () {
					header.style.display = 'block';
				}, 40);
			}
		} else {
			var header = document.getElementById('header');
			if (header.classList.contains('navbar_fixed')) {
				header.classList.remove('navbar_fixed');
				document.getElementsByTagName('body')[0].style.marginTop = '0';
			}
		}
	}




	// ANCHOR
	function moveTo(id) {
		if (id == 'brand') {
			window.scrollTo(0, 0);
			hamburger.classList.add('active');
		} else {
			window.scrollTo(0, document.getElementById(id).offsetTop - 70);
		}
		document.getElementById('menu').classList.remove('show');
		hambuger_btn();
	}
	// //ANCHOR


	var menu_toggle = function (event) {
		list.classList.toggle('show');
		btn_click_check(event);
	}


	var menu_toggle_close = function (event) {
		if (event.target.nodeName == 'LI') {
			list.classList.remove('show');
			hambuger_btn();
		}
	}


	// * ARIA Button Role
	var btn_click_check = function (event) {
		event = event || window.event;
		if (event.target.nodeName == "BUTTON") {
			var pressed = event.target.getAttribute("aria-pressed") == "true";

			event.target.setAttribute("aria-pressed", pressed ? "false" : "true");
		} else {
			console.log('클릭한 요소가 버튼이 아님')
		}
	}

	var btn_keyUp_check = function (event) {
		event = event || window.event;
		if (event.keyCode === 32) { // check for Space key
			btn_click_check(event);
		}
	}
	// * //ARIA Button Role
	// * HAMBURGER
	var hambuger_btn = function () {
		hamburger.classList.toggle('active');
	}


	function init() {
		// scrollFunction();

		list.addEventListener('click', menu_toggle_close);
		btn.addEventListener('click', menu_toggle);
		btn.addEventListener('click', hambuger_btn);

		// user-select 를 몰랐을 떄 고생함..;;;
		// header.addEventListener('onresize', remove_show);    
		// btn.addEventListener('click', btn_click_check);
		// btn.addEventListener('keyup', btn_keyUp_check);
		document.getElementById('navbarBrand').addEventListener('click', moveTo.bind(null, 'brand'));
		document.getElementById('navbarAbout').addEventListener('click', moveTo.bind(null, 'about'));
		document.getElementById('navbarSkill').addEventListener('click', moveTo.bind(null, 'skill'));
		document.getElementById('navbarPortfolio').addEventListener('click', moveTo.bind(null, 'portfolio'));
		document.getElementById('navbarContact').addEventListener('click', moveTo.bind(null, 'contact'));

	}

	init();
})()



