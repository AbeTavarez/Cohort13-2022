const express = require('express')
// Core module of NodeJS
const fs = require('fs')

const app = express()

// create a custom view engine
app.engine('myFirstViewEngine', (filePath, options, callback) => {
    // fs to read the file
    fs.readFile(filePath, (err, data) => {
        // if the file is not found
        if (err) return callback(err)

        // if No Errors
        //* Parsing the template file
        const rendered = data.toString()
        .replace('#title#', '<title>' + options.title + '</title>')
        .replace('#message#', '<h1>' + options.message + '</h1>')
        .replace('#content#', '<div>' + options.content + '</div>')
        
        // call callback with no errors and some data to render
        return callback(null, rendered)
    })
})

// sets the view engine in express
app.set('view engine', 'myFirstViewEngine')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Hello World',
        message: 'My first view engine',
        content: 'Some content'
    })
})

app.listen(3000, () => {
    console.log(`running`);
})