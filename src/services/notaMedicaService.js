const { NotaMedica, Usuario } = require('../models');

const createNotaMedica = async (pacienteId, autorId, titulo, contenido) => {
  const notaMedica = await NotaMedica.create({
    Titulo: titulo,
    PacienteID: pacienteId,
    AutorID: autorId,
    Contenido: contenido,
  });

  return notaMedica;
};

const getNotasMedicasByPaciente = async (pacienteId) => {
  const notasMedicas = await NotaMedica.findAll({
    where: { PacienteID: pacienteId },
    include: [{ model: Usuario, as: 'Autor', attributes: ['Nombre'] }],
    order: [['FechaHora', 'DESC']],
  });

  return notasMedicas;
};

module.exports = { createNotaMedica, getNotasMedicasByPaciente };