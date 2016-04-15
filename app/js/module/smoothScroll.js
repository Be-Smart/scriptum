var $links = $('.nav__link');

$links.on('click', function(el) {
	var target = $( $(this).attr('href') );
	$('html, body').animate({
		scrollTop: target.offset().top
	}, 500);
	return false;
});
