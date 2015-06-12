$(function(){

	function menuObj(title, content){
		this.title = title;
		this.content = content;
	}

	var objects = {
		homeObj: new menuObj("Home", "This is my home! Take a look. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non mauris rutrum, bibendum velit vitae, molestie elit. Curabitur cursus bibendum neque ut dictum. Mauris interdum a augue ac vulputate. Nam elementum viverra quam, fringilla mollis mauris porta ut. Pellentesque egestas ligula a congue dictum. Etiam varius eget odio vel facilisis. Cras urna magna, vestibulum aliquam neque quis, tincidunt imperdiet felis. Donec congue ut est quis ullamcorper. Donec pulvinar eu risus hendrerit vehicula. Etiam ut nulla eleifend, convallis ex imperdiet, volutpat sapien. Nulla facilisi."),
		
		gameObj: new menuObj("Games", 
			"<select id='selectGame'></select>GAAAAAAAAAAAAAAAAAAAAAAAAAAAAIMZ. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum pellentesque urna, non lacinia libero luctus id. Curabitur vel libero ut eros rhoncus fermentum id sed arcu. Suspendisse laoreet facilisis nibh lobortis fringilla. Donec massa eros, mattis aliquet hendrerit et, tristique eget mauris. Mauris sed ultricies nunc, sit amet facilisis elit. Mauris ac sem tellus. Morbi tempus libero eget odio ultricies, et pulvinar leo aliquet. Phasellus convallis fringilla gravida."),
		
		musicObj: new menuObj("Music", "Dis is music. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis nisl non ante efficitur, egestas congue mi dictum. Nullam lorem ipsum, malesuada in libero non, tincidunt imperdiet lectus. Nunc sapien elit, consequat ac viverra vel, auctor ut quam. Curabitur pellentesque, mi non eleifend ultricies, erat lorem posuere ligula, ac ornare augue leo a magna. Nam blandit mattis tincidunt. Morbi cursus vitae libero eget egestas. Phasellus id luctus orci. Morbi venenatis tempor lorem ac aliquam. Mauris finibus ante eu risus placerat, eget tempus risus molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
		
		aboutObj: new menuObj("About", "About! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum lacus at libero volutpat, vitae bibendum lectus vehicula. Aliquam turpis eros, fringilla et cursus ac, iaculis sed diam. Integer a imperdiet mi. Ut sit amet condimentum odio. Nulla tempus placerat turpis, at elementum ex aliquam in. Cras elementum volutpat dui, efficitur porta velit bibendum sed. Cras placerat tellus nulla, vel pharetra tellus venenatis eu."),
		
		contactObj: new menuObj("Contact", "Contact me here! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada ipsum a rutrum ultricies. Curabitur eget elit magna. In hac habitasse platea dictumst. Integer vel dolor sit amet magna vestibulum mollis. Vivamus vel nulla hendrerit, viverra arcu non, imperdiet turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus porta sodales tellus, eget sodales leo facilisis id. Donec in mauris at nibh blandit eleifend in vel nunc. Duis in libero quis velit accumsan ornare. Phasellus in tortor felis. Donec porta tempor porta. Maecenas id maximus urna. Fusce ac dui erat. Nam molestie, velit et commodo scelerisque, justo tellus elementum mauris, eget venenatis orci ex auctor diam.")
	}

	$activeMenuObj = $('.menu > li > a.active');


	$.each(objects, function(key, value) {
		if(value.title.toLowerCase() == $activeMenuObj.text().toLowerCase()){
			$(".container").empty();
			var sHTML = '';
			sHTML += '<h3>' + value.title + '</h3>';
			sHTML += '<p>' + value.content + '</p>';
			$(".container").append(sHTML);
		}
	});

	$(".menu > li > a").on("click", function(e){
		e.preventDefault();
		var $target = $(e.target);
		$(".menu li > a").removeClass('active');
		$target.addClass('active');

		$title = $target.text();

		$.each(objects, function(key, value){
			if(value.title.toLowerCase() == $title.toLowerCase()){
				$(".container").empty();
				var sHTML = '';
				sHTML += '<h3>' + value.title + '</h3>';
				sHTML += '<p>' + value.content +'</p>';
				$(".container").append(sHTML);
			}
		});

	});

	$(".sub-menu > li > a").on("click", function(e){
		e.preventDefault();
	});


});