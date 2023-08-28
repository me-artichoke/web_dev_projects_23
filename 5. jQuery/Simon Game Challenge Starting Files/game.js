
var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

var started = false;
var level = 0;

function nextSequence(){

    //reset the array
    userClickedPattern = [];

    level++;
   $("#level-title").html("Level "+ level);

   //console.log(level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);


   $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
   
   playSounds(randomChosenColour);
   animatePressed(randomChosenColour);
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("sucess");
        console.log(gamePattern);
        console.log(userClickedPattern);
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000)
        }
    }
    else {
        console.log("wrong");
        var wrongSound = new Audio('sounds/wrong.mp3');
        wrongSound.play();
    }
}


$(".btn").on("click",function(){


   var userChosenColour = $(this).attr("id");
    //console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    playSounds(userChosenColour);

    animatePressed(userChosenColour);

    
    checkAnswer(userClickedPattern.length - 1);


   });

function playSounds(name){

    
    var selectSound = new Audio('sounds/' + name +'.mp3');
    selectSound.play();

}

// animate key pressed
function animatePressed(currentColour){

    //save pressed button to the a variable
    var pressedButton = $("."+currentColour);
    //animate class defined in the css to button pressed
    pressedButton.addClass("pressed");

    //remove pressed class after 100 miliseconds
    setTimeout(function(){
        pressedButton.removeClass("pressed");
    },100)


}

//detect keys pressed
$(document).keypress(function(){

    if (!started){

        $("#level-title").text("Level "+ level);
        nextSequence();
        started = true;
    }
        
})

