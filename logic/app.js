$(document).ready(function(){

	function imageRotation(){
		$('.imageContainer .backgroundImage').last().fadeOut(1000, function(){
			$(this).insertBefore($('.imageContainer .backgroundImage').first()).show();
		})
	}

	setInterval(function(){
		imageRotation();
	}, 7000);

	$(window).scroll(function(){

		$('.fadeIn').each(function(){

			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).height() + $(window).scrollTop();

			if(bottom_of_window > bottom_of_object){
				
				$('.flyInLeft').animate({left: '300px'});
				$('.flyInRight').animate({right: '300px'});
				$(this).animate({'opacity': '1'}, 1250);

			}
		});
	});
});