$(function(){



});

$(window).on("load", function(){
	containerMargin();
});

function containerMargin(){
	var height = $("#header").height();
	$(".container").css("margin-top", ""+ (height + 30) +"px");
}

