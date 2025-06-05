import React from 'react'
import Enchente from '../assets/enchente-1.jpg'

const Home = () => {
  return (
    <>
         <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-cover" style={{ backgroundImage: `url(${Enchente})`}}>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Proteja sua casa ou comércio antes que a água chegue.
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Sistema inteligente que antecipa enchentes e aciona ações preventivas automaticamente.
        </p>
        <a
          href="#como-funciona"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Veja como funciona
        </a>
      </section>

      {/* O Problema */}
      <section className="bg-gray-100 py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">O Problema</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Todos os anos, milhares de brasileiros têm seus lares e negócios afetados por enchentes inesperadas. 
          Falta de aviso e ação preventiva são os maiores vilões.
        </p>
      </section>

      {/* A Solução */}
      <section id="como-funciona" className="py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">A Solução</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Nosso sistema une sensores de nível d'água, previsão do tempo e ações automatizadas — 
          tudo para manter você e seu patrimônio protegidos.
        </p>
      </section>

      {/* Diferenciais */}
      <section className="bg-blue-50 py-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">Diferenciais</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">📡 Dados em tempo real</h3>
            <p>Sensores detectam o nível da água diretamente no seu local.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">🌦️ Previsão integrada</h3>
            <p>Risco de chuva forte previsto com horas de antecedência.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">⚙️ Ação imediata</h3>
            <p>Ative bombas, sirenes ou barreiras automaticamente.</p>
          </div>
        </div>
      </section>

      {/* Depoimento */}
      <section className="py-16 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-6">Cenário real de uso</h2>
        <blockquote className="max-w-2xl mx-auto italic text-lg">
          “O sistema avisou com antecedência e a bomba foi ligada automaticamente. 
          Meu comércio não foi alagado, enquanto o da frente ficou debaixo d’água.”
        </blockquote>
        <p className="mt-4 font-semibold">– Ricardo, comerciante em São Paulo</p>
      </section>

      {/* Call to Action final */}
      <section className="py-20 px-4 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Comece agora a proteger o que é seu.</h2>
        <a
          href="./Sobre"
          className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Quero saber mais
        </a>
      </section>
    </main>
    </>
  )
}

export default Home