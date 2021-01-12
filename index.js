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

// Directorio Publico
app.use(express.static('public'));

// ------------   Permisos   --------------
// user: mean_user
// pass: SKi6XjyPhCnAWdd6


// Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/login', require('./routes/auth'));
app.use('/api/clientes', require('./routes/clientes'));
app.use('/api/upload', require('./routes/uploads'));
app.use('/api/todo', require('./routes/busquedas'));
app.use('/api/mantenimientos', require('./routes/mantenimientos'));
app.use('/api/unidades', require('./routes/unidades'));
app.use('/api/amenities', require('./routes/amenities'));



// levantar el be
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
});