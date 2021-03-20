let express = require('express');
let rotas = express.Router();

rotas.get('/usuario/:codigo', (req, res) => {
  res.send('usuario: ' + req.params.codigo);
});

// devolve um json
rotas.get('/usuario/:codigo/nome/:nome', (req, res) => {
  res
      .status(200)
      .json({usuario: req.params.codigo, nome: req.params.nome})
});

rotas.post('/usuario', (req, res) => {
  res.send('usuario cadastrado');
});

module.exports = rotas;