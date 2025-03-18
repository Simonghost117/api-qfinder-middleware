const { ForbiddenError } = require('../utils/errors');

const roleMiddleware = (rolesPermitidos) => {
  return (req, res, next) => {
    if (!rolesPermitidos.includes(req.usuario.rol)) {
      throw new ForbiddenError('No tienes permiso para realizar esta acción.');
    }
    next();
  };
};

module.exports = roleMiddleware;