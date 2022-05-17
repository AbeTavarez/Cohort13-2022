const chalk = require('chalk')
const fs = require('fs')

console.log(process.argv);
const command = process.argv[2];
const message = process.argv[3]

if (command === 'create'){
    console.log(chalk.blue('Creating a new file...'));
    // code here
    // 2 pass the new value to the second argument on fs.writeFile
    fs.writeFile('./sample.txt', message, function(){
        console.log('Done');
    })
} else if (command === 'read'){
    console.log(chalk.blue('Reading file...'));
    
    // check if exist
    fs.readFile('./sample.txt', 'utf-8' ,function(err, data){
        if (err) console.error(err)
        console.log(data);
    })
}
else {
    console.log(chalk.red('Command Not Found!'));
}
