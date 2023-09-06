var buttonColours = ["red","blue","green","yellow"];

//populated with random chosen colors by nextSequences
var gamePattern = [];

var userClickedPattern = [];

var gameStarted = false;

var gameLevel = 0;

function nextSequence(){

    //reset clickedpattern array
    userClickedPattern = [];

    gameLevel++;
    $('h1').text("Level "+gameLevel);


    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $('#'+randomChosenColour).fadeOut(100).fadeIn(100);
    console.log("This is the game pattern "+ gamePattern);

    playSound(randomChosenColour);
}

//detect when buttons are clicked
$('.btn').click(function(){
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);

    //play sounds based on buttons clicked
    playSound(userChosenColour);
    console.log("User clicked pattern "+userClickedPattern);
    animatePress(userChosenColour);

    //call check answer
    checkAnswer(userClickedPattern.length -1);
});

//detect keyboard key
$(document).keypress(function(){
    if(!gameStarted){
        nextSequence();
        $('h1').text('Level '+ gameLevel);
    }
})

function playSound(name){

    var buttonSound = new Audio("sounds/"+name+".mp3");
    buttonSound.play();
}

//check answer
function checkAnswer(currentLevel){
    //check if users clicked pattern is equal to the game pattern
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        //console.log('success '+gamePattern[currentLevel]);
        if(gamePattern.length === userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            },1000)
        }
    } 
    else{
        console.log('Wrong');
        //play wrong sound in Ghana
        var wrongSound = new Audio("sounds/wrong.mp3");
        wrongSound.play();

        //add game over effect
        $('body').addClass('game-over');
        setTimeout(function(){
            $('body').removeClass('game-over');
        },200)

        //change h1 time to game over
        $('h1').text('Game Over, Press Any Key to Restart');
    }
}

function animatePress(currentColour){
    $('#'+currentColour).addClass('pressed');

    setTimeout(function(){
        $('#'+currentColour).removeClass('pressed');
    },100)
}
