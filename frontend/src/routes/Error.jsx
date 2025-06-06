import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  const voltarParaInicio = () => {
    navigate('/');
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4 text-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        <div className="text-6xl mb-4">😢</div>
        <h1 className="text-3xl font-bold text-blue-600 mb-2">404 - Página não encontrada</h1>
        <p className="text-gray-600 mb-6">
          Ops! A página que você está procurando não existe.
        </p>
        <button
          onClick={voltarParaInicio}
          className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold"
        >
          Voltar para o início
        </button>
      </div>
    </main>
  );
};

export default Error;
