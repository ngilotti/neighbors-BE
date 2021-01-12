const { Schema, model } = require('mongoose');

const AmenitieSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    sede: {
        type: Schema.Types.ObjectId,
        ref: 'Sedes'
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
    },
    lote: {
        type: Number,
        required: true
    },
    encargado: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    habilitado: {
        type: Boolean,
        default: true,
        required: true
    }
});


AmenitieSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.aid = _id;

    return object;
});


module.exports = model('Amenities', AmenitieSchema);