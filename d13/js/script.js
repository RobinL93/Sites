$(function(){
	$("#new-post-button").on("click", function(){
		$("#overlay").show();
		$("#window").show();;
	});


	$("#overlay, .close").on("click", function(){
		$("#overlay").hide();
		$("#window").hide();
	});

});