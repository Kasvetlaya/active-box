let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

new Swiper ('.testimonials', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

