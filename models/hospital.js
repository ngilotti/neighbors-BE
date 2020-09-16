const { Schema, model } = require('mongoose');

const HospitalSchema = Schema({

    razonSocial: {
        type: String,
        required: true
    },
    cuit: {
        type: Number,
        required: true,
        unique: true
    },
    img: {
        type: String
    },
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    observaciones: {
        type: String
    }
}, { collection: 'hospitales' });


HospitalSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();

    return object;
});


module.exports = model('Hospital', HospitalSchema);