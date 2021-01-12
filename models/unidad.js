const { Schema, model } = require('mongoose');

const UnidadSchema = Schema({

    padron: {
        type: Number,
        unique: true
    },
    lote: {
        type: Number,
        required: true,
        unique: true
    },
    licencia: {
        type: Number,
    },
    superficie: {
        type: Number,
    },
    direccion: {
        type: String,
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
    },
    vecino: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
    },
    situacion: {
        // 'Propietario' | 'Inquilino'
        type: String,
    },
    latitud: {
        type: String,
    },
    longitud: {
        type: String,
    },
    comentario: {
        type: String,
    },
    estado: {
        //  'Vivienda' | 'Obra' | 'Lote vacio',
        type: String,
    },
    alta: {
        type: Date
    },
    habilitado: {
        type: Boolean,
        default: false,
    }

}, { collection: 'unidades' });


UnidadSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.unid = _id;

    return object;
});


module.exports = model('Unidad', UnidadSchema);