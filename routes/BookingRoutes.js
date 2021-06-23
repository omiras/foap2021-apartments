const express = require('express');
const { Mongoose } = require('mongoose');
const router = express.Router();

const Booking = require('../models/BookingModel');

router.post('/new-reservation', async (req, res) => {
    // 1. Recuperar los datos de la request a través de req.body

    const { checkIn, checkOut, idApartment } = req.body; // ES6
    
    // 2. Usar el modelo Booking para insertar un nuevo documento
    const nuevaReserva = new Booking({
        checkIn,
        checkOut,
        idApartment
    })

    const resultado = await nuevaReserva.save();
    res.send(resultado)
})

module.exports = router;