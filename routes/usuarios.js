/*
    Ruta: /api/usuarios
*/
const { Router } = require('express');
const { check, validationResult } = require('express-validator');

const { getUsuarios, createUsuarios, actualizarUsuario, borrarUsuario } = require('../controllers/usuarios');
const { validarCampos } = require('../middleWares/validar-campos');
const { validarJWT } = require('../middleWares/validar-jwt');


const router = Router();


router.get(
    '/',
    validarJWT,
    getUsuarios
);

router.post(
    '/', [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('apellido', 'El apellido es obligatorio').not().isEmpty(),
        check('dni', 'El dni es obligatorio').not().isEmpty(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        check('email', 'El correo es obligatorio').not().isEmpty(),
        check('email', 'No cumple con el formato valido de email').isEmail(),
        validarCampos
    ],
    createUsuarios
);

router.put(
    '/:id', [
        validarJWT,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('apellido', 'El apellido es obligatorio').not().isEmpty(),
        check('dni', 'El dni es obligatorio').not().isEmpty(),
        check('email', 'El correo es obligatorio').not().isEmpty(),
        check('email', 'No cumple con el formato valido de email').isEmail(),
        check('role', 'El role es obligatorio').not().isEmpty(),
        validarCampos
    ],
    actualizarUsuario
);

router.delete(
    '/:id',
    validarJWT,
    borrarUsuario
);



module.exports = router;