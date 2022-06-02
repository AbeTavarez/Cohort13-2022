const express = require('express')
const pokemonData = require('./Models/pokemon')
require('dotenv').config() // configuration for dotenv
const mongoose = require('mongoose')
const PokemonModel = require('./Models/PokemonModel')

//* ========== SETUP
const app = express()
const PORT = 3000
app.set('view engine', 'ejs')
app.set('views', './Views')

//* ======== Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//* ========== ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.render('Index', {
        pageTitle: 'Pokemon',
        pageHeader: 'See All The Pokemon!',
        pokemonData: pokemonData
    })
})

app.get('/pokemon/new', (req, res) => {
    res.render('New', {
        pageTitle: 'New Pokemon',
        pageHeader: 'Create a new Pokemon'
    })
})

//* POST REQUEST HANDLER
app.post('/pokemon', async (req, res) => {
    const newPokemon = req.body // create a newPokemon variable
    // add a img property to the object
    newPokemon.img = `http://img.pokemondb.net/artwork/${req.body.name}`
    
    console.log(newPokemon);

    //* Save the new pokemon to the db
    await PokemonModel.create(newPokemon, (error, result) => {
        if (error) {
            console.log(error)
        }

        console.log(result);
    })
})

app.get('/pokemon/:id', (req, res) => {
    // res.send(req.params.id)

    res.render('Show', {
        pageTitle: 'Details',
        pageHeader: " Gotta Catch 'Em All ",
        pokemon: pokemonData[req.params.id]
    })
})



//* =========== LISTENER
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    mongoose.connect(process.env.MONGODB_URI) // CONNECTS TO MONGO DB
    console.log('MongoDB connected!')
})