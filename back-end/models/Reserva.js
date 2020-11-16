const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    cliente: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
    },
    rg: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        required: true,
    },
    endereco: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    nascimento: {
        type: String,
        required: true,
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