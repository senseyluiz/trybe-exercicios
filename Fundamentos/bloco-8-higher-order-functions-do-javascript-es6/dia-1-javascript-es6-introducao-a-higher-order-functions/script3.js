const hofResultado = (corretas, respUsuario, checando) => {

  return `Pontuação: ${checando(corretas, respUsuario )}`;
}

const checar = (respCorretas, respEstudante) => {
  let pontos = 0;
  for (let i = 0; i < respCorretas.length; i += 1) {

    if (respCorretas[i] === respEstudante[i]) {
      pontos += 1;
    }

    if (respEstudante[i] !== respCorretas[i] && respEstudante[i] !== "N.A") {
      pontos -= 0.5;
    }
  }
  return pontos;
}

const correto = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const estudante = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(hofResultado(correto, estudante, checar));
