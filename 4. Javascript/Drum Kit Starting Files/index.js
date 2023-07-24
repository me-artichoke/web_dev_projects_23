
//add event listeners - do something when a button is clicked

//a function is passed to the second parament without the opened and closed brackets 
var selectButtonElement = document.querySelectorAll(".drum"); 

function handleClick(){

    alert("Button click clicked");
}

// selectButtonElement.forEach((button) => {
//     button.addEventListener('click', handleClick)
// });

//usign for loop

for (i = 0; i < selectButtonElement.length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        //this.style.color = "White";
        if(this.innerHTML === "w"){
            new Audio("./sounds/crash.mp3").play();
        }
        else if(this.innerHTML === "a"){
            new Audio("./sounds/kick-bass.mp3").play();
        }
        else if (this.innerHTML === "s"){
            new Audio("./sounds/snare.mp3").play();
        }
        else if (this.innerHTML === "d"){
            new Audio("./sounds/tom-1.mp3").play();
        }
        else if (this.innerHTML === "j"){
            new Audio("./sounds/tom-2.mp3").play();
        }
        else if (this.innerHTML === "k"){
            new Audio("./sounds/tom-3.mp3").play();
        }
        else if (this.innerHTML === "l"){
            new Audio("./sounds/tom-4.mp3").play();
        }
        else {
            alert("No button clicked");
        }
        
    });
}

// //add sounds when button is clocked
// var audio = new Audio("./sounds/tom-1.mp3");
// audio.play();