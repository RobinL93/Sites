$(function(){
	$("#drag").draggable({revert:true});
	$(".drop").droppable({
		drop: function(event, ui) {
			$(this).addClass('lolz');
			console.log(ui.draggable.find('a').attr('href'));
		}
	});
});

