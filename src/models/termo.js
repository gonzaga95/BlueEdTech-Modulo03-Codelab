const mongoose = require('mongoose');

const termoSchema = new mongoose.Schema({
    termo: {
        type: String,
        require: true,
    },
    descricao: {
        type: String,
        require: true,
    },
    logo: {
        type: String,
        require: true,
    },
    ano_de_criacao: {
        type: String,
        require: true,
    },
});

module.exports = termoSchema;
