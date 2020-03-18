import React, { useState } from 'react';
import PokemonContext from './PokemonContext';



const PokemonContextProvider = ({ children }) => {
    const [selectedPokemon, setSelectedPokemon] = useState();

    const loadPokemon = (name) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
          .then(res => res.json())
          .then(data => {
            setSelectedPokemon({
                name: data.name,
                id: data.id,
                image: data.sprites.front_default,
            });
          });
      }

    return (
        <PokemonContext.Provider value={{ selectedPokemon, selectPokemon: loadPokemon }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonContextProvider;