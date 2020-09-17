/*
    Ruta: '/api/auth'
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleWares/validar-campos');
const { validarJWT } = require('../middleWares/validar-jwt');
const { login, renewJWT } = require('../controllers/auth');


const router = Router();


router.post(
    '/', [
        check('email', 'El correo es obligatorio').not().isEmpty(),
        check('email', 'El formato de email no es correcto').isEmail(),
        check('password', 'El correo es obligatorio').not().isEmpty(),
        validarCampos
    ],
    login
);

router.get(
    '/renew',
    validarJWT,
    renewJWT
)

module.exports = router;