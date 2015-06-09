function goToByScroll() {
	$('html, body').animate({
		scrollTop: $("#page2").offset().top
	}, 1200)
}

$(function(){

	$("#hmm").on('click', function(e){
		e.preventDefault();
		goToByScroll();
	});

});
