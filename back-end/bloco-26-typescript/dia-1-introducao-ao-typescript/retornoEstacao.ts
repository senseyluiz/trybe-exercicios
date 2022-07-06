import readlineSync from "readline-sync"
import mesesAno from './mesesAno'
import estacoesAno from "./estacoesAno"

enum hemisferio {
  Norte = "Norte",
  Sul = "Sul",
}

let mes = readlineSync.keyInSelect(Object.keys(mesesAno), "Qual mês você está? ");

let hemisferioAtual = readlineSync.keyInSelect(Object.keys(hemisferio), "Em que hemisfério  você se encontra? ")

mes += 1
hemisferioAtual += 1



console.log("MES DO ANO", mes)
console.log("HEMISFERIO", hemisferioAtual)

// 