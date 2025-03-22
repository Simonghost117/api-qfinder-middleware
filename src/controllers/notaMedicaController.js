import { createNotaMedica, getNotasMedicasByPaciente} from '../services/notaMedicaService.js';

// Crear una nueva nota médica
export const crearNotaMedica = async (req, res) => {
  const { titulo, pacienteId, contenido, imagen } = req.body;
  const autorId = req.usuario.id; // ID del usuario autenticado

  try {
    const notaMedica = await createNotaMedica(titulo, pacienteId, autorId, contenido, imagen);

    // Emitir evento en tiempo real
    const io = req.app.get('io');
    io.to(`patient_${pacienteId}`).emit('nuevaNotaMedica', notaMedica);

    res.status(201).json(notaMedica);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la nota médica', error });
  }
};

// Obtener notas médicas de un paciente
export const obtenerNotasMedicas = async (req, res) => {
  const { pacienteId } = req.params;

  try {
    const notasMedicas = await getNotasMedicasByPaciente(pacienteId);
    res.json(notasMedicas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las notas médicas' });
  }
};

// Actualizar una nota médica
export const actualizarNotaMedica = async (req, res) => {
  const { notaId } = req.params;
  const { titulo, contenido } = req.body;

  try {
    const notaActualizada = await updateNotaMedica(notaId, titulo, contenido);

    // Emitir evento en tiempo real (opcional)
    const io = req.app.get('io');
    io.to(`patient_${notaActualizada.PacienteID}`).emit('notaMedicaActualizada', notaActualizada);

    res.json(notaActualizada);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la nota médica' });
  }
};
