const socketIO = require('socket.io');

const configureSocket = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: "*", // Permite conexiones desde cualquier origen (ajusta en producción)
      methods: ["GET", "POST"],
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

module.exports = configureSocket;