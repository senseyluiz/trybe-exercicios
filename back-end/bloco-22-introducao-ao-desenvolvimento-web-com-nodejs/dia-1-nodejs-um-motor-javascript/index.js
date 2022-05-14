const calculaimc = require('./imc');
const readline = require('readline-sync');

const peso = readline.question('Digite seu peso: ');
const altura = readline.question('Digite sua altura: ');

const imc = calculaimc(peso, altura);
console.log(imc);