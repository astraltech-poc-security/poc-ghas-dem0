const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(':memory:');

app.get('/search', (req, res) => {
  // Vulnerabilidad de Inyección SQL
  let query = "SELECT * FROM products WHERE name = '" + req.query.name + "'";
  db.all(query, (err, rows) => res.json(rows));
});
