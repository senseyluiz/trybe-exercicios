function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// 1 - O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let ulDays = document.querySelector("#days");

function criaCalendario() {
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let criaLi = document.createElement("li");
    criaLi.innerHTML = dezDaysList[i];
    criaLi.classList = "day";
    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || criaLi.innerText === 31) {
      criaLi.classList += " holiday";
    }

    if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
      criaLi.classList += " friday";
    }

    ulDays.appendChild(criaLi);
  }
}
criaCalendario();


// 2 - Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

let buttonsContainer = document.querySelector(".buttons-container");

function feriados(feriados) {
  let btnFeriado = document.createElement("button");
  btnFeriado.id = "btn-holiday";
  btnFeriado.innerHTML = "Feriados"
  buttonsContainer.appendChild(btnFeriado);
}
feriados()

// 3 - Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

let btnFeriado = document.querySelector("#btn-holiday");
btnFeriado.addEventListener('click', () => {
  for (let i = 0; i < ulDays.children.length; i++) {
    if (ulDays.children[i].classList.contains('holiday')) {
      if (ulDays.children[i].style.backgroundColor === 'red') {
        ulDays.children[i].style.backgroundColor = "rgb(238,238,238)"
      } else {
        ulDays.children[i].style.backgroundColor = 'red'
      }
    }
  }
})


// 4 - Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday".
// Adicione este botão como filho / filha da tag < div > com classe "buttons-container".

function sexta(sexta) {
  let criaBtnSexta = document.createElement("button");
  criaBtnSexta.id = "btn-friday";
  criaBtnSexta.innerHTML = sexta;
  buttonsContainer.appendChild(criaBtnSexta);
}
sexta('Sexta-Feira')

// 5 - Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

let btnSexta = document.querySelector("#btn-friday");
btnSexta.addEventListener('click', () => {
  for (let i = 0; i < ulDays.children.length; i++) {

    if (ulDays.children[i].classList.contains('friday')) {
      if (ulDays.children[i].style.color === 'red') {
        ulDays.children[i].style.color = '';
      } else {
        ulDays.children[i].style.color = 'red';
      }
    }
  }
})


// 6 - Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
//Dica - Propriedade: event.target .

ulDays.addEventListener('mouseover', (e) => {
  e.target.style.fontSize = '30px';
})

ulDays.addEventListener('mouseout', (e) => {
  e.target.style.fontSize = '20px';
})


// 7 - Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
let minhasTarefas = document.querySelector('.my-tasks')

function adicionaTarefa(tarefa) {
  let criaTarefa = document.createElement('span');
  criaTarefa.innerHTML = tarefa;

  minhasTarefas.appendChild(criaTarefa)
}

adicionaTarefa('Cozinhar: ')


// 8 - Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .


function legenda(cor) {
  let criaDiv = document.createElement('div');
  criaDiv.className = 'task';
  criaDiv.style.backgroundColor = cor;
  minhasTarefas.appendChild(criaDiv);
}

legenda('blue');
