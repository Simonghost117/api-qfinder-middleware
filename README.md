Qfinder Backend
Este es el backend de la aplicación Qfinder, diseñado para gestionar pacientes, cuidadores, notas médicas y autenticación de usuarios. Está construido con Node.js, Express, Sequelize (ORM para MySQL) y Socket.IO para la comunicación en tiempo real.

Estructura del Proyecto
Copy
Qfinder-backend/
│
├── src/
│   ├── config/
│   │   ├── db.js          # Configuración de la base de datos (Sequelize)
│   │   └── socket.js      # Configuración de Socket.IO
│   ├── controllers/       # Controladores para manejar la lógica de las rutas
│   ├── middlewares/       # Middlewares para autenticación, validación, etc.
│   ├── models/            # Modelos de la base de datos (Sequelize)
│   ├── routes/            # Definición de las rutas de la API
│   ├── services/          # Lógica de negocio y servicios
│   ├── utils/             # Utilidades reutilizables (errores personalizados, etc.)
│   ├── validators/        # Validaciones de datos de entrada
│   ├── app.js             # Configuración de Express
│   └── server.js          # Punto de entrada del servidor
│
├── .env                   # Variables de entorno
├── .eslintrc.js           # Configuración de ESLint
├── .prettierrc            # Configuración de Prettier
├── package.json           # Dependencias y scripts del proyecto
└── README.md              # Este archivo
Dependencias Principales
Dependencias de Producción
express: Framework para crear el servidor.

mysql2: Driver para conectarse a MySQL.

sequelize: ORM para interactuar con la base de datos.

jsonwebtoken: Para manejar la autenticación con JWT.

bcryptjs: Para encriptar contraseñas.

cors: Para manejar las políticas de CORS.

dotenv: Para manejar variables de entorno.

helmet: Para mejorar la seguridad de la aplicación.

morgan: Para el logging de las solicitudes HTTP.

socket.io: Para la comunicación en tiempo real.

Dependencias de Desarrollo
nodemon: Para reiniciar automáticamente el servidor durante el desarrollo.

eslint: Para mantener un código limpio y consistente.

prettier: Para formatear el código.

Configuración del Proyecto
1. Clonar el Repositorio
bash
Copy
git clone https://github.com/tu-usuario/Qfinder-backend.git
cd Qfinder-backend
2. Instalar Dependencias
bash
Copy
npm install
3. Configurar el Archivo .env
Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables de entorno:

env
Copy
# Configuración del servidor
PORT=3000
NODE_ENV=development

# Configuración de la base de datos
DB_NAME=QfindeR
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
DB_PORT=3306

# Configuración de JWT
JWT_SECRET=tu_secreto_jwt
JWT_EXPIRES_IN=1h
4. Configurar la Base de Datos
Asegúrate de tener MySQL instalado y crear una base de datos llamada QfindeR. Luego, ejecuta las migraciones de Sequelize para crear las tablas:

bash
Copy
npx sequelize-cli db:migrate
Ejecutar el Proyecto
Modo Desarrollo
Ejecuta el servidor en modo desarrollo con nodemon:

bash
Copy
npm run dev
El servidor estará disponible en http://localhost:3000.

Modo Producción
Ejecuta el servidor en modo producción:

bash
Copy
npm start
Endpoints de la API
Autenticación
POST /api/auth/login: Iniciar sesión.

Notas Médicas
POST /api/notas-medicas: Crear una nueva nota médica.

GET /api/pacientes/:pacienteId/notas-medicas: Obtener notas médicas de un paciente.

PUT /api/notas-medicas/:notaId: Actualizar una nota médica.

Pacientes
GET /api/pacientes: Obtener todos los pacientes.

POST /api/pacientes: Crear un nuevo paciente.

Cuidadores
GET /api/cuidadores: Obtener todos los cuidadores.

POST /api/cuidadores: Crear un nuevo cuidador.

Ejemplos de Solicitudes
Crear una Nota Médica
bash
Copy
POST /api/notas-medicas
Headers:
  Authorization: Bearer <token>
Body:
  {
    "pacienteId": 1,
    "titulo": "Nota de prueba",
    "contenido": "Esta es una nota de prueba."
  }
Obtener Notas Médicas de un Paciente
bash
Copy
GET /api/pacientes/1/notas-medicas
Headers:
  Authorization: Bearer <token>
Actualizar una Nota Médica
bash
Copy
PUT /api/notas-medicas/1
Headers:
  Authorization: Bearer <token>
Body:
  {
    "titulo": "Nota actualizada",
    "contenido": "Este es el contenido actualizado."
  }
Contribuir
Si deseas contribuir a este proyecto, sigue estos pasos:

Haz un fork del repositorio.

Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).

Realiza tus cambios y haz commit (git commit -m 'Añadir nueva funcionalidad').

Haz push a la rama (git push origin feature/nueva-funcionalidad).

Abre un Pull Request.

Licencia
Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo LICENSE.

¡Gracias por usar Qfinder Backend! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue o contactar al equipo de desarrollo. 😊

Este README.md pro