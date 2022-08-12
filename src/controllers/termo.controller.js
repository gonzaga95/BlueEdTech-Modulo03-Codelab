const termosSerivce = require('../services/termo.service');
const mongoose = require('mongoose');

const findAllTermosController = async (req, res) => {
    const allTermos = await termosSerivce.findAllTermosService();

    if (allTermos.length == 0) {
        res.status(404).send({ message: 'Não existe nenhum termo cadastrado' });
    }

    res.status(200).send(allTermos);
};

const findByIdTermoController = async (req, res) => {
    const parametroId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(parametroId)) {
        return res.status(400).send({ message: 'ID não encontrado' });
    }

    const termoEscolhido = await termosSerivce.findByIdTermoService(
        parametroId,
    );
    res.status(200).send(termoEscolhido);
};

const createTermoController = async (req, res) => {
    const termo = req.body;

    if (!termo || !termo.descricao || !termo.logo || !termo.ano_de_criacao) {
        return res.status(400).send({
            message: 'Todos os campos precisam ser preenchidos',
        });
    }

    const newTermo = await termosSerivce.createTermoService(termo);
    res.status(201).send(newTermo);
};

const editTermoController = async (req, res) => {
    const parametroId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(parametroId)) {
        return res.status(400).send({ message: 'ID não encontrado' });
    }

    const termoEdit = req.body;

    if (!termo || !termo.descricao || !termo.logo || !termo.ano_de_criacao) {
        return res.status(400).send({
            message: 'Todos os campos precisam ser preenchidos',
        });
    }

    const updatedTermo = await termosSerivce.editTermoService(
        parametroId,
        termoEdit,
    );
    res.status(200).send(updatedTermo);
};

const deleteTermoController = async (req, res) => {
    const parametroId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(parametroId)) {
        return res.status(400).send({ message: 'ID não encontrado' });
    }

    await termosSerivce.deleteTermoService(parametroId);
    res.status(202).send({ message: 'Termo deletado com sucesso!' });
};

module.exports = {
    findAllTermosController,
    findByIdTermoController,
    createTermoController,
    editTermoController,
    deleteTermoController,
};
