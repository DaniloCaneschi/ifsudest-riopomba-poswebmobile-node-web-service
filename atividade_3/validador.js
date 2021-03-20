let express = require('express');
let rotas = express.Router();

// Verifica se o cep é válido utilizando expressão regular
rotas.get('/[0-9]{5}-[0-9]{3}', (req, res) => {
  res.send('Cep válido');
});

module.exports = rotas;