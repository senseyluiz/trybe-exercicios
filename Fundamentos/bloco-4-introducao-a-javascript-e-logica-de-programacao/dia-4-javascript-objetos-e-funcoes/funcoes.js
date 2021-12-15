// * 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false


console.log('Exercício 1');



function ehPalindrome(string) {
  let split = string.split('').reverse();
  let stringReverse = split.join("")

  if (string.toLowerCase() === stringReverse.toLowerCase()) {
    return true
  } else {
    return false
  }
}


console.log(ehPalindrome("ama"));

console.log('-----------------------////-----------------------');




console.log('Exercício 2');

// * 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function maiorValor(arr) {
  let maior = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > maior) {
      maior = arr[i];
      index = i;
    }
  }
  return index;
}
console.log(maiorValor([2, 3, 6, 7, 10, 1]));

console.log('-----------------------////-----------------------');



console.log('Exercício 3');

// * 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

function maiorValor(arr) {
  let menor = arr[0];
  let index = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < menor) {
      menor = arr[i];
      index = i;
    }
  }
  return index;
}
console.log(maiorValor([2, 4, 6, 7, 10, 0, -3]));

console.log('-----------------------////-----------------------');


console.log('Exercício 4');


// * Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .


function nomeMaior(arrNome) {
  //let nomeMaior = arrNome[0];
  for (nome of arrNome) {
    if (nome.length > nomeMaior.length) {
      nomeMaior = nome;
    }
  }
  return nomeMaior;
}

console.log(nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

console.log('-----------------------////-----------------------');


console.log('Exercício 5');

// * 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

function repete(arrInt) {
  let contNumero = 0;
  let contRepetido = 0
  let maisRepete = 0;

  for (let index in arrInt) {
    let verificaNumero = arrInt[index];
    for (let index2 in arrInt) {
      if (verificaNumero === arrInt[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      maisRepete = index;
    }
    contNumero = 0;
  }

  return arrInt[maisRepete];
}

console.log(repete([2, 3, 2, 5, 8, 2, 3]));

console.log('-----------------------////-----------------------');


console.log('Exercício 6');

// * 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .


console.log('-----------------------////-----------------------');



console.log('Exercício 7');

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false


console.log('-----------------------////-----------------------');
