$('.icon-menu').click(function(){
	$('.menu-category').slideToggle(100)
});


// product list
$('.show_more').click(function(){
	$('.list_brand a').slideToggle(0);
	if($(this).text() == 'Xem thêm'){
		$(this).text('Thu gọn');
	}else{
		$(this).text('Xem thêm');
	}
});
$('.slider_banner_product .owl-carousel').owlCarousel({
	loop: true,
	margin: 15,
	nav: true,
	navText: ['<i class="fas fa-chevron-left" aria-hidden="true"></i>', '<i class="fas fa-chevron-right" aria-hidden="true"></i>'],
	dots: false,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 1
		}
	}
});
$('.list_partner .owl-carousel').owlCarousel({
	loop: true,
	margin: 15,
	nav: false,
	navText: ['<i class="fas fa-chevron-left" aria-hidden="true"></i>', '<i class="fas fa-chevron-right" aria-hidden="true"></i>'],
	dots: false,
	responsive: {
		0: {
			items: 4
		},
		600: {
			items: 4
		},
		1000: {
			items: 5
		}
	}
});

// product detail

$('.slider_content .owl-carousel').owlCarousel({
	loop: true,
	margin: 15,
	nav: false,
	navText: ['<i class="fas fa-chevron-left" aria-hidden="true"></i>', '<i class="fas fa-chevron-right" aria-hidden="true"></i>'],
	dots: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 1
		},
		1000: {
			items: 1
		}
	}
});