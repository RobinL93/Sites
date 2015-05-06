var xhr = new XMLHttpRequest();

xhr.onreadystatechange = (function(){
	if (xhr.readyState === 4) {
		$("#ajax").html(xhr.responseText);
	};	
});

xhr.open("GET", "myAjax.html");
function loadAjax() {
	xhr.send();
}