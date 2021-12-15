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
