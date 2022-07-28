const mongoose = require('mongoose');

const roomsSchema = new mongoose.Schema({
  type: String,
  isFeatured: Boolean,
  description: String,
  image: String,
  services: Array,
  price: String,
  max: Number,
  datesBooked: Array
});

const roomsModel = mongoose.model('rooms', roomsSchema);
module.exports = roomsModel;