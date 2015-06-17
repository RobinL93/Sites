function gameObj(title, content){
	this.title = title;
	this.content = content;
}

var gameObjects = {
	game1: new gameObj("DXBall", "hmm"),

	game2: new gameObj("FIFA 15", "Lorem ipsum dolor si"),	
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
				sHTML += '<p>' + value.content +'</p>';
				$(".container").append(sHTML);
			}

		});

		

		
		
	});

});

/* 

sHTML += '<h3>' + value.title + '</h3>';
sHTML += '<p>' + value.content +'</p>';

*/
