function validate(f){

	var emptyError = "Please type your ";
	var emailError = "Please type a valid e-mail";

	function length(input){
		var inputLength = input.val().length;
		var inputName = input.attr('name');
		if (inputLength < 2) {
			input.addClass('empty-error');
			input.val(emptyError+inputName);
		};
	}

	function email(input){
		var emailRegExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (!emailRegExp.test(input.val())) {
			input.addClass('empty-error');
			input.val(emailError);
		};
	}

	length($('#name'));
	length($('#surname'));
	email($('#email'));
	length($('#msg'));


	$('.form__input').on('focus', function() {
		if ($(this).hasClass('empty-error')) {
			$(this).val('');
			$(this).removeClass('empty-error');
		};
	});

	if($('input').hasClass('empty-error')) {
		return false;
	} else{
		return true;
	};


}


$('.form__btn').on('click', function(){
	var $form = $('.form').find('form');

	if (validate($form)) {
		$('.form__container').hide('500', function() {
			$('.form__succes').css('display', 'block');
		});
	};

	return false;
});