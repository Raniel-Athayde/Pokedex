import React from "react";

const PokedexApp = (props) => {
  const { pokemons, loading } = props;
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
      </div>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon, index) => {
            return (
              <div key={pokemon.id}>
                <div>#{pokemon.id}</div>
                <div>{pokemon.name}</div>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PokedexApp;
