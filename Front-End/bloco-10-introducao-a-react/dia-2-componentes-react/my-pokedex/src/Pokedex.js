import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css'

class Pokedex extends React.Component{
  render(){    
    const {pokemons} = this.props;

    return (

      <section>

        {pokemons.map(({id, image, name, type, averageWeight}) =>  <Pokemon imagemUrl = { image} nome = {name} tipo={type} peso = {averageWeight.value} unidade ={averageWeight.measurementUnit} alternativo = {name} key ={id}/>)}

      </section>      
    )
  }
}
export default Pokedex;
