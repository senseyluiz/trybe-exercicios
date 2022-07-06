"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const mesesAno_1 = __importDefault(require("./mesesAno"));
var hemisferio;
(function (hemisferio) {
    hemisferio["Norte"] = "Norte";
    hemisferio["Sul"] = "Sul";
})(hemisferio || (hemisferio = {}));
let mes = readline_sync_1.default.keyInSelect(Object.keys(mesesAno_1.default), "Qual mês você está? ");
let hemisferioAtual = readline_sync_1.default.keyInSelect(Object.keys(hemisferio), "Em que hemisfério  você se encontra? ");
mes += 1;
hemisferioAtual += 1;
console.log("MES DO ANO", mes);
console.log("HEMISFERIO", hemisferioAtual);
// switch (hemisferioAtual ) {
//   case 1:
//     if(mes === )
//     break;
//   default:
//     break;
// }
