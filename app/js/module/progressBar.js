moveProgressBar();
// on browser resize...
$(window).resize(function() {
	moveProgressBar();
});

// Progress
function moveProgressBar() {

	var $progressWrap = $('.skills__progress-wrap');
	var $progressBar = $('.skills__progress-bar');

	$progressWrap.each(function(index) {
		var getPercent = ($(this).data('progress-percent') / 100);
		var getProgressWrapWidth = $(this).width();
		var progressTotal = getPercent * getProgressWrapWidth;
		var animationLength = 2500;
		// .stop() used to prevent animation queueing
		$progressBar.eq(index).stop().animate({
			left: progressTotal
		}, animationLength);
	});
}