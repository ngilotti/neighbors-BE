const fs = require('fs');


const Usuario = require('../models/usuario');
// const Medico = require('../models/medicos');
// const Hospital = require('../models/hospital');


const borrarImagen = (path) => {

    if (fs.existsSync(path)) {
        //borra la imagen anterior
        fs.unlinkSync(path);
    }
}


const actualizarImagen = async(tipo, id, nombreArchivo) => {

    let pathviejo = '';
    switch (tipo) {

        // case 'medicos':

        //     const medico = await Medico.findById(id);
        //     if (!medico) {
        //         console.log('No se encontro un medico con ese id');
        //         return false;
        //     }

        //     pathviejo = `./uploads/medicos/${medico.img}`;
        //     borrarImagen(pathviejo);

        //     medico.img = nombreArchivo;
        //     await medico.save();
        //     return true;

        //     break;


        // case 'hospitales':

        //     const hospital = await Hospital.findById(id);
        //     if (!hospital) {
        //         console.log('No se encontro un hospital con ese id');
        //         return false;
        //     }

        //     pathviejo = `./uploads/hospitales/${hospital.img}`;
        //     borrarImagen(pathviejo);

        //     hospital.img = nombreArchivo;
        //     await hospital.save();
        //     return true;
        //     break;


        case 'usuarios':

            const usuario = await Usuario.findById(id);
            if (!usuario) {
                console.log('No se encontro un usuario con ese id');
                return false;
            }

            pathviejo = `./uploads/usuarios/${usuario.img}`;
            borrarImagen(pathviejo);

            usuario.img = nombreArchivo;
            await usuario.save();
            return true;

            break;

        default:
            break;
    }


}


module.exports = {
    actualizarImagen
}