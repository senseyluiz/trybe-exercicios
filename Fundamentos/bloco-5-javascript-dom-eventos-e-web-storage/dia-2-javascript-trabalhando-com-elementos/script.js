// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

let body = document.querySelector('body');
let titulo = document.createElement("h1");
titulo.innerText = "Exercício 5.2 - JavaScript DOM";
body.appendChild(titulo)


// 2 - Adicione a tag main com a classe main-content como filho da tag body ;

let mainContent = document.createElement("main");
mainContent.className = 'main-content';
body.appendChild(mainContent);

// 3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let main = document.querySelector(".main-content");
let centerContent = document.createElement("Section");
centerContent.className = "center-content";
main.appendChild(centerContent);


// 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let texto = document.createElement("p");
texto.innerText = "Este é um texto aleatório";
centerContent.appendChild(texto)


// 5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let leftContent = document.createElement("section");
leftContent.className = "left-content";
main.appendChild(leftContent)


// 6 -Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let rightContent = document.createElement("section");
rightContent.className = "right-content";
main.appendChild(rightContent)


// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

let contentLeft = document.querySelector(".left-content")
let imagem = document.createElement("img");
imagem.src = 'https://picsum.photos/200';
contentLeft.appendChild(imagem)


// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let contentRight = document.querySelector(".right-content")
let criaUl = document.createElement("ul");
const numeros = ["um", "dois", 'tres', 'qutro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let i = 0; i < numeros.length; i += 1) {
  let criaLi = document.createElement("li");
  criaLi.innerText = numeros[i];
  criaUl.appendChild(criaLi);
}
contentRight.appendChild(criaUl)

// 9 -- Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
for (let i = 0; i < 3; i++) {
  let criaH3 = document.createElement("h3");
  criaH3.innerText = `Este é o subtítulo ${i + 1}`;
  main.appendChild(criaH3);
}



// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

// 1 - Adicione a classe title na tag h1 criada;

let h1 = document.querySelector("h1");
h1.className = "title";


// 2 - Adicione a classe description nas 3 tags h3 criadas;

let h3S = document.querySelectorAll('h3');

for (let i = 0; i < h3S.length; i++) {
  h3S[i].className = "description"
}

// 3 - Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
main.removeChild(contentLeft);

// 4 - Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;

contentRight.style.margin = 'auto';


// 5 - Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

let contentCenter = document.querySelector('.center-content');
contentCenter.style.backgroundColor = 'green';

// 6 - Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

let ul = document.querySelector("ul");
ul.lastChild.remove();
ul.lastChild.remove();
