document.addEventListener('DOMContentLoaded', function () {

	// Hamburger

	const hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		closeBtn = document.querySelector('.menu__close'),
		menuOverlay = document.querySelector('.menu__overlay'),
		body = document.body;
		

	hamburger.addEventListener('click', () => {
		menu.classList.add('active');
		body.classList.add('sidebar-open');
	});

	closeBtn.addEventListener('click', () => {
		menu.classList.remove('active');
		body.classList.remove('sidebar-open');
	});

	menuOverlay.addEventListener('click', () => {
		menu.classList.remove('active');
		body.classList.remove('sidebar-open');
	});

	window.addEventListener('keydown', (e) => {
		if (e.key == 'Escape') {
			menu.classList.remove('active');
			body.classList.remove('sidebar-open');
		}
	});

	// Sidepanel color change

	const sidepanelLink = document.querySelectorAll('.sidepanel__link'),
		sidepanelDivider = document.querySelector('.sidepanel__divider'),
		sidepanelText = document.querySelector('.sidepanel__text');

	window.addEventListener('scroll', () => {
		if (window.scrollY > window.innerHeight / 2) {
			for (let i = 0; i < sidepanelLink.length; i++) {
				sidepanelLink[i].classList.add('sidepanel__link_black');
			}
		} else if (window.scrollY < window.innerHeight / 2) {
			for (let i = 0; i < sidepanelLink.length; i++) {
				sidepanelLink[i].classList.remove('sidepanel__link_black');
			}
		}
		if (window.scrollY > window.innerHeight / 2) {
			sidepanelDivider.classList.add('sidepanel__divider_black');
			sidepanelText.classList.add('sidepanel__text_black');
		} else if (window.scrollY < window.innerHeight / 2) {
			sidepanelDivider.classList.remove('sidepanel__divider_black');
			sidepanelText.classList.remove('sidepanel__text_black');
		}
	});

	// Ratings bar

	const progressBar = document.querySelectorAll('.ratings__item-progress'),
		percentage = document.querySelectorAll('.ratings__item-percentage');

	let handlerFired;
	window.addEventListener('scroll', function (e) {
		const ratingsTop = document.querySelector('.ratings').getBoundingClientRect().top;
		if (ratingsTop <= window.innerHeight) {
			if (!handlerFired) {
				handlerFired = 1;
				for (let i = 0; i < progressBar.length; i++) {
					if (percentage[i].innerHTML == '100%') {
						progressBar[i].classList.add('ratings__item-progress_animate-100');
					} else if (percentage[i].innerHTML == '90%') {
						progressBar[i].classList.add('ratings__item-progress_animate-90');
					} else if (percentage[i].innerHTML == '75%') {
						progressBar[i].classList.add('ratings__item-progress_animate-75');
					}
				}
			}
		}
		if (ratingsTop > 0) {
			handlerFired = 0;
		}

	});

});