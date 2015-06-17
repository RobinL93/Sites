$(function(){

	if (isAndroidORiOS() != "unknown") {
		console.log(isAndroidORiOS());
		$(".sub-menu").remove();
		$("#selectGame").append("<option>Game 1</option>");
		$("#selectGame").append("<option>Game 2</option>");
		$("#selectGame").append("<option>Game 3</option>");
		$("#selectGame").append("<option>Game 4</option>");
	}




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

