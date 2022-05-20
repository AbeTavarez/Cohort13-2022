// load the package express
const express = require('express')

// create an instance of express
const app = express()

// create our routes and handle our routes
app.get('/', (req, res) => {
    // console.log(req);
    res.send("Hello Express !!!!").status(200)
    //res.send("Second response !!!!").status(200)
})

// home page
app.get('/home', (req, res) => {
    res.send(`<h1> Home Page </h1>
            <p>This is my bio</p>
     `)
})

app.get('/about', function (req, res) {
    res.send(`<h1>Abraham</h1>`).status(200)
})

// listen for requests
app.listen(3000, () => {
    console.log(`Server is running...`);
})

