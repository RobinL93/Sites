$(function(){
	$(".drag").draggable({revert:true});
	$(".drop").droppable({
		hoverClass: 'ui-hover',
		drop: function(event, ui) {

			$dragValue = ui.draggable.find('input').attr('value');

			$(this).val('');
			$(this).val($dragValue);
		}
	});
});

