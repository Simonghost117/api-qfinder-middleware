// Errores personalizados
class UnauthorizedError extends Error {
    constructor(message) {
      super(message);
      this.name = 'UnauthorizedError';
      this.statusCode = 401; // Código de estado HTTP para "No autorizado"
    }
  }
  
  class NotFoundError extends Error {
    constructor(message) {
      super(message);
      this.name = 'NotFoundError';
      this.statusCode = 404; // Código de estado HTTP para "No encontrado"
    }
  }
  
  class BadRequestError extends Error {
    constructor(message, errors = []) {
      super(message);
      this.name = 'BadRequestError';
      this.statusCode = 400; // Código de estado HTTP para "Solicitud incorrecta"
      this.errors = errors;
    }
  }
  
  class ForbiddenError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ForbiddenError';
      this.statusCode = 403; // Código de estado HTTP para "Prohibido"
    }
  }
  
  module.exports = {
    UnauthorizedError,
    NotFoundError,
    BadRequestError,
    ForbiddenError,
  };