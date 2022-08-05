const termosSerivce = require('../services/termo.service');

const findAllTermosController = (req, res) => {
    const termos = termosSerivce.findAllTermosService();
    res.send(termos);
};

module.exports = {
    findAllTermosController,
};
