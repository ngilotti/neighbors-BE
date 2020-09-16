const { response } = require('express');

const Hospital = require('../models/hospital');
const usuario = require('../models/usuario');


const getHospitales = async(req, res) => {

        const hospitales = await Hospital.find()
            .populate('usuario', 'email role img');


        res.status(400).json({
            ok: true,
            hospitales: hospitales
        });

    } // end getHospitales

const crearHospital = async(req, res) => {

        const uid = req.uid;
        const hospital = new Hospital({
            usuario: uid,
            ...req.body
        });


        try {
            const { cuit } = req.body;

            const existeCuit = await Hospital.findOne({ cuit });

            if (existeCuit) {
                return res.status(400).json({
                    ok: false,
                    msg: 'CUIT ya registado'
                });
            }

            const hospitalDB = await hospital.save();

            res.json({
                ok: true,
                hospital: hospitalDB
            });

        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'Error inesperado, comuniquese con el administrador'
            });
        }


    } // end getHospitales

const actualizarHospital = (req, res) => {
        res.json({
            ok: true,
            msg: 'actualizarHospital'
        });
    } // end getHospitales

const borrarHospital = (req, res) => {
        res.json({
            ok: true,
            msg: 'borrarHospital'
        });
    } // end getHospitales



module.exports = {
    getHospitales,
    crearHospital,
    actualizarHospital,
    borrarHospital
}