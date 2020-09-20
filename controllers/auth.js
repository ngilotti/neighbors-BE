const { response } = require("express");

const bcrypt = require('bcryptjs');

const { generarJWT } = require('../helpers/jwt');
const Usuario = require('../models/usuario');
const { googleVerify } = require("../helpers/google-verfy");
const { findById } = require("../models/usuario");


const login = async(req, res = response) => {

    const { email, password } = req.body;

    try {

        // Verificar email
        const usuarioDb = await Usuario.findOne({ email });

        if (!usuarioDb) {
            return res.status(400).json({
                ok: false,
                msg: 'email no encontrado'
            });
        }


        // Verificar password
        const validPass = bcrypt.compareSync(password, usuarioDb.password);

        if (!validPass) {
            return res.status(400).json({
                ok: false,
                msg: 'password no valido'
            });
        }


        // Generar un TOKEN - JWT
        const token = await generarJWT(usuarioDb.id);


        res.status(202).json({
            ok: true,
            token
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado, hable con el administrador'
        })
    }

}


const googleSignIn = async(req, res = response) => {

        const googleToken = req.body.token;

        try {

            const { name, email, picture } = await googleVerify(googleToken);

            let nombreCortado = name.split(' ');
            let nombre = nombreCortado[nombreCortado.length - 2];
            let apellido = nombreCortado[nombreCortado.length - 1];


            // Verificar email
            const usuarioDb = await Usuario.findOne({ email });
            let usuario;


            if (!usuarioDb) {
                // si no existe el usuario
                usuario = new Usuario({
                    nombre: nombre,
                    apellido: apellido,
                    email: email,
                    password: '@@@',
                    img: picture,
                    google: true
                });

            } else {
                // existe usuario
                usuario = usuarioDb;
                usuario.google = true;

            } // end if


            // Guardar en DB
            await usuario.save();

            // Generar un TOKEN - JWT
            const token = await generarJWT(usuario.id);


            res.status(202).json({
                ok: true,
                token: token
            });

        } catch (error) {
            res.status(401).json({
                ok: false,
                msg: 'Token no es correcto',
            });
        } // end trycathc



    } // end googleSignIn





const renewJWT = async(req, res = response) => {


    const uid = req.uid;
    try {
        // Generar un TOKEN - JWT
        const token = await generarJWT(uid);


        res.status(202).json({
            ok: true,
            token: token
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: 'Ocurrio algo, comuniquese con el administrador'
        });
    }

}

module.exports = {
    login,
    renewJWT,
    googleSignIn
}