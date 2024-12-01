const mysql = require('mysql2/promise');

const mysqlConfig = {
  host: process.env.MYSQL_HOST,         // Host del servidor MySQL
  user: process.env.MYSQL_USER,         // Usuario de la base de datos
  password: process.env.MYSQL_PASSWORD, // Contraseña
  database: process.env.MYSQL_DATABASE, // Nombre de la base de datos
};

async function connectToMySQL() {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    console.log('✅ Conectado exitosamente a MySQL');
    return connection;
  } catch (err) {
    console.error('❌ Error conectando a MySQL:', err);
    throw err;
  }
}

module.exports = { connectToMySQL };
