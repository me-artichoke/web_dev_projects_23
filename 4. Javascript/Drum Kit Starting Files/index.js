
//add event listeners - do something when a button is clicked

//a function is passed to the second parament without the opened and closed brackets 
var addClick = document.querySelectorAll(".drum"); 

function handleClick(){

    alert("Button clicked");
}

// addClick.forEach((button) => {
//     button.addEventListener('click', handleClick)
// });

//usign for loop

for (i = 0; i < addClick.length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}