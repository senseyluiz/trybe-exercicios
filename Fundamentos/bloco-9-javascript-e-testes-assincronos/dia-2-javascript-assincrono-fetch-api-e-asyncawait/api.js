const url = `https://api.coincap.io/v2/assets`;


let ul = document.querySelector("ul")

const apli = () => {
  fetch(url)
    .then((response) => response.json())
    .then((dados) => {
      let arrayDados = dados.data;
      arrayDados.forEach((moeda, index) => {
        if (index < 10) {
          let criaLi = document.createElement("li");
          criaLi.innerHTML = moeda.id;
          ul.appendChild(criaLi);
        }
      })
    });
}

apli();
