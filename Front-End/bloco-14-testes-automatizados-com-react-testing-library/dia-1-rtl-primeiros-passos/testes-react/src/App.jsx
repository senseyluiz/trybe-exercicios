import React from 'react'
import './App.css';

class App extends React.Component {
state = {
  email: '',
  saveEmail: '',
}

capturaEmail = (event) => {
  this.setState({
    email: event.target.value,
  })
}

enviar = () => {
  const { email } = this.state;
  this.setState({
    saveEmail: email,
  })
}

  render() {

    const {email, saveEmail } = this.state
    return (
      <div className="App">
        <label htmlFor="email">Email</label>
        <input
        type="email"
        id='email'
        value={email}
        onChange={this.capturaEmail}
        />

        <input
        id='btn-enviar'
        type='button'
        data-testid='id-send'
        value='Enviar'
        onClick={this.enviar}
        />

        <input type='button' value='Voltar' onClick={this.voltar} />

        <h4
        data-testid='id-email-user'
        >Email: { saveEmail }</h4>
      </div>
    );
  }

}

export default App;
