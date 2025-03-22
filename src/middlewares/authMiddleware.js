import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '../utils/errors.js';

const authMiddleware = (req, res, next) => {
  // const token = req.header('Authorization')?.replace('Bearer ', '');
  const { token } = req.cookies;

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

export default authMiddleware;
