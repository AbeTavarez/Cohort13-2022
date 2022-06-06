const express = require("express");
const pokemonData = require("./Models/pokemon");
require("dotenv").config(); // configuration for dotenv
const mongoose = require("mongoose");
const PokemonModel = require("./Models/PokemonModel");

//* ========== SETUP
const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.set("views", "./Views");

//* ======== Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))

//* ========== ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon", async (req, res) => {
  try {
    // fetch data from the db
    const pokemons = await PokemonModel.find();

    res.render("Index", {
      pageTitle: "Pokemon",
      pageHeader: "See All The Pokemon!",
      pokemonData: pokemons,
    });
  } catch (error) {
      console.log(error);
  }
});

app.get("/pokemon/new", (req, res) => {
  res.render("New", {
    pageTitle: "New Pokemon",
    pageHeader: "Create a new Pokemon",
  });
});

//* POST REQUEST HANDLER
app.post("/pokemon", async (req, res) => {
  const newPokemon = req.body; // create a newPokemon variable

  // add a img property to the object
  newPokemon.img = `http://img.pokemondb.net/artwork/${req.body.name.toLowerCase()}`;

  console.log(newPokemon);

  //* Save the new pokemon to the db
  await PokemonModel.create(newPokemon, (error, result) => {
    if (error) {
      console.log(error);
    }

    console.log(result);
  });
  // More stuff
  res.redirect('/pokemon')
});

app.get("/pokemon/:id", async (req, res) => {
  try {
      console.log(req.params.id)
      const pokemon = await PokemonModel.findById(req.params.id)
      console.log('POKEMON FOUND!', pokemon);

    res.render("Show", {
        pageTitle: "Details",
        pageHeader: " Gotta Catch 'Em All ",
        pokemon: pokemon,
      });

  } catch (error) {
      console.log(error)
  }

  
});

//* =========== LISTENER
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  mongoose.connect(process.env.MONGODB_URI); // CONNECTS TO MONGO DB
  console.log("MongoDB connected!");
});
