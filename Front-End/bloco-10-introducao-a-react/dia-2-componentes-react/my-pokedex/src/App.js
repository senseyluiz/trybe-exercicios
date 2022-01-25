import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class App extends React.Component{
  render(){
    return (
      
      <main>
        {
        pokemons.map(pokemon => {
         return <Pokemon key={pokemon.id} image = {pokemon.image} name ={pokemon.name} type={pokemon.type} alt={pokemon.name}/>
        })
        }
      </main>
      );
  }  
}

export default App;
