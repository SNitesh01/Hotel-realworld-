const bookingModel = require("../models/booking.model");
const roomsModel = require("../models/rooms.model");

class Booking {
  static async add(req, res) {
    await bookingModel.create({ 
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      bookingFor: req.body.bookingFor,
    });

    const { _id } = req.body;

    const toBeBooked = req.body.bookingFor.split(' to ');
    const room = await roomsModel.findById(_id);
    const { datesBooked } = room;

    const newDates = [
      ...datesBooked,
      [[toBeBooked[0]], [toBeBooked[1]], '1']
    ]

    await roomsModel.findByIdAndUpdate(_id, {
      datesBooked: newDates
    })
  }
}

module.exports = Booking;