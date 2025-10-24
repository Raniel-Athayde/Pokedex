import React from "react";

const Navbar = () => {
  const logoimg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div style={{ paddingRight: "280px" }}>My Pokedex using:</div>
      <img alt="pokeapi logo" src={logoimg} className="navbar-img" />
    </nav>
  );
};

export default Navbar;
