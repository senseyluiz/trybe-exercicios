const {leiaPeso, leiaAltura} = require('./perguntas')
const calcularImc = require('./imc')

const peso = leiaPeso();
const altura = leiaAltura();
const imc = calcularImc(peso, altura)

console.log(imc);
