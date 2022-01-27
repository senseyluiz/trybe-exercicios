import React from "react";
 
class Botao extends React.Component{

  constructor(){
    super()
    this.state = {

      frase: "",
      contador: 0
      

    }
    this.escrever = this.escrever.bind(this)
  }

  escrever(frase) {
    console.log(frase);
    this.setState({
      frase: 'Outra coisa',
      contador: this.state.contador + 1,
    })
  }

  sss


  render(){
    const { texto, frase }= this.props   

    return (
      <button onClick={ () => this.escrever(frase)}>{ this.state.contador}</button>
    );
  }
}

export default Botao;