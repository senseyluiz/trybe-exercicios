// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçã', 'Pêra', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Granola', 'Aveia', 'Whey'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  let salada = [...fruit, ...additional];
  return salada;
};

console.log(fruitSalad(specialFruit, additionalItens));
