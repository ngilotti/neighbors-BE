/*
    Ruta: /api/clientes
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { createClientes, getClientes, actualizarClientes, borrarCliente } = require('../controllers/clientes');

const { validarCampos } = require('../middleWares/validar-campos');
const { validarJWT } = require('../middleWares/validar-jwt');


const router = Router();


router.get(
    '/',
    validarJWT,
    getClientes
);

router.post(

    '/', [
        validarJWT,
        check('razonSocial', 'El nombre del cliente es necesario').not().isEmpty(),
        check('tipo', 'El tipo de cliente es necesario').not().isEmpty(),
        check('unidades', 'Las unidades son requeridas y deben representarse en formato numerico').isNumeric(),
        check('cuit', 'El CUIT del hospital es necesaria').not().isEmpty(),
        check('cuit', 'El CUIT debe ser un numero').isNumeric(),
        check('provincia', 'La provincia es necesario').not().isEmpty(),
        check('localidad', 'La localidad es necesario').not().isEmpty(),
        validarCampos
    ], createClientes


    // TODO: Campos q validar y llamar funciones
);


router.put(
    '/:id', [
        validarJWT,
        check('direccion', 'La direccion es necesaria').not().isEmpty(),
        check('latitud', 'La latitud es necesaria').not().isEmpty(),
        check('longitud', 'La longitud es necesaria').not().isEmpty(),
        check('usuario', 'El usuario es requerido').not().isEmpty(),
        validarCampos
    ], actualizarClientes
);

router.delete(
    '/:id',
    validarJWT,
    borrarCliente

);


module.exports = router;