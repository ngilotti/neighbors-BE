const { response } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');


// GET
const getUsuarios = async(req, res = response) => {

    const desde = Number(req.query.desde) || 0;

    const [usuario, total] = await Promise.all([
        Usuario.find({}, 'nombre apellido dni telefono email role img habilitado')
        .skip(desde)
        .limit(5),
        Usuario.countDocuments()
    ]);

    res.status(202).json({
        ok: true,
        usuario: usuario,
        total: total
    });
}; // end getUsuarios

const getAdmin = async(req, res = response) => {

    const [usuarios] = await Promise.all([
        Usuario.find({ role: 'ADMIN_ROLE' }, 'nombre apellido dni telefono email role img habilitado'),
        Usuario.countDocuments()
    ]);

    res.status(202).json({
        ok: true,
        usuarios: usuarios
    });
}; // end getAdmin


// POST
const createUsuarios = async(req, res = response) => {

    const { email, password, dni } = req.body;



    try {
        const existeEmail = await Usuario.findOne({ email });
        if (existeEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'el correo ya fue registado'
            });
        }

        const existeDni = await Usuario.findOne({ dni });
        if (existeDni) {
            return res.status(400).json({
                ok: false,
                msg: 'el dni ya fue registado'
            });
        }


        const usuario = new Usuario(req.body);

        // Encriptar password
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);


        // Guardar Usuario
        await usuario.save();

        //Generar TOKEN - JWT
        const token = await generarJWT(usuario.id);

        res.json({
            ok: true,
            usuario: usuario,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... Revisar log'
        });

    }

}; // end createUsuarios

const createVecino = async(req, res = response) => {

    const { dni, ...campos } = req.body;

    try {

        const existeDni = await Usuario.findOne({ dni });
        if (existeDni) {
            return res.status(400).json({
                ok: false,
                msg: 'el dni ya fue registado'
            });
        }

        campos.dni = dni;

        const usuario = new Usuario(campos);

        // Guardar Usuario
        await usuario.save();

        //Generar TOKEN - JWT
        const token = await generarJWT(usuario.dni);

        res.json({
            ok: true,
            usuario: usuario,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... Revisar log'
        });

    }

}; // end createVecino


// PUT
const actualizarUsuario = async(req, res = response) => {

    const uid = req.params.id;

    try {

        const usuarioDB = await Usuario.findById(uid);

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un usuario con ese id'
            });
        }

        // Actualizar usuario
        const { password, google, email, dni, ...campos } = req.body;

        if (usuarioDB.email !== email) {

            const existeEmail = await Usuario.findOne({ email });
            if (existeEmail) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe un usuario con ese email'
                });
            }
        } // end if



        if (usuarioDB.dni !== dni) {
            const existeDni = await Usuario.findOne({ dni });
            if (existeDni) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe un usuario con ese dni'
                });
            }
        } // end if



        if (!usuarioDB.google) {
            campos.email = email;
        } else if (usuarioDB.email !== email) {

            return res.status(400).json({
                ok: false,
                msg: 'Usuarios de google no pueden cambiar su correo'
            });
        }
        campos.dni = dni;

        const usuarioActualizado = await Usuario.findByIdAndUpdate(uid, campos, { new: true });

        res.json({
            ok: true,
            usuario: usuarioActualizado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado consultar log'
        });
    }

}; // end actualizarUsuario

const validarVecino = async(req, res = response) => {

    const { dni } = req.body;

    try {

        const usuarioDB = await Usuario.findOne({ dni });

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'El dni es incorrecto' // no existe dni
            });
        } else if (usuarioDB.habilitado) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya fue validado'
            });
        } // end if

        res.json({
            ok: true,
            usuario: usuarioDB.id
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado consultar log'
        });
    }

}; // end actualizarUsuario


// DELETE
const borrarUsuario = async(req, res = response) => {

    const uid = req.params.id;

    try {

        const usuarioDB = await Usuario.findById(uid);

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un usuario con ese id'
            });
        }

        await Usuario.findByIdAndDelete(uid);


        res.json({
            ok: true,
            msg: "Usuario eliminado",
            usuario: usuarioDB
        });

    } catch (error) {

        console.log(error);
        res.status(404).json({
            ok: false,
            msg: "Error inesperado, consultar al administrador"
        });
    }
}; // end borrarUsuario


// Exports
module.exports = {
    getUsuarios,
    getAdmin,
    createUsuarios,
    actualizarUsuario,
    borrarUsuario,
    createVecino,
    validarVecino
}