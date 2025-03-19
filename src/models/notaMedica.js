const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js'); // Cambia la ruta si tu archivo de configuración está en otro lugar

const NotaMedica = sequelize.define('NotaMedica', {
  IDNotaMedica: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Titulo: {
    type: DataTypes.STRING(80), 
    allowNull: false,
  },
  PacienteID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Paciente', 
      key: 'IDPaciente',
    },
  },
  AutorID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Usuario', 
      key: 'IDUsuario', 
    },
  },
  Contenido: {
    type: DataTypes.TEXT, 
    allowNull: false,
  },
  FechaHora: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, 
  },
  Imagen: {
    type: DataTypes.STRING, 
    allowNull: true,
  },
}, {
  tableName: 'Nota_Medica', // Nombre exacto de la tabla en la base de datos
  timestamps: false, 
});

module.exports = { NotaMedica };
