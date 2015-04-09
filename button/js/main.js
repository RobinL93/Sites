$(function() {


$(".button").on("mouseover", function(e) {
	var target = $(e.target);

	target.animate({
		backgroundColor: "#006699",
		color: "#FFF"
	}, 300);
});

$(".button").on("mouseout", function(e) {
	var target = $(e.target);

	target.animate({
		backgroundColor: "#f2f2f2",
		color: "#000"
	}, 300);
});


});