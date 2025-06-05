import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/ilustracao-logo.jpg'

const Nav = () => {
  return (
    <>
      <header className="bg-[#4b0082] text-white">
        <div className="container mx-auto flex items-center justify-between p-4 flex-wrap">
          {/* Logo + Título */}
          <div className="flex items-center space-x-4">
            <img src={Logo} alt="Logo ilustrativo" className="w-16 h-auto" />
            <h1 className="text-2xl font-bold">SafeFlow</h1>
          </div>

          {/* Navegação */}
          <nav className="flex space-x-4 mt-2 sm:mt-0">
            <Link to="/" className="hover:text-fuchsia-400">Home</Link>
            <Link to="/Solução" className="hover:text-fuchsia-400">Solução</Link>
            <Link to="/login" className="hover:text-fuchsia-400">Login</Link>
            <Link to="/Sobre" className="hover:text-fuchsia-400">Sobre</Link>
          </nav>
        </div>
      </header>
      <hr />
    </>
  )
}

export default Nav
