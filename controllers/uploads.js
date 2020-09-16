const { response } = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const { actualizarImagen } = require('../helpers/actualizar-img');




const fileUpload = (req, res = response) => {

        const tipo = req.params.tipo;
        const id = req.params.id;


        // Validar tipos
        const tiposValidos = ['hospitales', 'medicos', 'usuarios'];
        if (!tiposValidos.includes(tipo)) {
            return res.status(400).json({
                ok: false,
                msg: 'No esta subiendo un medico, usuario u hospital'
            });

        } // end if


        // Validar la existencia de un archivo
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({
                ok: false,
                msg: 'No selecciono ningun archivo'
            });
        } // end if


        // Procesar la imagen
        const file = req.files.imagen;
        const nombreCortado = file.name.split('.');
        const extensionFile = nombreCortado[nombreCortado.length - 1];


        // Validar extensiones
        const extensionesValidas = ['png', 'jpg', 'jpeg', 'gif'];
        if (!extensionesValidas.includes(extensionFile)) {
            return res.status(400).json({
                ok: false,
                msg: 'No es una extension permitida'
            });
        } // end if


        // Generar nombre del archivo
        const nombreArchivo = `${uuidv4()}.${extensionFile}`;


        // Path para guardar imagen
        const path = `./uploads/${tipo}/${nombreArchivo}`;


        // Mover la imagen
        file.mv(path, (err) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    ok: false,
                    msg: 'Error al mover la imagen'
                });
            } // end if


            // Actualizar base de datos
            actualizarImagen(tipo, id, nombreArchivo);

            res.json({
                ok: true,
                msg: 'Archivo Subido',
                archivo: nombreArchivo
            });
        });

    } // end fileUpload

/*
    var serveIndex = require('serve-index');
    app.use(express.static(__dirname + '/'))
    app.use('/uploads', serveIndex(__dirname + '/uploads'));
*/

const retornaImg = (req, res = response) => {

        const { tipo, foto } = req.params;

        const pathImg = path.join(__dirname, `../uploads/${tipo}/${foto}`);

        // Imagen por defecto
        if (fs.existsSync(pathImg)) {
            res.sendFile(pathImg);
        } else {
            const pathImg = path.join(__dirname, `../uploads/no-img.jpg`);
            res.sendFile(pathImg);
        } // end if

    } // end retornaImg 

module.exports = {
    fileUpload,
    retornaImg
}