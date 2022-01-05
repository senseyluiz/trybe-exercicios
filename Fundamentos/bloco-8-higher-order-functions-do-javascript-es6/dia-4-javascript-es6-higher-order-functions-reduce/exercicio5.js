// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(acc, name) {
  // escreva seu código aqui
  acc += name.split('a').length - 1;
  acc += name.split('A').length - 1;
  return acc;
}

let resultado = names.reduce(containsA, 0)
console.log(resultado);
