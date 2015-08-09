function gameObj(title, content){
	this.title = title;
	this.content = content;
}

var game2Content = "<div>";
	game2Content += 	"<p>This is FIFA 15.</p>"
	game2Content += 	"<div><img src='img/fifa15-400x200.png'/></div>";
	game2Content += "</div>";



var gameObjects = {
	game1: new gameObj("DXBall", "hmm"),
	game2: new gameObj("FIFA 15", game2Content),	
}


$(function(){

	// loop through game objects and add the title to list
	$.each(gameObjects, function(key, value){
		$('.sub-menu').append('<li><a href="">' + value.title + '</a></li>');
	})


	// load the clicked game object
	$(".sub-menu > li > a").on("click", function(e){
		e.preventDefault();
		$target = $(e.target);

		$title = $target.text();

		$.each(gameObjects, function(key, value){

			if($title.toLowerCase() == value.title.toLowerCase()){
				$(".container").empty();
				var sHTML = "";
				sHTML += '<h3>' + value.title + '</h3>';
				sHTML += value.content;
				$(".container").append(sHTML);
			}

		});

		

		
		
	});

});

/* 

sHTML += '<h3>' + value.title + '</h3>';
sHTML += '<p>' + value.content +'</p>';

*/
