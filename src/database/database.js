const mongoose = require('mongoose');

function connectMongoDb() {
    mongoose
        .connect('mongodb://localhost:27017/termos-db', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('Banco de dados conectado'))
        .catch((error) => console.log('Erro:' + error));
}

module.exports = connectMongoDb;
