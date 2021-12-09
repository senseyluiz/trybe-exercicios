const contratada = (nomeCompleto) => {
  return {
    nome: nomeCompleto,
    email: `${nomeCompleto}@trybe.com`
  };
}

const newEmployees = (nome) => {
  const employees = {
    id1: nome('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: nome('uiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: nome('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees(contratada));
