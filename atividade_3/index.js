const express = require('express');
const app = express();

const porta = 3000;
const servidor = 'localhost';

let rotaSobre = require('./sobre.js');
let rotaUsuario = require('./usuario.js');
let rotaValidador = require('./validador.js');

app.use('/', rotaSobre);
app.use('/', rotaUsuario);
app.use('/', rotaValidador);

app.get('*', (req, res) => {
  res.status(404).send('Link inválido. Erro 404');
});

app.listen(porta, servidor, () => {
  console.log(`Ouvindo na porta ${porta}`);
})