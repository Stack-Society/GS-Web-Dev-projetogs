import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#4b0082] text-white py-6 mt-">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Nome do projeto */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold">SafeFlow</h2>
          <p className="text-sm">Segurança e eficiência na palma da sua mão.</p>
        </div>

        {/* Direitos autorais */}
        <div className="text-sm text-center sm:text-right">
          © {new Date().getFullYear()} SafeFlow. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
