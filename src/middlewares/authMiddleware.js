const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../utils/errors');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    throw new UnauthorizedError('Acceso denegado. No se proporcionó token.');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded; // Almacena la información del usuario en el request
    next();
  } catch (error) {
    throw new UnauthorizedError('Token inválido.');
  }
};

module.exports = authMiddleware;