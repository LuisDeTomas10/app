require('dotenv').config();
const express = require('express');
const { connectToSQLServer } = require('./db/sqlServer');
const syncRoutes = require('./routes/sync');

const app = express();
const PORT = 3000;

// Conectar a SQL Server
connectToSQLServer();

// Configurar rutas
app.use('/api', syncRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(Servidor corriendo en http://localhost:${PORT});
});