const mysql = require('mysql2/promise');

const mysqlConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

async function connectToMySQL() {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    console.log('Conectado a MySQL');
    return connection;
  } catch (err) {
    console.error('Error conectando a MySQL:', err);
  }
}

module.exports = { connectToMySQL };
