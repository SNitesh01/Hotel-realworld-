const express = require('express');

const router = express.Router();
const user = require('../controllers/user');

router.post('/user/signup', user.signup);
router.post('/admin', user.login);

/**
 * TODO:
 * Update and delete route
 */

module.exports = router;