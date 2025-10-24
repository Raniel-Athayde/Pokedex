export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log("Error in searchpokemon: ", error);
  }
};

export const getpokemons = async (offset = 0, limit = 50) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log("Error in searchpokemon: ", error);
  }
};
