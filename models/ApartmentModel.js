const DataBase = require('../database/database');

class Apartment {
    constructor(title, price, size, mainPhoto) {
        this.title = title;
        this.price = price;
        this.size = size;
        this.mainPhoto = mainPhoto;
    }

    // Vamos a crear un método que se va a encargar de guardar este objeto en la base de datos
    async save() {
        const apartments = DataBase._db.collection('apartments');
        await apartments.insertOne(this);
    }

    static async findAll() {
        const apartments = DataBase._db.collection('apartments');
        const results = await apartments.find().toArray();
        return results;
    }
}



module.exports = Apartment;