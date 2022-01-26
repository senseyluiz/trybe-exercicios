import React from 'react';
import Pokedex from './Pokedex';
import './Pokemon.css'
import PropTypes from 'prop-types'
class Pokemon extends React.Component{
  render(){
    const {imagemUrl, nome, tipo, peso, unidade, alternativo} = this.props;

    return(
      <section className='card'>
        <img src = {imagemUrl} alt={alternativo}/>
        <h2>Nome: {nome}</h2>
        <h3>Tipo: {tipo}</h3>
        <h3>Peso: {peso}{unidade}</h3>
      </section>
    )
  }
}

Pokemon.propTypes = {
  imagemUrl: PropTypes.string,
  nome: PropTypes.string,
  tipo: PropTypes.string,
  unidade: PropTypes.string,
  peso: PropTypes.number,
  alternativo: PropTypes.string
};
export default Pokemon;