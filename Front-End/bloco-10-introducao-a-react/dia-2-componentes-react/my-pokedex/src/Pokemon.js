import React from 'react';

class Pokemon extends React.Component{
  render(){
    return (
      <article key={this.props.id}>

        <img src={this.props.image} alt = {this.name}/>
        <h2> {this.props.name}</h2>
        <h3> {this.props.type}</h3> 
        <h3>{`Peso: ${this.props.averageWheight.value} ${this.props.averageWheight.measurementUnit}`}</h3> 

      </article>
    )
  }
}
export default Pokemon;