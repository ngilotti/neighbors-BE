const { response } = require('express');
const Medico = require('../models/medicos');


const getMedicos = async(req, res) => {

        const medicos = await Medico.find()
            .populate('usuario', 'email role img')
            .populate('hospital', 'razonSocial cuit img');

        res.json({
            ok: true,
            medico: medicos
        });
    } // end getMedicos


const crearMedico = async(req, res) => {

        const uid = req.uid;
        const { dni, matricula } = req.body;

        const medico = new Medico({
            usuario: uid,
            ...req.body
        });

        try {


            const existeDni = await Medico.findOne({ dni });
            if (existeDni) {
                return res.status(400).json({
                    ok: false,
                    msg: 'El dni ya fue registado'
                });
            } // end existeDNI

            const existeMatricula = await Medico.findOne({ matricula });
            if (existeMatricula) {
                return res.status(400).json({
                    ok: false,
                    msg: 'La matricula ya fue registado'
                });
            } // end existeMatricula

            const medicoDB = await medico.save();

            res.json({
                ok: true,
                medico: medicoDB
            });

        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'Error inesperado, comuniquese con el administrador'
            });
        }

    } // end crearMedico


const actualizarMedico = (req, res) => {
        res.json({
            ok: true,
            msg: 'actualizarMedico'
        });
    } // end actualizarMedico


const borrarMedico = (req, res) => {
        res.json({
            ok: true,
            msg: 'borrarMedico'
        });
    } // end borrarMedico



module.exports = {
    getMedicos,
    crearMedico,
    actualizarMedico,
    borrarMedico
}