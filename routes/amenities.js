/*
    Ruta: /api/amenities
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middleWares/validar-campos');
const { validarJWT } = require('../middleWares/validar-jwt');

const {
    getAmenities,
    crearAmenities
} = require('../controllers/amenities');


const router = Router();


// GETS
router.get(
    '/:id',
    // '/',
    validarJWT,
    getAmenities
);


// POSTS
router.post(
    '/', [
        validarJWT,
        check('nombre', 'El padron es necesario').not().isEmpty(),
        check('sede', 'El lote es necesario').not().isEmpty(),
        check('cliente', 'La licencia es necesaria').not().isEmpty(),
        check('lote', 'La dirección es necesaria').not().isEmpty(),
        validarCampos
    ], crearAmenities

);



module.exports = router;