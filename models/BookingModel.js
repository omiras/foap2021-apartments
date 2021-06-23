const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    checkIn: Date,
    checkOut: Date,
    idApartment: { type: mongoose.Schema.Types.ObjectId, ref: 'Apartments' }
})

const Booking = mongoose.model('Bookings', bookingSchema);

module.exports = Booking;

