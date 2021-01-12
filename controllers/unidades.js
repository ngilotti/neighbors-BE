const { response } = require('express');
const Unidad = require('../models/unidad');


// GETS
const getUnidades = async(req, res = response) => {

    const cid = req.params.id;

    const [unidades, total] = await Promise.all([
        Unidad.find({ cliente: cid }, 'padron lote licencia superficie direccion cliente vecino situacion latitud longitud comentario estado alta habilitado')
        .populate('vecino', 'uid apellido nombre telefono img')
        .populate('cliente', 'cid nombre habilitado'),
        Unidad.countDocuments()
    ]);

    res.status(202).json({
        ok: true,
        unidades: unidades,
        total: total
    });
}; // end getClientes




// POSTS
const crearUnidad = async(req, res = response) => {

    const { padron, ...campos } = req.body;

    try {

        const existePadron = await Unidad.findOne({ padron });

        if (existePadron) {
            return res.status(400).json({
                ok: false,
                msg: 'El padron ya fue registado'
            });
        } // end if

        campos.alta = Date.now();
        campos.padron = padron;

        const unidad = new Unidad(campos);

        const unidadDB = await unidad.save(campos);

        res.json({
            ok: true,
            unidad: unidadDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado, comuniquese con el administrador'
        });
    }

}; // end altaUnidad




// DELETES



module.exports = {
    getUnidades,
    crearUnidad
}