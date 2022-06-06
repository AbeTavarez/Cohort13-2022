const express = require('express')
require('dotenv').config() // init dotenv

const mongoConfig = require('./config/mongoConfig')
const todosRouter = require('./routes/todosRouter')

const app = express()
const PORT = 5000

app.use(express.json())
//* Routers
app.use('/todos', todosRouter)

//* Root route for the APP
app.get('/', (req, res) => {
    res.status(200).json("Welcome to my API!")
})



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    mongoConfig()
})