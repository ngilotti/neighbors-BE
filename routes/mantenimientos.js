/*
    Ruta: /api/mantenimientos
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT } = require('../middleWares/validar-jwt');
const { validarCampos } = require('../middleWares/validar-campos');

const {
    getEventos,
    getLocalidad,
    getProvincia,
    getSedes,
    getTiposCliente,
    createEvento,
    createLocalidad,
    createProvincia,
    createSede,
    createTiposCliente,
    borrarTipoCliente
} = require('../controllers/manteminientros');


const router = Router();

// GET

router.get(
    '/dame-tipos-clientes',
    validarJWT,
    getTiposCliente
);

router.get(
    '/dame-provincias',
    validarJWT,
    getProvincia
);

router.get(
    '/dame-localidad',
    validarJWT,
    getLocalidad
);

router.get(
    '/dame-sedes',
    validarJWT,
    getSedes
);

router.get(
    '/dame-eventos',
    validarJWT,
    getEventos
);


// POST

router.post(
    '/cargar-tipos', [
        validarJWT,
        check('nombre', 'El nombre del tipo de cliente es necesario').not().isEmpty(),
        validarCampos
    ], createTiposCliente

);

router.post(
    '/cargar-provincia', [
        validarJWT,
        check('nombre', 'El nombre de la Provincia es necesario').not().isEmpty(),
        validarCampos
    ], createProvincia

);

router.post(
    '/cargar-localidad', [
        validarJWT,
        check('nombre', 'El nombre de la localidad es necesario').not().isEmpty(),
        check('provincia', 'La provincia es requerida').not().isEmpty(),
        validarCampos
    ], createLocalidad

);

router.post(
    '/cargar-sedes', [
        validarJWT,
        check('nombre', 'El nombre del tipo de cliente es necesario').not().isEmpty(),
        validarCampos
    ], createSede

);

router.post(
    '/cargar-eventos', [
        validarJWT,
        check('nombre', 'El nombre del tipo de cliente es necesario').not().isEmpty(),
        validarCampos
    ], createEvento

);


// PUT

// router.put(
//     '/:id', [
//         validarJWT,
//         check('nombre', 'El nombre del cliente es necesario').not().isEmpty(),
//         validarCampos
//     ], actualizarClientes
// );



// DELETE

router.delete(
    '/borrar-tipo-cliente/:id',
    validarJWT,
    borrarTipoCliente

);


module.exports = router;