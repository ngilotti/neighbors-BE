const { Schema, model } = require('mongoose');

const TipoClienteSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    habilitado: {
        type: Boolean,
        default: false,
        required: true
    }
});


TipoClienteSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.tid = _id;

    return object;
});


module.exports = model('TipoCliente', TipoClienteSchema);