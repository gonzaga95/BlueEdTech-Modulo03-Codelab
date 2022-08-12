const Termos = require('../models/termo');

const findAllTermosService = async () => {
    const allTermos = await Termos.find();
    return allTermos;
};

const findByIdTermoService = async (parametroId) => {
    const oneTermo = await Termos.findById(parametroId);
    return oneTermo;
};

const createTermoService = async (termo) => {
    const newTermo = await Termos.create(termo);
    return newTermo;
};

const editTermoService = async (id, termoEdit) => {
    const termoEdited = await Termos.findByAndUpdate(id, termoEdit);
    return termoEdited;
};

const deleteTermoService = async (id) => {
    return await Termos.findByAndDelete(id);
};

module.exports = {
    findAllTermosService,
    findByIdTermoService,
    createTermoService,
    editTermoService,
    deleteTermoService,
};
