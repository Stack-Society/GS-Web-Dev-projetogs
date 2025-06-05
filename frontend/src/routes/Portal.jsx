import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Portal = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

    if (!loggedUser) {
      navigate('/login');
      return;
    }

    fetch('http://localhost:3001/users')
      .then((res) => res.json())
      .then((data) => {
        const user = data.find(
          (u) => u.email === loggedUser.email && u.senha === loggedUser.senha
        );
        if (user) {
          setUserData(user);
        } else {
          navigate('/login');
        }
      })
      .catch(() => {
        navigate('/login');
      });
  }, [navigate]);

  if (!userData) return null;

  return (
    <main className="bg-white min-h-screen px-4 py-10 text-gray-800">
      <section className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Bem-vindo(a), {userData.nome}!
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">📋 Suas informações:</h2>
            <ul className="text-gray-700">
              <li><strong>Nome:</strong> {userData.nome}</li>
              <li><strong>Email:</strong> {userData.email}</li>
              <li><strong>Telefone:</strong> {userData.telefone || 'Não informado'}</li>
              <li><strong>Cidade:</strong> {userData.cidade || 'Não informado'}</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">📊 Monitoramento (simulado):</h2>
            <p className="text-sm text-gray-600 mb-2">Última leitura: 14:42</p>
            <ul className="text-gray-700">
              <li><strong>Nível da água:</strong> 28cm</li>
              <li><strong>Temperatura:</strong> 26°C</li>
              <li><strong>Umidade:</strong> 73%</li>
              <li><strong>Status:</strong> <span className="text-orange-500 font-semibold">Atenção</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
            onClick={() => {
              localStorage.removeItem('loggedUser');
              navigate('/');
            }}
          >
            Sair do Portal
          </button>
        </div>
      </section>
    </main>
  );
};

export default Portal;
