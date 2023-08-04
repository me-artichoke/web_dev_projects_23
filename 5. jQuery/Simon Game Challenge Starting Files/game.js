
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $('randomChosenColour').animate({opacity: 0.5});
}


//$(randomChosenColour).animate({Opacity: 0.5});