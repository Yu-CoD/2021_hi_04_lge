var swiper = new Swiper('.main-wrapper .swiper-container',{
	loop: true,
	navigation: {
		prevEl: '.main-wrapper .swiper-button-prev',
		nextEl: '.main-wrapper .swiper-button-next',
	}
	pagination: {
		el: '.main-wrapper .swiper-pagination',
		clickable: true,
	}

	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 20,

	breakpoints: {
		768: {
			slidesPerView: 2,
		}
		992: {
			slidesPerView: 3,
		}
		1200: {
			slidesPerView: 4,
		}
	}
})

var swiper = new Swiper('.best-wrapper .swiper-container',{
	loop: true,
	navigation: {
		prevEl: '.best-wrapper .swiper-button-prev',
		nextEl: '.best-wrapper .swiper-button-next',
	}
	pagination: {
		el: '.best-wrapper .swiper-pagination',
		clickable: true,
	}

	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 20,

	breakpoints: {
		768: {
			slidesPerView: 2,
		}
		992: {
			slidesPerView: 3,
		}
		1200: {
			slidesPerView: 4,
		}
	}
})