const { response } = require('express');

const Usuario = require('../models/usuario');
const Cliente = require('../models/cliente');
const { populate } = require('../models/usuario');
const usuario = require('../models/usuario');

const getTodo = async(req, res = response) => {

        const busqueda = req.params.busqueda;
        const regex = new RegExp(busqueda, 'i');

        const [usuarios, clientes, medicos] = await Promise.all([
            Usuario.find({ nombre: regex }),
            Cliente.find({ nombre: regex }),
            Medicos.find({ nombre: regex })
        ]);

        res.json({
            ok: true,
            usuario: usuarios,
            cliente: cliente,
        });

    } // end getTodo


const getDocumentosColeccion = async(req, res = response) => {

        const tabla = req.params.tabla;
        const busqueda = req.params.busqueda;
        const regex = new RegExp(busqueda, 'i');


        let data = [];

        switch (tabla) {
            case 'usuarios':
                data = await Usuario.find({ nombre: regex })
                break;
            case 'clientes':
                data = await Cliente.find({ nombre: regex })
                    .populate('admin', 'apellido nombre telefono img');
                break;

            default:
                return res.status(400).json({
                    ok: false,
                    msg: 'La tabla debe ser usuario o cliente'
                });
        } // end switch

        res.json({
            ok: true,
            resultados: data,
        });

    } // end getDocumentosColeccion



module.exports = {
    getTodo,
    getDocumentosColeccion
}