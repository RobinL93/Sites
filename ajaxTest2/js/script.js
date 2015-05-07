$(document).ready(function(){

	var BBCRadioAPI = "http://www.bbc.co.uk/radio1/playlist.json";

	function displayBBCPlayList(data){

		console.log(data);

	}

	$.getJSON(BBCRadioAPI, displayBBCPlayList);

});