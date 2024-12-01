const express = require('express');
const router = express.Router();
const { sql } = require('../db/sqlServer');
const { connectToMySQL } = require('../db/mySQL');

router.post('/sync', async (req, res) => {
  try {
    // Obtener datos de SQL Server
    const result = await sql.query('SELECT * FROM tabla_origen');

    // Conectar a MySQL
    const mysqlConnection = await connectToMySQL();

    // Iterar sobre los datos y sincronizarlos
    for (const row of result.recordset) {
      await mysqlConnection.execute(
        'REPLACE INTO tabla_destino (id, columna1, columna2) VALUES (?, ?, ?)',
        [row.id, row.columna1, row.columna2]
      );
    }

    res.status(200).send('Sincronización completada');
  } catch (err) {
    console.error('Error en la sincronización:', err);
    res.status(500).send('Error en la sincronización');
  }
});

module.exports = router;