const { validationResult } = require('express-validator');
const { BadRequestError } = require('../utils/errors');

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

module.exports = validationMiddleware;