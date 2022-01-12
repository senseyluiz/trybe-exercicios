// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .


let sum = (...rest) => {
  return rest.reduce((acc, numero) => acc + numero)
}

console.log(sum(1, 2, 3, 4, 5, 6));
