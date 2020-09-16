/*
    ruta: '/api/hospitales'
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middleWares/validar-campos');
const { validarJWT } = require('../middleWares/validar-jwt');
const {
    getHospitales,
    crearHospital,
    actualizarHospital,
    borrarHospital
} = require('../controllers/hospitales');


const router = Router();


router.get(
    '/',
    getHospitales
);

router.post(
    '/', [
        validarJWT,
        check('razonSocial', 'El nombre del hospital es necesario').not().isEmpty(),
        check('cuit', 'El CUIT del hospital es necesaria').not().isEmpty(),
        check('cuit', 'El CUIT debe ser un numero').isNumeric(),
        validarCampos
    ],
    crearHospital
);

router.put(
    '/:id', [],
    actualizarHospital
);

router.delete(
    '/:id',
    borrarHospital
);



module.exports = router;