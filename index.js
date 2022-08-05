const express = require('express');
const cors = require('cors');
const port = 3000;

const routes = require('./src/routes/termo.route');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/termos', routes);

// app.get('/termos/get-all', (req, res) => {
//     res.send(termos);
// });

// app.get('/termos/get-all/:id', (req, res) => {
//     const idParam = req.params.id;
//     const escolhaTermo = termos.find((termo) => termo.id == idParam);
//     res.send(escolhaTermo);
// });

app.listen(port, () => {
    console.log(`A aplicação está rodando na porta http://localhost:${port}/`);
});
