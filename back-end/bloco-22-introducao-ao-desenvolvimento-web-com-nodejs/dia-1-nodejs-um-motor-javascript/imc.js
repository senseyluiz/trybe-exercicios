function calculaImc (peso, altura) {
  return (peso / Math.pow(altura, 2)).toFixed(2);
}

module.exports = calculaImc;