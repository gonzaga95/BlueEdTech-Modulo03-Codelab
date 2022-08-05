const termosSerivce = require('../services/termo.service');

const findAllTermosController = (req, res) => {
    const termos = termosSerivce.findAllTermosService();
    res.send(termos);
};

const findByIdTermoController = (req, res) => {
    const parametroId = Number(req.params.id);
    const escolhaTermo = termosSerivce.findByIdTermoService(parametroId);
    res.send(escolhaTermo);
};

module.exports = {
    findAllTermosController,
    findByIdTermoController,
};
