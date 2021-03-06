//
// Isotope plugin
//
$(window).load(function(){
	var $container = $('.works__img-col');
	$container.isotope({
		itemSelector: '.works__img-wrap',
		masonry: {
			percentPosition: true,
			columnWidth: '.grid-sizer',
			gutter: 0
		}
	});
});

$('.works__link').on( 'click', function(el) {
	var filterValue = $(this).attr('data-filter');
	$('.works__img-col').isotope({ filter: filterValue });
	$('.works__link.current').removeClass('current');
	$(el.target).addClass('current');
	return false;
});

//
// Owl-carousel plugin
//
$('.owl-carousel').owlCarousel({
	items: 1,
	loop: true
});

//
// Photoswipe plugin for lightbox effect
//
$('.works__img-col').photoSwipe();