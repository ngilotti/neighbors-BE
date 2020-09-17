const { response } = require('express');
const Medico = require('../models/medicos');


const getMedicos = async(req, res = response) => {

        const medicos = await Medico.find()
            .populate('usuario', 'email role img')
            .populate('hospital', 'razonSocial cuit img');

        res.json({
            ok: true,
            medico: medicos
        });
    } // end getMedicos


const crearMedico = async(req, res = response) => {

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


const actualizarMedico = async(req, res = response) => {

        const mid = req.params.id;
        const uid = req.uid

        try {

            const medico = await Medico.findById(mid);

            // Valido la existencia del medico
            if (!medico) {
                res.status(400).json({
                    ok: false,
                    msg: 'No se encontro ningun medico, revise el id'
                });
            } // end if

            const cambioMedico = {
                ...req.body,
                usuario: uid
            }

            const medicoActualizado = await Medico.findByIdAndUpdate(mid, cambioMedico, { new: true });

            res.status(200).json({
                ok: true,
                msg: 'Actuaizado',
                medico: medicoActualizado
            });


        } catch (error) {

            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'Ocurrio un error, comunicarse con el administrador'
            });

        } // end trycatch

    } // end actualizarMedico


const borrarMedico = async(req, res = response) => {

        const mid = req.params.id;

        try {

            const medico = Medico.findById(mid);

            // validar la existencia del medico
            if (!medico) {
                res.status(400).json({
                    ok: false,
                    msg: 'No se encontro medico, revisar id'
                });
            } // end if

            await Medico.findByIdAndDelete(mid);


            res.status(200).json({
                ok: true,
                msg: 'Medico Eliminado'
            });

        } catch (error) {

            console.log(error);

            res.status(500).json({
                ok: false,
                msg: 'Ocurrio un error, comunicarse con el administrador'
            });

        } // end trycatch

    } // end borrarMedico



module.exports = {
    getMedicos,
    crearMedico,
    actualizarMedico,
    borrarMedico
}