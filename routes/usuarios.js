/*
    Ruta: /api/usuarios
*/
const { Router } = require('express');
const { check } = require('express-validator');

const {

    getUsuarios,
    getAdmin,
    createUsuarios,
    actualizarUsuario,
    borrarUsuario,
    createVecino,
    validarVecino

} = require('../controllers/usuarios');

const { validarCampos } = require('../middleWares/validar-campos');
const { validarJWT } = require('../middleWares/validar-jwt');


const router = Router();


router.get(
    '/',
    validarJWT,
    getUsuarios
);

router.get(
    '/admin',
    validarJWT,
    getAdmin
);


router.post(
    '/', [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('apellido', 'El apellido es obligatorio').not().isEmpty(),
        check('dni', 'El dni es obligatorio').not().isEmpty(),
        check('dni', 'El dni debe ser un numero').isNumeric(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        check('telefono', 'El telefono es obligatorio').not().isEmpty(),
        check('email', 'El correo es obligatorio').not().isEmpty(),
        check('email', 'No cumple con el formato valido de email').isEmail(),
        check('role', 'El role es obligatorio').not().isEmpty(),
        validarCampos
    ],
    createUsuarios
);

router.post(
    '/prevecino', [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('apellido', 'El apellido es obligatorio').not().isEmpty(),
        check('dni', 'El dni es obligatorio y debe ser un numero').isNumeric(),
        check('telefono', 'El telefono es obligatorio').not().isEmpty(),
        check('role', 'El role es obligatorio').not().isEmpty(),
        validarCampos
    ],
    createVecino
);

router.put(
    '/validar', [
        validarJWT,
        // TODO: Terminar para poder probar!!!!
        check('dni', 'El dni es obligatorio').not().isEmpty(),
        check('dni', 'El dni debe ser un numero').isNumeric(),
        validarCampos
    ],
    validarVecino
);


router.put(
    '/:id', [
        validarJWT,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('apellido', 'El apellido es obligatorio').not().isEmpty(),
        check('dni', 'El dni es obligatorio').not().isEmpty(),
        check('dni', 'El dni debe ser un numero').isNumeric(),
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