const express = require('express');
const cors = require('cors');
const helmet = require('helmet');//
const morgan = require('morgan');
const notaMedicaRoutes = require('./routes/notaMedicaRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use('/api', notaMedicaRoutes);

// Manejo de errores
app.use(errorHandler);

module.exports = app;