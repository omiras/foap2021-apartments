const express = require('express');
const router = express.Router();

const Apartment = require('../models/ApartmentModel');

// Definimos las rutas de los clientes "normales" (los que quieren alquilar los apartamentos)

router.get('/', async (req, res) => {
    const allApartments = await Apartment.find();
    res.render('index', {
        apartments: allApartments,
        typeUser: 'user'
    });
})

module.exports = router;