const calculaimc = require('./imc');
const readline = require('readline-sync');

const peso = readline.questionInt('Digite seu peso: ');
const altura = readline.questionFloat('Digite sua altura: ');

const imc = calculaimc(peso, altura);
console.log(imc);