/*
    Ruta: /api/unidades
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middleWares/validar-campos');
const { validarJWT } = require('../middleWares/validar-jwt');

const {
    getUnidades,
    crearUnidad
} = require('../controllers/unidades');

const router = Router();


// GETS
router.get(
    '/:id',
    // '/',
    validarJWT,
    getUnidades
);


// POSTS
router.post(
    '/', [
        validarJWT,
        check('padron', 'El padron es necesario').not().isEmpty(),
        check('lote', 'El lote es necesario').not().isEmpty(),
        check('licencia', 'La licencia es necesaria').not().isEmpty(),
        check('direccion', 'La dirección es necesaria').not().isEmpty(),
        check('cliente', 'El cliente es necesario').not().isEmpty(),
        check('vecino', 'El vecino es necesario'),
        check('estado', 'El estado es necesario').not().isEmpty(),
        validarCampos
    ], crearUnidad

);

// DELETES


module.exports = router;