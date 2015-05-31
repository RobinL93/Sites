$(function(){

	
	$(document).on("mousemove", function(event){
		$("#mouseX").text("y: " + event.pageY);
		$("#mouseY").text("x: " + event.pageX);
	});

});