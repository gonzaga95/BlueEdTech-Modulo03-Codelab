const express = require('express');
const port = 3000;

const app = express();

app.use(express.json());

const termos = [
    {
        id: 1,
        termo: 'JavaScript',
        descricao: 'Lorem ipsum',
        logo: 'url()',
        anoDeCriacao: '1997',
    },
    {
        id: 2,
        termo: 'Phyton',
        descricao: 'Lorem ipsum ipsum',
        logo: 'url()',
        anoDeCriacao: '1997',
    },
    {
        id: 2,
        termo: 'Java',
        descricao: 'Ipsum lorem lorem ipsum',
        logo: 'url()',
        anoDeCriacao: '1997',
    },
];

app.get('/termos/get-all', (req, res) => {
    res.send(termos);
});

app.listen(port, () => {
    console.log(`A aplicação está rodando na porta http://localhost:${port}/`);
});
