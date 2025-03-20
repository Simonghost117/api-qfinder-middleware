const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Usuario = sequelize.define('Usuario', {
    IDUsuario: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true,
        field: 'IDUsuario' 
    }, Nombre: { 
        type: DataTypes.STRING, 
        allowNull: false 
    }, Identificacion: { 
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true 
    }, CorreoElectronico: { 
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true 
    }, Contrasena: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },RolID: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    }
}, { 
    timestamps: false,  
    tableName: 'Usuario', 
    freezeTableName: true 
});

module.exports = Usuario;
