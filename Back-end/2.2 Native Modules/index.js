const fs = require("fs");

//write to file
// fs.writeFile('message.txt', 'Hello word, JK', (err)=> {
//     if(err) throw err;
//     console.log('The file has been saved');
// });

//read content of a file and display on console
fs.readFile('./message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
