var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern = [];

function nextSequence(){

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $('#'+randomChosenColour).fadeOut(100).fadeIn(100);
    console.log(gamePattern);

    var buttonSound = new Audio("sounds/"+randomChosenColour+".mp3");
    buttonSound.play();
}

//detect when buttons are clicked
$('.btn').click(function(){
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
})