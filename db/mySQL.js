const mysql = require('mysql2/promise');

// Configuración de la base de datos MySQL
const mysqlConfig = {
  host: process.env.MYSQL_HOST,         // Host del servidor MySQL (por ejemplo, mysql.hostinger.com)
  user: process.env.MYSQL_USER,         // Usuario de la base de datos
  password: process.env.MYSQL_PASSWORD, // Contraseña del usuario
  database: process.env.MYSQL_DATABASE, // Nombre de la base de datos
};

// Función para conectar a MySQL
async function connectToMySQL() {
  try {
    console.log('Intentando conectar a MySQL con la configuración:', {
      host: mysqlConfig.host,
      user: mysqlConfig.user,
      database: mysqlConfig.database,
    });
    const connection = await mysql.createConnection(mysqlConfig);
    console.log('✅ Conectado exitosamente a MySQL');
    return connection;
  } catch (err) {
    console.error('❌ Error conectando a MySQL:', err);
    throw err; // Lanza el error para que se gestione en otro lugar del código
  }
}

module.exports = { connectToMySQL };
