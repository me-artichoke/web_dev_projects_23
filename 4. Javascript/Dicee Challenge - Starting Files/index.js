
// document.querySelector(".img1").setAttribute("src", "./images/dice1.png");

var randomNumber1 = Math.floor(Math.random() * 6);

var randomNumber2 = Math.floor(Math.random() * 6);

// console.log(randomNumber1);
//put list of images in array
var images = [
    './images/dice1.png',
    './images/dice2.png',
    './images/dice3.png',
    './images/dice4.png',
    './images/dice5.png',
    './images/dice6.png'
];

//set random images from the array with the random number variable            
document.querySelector(".img1").setAttribute("src", images[randomNumber1]);

document.querySelector(".img2").setAttribute("src", images[randomNumber2]);

if(images[randomNumber1] > images[randomNumber2]){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} 
else if (images[randomNumber2] > images[randomNumber1]){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
 else {
    document.querySelector("h1").innerHTML = "Draw!";
}