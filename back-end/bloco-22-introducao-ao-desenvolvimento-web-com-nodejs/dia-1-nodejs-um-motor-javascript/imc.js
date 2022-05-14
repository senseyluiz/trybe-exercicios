const readline = require('readline-sync');
function calculaImc (peso, altura) {
  return (peso / Math.pow(altura, 2)).toFixed(2);
}


const peso = readline.questionInt('Digite seu peso: ');
const altura = readline.questionFloat('Digite sua altura: ');

const imc = calculaImc(peso, altura);
let mensagem = ""

switch (true) {
  case imc < 18,5:
    mensagem = `ÌMC: ${imc}: Abaixo do peso (magreza)`
    break;

  case imc < 25:
    mensagem = `ÌMC: ${imc}: Peso normal`
    break;

  case imc < 30:
    mensagem = `ÌMC: ${imc}: Sobrepeso`
    break;

  case imc < 35:
    mensagem = `ÌMC: ${imc}: Obesidade grau I`
    break;

  case imc < 40:
    mensagem = `ÌMC: ${imc}: Obesidade grau II`
    break;

  default:
    mensagem = `ÌMC: ${imc}: Obesidade grau III e IV`
    break;
}
console.log(mensagem);