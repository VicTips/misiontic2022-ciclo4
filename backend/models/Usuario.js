const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usuarioSchema = new Schema({
  nombre: {
    type: String
  },
  rol: {
    type: String
  },
  login: {
    type: String
  },

  contacto: {
    type: Number
  }

}, {
    collection: 'usuarios'
  })

module.exports = mongoose.model('Usuario', usuarioSchema)