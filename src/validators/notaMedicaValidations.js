const { check, param } = require('express-validator');

// Validaciones para crear una nota médica
const validacionesCrearNotaMedica = [
  check('pacienteId')
    .isInt()
    .withMessage('El ID del paciente debe ser un número entero.')
    .toInt(),

  check('titulo')
    .notEmpty()
    .withMessage('El título es requerido.')
    .isLength({ max: 80 })
    .withMessage('El título no puede tener más de 80 caracteres.')
    .trim(),

  check('contenido')
    .notEmpty()
    .withMessage('El contenido es requerido.')
    .isLength({ max: 1000 })
    .withMessage('El contenido no puede tener más de 1000 caracteres.')
    .trim(),
];

// Validaciones para obtener notas médicas de un paciente
const validacionesObtenerNotasMedicas = [
  param('pacienteId')
    .isInt()
    .withMessage('El ID del paciente debe ser un número entero.')
    .toInt(),
];

// Validaciones para actualizar una nota médica
const validacionesActualizarNotaMedica = [
  param('notaId')
    .isInt()
    .withMessage('El ID de la nota médica debe ser un número entero.')
    .toInt(),

  check('titulo')
    .optional()
    .notEmpty()
    .withMessage('El título no puede estar vacío.')
    .isLength({ max: 80 })
    .withMessage('El título no puede tener más de 80 caracteres.')
    .trim(),

  check('contenido')
    .optional()
    .notEmpty()
    .withMessage('El contenido no puede estar vacío.')
    .isLength({ max: 1000 })
    .withMessage('El contenido no puede tener más de 1000 caracteres.')
    .trim(),
];

module.exports = {
  validacionesCrearNotaMedica,
  validacionesObtenerNotasMedicas,
  validacionesActualizarNotaMedica,
};