var iNbr = 0;

$(function() {
	setInterval(function() {
		iNbr = changeTextYoo();
	}, 2000);
});

function changeTextYoo() {
	var randomNbr = Math.floor(Math.random() * 6) + 1;

	if(randomNbr == iNbr) {
		randomNbr++;
		if(randomNbr > 6) {
			randomNbr = 1;
		}
	}


	switch(randomNbr){
		case 1:
			//animate 1
			$("#changeThisYo").animate({ 
				color: "#d43f3a"
			}, "slow" );
			break;
		case 2:
			//animate 2
			$("#changeThisYo").animate({ 
				color: "#61ba9e"
			}, "slow" );
			break;
		case 3:
			//animate 3
			$("#changeThisYo").animate({ 
				color: "#428bca"
			}, "slow" );
			break;
		case 4:
			//animate 4
			$("#changeThisYo").animate({ 
				color: "#333333"
			}, "slow" );
			break;
		case 5:
			//animate 5
			$("#changeThisYo").animate({ 
				color: "#f2f2f2"
			}, "slow" );
			break;
		case 6:
			//animate 6
			$("#changeThisYo").animate({ 
				color: "#51e61"
			}, "slow" );
			break;
		default:
			//animate default 
			break;
	}

	return randomNbr;
}