// importing the fs module
const fs = require('fs')

let data = 'Hello World!!!!!!!'


fs.writeFile('./notes.txt', data, function(){
    console.log(`Done creating file`);
})