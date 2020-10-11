const { response } = require("express");

const bcrypt = require('bcryptjs');

const { generarJWT } = require('../helpers/jwt');
const Usuario = require('../models/usuario');


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
                token,
                usuario: usuarioDb
            });


        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'Error inesperado, hable con el administrador'
            });
        }

    } // end login



const renewJWT = async(req, res = response) => {


        const uid = req.uid;

        try {

            // Generar un TOKEN - JWT
            const token = await generarJWT(uid);

            // Obtener usuario por uid
            const usuarioDb = await Usuario.findById(uid);

            if (!usuarioDb) {
                return res.status(400).json({
                    ok: false,
                    msg: 'id no encontrado'
                });
            } // end if

            res.status(202).json({
                ok: true,
                token: token,
                usuario: usuarioDb
            });

        } catch (error) {
            console.log(error);
            res.status(400).json({
                ok: false,
                msg: 'Ocurrio algo, comuniquese con el administrador'
            });
        }

    } // end renewJWT

module.exports = {
    login,
    renewJWT,
}