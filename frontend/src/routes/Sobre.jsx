import React from 'react'

const Sobre = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 sm:mt-16 sm:p-10">
      <h1 className="text-4xl font-bold mb-6 text-blue-700 text-center sm:text-left">
        Sobre o Projeto
      </h1>

      <p className="text-gray-700 leading-relaxed mb-6 text-center sm:text-justify bg-gray-100 p-6 rounded text-lg">
        Nosso sistema de alerta monitora continuamente o nível da água e envia notificações personalizadas para os usuários cadastrados assim que o nível ultrapassa limites seguros.
        O objetivo principal é fornecer alertas rápidos e eficazes para prevenir enchentes e garantir a segurança da comunidade, auxiliando na tomada de decisões rápidas.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6 text-center sm:text-justify bg-gray-100 p-6 rounded text-lg">
        Além disso, o sistema permite que os usuários configurem o tipo de aviso que preferem receber, seja por SMS, e-mail ou notificações push, garantindo maior comodidade e flexibilidade.
        A interface é simples e intuitiva, facilitando o uso para todos os perfis de usuários.
      </p>

      <div className="bg-blue-100 border border-blue-300 rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800 text-center sm:text-left">
          Tipos de Avisos Disponíveis
        </h2>
        <ul className="list-disc list-inside text-blue-700 space-y-2 text-lg">
          <li><strong>SMS</strong> - Mensagem direta enviada para o celular do usuário, ideal para quem não tem acesso constante à internet.</li>
          <li><strong>E-mail</strong> - Notificação enviada ao correio eletrônico, permitindo fácil consulta e registro dos alertas.</li>
          <li><strong>Push</strong> - Alertas instantâneos exibidos diretamente no aplicativo, garantindo rapidez na comunicação.</li>
        </ul>
      </div>
    </section>
  )
}

export default Sobre
