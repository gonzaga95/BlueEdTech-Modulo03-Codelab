const mongoose = require('mongoose');

const termoSchema = new mongoose.Schema({
    termo: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: true,
    },
    ano_de_criacao: {
        type: Number,
        required: true,
    },
});

const Termos = mongoose.model('Termos', termoSchema);

module.exports = Termos;
