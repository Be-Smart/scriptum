
$('.header__navbar__toggle').on('click', function(){
	$(this).toggleClass('on');
	$('.header__nav').slideToggle();
});