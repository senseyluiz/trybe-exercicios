// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

let container = document.querySelector("#jokeContainer");

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => container.innerHTML = data.joke);
};
window.onload = () => fetchJoke();
