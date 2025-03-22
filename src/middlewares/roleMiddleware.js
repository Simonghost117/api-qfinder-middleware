import { ForbiddenError } from '../utils/errors.js';

const rolesMap = {
  Acudiente: 1,
  Cuidador: 2,
  Entidad: 3,
};

const roleMiddleware = (rolesPermitidos) => {
  return (req, res, next) => {
    const rolId = req.usuario.rol; // Extrae el rol del usuario autenticado (ID numérico)

    if (!rolId) {
      return res.status(401).json({ message: 'Usuario no autenticado.' });
    }

    // Mapea rolesPermitidos a IDs
    const rolesIdsPermitidos = rolesPermitidos.map((rol) => rolesMap[rol]);

    // Verifica si el rol del usuario está entre los permitidos
    if (!rolesIdsPermitidos.includes(rolId)) {
      throw new ForbiddenError('No tienes permiso para realizar esta acción.');
    }

    next(); // Continúa al siguiente middleware/controlador
  };
};

export default roleMiddleware;
