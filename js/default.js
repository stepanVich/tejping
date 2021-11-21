document.createElement('article');
document.createElement('aside');
document.createElement('details');
document.createElement('figcaption');
document.createElement('figure');
document.createElement('footer');
document.createElement('header');
document.createElement('main');
document.createElement('mark');
document.createElement('nav');
document.createElement('section');
document.createElement('summary');
document.createElement('time');

$(document).ready( function() {
	$('.menu-icon').click(function() {
		$('body').toggleClass('nav-top-active');
	});

	$('.cislo-hodnota').counterUp({
		delay: 10,
		time: 800
	});

	// Header Parallax
	$(window).bind('scroll load', function() {
		var scrollPosition = $(window).scrollTop();
		if($(window).width() > 739) {
			$('.header-aside-wrap').css('background-position', 'center ' + (scrollPosition * 0.4 - 110) + 'px');
		} else {
			$('.header-aside-wrap').css('background-position', 'center -110px');
		}
	});
	// Img preload
	img1 = new Image();
	img1.src="../assets/menu-active.png";
	img2=new Image();
	img2.src="../assets/home-hover.png";

	// Tweening
	var controller = $.superscrollorama({
		triggerAtCenter: false,
		playoutAnimations: true
	}),
	winHeight = $(window).height();
	controller.triggerCheckAnim();	
	$('.tween').each(function(i ,el) {
		controller.addTween($(this), TweenMax.to($(this), 1.5, {css:{opacity: 1, left: 0, top: 0}, ease: Power2.easeOut, y: 0, onComplete: function() {$(this.target).addClass('tweened');}} ), 1, -winHeight);
	});

});

$(window).resize(function() {
	winHeight = $(window).height();
	var controller = $.superscrollorama({
		triggerAtCenter: false,
		playoutAnimations: true
	});
	controller.triggerCheckAnim();
});
