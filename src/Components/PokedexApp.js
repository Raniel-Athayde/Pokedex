import React from "react";

const PokedexApp = (props) => {
  const { pokemons, loading } = props;
  const breakPoints = [
    20, 22, 24, 26, 28, 36, 38, 40, 42, 47, 49, 51, 53, 55, 57, 59, 73, 78, 80,
    82, 85, 87, 89, 91, 97, 99, 101, 103, 105, 110, 112, 117, 119, 121, 130,
    139, 141,
  ];
  const breakTwice = [
    83, 95, 106, 107, 108, 113, 114, 115, 122, 123, 124, 125, 126, 127, 128,
    131, 132, 133, 137, 142, 143,
  ];
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
            const shouldBreak = breakPoints.includes(pokemon.id);
            const shouldBreakTwice = breakTwice.includes(pokemon.id);
            return (
              <React.Fragment key={pokemon.id}>
                <div>
                  <div>#{pokemon.id}</div>
                  <div>{pokemon.name}</div>
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
                {shouldBreak || shouldBreakTwice ? (
                  <div className="break" />
                ) : null}
                {shouldBreakTwice ? <div className="break" /> : null}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PokedexApp;
