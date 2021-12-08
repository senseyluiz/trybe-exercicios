const myRemove = require("./myRemove.js");

describe("Testando myRemove", () => {
  it("Será adicionado um array [1, 2, 3, 4] e o numero 3 para remover", () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3))
  })

  it('Será adicionado um array [1, 2, 3, 4] e o numero 3 para remover e testar se não aparece o array correto', () => {
    expect(true).not.toBe(myRemove([1, 2, 3, 4], 3));
  })

  it('Será adicionado um array [1, 2, 3, 4] e o numero 5 para remover e testar se aparece o array correto', () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
  })

})
