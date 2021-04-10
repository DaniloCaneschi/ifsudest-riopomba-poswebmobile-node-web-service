const express = require('express');
const bodyParser = require("body-parser");
const mongodb = require('mongoose');


const app = express();

const porta = 3000;
const servidor = 'localhost';

// ------------------------------------------
// Banco de dados

const conexao = require('./setup/db').mongoUrl;

mongodb
    .connect(conexao, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Conexão realizada com sucesso ao mongodb"))
    .catch(erro => console.log(erro));
// ------------------------------------------

// ------------------------------------------
// parse dos dados em json

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// ------------------------------------------

app.use('/contato', express.static(__dirname + '/public/contato'));

const comentario = require("./routes/comentario");
app.use("/comentario", comentario);

app.get('*', (req, res) => {
  res.status(404).send('Link inválido. Erro 404.');
});

app.listen(porta, servidor, () => {
  console.log(`Ouvindo na porta ${porta}`);
})