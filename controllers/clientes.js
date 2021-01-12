const { response } = require('express');
const { findByIdAndDelete } = require('../models/cliente');

const Cliente = require('../models/cliente');
const { populate } = require('../models/usuario');



const getClientes = async(req, res = response) => {

    const [clientes, total] = await Promise.all([
        Cliente.find({}, 'nombre tipo unidades cid razonSocial cuit provincia localidad img direccion latitud longitud admin edit')
        .populate('admin', 'uid apellido nombre telefono img')
        .populate('tipo', 'tid nombre habilitado')
        .populate('provincia', 'pid nombre habilitado')
        .populate('localidad', 'lid nombre provincia habilitado'),
        Cliente.countDocuments()
    ]);

    res.status(202).json({
        ok: true,
        clientes: clientes,
        total: total
    });
}; // end getClientes



const createClientes = async(req, res = response) => {

    // TODO: falta validar por latitud y longitud tambien
    const uid = req.uid;
    const cliente = new Cliente({
        ...req.body
    });


    try {
        const { nombre } = req.body;

        const existeNombre = await Cliente.findOne({ nombre });

        if (existeNombre) {
            return res.status(400).json({
                ok: false,
                msg: 'El nombre ya fue registado'
            });
        } // end if

        const clienteDB = await cliente.save();

        res.json({
            ok: true,
            cliente: clienteDB
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado, comuniquese con el administrador'
        });
    }

}; // end createClientes



const actualizarClientes = async(req, res = response) => {

    // TODO: Validar token y comprobar si es el usuario correcto

    const cid = req.params.id;

    try {

        const clienteDB = await Cliente.findById(cid);

        if (!clienteDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un cliente con ese id'
            });
        }

        // Actualizar usuario
        const { nombre, direccion, ...campos } = req.body;


        if (clienteDB.nombre !== nombre) {
            const existeNombre = await Cliente.findOne({ nombre });
            if (existeNombre) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe un cliente con esa Razon Social'
                });
            }
        } // end if


        if (clienteDB.direccion !== direccion) {

            const existeDireccion = await Cliente.findOne({ direccion });
            if (existeDireccion) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe un usuario con esa direccion'
                });
            }
        } // end if


        if (campos.cuit) {

            return res.status(400).json({
                ok: false,
                msg: 'El cliente no pueden cambiar su CUIT'
            });
        } else if (campos.provincia) {

            return res.status(400).json({
                ok: false,
                msg: 'El cliente no pueden cambiar su Provincia'
            });

        } // end if

        campos.nombre = nombre;
        campos.direccion = direccion;

        const clienteActualizado = await Cliente.findByIdAndUpdate(cid, campos, { new: true });

        res.json({
            ok: true,
            usuario: clienteActualizado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado consultar log'
        });
    }

}; // end actualizarUsuario




const borrarCliente = async(req, res = response) => {

    const cid = req.params.id;

    try {

        const clienteDB = await Cliente.findById(cid);

        if (!clienteDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un cliente con ese id'
            });
        }

        await Cliente.findByIdAndDelete(cid);


        res.json({
            ok: true,
            msg: "Cliente eliminado",
            cliente: clienteDB
        });

    } catch (error) {

        console.log(error);
        res.status(404).json({
            ok: false,
            msg: "Error inesperado, consultar al administrador"
        });
    }
}; // end borrarCliente


module.exports = {
    getClientes,
    createClientes,
    actualizarClientes,
    borrarCliente
}