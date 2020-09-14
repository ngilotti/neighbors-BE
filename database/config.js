const mongoose = require('mongoose');


const dbConection = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('DB Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la BD. Ver logs');
    }

}

module.exports = {
    dbConection
}