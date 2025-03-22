import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authRoutes.js';
import notaMedicaRoutes from './routes/notaMedicaRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

// Asegúrate de usar cookie-parser antes de tus rutas
app.use(cookieParser());

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Ruta de prueba
app.get('/test', (req, res) => {
  res.json({ message: 'El servidor está funcionando correctamente' });
});

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api', notaMedicaRoutes);

// Manejo de errores
app.use(errorHandler);

export default app;
