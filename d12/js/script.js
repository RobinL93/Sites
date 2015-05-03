$(function(){

	$("nav").on("click", function(e) {
		$(".active").removeClass();
		$target = $(e.target);
		$target.addClass('active');

	});

});

