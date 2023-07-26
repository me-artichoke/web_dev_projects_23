
//this returns an array of the queried elements - querySelectorAll
var selectButtonElement = document.querySelectorAll(".drum"); 

//usign for loop when the buttons are clicked
//play respective sounds when buttons are clicked
for (i = 0; i < selectButtonElement.length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        //this.style.color = "White";
       //use (this) keyword to capture buttons  with specific innerHTML value that where clicked
       //refer to the makeSounds function to understand more with the use this.innerHTML - 
       //the letters are used in the switch statements
        
        var buttonInnerHTML = this.innerHTML;
        makeSounds(buttonInnerHTML);

        //distinguish clicked button here by call the respective function 
        buttonAnimation(buttonInnerHTML);
        
    });
}

//play sounds when the the respective keys are pressed
document.addEventListener("keydown", function(event){

    //event parameter let's tap into to the event that triggered the event listener
    //key represents which key was pressed on the keyboard.
    makeSounds(event.key); 
    buttonAnimation(event.key); 
});

//function for sounds 
function makeSounds(key){
    switch (key) {
        case "w":
            new Audio("./sounds/crash.mp3").play();
            break;
        case "a":
            new Audio("./sounds/kick-bass.mp3").play();
            break;
        case "s":
            new Audio("./sounds/snare.mp3").play();
            break;
        case "d":
            new Audio("./sounds/tom-1.mp3").play();
            break;
        case "j":
            new Audio("./sounds/tom-2.mp3").play();
            break;
        case "k":
            new Audio("./sounds/tom-3.mp3").play();
            break;
        case "l":
            new Audio("./sounds/tom-4.mp3").play();
            break;
        default:
            alert("Sorry "+ key + " is not assigned to a musical instrument");
            break;
    }
}

// //add sounds when button is clocked
// var audio = new Audio("./sounds/tom-1.mp3");
// audio.play();

//distinguish the cliked on or pressed button by adding animation
//create a function to apply to both scenarios

function buttonAnimation (currentKey){

    var activeButton = document.querySelector("."+currentKey);

    //rrefer to the seperation of concerns - 
    //code below adds a class PRESSED to the html element 
    //which is already defined in the css
    activeButton.classList.add("pressed"); 
    
    //the problem here is the class applied gets stuck 
    //so write another code to remove after a certian period of time 
    //use javascript setTimeout() funtion 

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}