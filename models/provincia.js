const { Schema, model } = require('mongoose');

const ProvinciaSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    habilitado: {
        type: Boolean,
        default: true,
        required: true
    }
});


ProvinciaSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.pid = _id;

    return object;
});


module.exports = model('Provincia', ProvinciaSchema);