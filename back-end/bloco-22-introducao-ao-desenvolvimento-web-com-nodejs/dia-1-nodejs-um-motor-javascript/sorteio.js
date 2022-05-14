const readlineSync = require('readline-sync');

const numDigitado = readlineSync.questionInt('Digite um numero entre 0 e 10: ')
const numSorteado = Math.round(Math.random() * 10);

if(numDigitado === numSorteado){
  console.log("Parabéns, número correto!");
}else {
  console.log(`Opa, não foi dessa vez. O número era ${numSorteado}`)
}

