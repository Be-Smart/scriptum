var $btn = $('.navbar__toggle'),
		$link = $('.nav__link'),
		$nav = $('.nav'),
		$wrap = $('.wrap');

$btn.add($link).on('click', function(){
	$btn.toggleClass('on');
	$wrap.add($nav).toggleClass('open');
});