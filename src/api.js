export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log("Error in searchpokemon: ", error);
  }
};

export const catchPokemons = async (limit = 151, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log("Error in getPokemons: ", error);
  }
};
