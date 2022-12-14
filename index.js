const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/termo.route');
const connectMongoDb = require('./src/database/database');

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/termos', routes);

connectMongoDb();

app.listen(port, () => {
    console.log(`A aplicação está rodando na porta http://localhost:${port}/`);
});
