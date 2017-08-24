$(document).ready(function(){

	$(window).scroll(function(){

		$('.fadeIn').each(function(){

			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).height() + $(window).scrollTop();

			if(bottom_of_window > bottom_of_object){

				$(this).animate({'opacity': '1'}, 1250);

			}
		});
	});
});