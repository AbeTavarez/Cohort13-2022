const getPokemons = async () => {
  try {
    const data = await fetch(
      "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
    );
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
getPokemons()