const findAllTermosService = () => {
    return termos;
};

const findByIdTermoService = (parametroId) => {
    return termos.find((termo) => termo.id === parametroId);
};

const createTermoService = (newTermo) => {
    const newId = termos.length + 1;
    newTermo.id = newId;
    termos.push(newTermo);
    return newTermo;
};

const editTermoService = (id, termoEdit) => {
    termoEdit['id'] = id;
    const termoIndex = termos.findIndex((termo) => termo.id == id);
    termos[termoIndex] = termoEdit;
};

const deleteTermoService = (id) => {
    const termoIndex = termos.findIndex((termo) => (termo.id = id));
    return termos.splice(termoIndex, 1);
};

module.exports = {
    findAllTermosService,
    findByIdTermoService,
    createTermoService,
    editTermoService,
    deleteTermoService,
};
