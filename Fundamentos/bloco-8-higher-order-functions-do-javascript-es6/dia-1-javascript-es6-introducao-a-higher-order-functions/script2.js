const checando = (numeroUsuario, numeroSorteado) => {
  return numeroSorteado === numeroUsuario;
}

const resultadoSorteio = (numeroUsuario, funcChecar) => {
  let sorteado = parseInt(Math.random() * 6);
  return funcChecar(numeroUsuario, sorteado) ? 'Parabens, você venceu' : "Tente novamente!";
}

console.log(resultadoSorteio(2, checando));
