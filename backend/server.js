// server.js
const express = require('express');
const cors = require('cors');
const db = require('./db'); // AQUÍ IMPORTAS LA CONEXIÓN

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/productos', async (req, res) => {
  try {
    // Usas la conexión importada para hacer la consulta
    const result = await db.query('SELECT * FROM productos');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(5000, () => console.log('Servidor en puerto 5000'));