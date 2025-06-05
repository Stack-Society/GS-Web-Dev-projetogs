import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  // Buscar os usuários do arquivo JSON
  useEffect(() => {
  fetch('http://localhost:3001/users')
    .then((res) => res.json())
    .then((data) => setUsuarios(data))
    .catch(() => setUsuarios([]));
}, []);


  const handleLogin = (e) => {
    e.preventDefault();

    const usuarioEncontrado = usuarios.find(
      (u) => u.email === email && u.senha === senha
    );

    if (usuarioEncontrado) {
      localStorage.setItem('loggedUser', JSON.stringify(usuarioEncontrado));
      navigate('/Portal');
    } else {
      setErro('E-mail ou senha incorretos.');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">Bem-vindo ao SafeFlow</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="seuemail@exemplo.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="********"
              required
            />
          </div>

          {erro && <p className="text-red-500 text-sm">{erro}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Entrar
          </button>

          <p className="grid grid-cols-1 text-sm text-center text-gray-500 mt-4 gap-2">
            <a href="/Cadastrar" className='hover:underline text-blue-600'>Não tem uma conta? Crie agora mesmo.</a>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
