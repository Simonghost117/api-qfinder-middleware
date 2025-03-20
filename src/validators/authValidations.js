const { check, validationResult } = require('express-validator');

exports.validateLogin = [
    check('correoElectronico').isEmail().withMessage('Correo inválido'),
    check('contrasena').notEmpty().withMessage('Contraseña requerida'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errores: errors.array() });
        }
        next();
    }
];

exports.validateRegister = [
    check('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    check('identificacion')
        .notEmpty().withMessage('La identificación es obligatoria')
        .isNumeric().withMessage('La identificación debe ser un número'),
    check('correoElectronico').isEmail().withMessage('Correo inválido'),
    check('contrasena')
        .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    check('RolID').isInt().withMessage('Rol inválido'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errores: errors.array() });
        }
        next();
    }
];
