const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Endpoint para ler os usuários
app.get('/users', (req, res) => {
  fs.readFile('./users.json', 'utf8', (err, data) => {
    if (err) return res.status(500).json({ erro: 'Erro ao ler arquivo' });
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
