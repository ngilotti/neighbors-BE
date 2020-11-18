const { response } = require('express');

// Funciones
const { generarJWT } = require('../helpers/jwt');
const { populate } = require('../models/provincia');

// Modelos
const Evento = require('../models/eventos');
const Localidad = require('../models/localidad');
const Provincia = require('../models/provincia');
const Sede = require('../models/sedes');
const tipo_cliente = require('../models/tipo_cliente');



// GET

const getEventos = async(req, res = response) => {

    const [eventos] = await Promise.all([
        Evento.find({}, 'nombre habilitado'),
        Evento.countDocuments()
    ]);

    res.status(202).json({
        ok: true,
        eventos: eventos
    });
}; // end getEventos

const getLocalidad = async(req, res = response) => {
    const pid = req.query.provincia;

    const [localidad] = await Promise.all([
        Localidad.find({ pid }, 'nombre provincia habilitado')
        .populate('provincia', 'nombre'),
        Localidad.countDocuments()
    ]);

    res.status(202).json({
        ok: true,
        localidades: localidad
    });
}; // end getLocalidad

const getProvincia = async(req, res = response) => {

    const [provincias] = await Promise.all([
        Provincia.find({}, 'nombre habilitado'),
        Provincia.countDocuments()
    ]);

    res.status(202).json({
        ok: true,
        provincias: provincias
    });
}; // end getProvincia

const getSedes = async(req, res = response) => {

    const [sedes] = await Promise.all([
        Sede.find({}, 'nombre habilitado'),
        Sede.countDocuments()
    ]);

    res.status(202).json({
        ok: true,
        sedes: sedes
    });
}; // end getSedes

const getTiposCliente = async(req, res = response) => {

    const [tipos] = await Promise.all([
        tipo_cliente.find({}, 'nombre habilitado'),
        tipo_cliente.countDocuments()
    ]);

    res.status(202).json({
        ok: true,
        tipos: tipos
    });
}; // end getTiposClientes


// POST

const createEvento = async(req, res = response) => {

    const evento = new Evento({
        ...req.body
    });


    try {
        const { nombre } = req.body;

        const existeNombre = await Evento.findOne({ nombre });

        if (existeNombre) {
            return res.status(400).json({
                ok: false,
                msg: 'El tipo de cliente ya fue registado'
            });
        } // end if

        const eventoDB = await evento.save();

        res.json({
            ok: true,
            evento: eventoDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado, comuniquese con el administrador'
        });
    }

}; // end createEvento

const createLocalidad = async(req, res = response) => {

    const localidad = new Localidad({
        ...req.body
    });

    try {
        const { nombre } = req.body;

        const existeNombre = await Localidad.findOne({ nombre });

        if (existeNombre) {
            return res.status(400).json({
                ok: false,
                msg: 'La localidad ya fue registada'
            });
        } // end if

        const localidadDB = await localidad.save();

        res.json({
            ok: true,
            localidad: localidadDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado, comuniquese con el administrador'
        });
    }

}; // end createLocalidad

const createSede = async(req, res = response) => {
    const sede = new Sede({
        ...req.body
    });


    try {
        const { nombre } = req.body;

        const existeNombre = await Sede.findOne({ nombre });

        if (existeNombre) {
            return res.status(400).json({
                ok: false,
                msg: 'El tipo de cliente ya fue registado'
            });
        } // end if

        const sedeDB = await sede.save();

        res.json({
            ok: true,
            sede: sedeDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado, comuniquese con el administrador'
        });
    }

}; // end createSede

const createProvincia = async(req, res = response) => {

    const provincia = new Provincia({
        ...req.body
    });

    try {
        const { nombre } = req.body;

        const existeNombre = await Provincia.findOne({ nombre });

        if (existeNombre) {
            return res.status(400).json({
                ok: false,
                msg: 'La provincia ya fue registada'
            });
        } // end if

        const provinciaDB = await provincia.save();

        res.json({
            ok: true,
            provincia: provinciaDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado, comuniquese con el administrador'
        });
    }

}; // end createProvincia

