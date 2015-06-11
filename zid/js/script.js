$(function(){

for (var i = 1; i < 6; i++) {
	$('.sub-menu').append('<li><a href="">Game ' + i + '</a></li>');
};


});

$(window).on("load resize", function(){
	containerMarginToHeader();
});

function containerMarginToHeader(){
	var height = $("#header").height();
	$(".container").css("margin-top", ""+ (height + 30) +"px");
}

