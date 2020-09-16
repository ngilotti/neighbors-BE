const { response } = require('express');

const Usuario = require('../models/usuario');
const Medicos = require('../models/medicos');
const Hospital = require('../models/hospital');
const { populate } = require('../models/usuario');
const usuario = require('../models/usuario');

const getTodo = async(req, res = response) => {

        const busqueda = req.params.busqueda;
        const regex = new RegExp(busqueda, 'i');

        const [usuarios, medicos, hospitales] = await Promise.all([
            Usuario.find({ nombre: regex }),
            Medicos.find({ nombre: regex }),
            Hospital.find({ razonSocial: regex })
        ]);

        res.json({
            ok: true,
            usuario: usuarios,
            medico: medicos,
            hospital: hospitales
        });

    } // end getTodo


const getDocumentosColeccion = async(req, res = response) => {

        const tabla = req.params.tabla;
        const busqueda = req.params.busqueda;
        const regex = new RegExp(busqueda, 'i');

        let data = [];

        switch (tabla) {
            case 'medicos':

                data = await Medicos.find({ nombre: regex })
                    .populate('usuario', 'email img role')
                    .populate('hospital', 'razonSocial img');
                break;

            case 'hospitales':

                data = await Hospital.find({ razonSocial: regex })
                    .populate('usuario', 'email img role');
                break;

            case 'usuarios':

                data = await Usuario.find({ nombre: regex });
                break;

            default:
                return res.status(400).json({
                    ok: false,
                    msg: 'La tabla solo puede que ser de tipo usuarios / medicos / hospitales'
                });

        } // end switch

        res.json({
            ok: true,
            resultados: data
        });

    } // end getDocumentosColeccion

module.exports = {
    getTodo,
    getDocumentosColeccion
}