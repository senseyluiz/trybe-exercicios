import React from "react";
class Form extends React.Component{
  constructor(){
    super()

    this.state = {
      nome: '',
      email: '',
      texto: '',
      enviar: ''
    }
  }

  mudarTexto = (e) => {
    this.setState({
      nome: e.target.value
    })
  }

  render() {
    return (

      <form >

        <div>
          <label>Nome</label>
          <input type="text" name="nome" value={this.state.nome} onChange={this.mudarTexto}/>
        </div>

        <div>
          <label > Email </label>
          <input type="email" name="email" />
        </div>

        <div>
          <textarea name="texto" id="" cols="30" rows="10"></textarea>
        </div>

        <div>
          <button name="enviar"> Enviar </button>
        </div>

      </form>

    )
  }
}

export default Form;