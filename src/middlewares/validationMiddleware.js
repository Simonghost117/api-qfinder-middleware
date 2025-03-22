import { validationResult } from 'express-validator';
import { BadRequestError } from '../utils/errors.js';

const validationMiddleware = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new BadRequestError('Datos inválidos', errors.array());
    }

    next();
  };
};

export default validationMiddleware;
