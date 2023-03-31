import React from "react";

function NavBar({ pokemonList, onPokemonClick}) {
  return (
    <nav>
        {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => onPokemonClick(index)}>
            {pokemon.name}</button>))}
    </nav>
  );
}

export default NavBar;
