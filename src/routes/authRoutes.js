const express = require('express');
const { login, register } = require('../controllers/authController');
const { validateLogin, validateRegister } = require('../validators/authValidations');

const router = express.Router();

router.post('/login', validateLogin, login);
router.post('/register', validateRegister, register);

module.exports = router;