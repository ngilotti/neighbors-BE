/*
    Ruta: /api/clientes
*/
const { Router } = require('express');
const { check } = require('express-validator');

const {
    actualizarClientes,
    borrarCliente,
    clientesPorAdmin,
    createClientes,
    getClientes,
} = require('../controllers/clientes');

const { validarCampos } = require('../middleWares/validar-campos');
const { validarJWT } = require('../middleWares/validar-jwt');


const router = Router();

// GETs
router.get(
    '/',
    validarJWT,
    getClientes
);

router.get(
    '/clientesPorAdmin/:id',
    validarJWT,
    clientesPorAdmin
);



// POSTs
router.post(
    '/', [
        validarJWT,
        check('nombre', 'El nombre del cliente es necesario').not().isEmpty(),
        check('razonSocial', 'El nombre del cliente es necesario').not().isEmpty(),
        check('tipo', 'El tipo de cliente es necesario').not().isEmpty(),
        check('unidades', 'Las unidades son requeridas y deben representarse en formato numerico').isNumeric(),
        check('cuit', 'El CUIT el requerido y deben representarse en formato numerico').isNumeric(),
        check('direccion', 'El nombre del cliente es necesario').not().isEmpty(),
        check('provincia', 'El nombre del cliente es necesario').not().isEmpty(),
        check('localidad', 'El nombre del cliente es necesario').not().isEmpty(),
        validarCampos
    ], createClientes


    // TODO: Campos q validar y llamar funciones
);



// PUTs
router.put(
    '/:id', [
        validarJWT,
        check('nombre', 'El nombre es necesario').not().isEmpty(),
        check('unidades', 'Las unidades son requeridas').not().isEmpty(),
        check('tipo', 'El tipo de cliente es requerido').not().isEmpty(),
        check('admin', 'El admin es requerido').not().isEmpty(),
        check('direccion', 'La direccion es necesaria').not().isEmpty(),
        validarCampos
    ], actualizarClientes
);



// DELETE
router.delete(
    '/:id',
    validarJWT,
    borrarCliente

);


module.exports = router;