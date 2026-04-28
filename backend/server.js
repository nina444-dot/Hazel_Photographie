const express = require('express');
const db = require ('./config/db')
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


db.connect((err) => {
  if (err) console.error('Erreur BDD:', err);
  else console.log('Connecté à MySQL !');
});


app.get('/api/formules', (req, res) => {
  const sql = "SELECT * FROM formules_standard";
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur sur le port ${PORT}`);
});