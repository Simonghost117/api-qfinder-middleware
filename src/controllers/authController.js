// src/controllers/authController.js (Manejo de solicitudes)
const { registerUser } = require('../services/authService');
exports.register = async (req, res) => {
    try {
        const user = await registerUser(req.body);
        res.status(201).json({ message: 'Usuario registrado exitosamente', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
