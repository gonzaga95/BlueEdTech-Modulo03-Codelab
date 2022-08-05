const router = require('express').Router();
const controllerTermos = require('../controllers/termo.controller');

router.get('/get-all', controllerTermos.findAllTermosController);
router.get('/termo/:id', controllerTermos.findByIdTermosController);

module.exports = router;
