const mongoose = require('mongoose');

// Definir el esquema
// Campos: title, price, size, mainPhoto
const apartmentSchema = new mongoose.Schema({
    title: String,
    price: Number,
    size: Number,
    mainPhoto: String,
    fechaBaja: Date
})
// Asociarlo a un modelo/colección1.    
// 'apartments'
const Apartment = mongoose.model('Apartments', apartmentSchema);

// Exportar el MODELO
module.exports = Apartment;