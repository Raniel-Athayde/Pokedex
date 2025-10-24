import React, { useState } from "react";
import { searchPokemon } from "../api";

const Searchbar = () => {
  const [search, setSearch] = useState("dito");
  const [pokemon, setPokemon] = useState();
  const onChangeHandler = (e) => {
    console.log("pokemon: ", e.target.value);
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search);
  };

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokemon" onChange={onChangeHandler} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
      <br></br>
      {pokemon ? (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{pokemon.name}</div>
            <div>{pokemon.height + "m"}</div>
            <div>{pokemon.weight + "kg"}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Searchbar;
