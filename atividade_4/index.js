const express = require('express');
const bodyparser = require('body-parser');
const querystring = require('querystring');

const app = express();

const porta = 3000;
const servidor = 'localhost';

app.use(bodyparser.urlencoded({extended: false}));
app.use('/contato', express.static(__dirname + '/public/contato'));

app.post('/contato', (req, res) => {

  console.log(req.body.nome);
  console.log(req.body.email);
  console.log(req.body.obs);

  res.redirect('/?' + querystring.stringify({"nome": req.body.nome}));
})

app.get('/', (req, res) => {
  res.send(`Contato de ${req.query.nome} realizado com sucesso`);
  res.end();
})

app.get('*', (req, res) => {
  res.status(404).send('Link inválido. Erro 404');
});

app.listen(porta, servidor, () => {
  console.log(`Ouvindo na porta ${porta}`);
})