const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {

  console.log("finciona");
  res.status(200).json({message: "Funciona"})
})


module.exports = route;