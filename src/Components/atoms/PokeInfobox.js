import React from 'react';
import PokemonContext from '../../Provider/PokemonContext';

const PokeInfobox = () => {
    return (
        <PokemonContext.Consumer>
            {({ selectedPokemon }) => {
                if (!selectedPokemon)
                    return (
                        <div>
                            <h2>No Pokemon loaded</h2>;
                        </div>
                    )

                return (
                    <div>
                        <h1>#{selectedPokemon.id} - {selectedPokemon.name}</h1>
                        <div>
                            <img src={selectedPokemon.image} alt={selectedPokemon.name} />
                        </div>
                    </div>
                );
            }
            }
        </PokemonContext.Consumer>
    )
}


export default PokeInfobox;