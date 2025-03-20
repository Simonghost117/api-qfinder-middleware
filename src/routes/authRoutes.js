const express = require('express');
const { register } = require('../controllers/authController');
const { validateRegister } = require('../validators/authValidations');
const router = express.Router();
// En tu archivo authRoutes.js, añade una ruta simple de prueba
router.get('/test', (req, res) => {
    res.status(200).json({ message: 'Ruta de prueba funcionando correctamente' });
  });
router.post('/register', validateRegister, register);
module.exports = router;