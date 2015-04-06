$(function() {


	for (var i = 0; i < 15; i++) {

		var box = "<div class='box'>" + generateRandomText() + "</div>";

		$("#wrapper").append(box);
	};

	$(".box").on("mouseover", function() {

		$(this).css({
			'background-color' : '#555',
			'color' : 'white'
		});

		$(this).text(generateRandomText());

	});

	$(".box").on("mouseout", function() {
		$(this).css({
			'background-color' : '#006699',
			'color' : 'black'
		});
	});

});

function generateRandomText() {
	var text = ["Integer eu rutrum sapien. Ut commodo sed orci.",
				"Pellentesque elementum massa quis lacus euismod tincidunt.",
				"Aliquam erat volutpat. Aliquam in vehicula massa, ac.",
				"Fusce posuere ac lorem ut cursus. Pellentesque habitant.",
				"Fusce iaculis eleifend ex vel tempor. Ut sit.",
				"Aliquam fermentum tortor vitae sem efficitur, suscipit",
				"Quisque metus lorem, efficitur aliquam egestas quis, bibendum.",
				"Fusce ut posuere elit. Curabitur pellentesque lacus tellus.",
				"Proin euismod eu sem at egestas. Aenean consectetur.",
				"Cras mollis eget odio non sollicitudin. Phasellus tellus.",
				"Cras sit amet consequat ipsum. Sed in augue.",
				"Interdum et malesuada fames ac ante ipsum primis.",
				"Fusce convallis tempor sem sed egestas. Curabitur malesuada.",
				"Curabitur a pulvinar nisi. Interdum et malesuada fames.",
				"Sed non ligula nec purus viverra rutrum a."];

	var random = Math.floor((Math.random() * text.length));

	return text[random]; 
}


