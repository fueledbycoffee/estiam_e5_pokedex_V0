import React, { useState } from 'react';
import PokemonContext from '../../Provider/PokemonContext';

const SearchBox = () => {
    const [searchValue, setSearchValue] = useState('');


    return (
        <PokemonContext.Consumer>
            {({ selectPokemon }) => (
                <div>
                    <input value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                    <button onClick={() => selectPokemon(searchValue)}>SEARCH</button>
                </div>
            )}
        </PokemonContext.Consumer>

    );
}

export default SearchBox;