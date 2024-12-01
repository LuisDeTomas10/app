require('dotenv').config();
const express = require('express');
const { connectToMySQL } = require('./db/mySQL');
const { connectToSQLServer } = require('./db/sqlServer'); // Solo para local
const syncRoutes = require('./routes/sync');

const app = express();
const PORT = process.env.PORT || 3000;

// Verificar si la conexión es local o en Render
if (process.env.NODE_ENV !== 'production') {
  connectToSQLServer(); // Solo conecta a SQL Server si no estás en producción
}

// Siempre conecta a MySQL
connectToMySQL();

app.use('/api', syncRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
