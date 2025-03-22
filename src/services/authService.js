import bcrypt from 'bcryptjs';
import Usuario from '../models/usuario.js';

async function registerUser({ Nombre, Identificacion, CorreoElectronico, Contrasena, RolID }) {
    const existingUser = await Usuario.findOne({ where: { CorreoElectronico } });
    if (existingUser) throw new Error('El correo ya está en uso.');
    
    const hashedPassword = await bcrypt.hash(Contrasena, 10);
    
    return await Usuario.create({ Nombre, Identificacion, CorreoElectronico, Contrasena: hashedPassword, RolID });
}

export { registerUser };
