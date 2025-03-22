import express from 'express';
import {
  crearNotaMedica,
  obtenerNotasMedicas,
  actualizarNotaMedica
} from '../controllers/notaMedicaController.js';

import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';
import validationMiddleware from '../middlewares/validationMiddleware.js';
import {
  validacionesCrearNotaMedica,
  validacionesObtenerNotasMedicas,
  validacionesActualizarNotaMedica
} from '../validators/notaMedicaValidations.js';

import validateSchema from '../middlewares/validatore.schema.js';
import { NotaSchema } from '../schema/notas.schema.js';
import { authRequired } from '../middlewares/validate.token.js';

const router = express.Router();

// Crear una nueva nota médica
router.post(
  '/notas-medicas',
  authRequired,
  // authMiddleware,
  // roleMiddleware(['Cuidador', 'Entidad']),
  // validationMiddleware(validacionesCrearNotaMedica),
  validateSchema(NotaSchema),
  crearNotaMedica
);

// Obtener notas médicas de un paciente
router.get(
  '/pacientes/:pacienteId/notas-medicas',
  authMiddleware,
  roleMiddleware(['Acudiente', 'Empresa']),
  validationMiddleware(validacionesObtenerNotasMedicas),
  obtenerNotasMedicas
);

// Actualizar una nota médica
router.put(
  '/notas-medicas/:notaId',
  authMiddleware,
  roleMiddleware(['Acudiente', 'Empresa']),
  validationMiddleware(validacionesActualizarNotaMedica),
  actualizarNotaMedica
);

export default router;
