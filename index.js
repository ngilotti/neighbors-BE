require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbConection } = require('./database/config');


// Crear el servidor de explres
const app = express();


// Configurar cors
app.use(cors());


//Lectura y parseo del Body
app.use(express.json());


// Base de datos
dbConection();

// ------------   Permisos   --------------
// user: mean_user
// pass: SKi6XjyPhCnAWdd6


// Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/login', require('./routes/auth'));
app.use('/api/hospitales', require('./routes/hospitales'));
app.use('/api/medicos', require('./routes/medicos'));
app.use('/api/todo', require('./routes/busquedas'));
app.use('/api/upload', require('./routes/uploads'));


// levantar el be
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
});