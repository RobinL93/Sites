function run(){
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");


	var boxX = 20;
	var boxY = 40;
	var boxWidth = 10;
	var boxHeight = 10;
	var boxDX = 1;
	var boxDY = 1;

	var rectWidth = 300;
	var rectHeight = 11;

	var leftPressed = false;
	var upPressed = false;
	var rightPressed = false;
	var downPressed = false;

	var goalBoxWidth = 20;
	var goalBoxHeight = 20;
	var goalBoxX = 100;
	var goalBoxY = 20;
	var goalBoxX = canvas.width - goalBoxWidth - 50;
	var goalBoxY = canvas.height - (goalBoxHeight + rectHeight);

	var walls = [];

	for(i = 0; i < 3; i++){
		walls[i] = {x : 0, y: 0};
	}


	document.addEventListener("keydown", keyDownHandler);
	document.addEventListener("keyup", keyUpHandler);

	function keyDownHandler(e){
		if(e.keyCode == 37){
			leftPressed = true;
		} else if(e.keyCode == 38){
			upPressed = true;
		} else if(e.keyCode == 39){
			rightPressed = true;
		} else if(e.keyCode == 40){
			downPressed = true;
		} 
	}

	function keyUpHandler(e){
		if(e.keyCode == 37){
			leftPressed = false;
		} else if(e.keyCode == 38){
			upPressed = false;
		} else if(e.keyCode == 39){
			rightPressed = false;
		} else if(e.keyCode == 40){
			downPressed = false;
		} 
	}

	function draw(){
		context.clearRect(0, 0, canvas.width, canvas.height);
		drawRect();
		drawGoalBox();
		drawBox();
		paintWall();
		collisionDetection();

		if(leftPressed) {
			boxX -= boxDX;
		} else if (upPressed) {
			boxY -= boxDY;
		} else if (rightPressed) {
			boxX += boxDX;
		} else if(downPressed){
			boxY += boxDY;
		}

		if(boxX < 0){
			boxX += boxDX;
		} else if(boxX > canvas.width - boxWidth){
			boxX -= boxDX
		}

		if(boxY < 0){
			boxY += boxDY;
		} else if(boxY > canvas.height - (rectHeight + boxHeight)){
			boxY -= boxDY;
		}

		if((boxX >= goalBoxX + 1  && boxX <= (goalBoxX + goalBoxWidth) - boxWidth - 1) && ( boxY >= goalBoxY + 1 && boxY <= (goalBoxY + goalBoxHeight) - boxHeight )){
			drawWinningText();
			clearInterval(myTimer);
		}

	}

	var myTimer = setInterval(draw, 10);

	function drawRect(){
		context.beginPath();
		context.rect(0, canvas.height - rectHeight, rectWidth, rectHeight);
		context.fillStyle = "#FF9900";
		context.fill();
		context.closePath();
	}

	function drawBox(){
		context.beginPath();

		context.rect(boxX, boxY, boxWidth, boxHeight);
		context.fillStyle = "#006699";
		context.fill();

		context.closePath();
	}

	function drawGoalBox(){
		context.beginPath();
		context.rect(goalBoxX, goalBoxY, goalBoxWidth, goalBoxHeight);
		context.fillText("GOAL: " , goalBoxX - 15, goalBoxY - 5);
		context.fillStyle = "#FF0000";
		context.fill();
		context.closePath();
	}

	function drawWinningText(){
		context.font = "16px Arial";
		context.fillStyle = "#0095DD";
		context.fillText("CONGRATULATIONS, YOU WON!", 8, 20);
	}

	function paintWall(){
		for(i = 0; i < walls.length; i++){
			var wallX = 50 * (i + 1);
			var wallY = 20 * (i + 2);
			walls[i].x = wallX;
			walls[i].y = wallY;

			context.beginPath();
			context.rect(wallX, wallY, 20, 40);
			context.fillStyle = "#123123";
			context.fill();
			context.closePath();

			
		}
	}

	function collisionDetection(){
		for(i = 0; i < walls.length; i++){
			var w = walls[i];

			
			if(boxX > w.x - boxWidth && boxX < w.x + 20 && boxY > w.y - boxHeight && boxY < w.y + 40){
				$(walls[i]).remove();					
			} 
		}
	}

}

run();


 $(function(){
 	$("#reload").on("click", function(){

 		$("#myCanvas").remove(); 		

 		$('<canvas id="myCanvas"> </canvas>').prependTo('#wrapper');

 		run();
 	});
 });