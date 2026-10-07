const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(':memory:');

app.get('/search', (req, res) => {
  // Consulta parametrizada para evitar Inyección SQL
  const query = "SELECT * FROM products WHERE name = ?";
  db.all(query, [req.query.name], (err, rows) => res.json(rows));
});
