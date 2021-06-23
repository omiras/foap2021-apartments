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
// Te crea una instancia de la clase Model. Se encarga de relacionar el esquema del dominio (creado mediante código JavaScript); con la colección 'Apartments' en base de datos.
// Establece los mecanismos suficientes y necesarios para ofrecer las mismas funcionalidad que el driver nativo de mongodb
const Apartment = mongoose.model('Apartments', apartmentSchema);

// Exportar el MODELO
module.exports = Apartment;