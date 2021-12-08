const soma = require("./soma.js");

describe("Requisito de soma", () => {
  it("Será adicionado os valores 4 e 5 e deve retornar 9", () => {
    expect(9).toBe(soma(4, 5));
  })

  it("Será adicionado os valores 0 e 0 e deve retornar 0", () => {
    expect(0).toBe(soma(0, 0));
  })

  it("dispara um erro caso um dos parametros seja uma string", () => {
    expect(() => soma(4, '5')).toThrowError();
    expect(() => soma(4, '5')).toThrowError('parameters must be numbers');

  })
})
