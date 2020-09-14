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


        res.json({
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

module.exports = {
    login
}