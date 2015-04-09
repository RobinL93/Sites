function changeBg() {
	var bgColors = ["#33B5E5", "#AA66CC", "#99CC00", "#FFBB33", "#FF4444"];
	var random = Math.floor(Math.random() * bgColors.length);

	$("body").css("background-color", bgColors[random]);
	$("#hello-text").css("color", bgColors[random]);

	setTimeout(changeBg, 5000);
}

changeBg();