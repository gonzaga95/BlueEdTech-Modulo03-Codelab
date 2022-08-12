const termos = require('../models/termo');

const findAllTermosService = async () => {
    const allTermos = await termos.find();
    return allTermos;
};

const findByIdTermoService = async (parametroId) => {
    const oneTermo = await termos.findById(parametroId);
    return oneTermo;
};

const createTermoService = async (termo) => {
    const newTermo = await termos.create(termo);
    return newTermo;
};

const editTermoService = async (id, termoEdit) => {
    const termoEdited = await termos.findByAndUpdate(id, termoEdit);
    return termoEdited;
};

const deleteTermoService = async (id) => {
    return await termos.findByAndDelete(id);
};

module.exports = {
    findAllTermosService,
    findByIdTermoService,
    createTermoService,
    editTermoService,
    deleteTermoService,
};
