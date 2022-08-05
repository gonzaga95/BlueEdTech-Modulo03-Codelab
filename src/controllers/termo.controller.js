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

const createTermoController = (req, res) => {
    const termo = req.body;
    const newTermo = termosSerivce.createTermoService(termo);
    res.send(newTermo);
};

const editTermoController = (req, res) => {
    const idParam = Number(req.params.id);
    const termoEdit = req.body;
    const updatedTermo = termosSerivce.editTermoService(idParam, termoEdit);
    res.send(updatedTermo);
};

const deleteTermoController = (req, res) => {
    const idParam = req.params.id;
    termosSerivce.deleteTermoService(idParam);
    res.send({ message: 'Termo deletado com sucesso!' });
};

module.exports = {
    findAllTermosController,
    findByIdTermoController,
    createTermoController,
    editTermoController,
    deleteTermoController,
};
