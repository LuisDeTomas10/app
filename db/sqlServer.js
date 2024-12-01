const sql = require('mssql');

const sqlConfig = {
  user: process.env.SQL_SERVER_USER,
  password: process.env.SQL_SERVER_PASSWORD,
  server: process.env.SQL_SERVER_HOST,
  database: process.env.SQL_SERVER_DATABASE,
  options: {
    encrypt: false, // Cambiar a true si usas Azure
    trustServerCertificate: true,
  },
};

async function connectToSQLServer() {
  try {
    await sql.connect(sqlConfig);
    console.log('Conectado a SQL Server');
  } catch (err) {
    console.error('Error conectando a SQL Server:', err);
  }
}

module.exports = { connectToSQLServer, sql };