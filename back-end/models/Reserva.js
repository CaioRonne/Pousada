const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    cliente: {
        type: String,
        required: true
    },
    hospedes: {
        type: String,
        required: true
    },
    datacheckin: {
        type: String,
        required: true,
    },
    datacheckout: {
        type: String,
        required: true,
    },
    funcionario: {
        type: String,
        required: true,
    },
    observacao: {
        type: String,
        required: false,
    }
})

module.exports = mongoose.model('Reserva', esquema, 'reservas')