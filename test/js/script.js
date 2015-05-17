$(document).ready(function(){

	$.ajax({
		url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?',
		dataType: 'jsonp',
		success: function(response){
			$.each(response, function(index, flickr) {
				console.log(flickr[0].author);
			});
		},
		error: function(){
			console.log("error");
		}

	}); // end ajax

}); // end ready