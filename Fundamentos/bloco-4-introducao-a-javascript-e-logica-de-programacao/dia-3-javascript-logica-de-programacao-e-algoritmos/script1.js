let num = 10;
let fatorial = num;

for (let i = num; i > 1; i -= 1) {
  fatorial *= i - 1;
}

console.log(fatorial);
