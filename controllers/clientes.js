const { response } = require('express');
const { findByIdAndDelete } = require('../models/cliente');

const Cliente = require('../models/cliente');
const usuario = require('../models/usuario');



const getClientes = async(req, res = response) => {

        const desde = Number(req.query.desde) || 0;

        const [cliente, total] = await Promise.all([
            Cliente.find({}, 'razonSocial tipo cuit direccion provincia localidad img latitud longitud')
            .skip(desde)
            .limit(5),
            Cliente.countDocuments()
        ]);

        res.status(202).json({
            ok: true,
            cliente: cliente,
            total: total
        });
    } // end getClientes



const createClientes = async(req, res = response) => {

        // TODO: falta validar por latitud y longitud tambien
        const uid = req.uid;
        const cliente = new Cliente({
            edit: uid,
            ...req.body
        });


        try {
            const { cuit } = req.body;

            const existeCuit = await Cliente.findOne({ cuit });

            if (existeCuit) {
                return res.status(400).json({
                    ok: false,
                    msg: 'CUIT ya registado'
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

    } // end createClientes



const actualizarClientes = async(req, res = response) => {

        // TODO: Validar token y comprobar si es el usuario correcto

        const cid = req.params.id;
        const uid = req.uid;

        try {

            const clienteDB = await Cliente.findById(cid);

            if (!clienteDB) {
                return res.status(404).json({
                    ok: false,
                    msg: 'No existe un cliente con ese id'
                });
            }

            // Actualizar usuario
            const { razonSocial, direccion, ...campos } = req.body;


            if (clienteDB.razonSocial !== razonSocial) {
                const existeRazonSocial = await Cliente.findOne({ razonSocial });
                if (existeRazonSocial) {
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
            } else if (campos.localidad) {

                return res.status(400).json({
                    ok: false,
                    msg: 'El cliente no pueden cambiar su Localidad'
                });
            } // end if


            if (razonSocial) {
                campos.razonSocial = razonSocial;
            } else if (direccion) {
                campos.direccion = direccion;
            } // end if

            campos.edit = uid;

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

    } // end actualizarUsuario




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
    } // end borrarCliente


module.exports = {
    getClientes,
    createClientes,
    actualizarClientes,
    borrarCliente
}