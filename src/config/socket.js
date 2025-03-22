import { Server as socketIO } from 'socket.io';

const configureSocket = (server) => {
  const io = new socketIO(server, {
    cors: {
      origin: '*', // Permite conexiones desde cualquier origen (ajusta esto en producción)
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado:', socket.id);

    // Unirse a una sala específica del paciente
    socket.on('joinPatientRoom', (patientId) => {
      socket.join(`patient_${patientId}`);
      console.log(`Cliente ${socket.id} se unió a la sala del paciente ${patientId}`);
    });

    // Desconexión del cliente
    socket.on('disconnect', () => {
      console.log('Cliente desconectado:', socket.id);
    });
  });

  return io;
};

export default configureSocket;
