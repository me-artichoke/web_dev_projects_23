//finding the number of tweet characters entered

var myTweet = prompt("Enter your tweet here");

var tweetLimit = myTweet.slice(0,140);

//var tweetLen = tweetLimit.length;

//var remainChar = 140 - tweetLen;

alert(myTweet.length + tweetLimit + " You have entered " + tweetLimit.length + " characters, you have " + (140 - tweetLimit.length) + " left" );



// make first letter of string caps and remaining lowercase

var userName = prompt("What's is your name: ");

// var userNameFirst = userName.slice(0,1);

var userNameRemainder = userName.slice(1,userName.length);

alert("Hello, " + userName.slice(0,1).toUpperCase() + userNameRemainder.toLowerCase());


//functions with parameters and gives output


function getMilk(money, cost){

    console.log("Go to store");

    console.log("Buy " + calcBottles(money, cost) + " bottles of milk");

    return calcChange(money, cost);

    
}



function calcBottles(moneyTendered, costperBottle){

    var numOfBottles = Math.floor(moneyTendered / costperBottle);

    return numOfBottles
    
}

function calcChange(moneyTendered, costperBottle){

    var change = moneyTendered % costperBottle;

    return change;
}


var change = getMilk(4, 1.5);

alert("Hello, your change is " + change);*/

//BMI calculator function 

function bmiCalculator(weight, height){
    
    calcBmi = bmiCalc(weight, height);
    
    return calcBmi;
}

function bmiCalc(weight, height){

    var calc = Math.round(weight / height);

    return calc;
}

var bmi = bmiCalculator(82, 1.8);

alert("Your BMI is " + bmi);


//random numbers:
//choose proper variable names

prompt("Enter your name");
prompt("Enter your girlfriend or boyfriend's name");

var randomNum = Math.random() * 100;

randomNum = Math.floor(randomNum) +1;

if (randomNum >= 70){

    alert("Your love score is " + randomNum + "%" + " You love each other like Kanye loves Kanye");
} else {

    alert("Your love score is " + randomNum + "%");
}

//BMI calculator updated with condtions

function bmiCalculator (weight, height) {
   var bmi = Math.round(weight / (height * height));
   var interpretation;
    
    if (bmi < 18.5 ){
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }
    if (bmi > 18.5 && bmi <= 24.9){
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    }
    if (bmi > 24.9){
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    return interpretation;
}

 console.log(bmiCalculator(83, 1.8));


//check for leap yeah


function isLeapYear(year){

  if(year % 4 === 0){
      if(year % 100 === 0){
          if(year % 400 === 0){
              return "Leap year";
          }else {
              return "Not leap year";
          }
          
      } else {
          return "Leap year";
      }
      
  }else {
      return "Not leap year"
  }
}


var year = prompt("Enter a random year");

isLeapYear(year);


//Check and confirm attendees against guest list

var guestName = prompt("Enter your name");


var guestList = ["james", "Darren", "Jacob"];

if(guestList.includes(guestName)){
    console.log("Welcome to the club, "+ guestName);
} else {
    console.log("Sorry, name not found");
}


//FizzBuzz challenge -- replace 3 with Fizz 5 with Buzz and a number cleanly divisble by 3 and 5 with FizzBuzz
var output = [];
var count = 1;

function fizzBuzz(){
    //check for count / 3 = Fizz /5 = Buzz /3/5 = fizzBuzz

    if(count % 3 === 0 && count % 5 === 0){
        output.push("fizzBuzz");
        
    } else if(count % 3 === 0){

        output.push("fizz");
        
    } else if(count % 5 === 0){

        output.push("Buzz");
        
    } else {

        output.push(count);

    }

    count++;

    console.log(output);

}

//whileLoop version of fizzBuzz
var output = [];
var count = 1;

function fizzBuzz(){
    //check for count / 3 = Fizz /5 = Buzz /3/5 = fizzBuzz

    while (count <= 100){

            if(count % 3 === 0 && count % 5 === 0){
            output.push("fizzBuzz");
            
        } else if(count % 3 === 0){
    
            output.push("fizz");
            
        } else if(count % 5 === 0){
    
            output.push("Buzz");
            
        } else {
    
            output.push(count);

        }

         count++;

       
    }

     console.log(output);

}

//forLoop version of fizzbuzz
var output = [];
//var count = 1;

function fizzBuzz(){
    //check for count / 3 = Fizz /5 = Buzz /3/5 = fizzBuzz

    for (var count = 1; count <= 100; count++){

            if(count  % 3 === 0 && count % 5 === 0){
            output.push("fizzBuzz");
            
        } else if(count % 3 === 0){
    
            output.push("fizz");
            
        } else if(count % 5 === 0){
    
            output.push("Buzz");
            
        } else {
    
            output.push(count);

        }

       
    }

     console.log(output);
}


//Who Pays for lunch 
function whosPaying(names) {
    
    //Write your code here.
        names= ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

        var whoPays = Math.floor(Math.random() * names.length);


        whoPays = names[whoPays]; //call any random number which matches to the indexes of the array.

        return whoPays + " is going to buy lunch today!";
       
}

//getBear 

function getBeer(){

    numberOfBottles = 99;

    while (numberOfBottles >= 0){

        var bottleWord = "bottle";
        if (numberOfBottles === 1){
            bottleWord = "bottles";
        }

        console.log(numberOfBottles + " "+ bottleWord + " of beer on the wall, " + numberOfBottles  + " "+ bottleWord + " of beer.");
        console.log("Take one down, pass it around, ");
        numberOfBottles--;
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");

        
    }

}

//fibonacciSequence generator

//Take time to explain this code thoroughly based on the value of n

function fibonacciGenerator (n) {

    var output = [];
    var firstSeq = 0;
    var secondSeq = 1;
    var nextSeq;

    for (var i = 1; i <= n; i++){

            

        output.push(firstSeq);

       // console.log(output);
        
        nextSeq = firstSeq + secondSeq;

        firstSeq = secondSeq;
        secondSeq = nextSeq;
        
    } 

    return output;
}


//alert(fibonacciGenerator(10));


 


