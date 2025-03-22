import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; // Asegúrate de que `db.js` también esté usando export default

const NotaMedica = sequelize.define(
  'NotaMedica',
  {
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
  },
  {
    tableName: 'Nota_Medica',
    timestamps: false,
  }
);

export { NotaMedica };
