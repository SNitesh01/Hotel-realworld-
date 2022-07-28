const express = require('express');
const Decoration = require('../controllers/decoration');

const router = express.Router();

router.get('/images', Decoration.images);

module.exports = router;