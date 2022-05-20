// load the express package
const express = require('express')
// declare the port number
const PORT = 4000

// instance of express
const app = express()

// root route
app.get('/', (req, res) => {
    res.send('<h1> Hello Plants </h1>')
})

const plants = ['orchid', 'lucky bamboo', 'lily', 'palm']
// PLANTS ROUTE
// This create a new parameter
// :nameOfParameter
app.get('/plants/:indexOfPlantArray', (req, res) => {
    console.log(req.params)
    res.send(plants[req.params.indexOfPlantArray])
})

// listener
app.listen(PORT, () => {
    console.log(`Plants Server is running...`);
})