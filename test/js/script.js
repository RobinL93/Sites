$(function(){

	function menuObj(title, content){
		this.title = title;
		this.content = content;
	}


	var obj = {
		homeObj: new menuObj("Home", "Lorem ipsum superhaxx"),
		aboutObj: new menuObj("About", "aboout me yo")
	}

	var sHtmlCode = "";
	for(x in obj) {
		sHtmlCode += '<div class="obj">';
		sHtmlCode += '<p class="title">' + obj[x].title + '</p>';
		sHtmlCode += '<p class="content">' + obj[x].content + '</p>';
		sHtmlCode += '</div>';
	} 

	$("#container").append(sHtmlCode);

});