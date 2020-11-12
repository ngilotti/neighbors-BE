const { Schema, model } = require('mongoose');

const LocalidadSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    provincia: {
        type: Schema.Types.ObjectId,
        ref: 'Provincia'
    },
    habilitado: {
        type: Boolean,
        default: false,
        required: true
    }
});


LocalidadSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.lid = _id;

    return object;
});


module.exports = model('Localidad', LocalidadSchema);