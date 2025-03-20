// src/app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoutes');
const notaMedicaRoutes = require('./routes/notaMedicaRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.get('/test', (req, res) => {
    res.json({ message: 'El servidor está funcionando correctamente' });
  });
// Usar los routers
app.use('/api/auth', authRoutes);
app.use('/api', notaMedicaRoutes);

// Manejo de errores
app.use(errorHandler);

module.exports = app;