const { response } = require('express');
const { findByIdAndDelete } = require('../models/hospital');

const Hospital = require('../models/hospital');
const usuario = require('../models/usuario');


const getHospitales = async(req, res = response) => {

        const hospitales = await Hospital.find()
            .populate('usuario', 'email role img');


        res.status(400).json({
            ok: true,
            hospitales: hospitales
        });

    } // end getHospitales

const crearHospital = async(req, res = response) => {

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

const actualizarHospital = async(req, res = response) => {

        const hid = req.params.id;
        const uid = req.uid;

        try {

            const hospital = await Hospital.findById(hid);

            // Valida hospital
            if (!hospital) {
                return res.status(404).json({
                    ok: false,
                    msg: 'Hospital no encontrado, revise el id'
                });
            } // end if


            const cambiosHospital = {
                ...req.body,
                usuario: uid
            }

            const hospitalActualizado = await Hospital.findByIdAndUpdate(hid, cambiosHospital, { new: true });

            res.status(200).json({
                ok: true,
                msg: 'Actuaizado',
                hospital: hospitalActualizado
            });


        } catch (error) {

            console.log(error);

            res.status(500).json({
                ok: true,
                msg: 'Ocurrio un problema, comunicarse con el administrador'
            });
        }


    } // end getHospitales




const borrarHospital = async(req, res = response) => {

        const hid = req.params.id;

        try {

            const hospital = await Hospital.findById(hid);

            // Valida hospital
            if (!hospital) {
                return res.status(404).json({
                    ok: false,
                    msg: 'Hospital no encontrado, revise el id'
                });
            } // end if

            await Hospital.findByIdAndDelete(hid);

            res.status(200).json({
                ok: true,
                msg: 'Hospital eliminado',
            });


        } catch (error) {

            console.log(error);

            res.status(500).json({
                ok: true,
                msg: 'Ocurrio un problema, comunicarse con el administrador'
            });
        }

    } // end getHospitales



module.exports = {
    getHospitales,
    crearHospital,
    actualizarHospital,
    borrarHospital
}