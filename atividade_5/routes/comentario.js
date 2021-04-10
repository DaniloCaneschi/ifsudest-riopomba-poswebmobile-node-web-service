const express = require('express');
const router = express.Router();

const bcrypt = require("bcrypt");

const Comentario = require("../models/comentario");

router.post("/", (req, res) => {
  Comentario.findOne({
    email: req.body.email,
    nome: req.body.nome,
    comentario: req.body.comentario
  })
      .then(comentario => {
        if (comentario)
          return res.status(400).json({erro: "Nome, e-mail e comentário já foram registrados"});
        else {
          const novoComentario = Comentario({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            comentario: req.body.comentario
          });

          // criptografar a senha
          bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(novoComentario.senha, salt, function(err, hash) {
              if (err) throw err;

              novoComentario.senha = hash;

              novoComentario
                  .save()
                  .then(p => res.json(p))
                  .catch(erro => console.log(erro));
            });
          });
        }
      })
      .catch(erro => console.log(erro));
})

router.get("/", (req, res) => res.json("{}"));

module.exports = router;