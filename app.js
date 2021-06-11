const express = require('express');
const DataBase = require('./database/database');

const Database = require('./database/database');

const adminRoutes = require('./routes/AdminApartmentRoutes')

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

app.use('/admin', adminRoutes);

// TODO: No tendriamos que empezar a escuchar en el puerto 3000 hasta que no nos hemos conecado a la base de datos. EL lunes lo arreglamos
DataBase.connect();

app.listen(3000);