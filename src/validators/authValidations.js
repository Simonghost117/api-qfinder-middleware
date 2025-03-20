const { body, validationResult } = require('express-validator');
exports.validateRegister = [
    body('Nombre').notEmpty().withMessage('El nombre es obligatorio.'),
    body('CorreoElectronico').isEmail().withMessage('Correo inválido.'),
    body('Contrasena').matches(/^(?=.*[A-Z])(?=.*\d).{8,}$/)
        .withMessage('La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        next();
    }
];