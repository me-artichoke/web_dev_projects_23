//jQuery 

//jQuery() or $() - less codes and makes life less stressful

//$("h1").css("color", "Orange");

//Js and jQuery difference in selecting an element

//js
// the code below selects only one element
//document.querySelector("h1");

//jQuery
// here there's differnce in selecting one 
// the code below selects on the h1 elements on screen.
//$("h1");


//seperatio of concerns:
//style an element with its classed defined in style.ss
$("h1").addClass("big-header"); //add class
//$("h1").removeClass("big-header"); //remove class
$("h1").hasClass("big-header"); //check for class existence