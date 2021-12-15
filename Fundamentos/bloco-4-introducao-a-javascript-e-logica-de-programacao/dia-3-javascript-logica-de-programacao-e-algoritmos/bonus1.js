// Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let n = 5

// *****
// *****
// *****
// *****
// *****
let linha = "";

for (let i = 0; i < n; i++) {
  linha += "*";
}

for (let i = 0; i < n; i++) {
  console.log(linha);
}


//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// *
// **
// ***
// ****
// *****
console.log("-----------------/////------------------");

linha = "";

for (let i = 0; i < n; i++) {
  linha += "*";
  console.log(linha);
}

console.log("-----------------/////------------------");



//Agora inverta o lado do triângulo. Por exemplo:

//     *
//    **
//   ***
//  ****
// *****

linha = "";
let pos = n;
for (let l = 0; l < n; l++) {
  for (let c = 0; c < n; c++) {
    if (c < pos) {
      linha += " ";
    } else {
      linha += "*";
    }
  }
  console.log(linha);
  linha = "";
  pos -= 1;
}
