const { Schema, model } = require('mongoose');

const SedeSchema = Schema({

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


SedeSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.sid = _id;

    return object;
});


module.exports = model('Sedes', SedeSchema);