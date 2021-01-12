const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    dni: {
        type: Number,
        required: true,
        unique: true
    },
    telefono: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: 'USER_ROLE',
        // MASTER_ROLE / ADMIN_ROLE / VECINO_ROLE / LICENCIA_ROLE
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    img: {
        type: String
    },
    habilitado: {
        type: Boolean,
        default: false,
        required: true
    }
});


UsuarioSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;

    return object;
});


module.exports = model('Usuario', UsuarioSchema);