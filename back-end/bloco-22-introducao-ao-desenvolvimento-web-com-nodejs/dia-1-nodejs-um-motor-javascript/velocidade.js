const readlineSync = require('readline-sync');

const velocidade = (distancia, tempo) => {
  return distancia / tempo;
}

const distancia = readlineSync.questionInt("Digite a distancia em metros: ");
const tempo = readlineSync.questionInt('Digite o tempo em segundos: ')


const velocidadeMedia = velocidade(distancia, tempo);
console.log(velocidadeMedia);