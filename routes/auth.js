/*
    Ruta: '/api/auth'
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth');
const { validarCampos } = require('../middleWares/validar-campos');


const router = Router();


router.post(
    '/', [
        check('email', 'El correo es obligatorio').not().isEmpty(),
        check('email', 'El formato de email no es correcto').isEmail(),
        check('password', 'El correo es obligatorio').not().isEmpty(),
        validarCampos
    ],
    login
)

module.exports = router;