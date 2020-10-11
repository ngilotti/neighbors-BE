const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({

    razonSocial: {
        type: String,
    },
    tipo: {
        type: String,
    },
    unidades: {
        type: Number,
    },
    cuit: {
        type: Number,
        required: true,
        unique: true
    },
    direccion: {
        type: String,
    },
    provincia: {
        type: String,
        required: true,
    },
    localidad: {
        type: String,
        required: true,
    },
    img: {
        type: String
    },
    latitud: {
        type: String,
    },
    longitud: {
        type: String,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    edit: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    habilitado: {
        type: Boolean,
        default: true,
        required: true
    }
});


ClienteSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.cid = _id;

    return object;
});


module.exports = model('Cliente', ClienteSchema);