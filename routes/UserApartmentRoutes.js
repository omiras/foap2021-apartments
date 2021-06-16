const express = require('express');
const router = express.Router();

const Apartment = require('../models/ApartmentModel');

router.get('/apartment/:idApartment', async (req, res) => {
    const { idApartment } = req.params;
    // const idApartment = req.params.idApartment

    // Ir a la base de datos para recuperar el apartamento con el id idApartment
    const apartment = await Apartment.findById(idApartment);

    res.render('detail.ejs', {
        apartment: apartment
    });
})

// Definimos las rutas de los clientes "normales" (los que quieren alquilar los apartamentos)

router.get('/', async (req, res) => {
    const allApartments = await Apartment.find();
    res.render('index', {
        apartments: allApartments,
        typeUser: 'user'
    });
})

module.exports = router;