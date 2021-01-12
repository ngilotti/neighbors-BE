const { response } = require('express');
const Amenitie = require('../models/amenities');


// GETS
const getAmenities = async(req, res = response) => {

    const cid = req.params.id;

    const [amenities, total] = await Promise.all([
        Amenitie.find({ cliente: cid }, 'nombre sede lote encargado telefono cliente habilitado')
        .populate('sede', 'sid nombre habilitado')
        .populate('cliente', 'cid nombre habilitado'),
        Amenitie.countDocuments()
    ]);

    res.status(202).json({
        ok: true,
        amenities: amenities,
        total: total
    });
}; // end getClientes




// POSTS
const crearAmenities = async(req, res = response) => {

    const amenitie = new Amenitie({
        ...req.body
    });

    try {
        const { lote, cliente } = req.body;
        const existeAmenitie = await Amenitie.findOne({ lote, cliente });

        if (existeAmenitie) {
            return res.status(400).json({
                ok: false,
                msg: 'Amenitie ya registada'
            });
        } // end if

        const amenitieDB = await amenitie.save();

        res.json({
            ok: true,
            amenities: amenitieDB
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
    getAmenities,
    crearAmenities
}