// generating a random number from [0-100]
var enternumber;
var initNum=0;

$('#restart').click(function(event){
	event.preventDefault();
	location.reload();
});	


var randomNum=Math.ceil(Math.random()*100);

// checking for the validity of the user's input


var numValidity= function(){

		enternumber = $("#enternumber").val();
		
		if((isNaN(enternumber)) || (enternumber === "")){
			$("#statement p").html("Your have to input a number to play");
		}
		else if(enternumber===null){
			$("#statement p").html("You have to input a number");
		}
		else if(0>enternumber){
			$("#statement p").html("You have to input a positive number");
		}
		else if(enternumber>100){
			$("#statement p").html("The range is between 1 to 100");
		}
		else{
			hucklebuckle();
		}
};



// the main game

var hucklebuckle = function(){

		enternumber = parseInt(enternumber);

		if(enternumber == randomNum){
			$("#statement p").html("You are Right!! Are You Cheating?");
		}
		else if(Math.abs(randomNum - enternumber) > Math.abs(randomNum - initNum)){
			$("#statement p").html("You're Colder");
		}
		else if(Math.abs(randomNum - enternumber) < Math.abs(randomNum - initNum)){
			$("#statement p").html("You're Hotter");
		}

		initNum = enternumber;
};
console.log('randomNum: ' + randomNum);

$('#submit').click(function(event) {
	event.preventDefault();
	numValidity();
});