const createTiposCliente = async(req, res = response) => {
    const tipo = new tipo_cliente({
        ...req.body
    });


    try {
        const { nombre } = req.body;

        const existeNombre = await tipo_cliente.findOne({ nombre });

        if (existeNombre) {
            return res.status(400).json({
                ok: false,
                msg: 'El tipo de cliente ya fue registado'
            });
        } // end if

        const tipoClienteDB = await tipo.save();

        res.json({
            ok: true,
            tipo: tipoClienteDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado, comuniquese con el administrador'
        });
    }

}; // end createTiposCliente


// Delete

const borrarEvento = async(req, res = response) => {

    const eid = req.params.id;

    try {

        const eventoDB = await Evento.findById(eid);

        if (!eventoDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un Evento con ese id'
            });
        } // end if

        await Evento.findByIdAndDelete(eid);


        res.json({
            ok: true,
            msg: "Evento eliminado",
            evento: eventoDB
        });

    } catch (error) {

        console.log(error);
        res.status(404).json({
            ok: false,
            msg: "Error inesperado, consultar al administrador"
        });
    }
}; // end borrarEvento

const borrarLocalidad = async(req, res = response) => {

    const lid = req.params.id;

    try {

        const localidadDB = await Localidad.findById(lid);

        if (!localidadDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe una Localidad con ese id'
            });
        } // end if

        await Localidad.findByIdAndDelete(lid);


        res.json({
            ok: true,
            msg: "Localidad eliminada",
            localidad: localidadDB
        });

    } catch (error) {

        console.log(error);
        res.status(404).json({
            ok: false,
            msg: "Error inesperado, consultar al administrador"
        });
    }
}; // end borrarLocalidad

const borrarProvincia = async(req, res = response) => {

    const pid = req.params.id;

    try {

        const provinciaDB = await Provincia.findById(pid);

        if (!provinciaDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe una Provincia con ese id'
            });
        } // end if

        await Provincia.findByIdAndDelete(pid);


        res.json({
            ok: true,
            msg: "Provincia eliminada",
            provincia: provinciaDB
        });

    } catch (error) {

        console.log(error);
        res.status(404).json({
            ok: false,
            msg: "Error inesperado, consultar al administrador"
        });
    }
}; // end borrarProvincia

const borrarSede = async(req, res = response) => {

    const sid = req.params.id;

    try {

        const SedeDB = await Sede.findById(sid);

        if (!SedeDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe una Sede con ese id'
            });
        }

        await Sede.findByIdAndDelete(sid);


        res.json({
            ok: true,
            msg: "Sede eliminada",
            Sede: SedeDB
        });

    } catch (error) {

        console.log(error);
        res.status(404).json({
            ok: false,
            msg: "Error inesperado, consultar al administrador"
        });
    }
}; // end borrarSede

const borrarTipoCliente = async(req, res = response) => {

    const tid = req.params.id;

    try {

        const tipoClienteDB = await tipo_cliente.findById(tid);

        if (!tipoClienteDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un Tipo de cliente con ese id'
            });
        }

        await tipo_cliente.findByIdAndDelete(tid);


        res.json({
            ok: true,
            msg: "Tipo de cliente eliminado",
            tipoCliente: tipoClienteDB
        });

    } catch (error) {

        console.log(error);
        res.status(404).json({
            ok: false,
            msg: "Error inesperado, consultar al administrador"
        });
    }
}; // end borrarTipoCliente


// Exports

module.exports = {
    getEventos,
    getLocalidad,
    getProvincia,
    getSedes,
    getTiposCliente,
    createEvento,
    createLocalidad,
    createProvincia,
    createSede,
    createTiposCliente,
    borrarEvento,
    borrarLocalidad,
    borrarProvincia,
    borrarSede,
    borrarTipoCliente
};