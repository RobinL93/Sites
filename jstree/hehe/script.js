$(function(){
	
	$(document).on("click", function(e) {
		console.log(e.target);
	});

	$("#hmm")
		.on('changed.jstree', function (e, data) {
	    console.log(data);
	  }).jstree({
		'core' : {
			'data' : {
				"url" : "simple.json",
				"dataType" : "json"
			}
		}
	});

});


