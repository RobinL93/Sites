$(function(){

	menuScrollButtons();

	if (isAndroidORiOS() != "unknown") {
		console.log(isAndroidORiOS());
		$(".sub-menu").remove();
		$("#selectGame").append("<option>Game 1</option>");
		$("#selectGame").append("<option>Game 2</option>");
		$("#selectGame").append("<option>Game 3</option>");
		$("#selectGame").append("<option>Game 4</option>");
	}


	$(".menu").on("scroll", function(){
		menuScrollButtons();
	});

	$("#arrow-right").on("click", function(){
		var $menuScrollLeft = $(".menu").scrollLeft();
		var scrollToRight = $menuScrollLeft + 50;
		$(".menu").scrollLeft(scrollToRight);
	});

	$("#arrow-left").on("click", function(){
		var $menuScrollLeft = $(".menu").scrollLeft();
		var scrollToLeft = $menuScrollLeft - 50;
		$(".menu").scrollLeft(scrollToLeft);
	});
	
});

$(window).on("load resize", function(){
	containerMarginToHeader();
});

function containerMarginToHeader(){
	var height = $("#header").height();
	$(".container").css("margin-top", ""+ (height + 30) +"px");
}

function isAndroidORiOS() {
	var userAgent = navigator.userAgent;

	if(userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)){
		return "iOS";
	} else if(userAgent.match(/Android/i)){
		return "Android";
	} else {
		return "unknown";
	}

}

function menuScrollButtons(){
	var $menu = $(".menu");
	var $lastChild = $(".menu > li.last-child");
	var rightPosOfLastChild = ($(window).width() - ($lastChild.offset().left + $lastChild.outerWidth()));

	if($menu.scrollLeft() >= 20){
		$("#arrow-left").show();
	} else {
		$("#arrow-left").hide();
	}

	if(rightPosOfLastChild >= 0){
		$("#arrow-right").hide();
	} else {
		$("#arrow-right").show();
	}
}
