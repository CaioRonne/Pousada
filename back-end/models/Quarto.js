const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   numero: {
        type: String,
        required: true,
    },
    capacidade: {
        type: String,
        required: true,
    },
    camacasal: {
        type: String,
        required: true,
    },
    camasolteiro: {
        type: String,
        required: true,
    },
    reserva: {
        type: String,
        required: false,
    }
})

module.exports = mongoose.model('Quarto', esquema, 'quartos')