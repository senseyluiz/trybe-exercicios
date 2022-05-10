const {leiaPeso, leiaAltura} = require('./perguntas')
const calcularImc = require('./imc')

const peso = leiaPeso();
const altura = leiaAltura();
const imc = calcularImc(peso, altura).toFixed(2)
let mensagem = ''

switch (true) {
  case imc < 18.5:
    mensagem = 'Abaixo do peso (magreza)';
    break;
  case imc < 25:
    mensagem = "Peso normal";
    break;
  case imc < 30:
    mensagem = "Acima do peso (sobrepeso)";
    break;
  case imc < 35:
    mensagem = "Obesidade grau I";
    break;
  case imc < 40:
    mensagem = 'Obesidade grau II'
    break;
  case imc >= 40:
    mensagem = "Obesidade graus III e IV";
    break;
  default:
    break;
}

console.log("IMC: ", imc, mensagem);
