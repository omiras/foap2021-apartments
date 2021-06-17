const express = require('express');
const router = express.Router();

const Apartment = require('../models/ApartmentModel');

// Vamos a registrar todas las rutas que tienen que ver con la manipulación de los apartamentos por parte de un usuario de tipo 'Administrador'

router.get('/apartment/:idApartment', async (req, res) => {
    const { idApartment } = req.params;
    // const idApartment = req.params.idApartment

    // Ir a la base de datos para recuperar el apartamento con el id idApartment
    const apartment = await Apartment.findById(idApartment);
    
    // Vamos a renderizar el formulario con los valores precargados
    res.render('add-apartment', {
        apartment: apartment
    })
})

// apartment/u34yeurweu3432423/delete --> hacer que el
// apartamento indetificado con el _id: u34yeurweu3432423; ya no esté disponible para alquilar
router.get('/apartment/:idApartment/delete', async (req, res) => {
    // buscar el apartmento en la colección Apartments
    const idApartment = req.params.idApartment;

    const apartment = await Apartment.findById(idApartment);
    apartment.fechaBaja = Date();
    await apartment.save();

    res.send(`El apartamento ${idApartment} ha sido dado de baja.`)
})

router.get('/', async (req, res)=> {
    const allApartments = await Apartment.find();
    res.render('index', {
        apartments: allApartments,
        typeUser: 'admin'
    });
})

router.get('/add-new', (req, res) => {
    res.render('add-apartment', {
        apartment: {}
    });
})

router.post('/add-new', async (req, res) => {

    // Comprobar si recibimos un idApartment significa que queremos modificar el apartmento. En caso contrario, insertar un documento nuevo.

    const idApartment = req.body.idApartment;
    if (idApartment) {
        // Realizar un updateOne !!

        // 1. recuperar findByID el documento
        // 2. Modificar todos los campos del documento
        // 3. hacer el .save()
        console.log('Queremos modificar el apartmento! Usa Mongoose para hacerlo!')
        return res.send('Modificar apartamento!');
    }

    else {
        console.log('Es un apartamento nuevo!')
    }

    const title = req.body.title;
    const price = req.body.price;
    const size = req.body.size;
    const mainPhoto = req.body.mainPhoto;

    const apartment = new Apartment({
        title,
        price,
        size,
        mainPhoto
    });
    await apartment.save();

    res.send("Apatamento creado.");
})

module.exports = router;