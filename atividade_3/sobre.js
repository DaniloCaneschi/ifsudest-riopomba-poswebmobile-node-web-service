let express = require('express');
let rotas = express.Router();
const path = require('path');

rotas.get('/sobre', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'sobre.html'));
});

module.exports = rotas;