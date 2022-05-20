const express = require('express')

const app = express()

app.get('/hello', (req, res) => {
    res.send('Hello')
})

app.get('/hello/:name/:lastName', (req, res) => {
    console.log(req.params);
    res.send(`Hello ${req.params.name} ${req.params.lastName}`)
})


app.listen(4000, () => {
    console.log(`Running....`);
})