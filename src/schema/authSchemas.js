import { z } from "zod";

export const registerSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  identificacion: z.string().min(6, "La identificación es obligatoria"),
  correoElectronico: z.string().email("Correo electrónico inválido"),
  contrasena: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  RolID: z.number().int("Rol inválido"),
});

export const loginSchema = z.object({
  correoElectronico: z.string().email("Correo electrónico inválido"),
  contrasena: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});