import { useEffect, useState } from "react";
import "./App.css";
import "./styles.css";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import Pokedex from "./Components/Pokedex";
import { getPokemons } from "./api";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const result = await getPokemons();
      setPokemons(result.results);
      setLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    fetchPokemons();
  }, []);
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading} />
    </div>
  );
}

export default App;
