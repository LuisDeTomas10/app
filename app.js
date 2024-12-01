const express = require('express');
const { connectToMySQL } = require('./db/mySQL');

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a MySQL
connectToMySQL();

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API!'); // Mensaje para la ruta raíz
});

// Rutas específicas (por ejemplo, /api/sync)
const syncRoutes = require('./routes/sync');
app.use('/api', syncRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
