const readline = require('readline-sync')

const lerFloat = (Mensagem) =>{
  return readline.questionFloat(Mensagem)
} 
const leiaPeso = () => {  
  return lerFloat("Digite seu peso: ");
} 

const leiaAltura = () => {
  return lerFloat("Digite sua altura: ")
} 

const teste = readline.q
module.exports = {leiaPeso, leiaAltura}