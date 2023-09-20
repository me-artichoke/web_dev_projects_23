/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

//prompt use for input
import { error } from 'console';
import inquirer from 'inquirer';

inquirer
    .prompt([
        {
            name: "userName",
            type: "input",
            message: "What is your name?"
        },
    ])
    .then((answer) => {
        console.log("Hello " + answer.userName)
    })
    .catch((error) => {
        if(error.isTtyError) {
            console.log("Payload executed!")
        } else {
            console.log("Something's gone wrong. Try again!")
        }
    });