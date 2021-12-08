const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let servicioSchema = new Schema({
  categoria: {
    type: String
  },
  descripcion: {
    type: String
  },
  nombre: {
    type: String
  },
  precio: {
    type: Number
  }

}, {
    collection: 'servicios'
  })

module.exports = mongoose.model('Servicio', servicioSchema)