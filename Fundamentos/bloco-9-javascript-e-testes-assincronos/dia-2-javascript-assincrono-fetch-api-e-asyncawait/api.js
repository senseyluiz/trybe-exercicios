const url = `https://api.coincap.io/v2/assets`;


let ul = document.querySelector("ul")

const apli = () => {
  fetch(url)
    .then((response) => response.json())
    .then((dados) => {
      let arrayDados = dados.data;
      arrayDados.forEach((moeda, index) => {
        if (index < 10) {
          let simbolo = moeda.symbol;
          let precoUsd = Number(moeda.priceUsd)
          let criaLi = document.createElement("li");
          criaLi.innerText = `${simbolo} : ${precoUsd.toFixed(2)}`;
          ul.appendChild(criaLi);
        }
      })
    });
}

apli();
