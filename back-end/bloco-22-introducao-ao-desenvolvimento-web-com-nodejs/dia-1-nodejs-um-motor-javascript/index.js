const readlineSync = require('readline-sync')

console.log('[ 1 ] Calcular IMC\n',
            '[ 2 ] Calcular Velocidade\n',
            '[ 3 ] Sorteio de numeros');

function main() {
  const escolha = readlineSync.questionInt('Escolha uma opção: ');

  switch (escolha) {
    case 1:
      require('./imc')
      break;

      case 2:
      require('./velocidade')
      break;

      case 3:
        require('./sorteio')
      break;

    default:
      console.log('Número inválido. Saindo')
      break;
  }
}

main();
