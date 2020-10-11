const { Schema, model } = require('mongoose');

const UnidadSchema = Schema({

    padron: {
        type: String,
        unique: true
    },
    lote: {
        type: String,
        required: true,
        unique: true
    },
    licencia: {
        type: Number,
    },
    superficie: {
        type: Number,
    },
    Direccion: {
        type: String,
    },
    cliente: {
        // propietario, inquilino
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
    },
    Situacion: {
        // propietario, inquilino
        type: String
    },
    latitud: {
        type: String,
        unique: true
    },
    longitud: {
        type: String,
        unique: true
    },
    Comentario: {
        type: String,
    },
    Estado: {
        // vivienda, obra, lote vacio
        type: String,
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

}, { collection: 'unidades' });


UnidadSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;

    return object;
});


module.exports = model('Unidad', UnidadSchema);