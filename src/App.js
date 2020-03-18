import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './Components/atoms/SearchBox';
import PokeInfobox from './Components/atoms/PokeInfobox';
import PokemonContext from './Provider/PokemonContext';
import PokemonContextProvider from './Provider/PokemonContextProvider';

class App extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <PokemonContextProvider>
        <div>
          <SearchBox />
          <PokeInfobox />
        </div>
      </PokemonContextProvider>
    );
  }
}

export default App;
