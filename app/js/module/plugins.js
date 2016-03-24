//
// Isotope plugin for works section
//
$('.works__col').isotope({
	itemSelector: '.works__img',
	masonry: {
		percentPosition: true,
		columnWidth: '.grid-sizer',
		gutter: 0
	}
});

$('.works__link').on( 'click', function(el) {
	var filterValue = $(this).attr('data-filter');
	$('.works__col').isotope({ filter: filterValue });
	$('.works__link.current').removeClass('current');
	$(el.target).addClass('current');
	return false;
});