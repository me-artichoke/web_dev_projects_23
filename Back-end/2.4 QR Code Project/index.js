/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

//prompt use for input
import { error } from 'console';
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([
        {
            name: "URL",
            message: "Type your URL:",
        },
    ])
    .then((answers) => {

        const url = answers.URL;

         //turn url into gr-image
        var qr_png = qr.image(url, {type: 'png'}); //take user input for qr-image 

        qr_png.pipe(fs.createWriteStream('url_qr.png'));

        //create a text file to store user input - use native modules
        fs.writeFile('url.txt', url, (err) => {
            if (err) throw err;
            console.log('url saved to file successfully!');
        });
        
    })
    .catch((error) => {
        if(error.isTtyError) {
            console.log("Payload executed!")
        } else {
            console.log("Something's gone wrong. Try again!")
        }
    });

   




    


    