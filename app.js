require('dotenv').config();
const express = require('express');
const usuariosRoutes = require('./routes/usuarios');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para procesar JSON
app.use(express.json());

// Usar las rutas de usuarios con el prefijo /api
app.use('/api', usuariosRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
