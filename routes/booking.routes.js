const express = require('express');
const Booking = require('../controllers/booking');

const router = express.Router();

router.post('/add', Booking.add);

module.exports = router;