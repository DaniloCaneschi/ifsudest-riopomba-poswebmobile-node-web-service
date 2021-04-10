const mongodb = require("mongoose");

const schema = mongodb.Schema;

const comentarioSchema = new schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  },
  comentario: {
    type: String
  },
  data: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Pessoa = mongodb.model("comentarios", comentarioSchema);