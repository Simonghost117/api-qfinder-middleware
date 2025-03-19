-- Creación de la base de datos
CREATE DATABASE QfindeR2;
USE QfindeR2;

-- Tabla de roles
CREATE TABLE Rol (
    IDRol INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL UNIQUE
);

-- Insertar roles iniciales
INSERT INTO Rol (Nombre) VALUES ('Acudiente'), ('Cuidador'), ('Entidad');

-- Tabla de entidades
CREATE TABLE Entidad (
    IDEntidad INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Identificacion VARCHAR(50) NOT NULL UNIQUE,
    Contacto VARCHAR(100) NOT NULL,
    InformacionServicio TEXT
);

-- Tabla de usuarios
CREATE TABLE Usuario (
    IDUsuario INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Identificacion VARCHAR(50) NOT NULL UNIQUE,
    CorreoElectronico VARCHAR(100) NOT NULL UNIQUE,
    Contrasena VARCHAR(255) NOT NULL,
    RolID INT NOT NULL,
    EntidadID INT,
    FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (RolID) REFERENCES Rol(IDRol),
    FOREIGN KEY (EntidadID) REFERENCES Entidad(IDEntidad)
);

-- Tabla de tipos de dependencia
CREATE TABLE TipoDependencia (
    IDTipoDependencia INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL UNIQUE
);

-- Tabla de pacientes
CREATE TABLE Paciente (
    IDPaciente INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Edad INT NOT NULL,
    TipoDependenciaID INT NOT NULL,
    ContactoEmergencia VARCHAR(100) NOT NULL,
    AcudienteID INT NOT NULL,
    EntidadID INT,
    FOREIGN KEY (TipoDependenciaID) REFERENCES TipoDependencia(IDTipoDependencia),
    FOREIGN KEY (AcudienteID) REFERENCES Usuario(IDUsuario),
    FOREIGN KEY (EntidadID) REFERENCES Entidad(IDEntidad)
);

-- Tabla de cuidadores
CREATE TABLE Cuidador (
    IDCuidador INT AUTO_INCREMENT PRIMARY KEY,
    UsuarioID INT NOT NULL UNIQUE,
    Edad INT NOT NULL,
    Estudios VARCHAR(255),
    EntidadID INT,
    FOREIGN KEY (UsuarioID) REFERENCES Usuario(IDUsuario),
    FOREIGN KEY (EntidadID) REFERENCES Entidad(IDEntidad)
);

-- Tabla de relación entre pacientes y cuidadores
CREATE TABLE Paciente_Cuidador (
    PacienteID INT NOT NULL,
    CuidadorID INT NOT NULL,
    PRIMARY KEY (PacienteID, CuidadorID),
    FOREIGN KEY (PacienteID) REFERENCES Paciente(IDPaciente),
    FOREIGN KEY (CuidadorID) REFERENCES Cuidador(IDCuidador)
);

-- Tabla de notas médicas
CREATE TABLE Nota_Medica (
    IDNotaMedica INT AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(80) NOT NULL,
    PacienteID INT NOT NULL,
    AutorID INT NOT NULL,
    Contenido TEXT NOT NULL,
    FechaHora DATETIME DEFAULT CURRENT_TIMESTAMP,
    Imagen VARCHAR(255),
    FOREIGN KEY (PacienteID) REFERENCES Paciente(IDPaciente),
    FOREIGN KEY (AutorID) REFERENCES Usuario(IDUsuario)
);

-- Tabla de logs de actividad
CREATE TABLE LogActividad (
    IDLog INT AUTO_INCREMENT PRIMARY KEY,
    UsuarioID INT NOT NULL,
    Accion VARCHAR(100) NOT NULL,
    FechaHora DATETIME DEFAULT CURRENT_TIMESTAMP,
    Detalles TEXT,
    FOREIGN KEY (UsuarioID) REFERENCES Usuario(IDUsuario)
);


