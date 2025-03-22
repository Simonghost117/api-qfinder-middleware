import { z } from "zod"; // Usando ES Modules

// Esquema de validación con Zod
const NotaSchema = z.object({
  titulo: z.string().nonempty("El título es obligatorio."),
  pacienteId: z.number().int().positive("El ID del paciente debe ser un número positivo."),
  contenido: z.string().nonempty("El contenido es obligatorio."),
  imagen: z.string().url("Debe ser una URL válida.").optional(), // Campo opcional
});

// Exportar usando ESM
export { NotaSchema };
