const { Schema, model } = require('mongoose');

const EventoSchema = Schema({

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


EventoSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.eid = _id;

    return object;
});


module.exports = model('Eventos', EventoSchema);