const express = require('express');
const Rooms = require('../controllers/rooms');

const router = express.Router();

router.get('/all', Rooms.all);
router.post('/get', Rooms.get);

module.exports = router;