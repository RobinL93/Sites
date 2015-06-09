$(function(){


	$("button").on("click", function(e){
		
		var $target = $(e.target);

		$img = $("#img1");

		var wise = $target.attr('class');

		clearTimeout(looper);
		rotateAnimation($img, 10, wise);
		
		
	});

});

var looper; // timer
var degrees = 0; 

function rotateAnimation(element, speed, cwOrccw){
	var $el = $(element);

	$el.css({
		"transform" : "rotate("+degrees+"deg)"
	});

	looper = setTimeout(function(){
		rotateAnimation($el, speed, cwOrccw);
	}, speed);


	if(cwOrccw === "cw"){
		degrees++;
		if(degrees>359){
			degrees = 1;
		}	
	} else if(cwOrccw === "ccw"){
		degrees--;
		if(degrees< -359){
			degrees = -1;
		}
	}

	

	$("#status").html("rotate("+degrees+"deg)");

}
