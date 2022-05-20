// Load the express package
const express = require('express')

// Init the app
const app = express()

// Fruits Array
const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
];

// ROUTES

// Route Handler 
// 1
app.get('/', (req, res) => {
    res.send(`Welcome to the Fruits App`)
})

//2
app.get('/fruits', (req, res) => {
    console.log('fruitssss!');
    res.send(fruits)
})

//3
app.get('/fruits/:index', (req, res) => {
    console.log(req.params);
    res.send(fruits[req.params.index])
})

//BONUS
app.get('/fruits/search/:name', (req, res) => {
    // console.log(req);
    const result = fruits.filter(item => item.name === req.params.name)
    res.send(result)
})

app.listen(3000, () => {
    console.log(`Server is up!`);
})