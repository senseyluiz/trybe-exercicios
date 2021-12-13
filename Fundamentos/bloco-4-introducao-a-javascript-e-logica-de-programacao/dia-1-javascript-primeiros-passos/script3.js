// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 95;
const b = 80;
const c = 59;

let maior = a;
if (b > maior) {
  maior = b;
}
if (c > maior) {
  maior = c;
}

console.log("O maior é: ", maior);
