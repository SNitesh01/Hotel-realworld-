const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  bookingFor: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    minlength: 10,
    maxlength: 10,
    required: true
  }
});

module.exports = mongoose.model('bookings', bookingSchema);
