
var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);


   $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

   var selectSound = new Audio('sounds/'+randomChosenColour+'.mp3');
   selectSound.play();

   
}


$(".btn").on("click",function(){


   var userChosenColour = $(this).attr("id");
    //console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);

    //console.log(userClickedPattern);
    

   });

