$(function(){

	newBoard();

	$(".mem").on("click", function(){
		var val = $(this).attr('data-woot');
		memoryFlip(this, val);
	});

});

	var memory_array = 	[	
							'1', '1',
							'2', '2',
							'3', '3',
							'4', '4',
							'5', '5',
							'6', '6',
							'7', '7',
							'8', '8',
							'9', '9',
							'10', '10',
							'11', '11',
							'12', '12'
					 	];
	
	var memory_values = [];
	var memory_tiles_ids = [];
	var tiles_flipped = 0;

	Array.prototype.memory_shuffle = function(){
		var i = this.length;
		var j; 
		var temp;

		while(--i > 0){
			j = Math.floor(Math.random() * (i + 1));
			temp = this[j];
			this[j] = this[i];
			this[i] = temp;
		}
	}

	function newBoard(){
		tiles_flipped = 0;
		var output = '';
		memory_array.memory_shuffle();
		for (var i = 0; i < memory_array.length; i++) {
			output += '<div id="tile_'+i+'" class="mem" data-woot="'+memory_array[i]+'"></div>';
		}

		$("#memory-board").html(output);
	}

	function memoryFlip(tile, val){
		$tile = $(tile);
		if ($tile.html() == "" && memory_values.length < 2) {
			$tile.css("background", "#FFF");
			$tile.html(val);

			if (memory_values.length == 0) {
				memory_values.push(val);
				memory_tiles_ids.push($tile.attr('id'));

			} else if (memory_values.length == 1) {
				memory_values.push(val);
				memory_tiles_ids.push($tile.attr('id'));

				if (memory_values[0] == memory_values[1]) {
					tiles_flipped += 2;
					memory_values = [];
					memory_tiles_ids = [];

					if (tiles_flipped == memory_array.length) {
						alert("woooooot");
						$("memory-board").html("");
						newBoard();
					}

				} else {
					function flipBack(){
						$tile1 = $("#" + memory_tiles_ids[0] + "");
						$tile2 = $("#" + memory_tiles_ids[1] + "");
						$tile1.css("background", "url('img/tile_bg.jpg')");
						$tile1.html('');
						$tile2.css("background", "url('img/tile_bg.jpg')");
						$tile2.html('');

						memory_values = [];
						memory_tiles_ids = [];

					}

					setTimeout(flipBack, 700);
				}
			}

		}
	}





