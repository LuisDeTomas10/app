const express = require('express');
const router = express.Router();
const { connectToMySQL } = require('../db/mySQL');

router.get('/usuarios', async (req, res) => {
  try {
    const connection = await connectToMySQL();
    const [rows] = await connection.execute('SELECT id, nombre FROM usuarios');
    res.json(rows); // Devuelve los datos en formato JSON
  } catch (err) {
    console.error('❌ Error obteniendo los datos:', err);
    res.status(500).send('Error obteniendo los datos de usuarios');
  }
});

module.exports = router;
