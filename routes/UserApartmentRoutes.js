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
    // Estoy recuperando todos los apartamentos!! Solo tengo que recuperar aquellos que NO tienen fechaBaja!
    // Falta implementarlo!

    // Tengo que modificar el find() para que recupere todos los documentos que NO tienen fecha de baja (diferente de null!)

    const allApartments = await Apartment.find();

    /**
     * const mongodb = requure('mongodb')
     * 
     * class Model {
     * 
     *   constructor(collection, database) {
     *   this.collection = collection;
     * this.database = database;
     * }
     * 
     *   find(query) {
     *    const results =   mongodb.db(this.database).collection('this.collection').find(query)
     * return results;
     *   }
     * }
     */

    res.render('index', {
        apartments: allApartments,
        typeUser: 'user',
        filters: {}
    });
})

router.get('/search', async (req, res) => {
    // 1. Mirar si está informado el campo 'price'
    // 2. Si lo está, al hacer la consulta de todos los apartamentos disponibles a través de Mongoose; añadir el filtro (es decir, todos los apartamentos cuyo 'price' es menor o igual al valor que me han pasado en la QueryString)
    // Renderizar la vista

    const { price } = req.query;

    let query = {};
    let filters = {};

    if (price) {
        query.price = { $lte: price };
        filters.price = price;
    }

    // if (capacity) ... hacer lo mismo
    // if (city) ... igual

    const apartments = await Apartment.find(query)

    res.render('index', {
        apartments: apartments,
        typeUser: 'user',
        filters : filters
    })
})

module.exports = router;