//Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let palavra = "banana";
let split = [];
for (let i = palavra.length - 1; i >= 0; i--) {
  let pal = palavra.split("");
  split.push(pal[i]);
}
console.log(split.join(""));
