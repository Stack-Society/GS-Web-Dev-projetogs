const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const filePath = './users.json';

// Pegar usuários
app.get('/users', (req, res) => {
  const data = fs.readFileSync(filePath);
  const users = JSON.parse(data);
  res.json(users);
});

// Registrar novo usuário
app.post('/register', (req, res) => {
  const { nome, email, senha } = req.body;
  const data = fs.readFileSync(filePath);
  const users = JSON.parse(data);

  const exists = users.find(u => u.email === email);
  if (exists) return res.status(400).json({ msg: 'Email já cadastrado' });

  const newUser = {
    id: Date.now(),
    nome,
    email,
    senha
  };

  users.push(newUser);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  res.status(201).json({ msg: 'Usuário criado com sucesso!' });
});

// Login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const data = fs.readFileSync(filePath);
  const users = JSON.parse(data);

  const user = users.find(u => u.email === email && u.senha === senha);
  if (!user) return res.status(401).json({ msg: 'Credenciais inválidas' });

  res.json({ msg: 'Login bem-sucedido', user });
});

// Deletar usuário
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let users = JSON.parse(fs.readFileSync(filePath));
  users = users.filter(u => u.id !== id);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  res.json({ msg: 'Usuário deletado com sucesso' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});