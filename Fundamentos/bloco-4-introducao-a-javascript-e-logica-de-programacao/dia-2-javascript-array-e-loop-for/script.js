let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


//* 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

//* 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0;
for (i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}
console.log(`A soma de todos os numeros é: ${soma}`);

//* 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let media = soma / numbers.length;

console.log(`A média ds números é: ${media}`);


//* 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
  console.log('Valor maior que 20');
} else if (media < 20) {
  console.log("Valor menor que 20");
} else {
  console.log("Valor igual a 20");
}


//* 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maior = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maior) {
    maior = numbers[i];
  }
}
console.log(`O maior valor contido é: ${maior}`);

//* 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impar = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 === 1) {
    impar += 1;
  }
}
console.log(`Possui ${impar} números ímpares.`);

//* 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menor = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < menor) {
    menor = numbers[i]
  }
}

console.log(`O menor valor contido é: ${menor}`);

//* 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let arrNum = [];
for (let i = 1; i <= 25; i += 1) {
  arrNum.push(i);
}

console.log(`O array criado: ${arrNum}`);

//* 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for (let i = 0; i < arrNum.length; i += 1) {
  console.log(`A divisãd de ${arrNum[i]} por 2 é: ${arrNum[i] / 2}`);
}
