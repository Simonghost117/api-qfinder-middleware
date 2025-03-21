import * as authSchemas from "../schema/authSchemas.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Usuario from "../models/usuario.js";
import dotenv from "dotenv";

dotenv.config();

// 🔹 REGISTRO DE USUARIO
export const register = async (req, res) => {
  try {
    console.log("Datos recibidos:", req.body); // Para debugging
    
    // Validar con Zod
    const { nombre, identificacion, correoElectronico, contrasena, RolID } = 
      authSchemas.registerSchema.parse(req.body);
    
    // Verificar si el usuario ya existe
    const usuarioExistente = await Usuario.findOne({ 
      where: { CorreoElectronico: correoElectronico } 
    });
    
    if (usuarioExistente) {
      return res.status(400).json({ error: "El correo ya está registrado" });
    }
    
    // Hashear la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(contrasena, salt);
    
    // Crear el usuario en la base de datos
    const nuevoUsuario = await Usuario.create({
      Nombre: nombre,
      Identificacion: identificacion,
      CorreoElectronico: correoElectronico,
      Contrasena: hashedPassword,
      RolID: RolID,
    });
    
    res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error("Error completo:", error);
    
    if (error.name === "ZodError") {
      return res.status(400).json({ 
        error: "Datos de registro inválidos", 
        detalles: error.errors 
      });
    }
    
    res.status(500).json({ 
      mensaje: "Error en el registro", 
      error: error.message 
    });
  }
};

// 🔹 LOGIN DE USUARIO
export const login = async (req, res) => {
  try {
    // Validar los datos con Zod
    const { correoElectronico, contrasena } = 
      authSchemas.loginSchema.parse(req.body);
    
    // Buscar usuario en la base de datos
    const usuario = await Usuario.findOne({ 
      where: { CorreoElectronico: correoElectronico } 
    });
    
    if (!usuario) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }
    
    // Verificar la contraseña
    const contrasenaValida = await bcrypt.compare(contrasena, usuario.Contrasena);
    if (!contrasenaValida) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }
    
    // Generar token JWT
    const token = jwt.sign(
      { id: usuario.IDUsuario, rol: usuario.RolID },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.cookie('token', token);
    
    res.json({ token, rol: usuario.RolID });
  } catch (error) {
    console.error("Error en login:", error);
    
    if (error.name === "ZodError") {
      return res.status(400).json({ 
        error: "Datos de inicio de sesión inválidos", 
        detalles: error.errors 
      });
    }
    
    res.status(500).json({ error: "Error en el servidor" });
  }
};