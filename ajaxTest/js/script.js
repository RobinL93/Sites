$(document).ready(function(){

	var policeForceApi = "https://data.police.uk/api/forces?jsoncallback?";

	function displayPoliceForce(data){

		var policeHTML = '<ul>';

		$.each(data, function(i, items){
			policeHTML += '<li>' + items.name +  '</li>';
			console.log(items.name);
		});

		policeHTML += '</ul>';
		$("#police-forces").html(policeHTML);
	}


	$.getJSON(policeForceApi, displayPoliceForce);


});