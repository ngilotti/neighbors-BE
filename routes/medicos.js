/*
    Medicos
    ruta: '/api/medicos'
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middleWares/validar-campos');
const { validarJWT } = require('../middleWares/validar-jwt');
const {
    getMedicos,
    crearMedico,
    actualizarMedico,
    borrarMedico
} = require('../controllers/medicos');


const router = Router();


router.get(
    '/',
    getMedicos
);

router.post(
    '/', [
        validarJWT,
        check('nombre', 'El nombre del medico es requerido').not().isEmpty(),
        check('apellido', 'El apellido del medico es requerido').not().isEmpty(),
        check('dni', 'El dni del medico es requerido').not().isEmpty(),
        check('dni', 'El dni debe ser un numero').isNumeric(),
        check('matricula', 'La matricula del medico es requerida').not().isEmpty(),
        check('matricula', 'La matricula debe ser un numero').isNumeric(),
        check('hospital', 'Hospital id no valido').isMongoId(),
        validarCampos
    ],
    crearMedico
);

router.put(
    '/:id', [
        validarJWT,
        check('nombre', 'El nombre del medico es requerido').not().isEmpty(),
        check('apellido', 'El apellido del medico es requerido').not().isEmpty(),
        check('dni', 'El dni del medico es requerido').not().isEmpty(),
        check('dni', 'El dni debe ser un numero').isNumeric(),
        check('matricula', 'La matricula del medico es requerida').not().isEmpty(),
        check('matricula', 'La matricula debe ser un numero').isNumeric(),
        check('hospital', 'Hospital id no valido').isMongoId(),
        validarCampos
    ],
    actualizarMedico
);

router.delete(
    '/:id',
    validarJWT,
    borrarMedico
);



module.exports = router;