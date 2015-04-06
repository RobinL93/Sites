$(function () {

	var area = calcArea(120);

	$(".output").append(area);

});

function calcArea(x) {
	return x * x;
}