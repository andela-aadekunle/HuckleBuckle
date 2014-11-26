var = enternumber;
var initNum=0;

var hucklebuckle = {

  hucklebuckle.restart.addEventListener("click", function (event) {
      event.preventDefault();
      location.reload(); 

  randomNum = Math.ceil(Math.random()*100);


  numValidity : function(){

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
},

 play: function(){

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


hucklebuckle.submit.addEventListener("click", function (event) {
    event.preventDefault();
    // hucklebuckle.numValidity();
    hucklebuckle.play();





}