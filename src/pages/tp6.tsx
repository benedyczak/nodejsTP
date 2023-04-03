import { useState, useEffect } from 'react';

export default function Tp6() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9999');
      const json = await response.json();
      setPokemonList(json.results);
      console.log(json.results.map(pokemon => pokemon.name));

    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Liste des Pokémon</h1>
      <ul>
        {pokemonList.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}
