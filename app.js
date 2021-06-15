const express = require('express');
const DataBase = require('./database/database');

const adminRoutes = require('./routes/AdminApartmentRoutes');
const userRoutes = require('./routes/UserApartmentRoutes');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use('/', userRoutes); 

// LE pasamos una función para que, cuando se conecte, la invoque y nos "devuelva" el control
DataBase.connect(function() {
    app.listen(3000);
});