$(document).ready(function() {

// hamburger menu for mobile viewing

	var hm = document.querySelector('.hamburger');

	hm.addEventListener('click', function(){
	  var list = document.querySelector('.list');
	  if (list.classList.contains('active')) {
	    list.classList.remove('active');
	  } else {
	    list.classList.add('active');
	  }
	});

	// beginning of code for animation on nav hovers

	var andie = document.querySelector('.logo1');
	var micaela = document.querySelector('.logo2');
	var miranda = document.querySelector('.logo3');

	var nav = $('.button-animated-listener');
	// console.log (nav)

	nav.on('mouseenter', function(e) {
		var btn = e.target;
		var logo = btn.dataset.img;

		var img = document.querySelector('.' + logo);
		img.classList.add("active");
	});

	andie.addEventListener('animationend',function() {
		andie.classList.remove("active");
	});

	micaela.addEventListener('animationend',function() {
		micaela.classList.remove("active");
	});

	miranda.addEventListener('animationend',function() {
		miranda.classList.remove("active");
	});

	setTimeout(function(){
		andie.classList.add('intro');
		micaela.classList.add('intro');
		miranda.classList.add('intro');
	}, 1000);

});