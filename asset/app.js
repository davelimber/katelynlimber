$(document).ready(function() {
	
	$('.menu-link').on('click', function(event) {
		event.preventDefault();
		var target = this.hash;		
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 650, function() {
			window.location.target = target;
		});
	});
	$('.fa, .fcc-logo').on('mouseenter focusin', function () {
		$(this).animate({opacity: 0.7}, 50);	
        $(this).closest('div').find('p').slideDown();
	});
	
	$('.fa, .fcc-logo').on('mouseleave focusout', function () {
		$(this).animate({opacity: 1}, 50);	
        $(this).closest('div').find('p').slideUp();
	});
	
});