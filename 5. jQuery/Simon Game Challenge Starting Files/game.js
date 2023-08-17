
var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);


   $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   

    
   
    return randomChosenColour;
}


$(".btn").on("click",function(){


   var userChosenColour = $(this).attr("id");
    //console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);

    playSounds(userChosenColour);
    
    

   });

function playSounds(name){

    

    switch (name) {
        case "green":
            var selectSound = new Audio('sounds/green.mp3');
            selectSound.play();
            break;
        case "red":
            var selectSound = new Audio('sounds/red.mp3');
            selectSound.play();
            break;
        case "yellow":
            var selectSound = new Audio('sounds/yellow.mp3');
            selectSound.play();
            break;
        case "blue":
            var selectSound = new Audio('sounds/blue.mp3');
            selectSound.play();
            break;
    
        default:
            alert("no input!");
            break;
    }

}