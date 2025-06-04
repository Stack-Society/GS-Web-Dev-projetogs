import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/ilustracao-logo.jpg'

const Nav = () => {
  return (
    <>
        <header className='flex items-center justify-between bg-[#4b0082] h-30'>
          <figure>
            <img src={Logo} alt="imagem ilustrativa" className='w-30 ml-5' />
          </figure>
          <h1 className='text-3xl mr-335 mt-16 text-[#fff]'>
            SafeFlow
          </h1>
          
          <nav className='text-[#fff] p-7 flex gap-2'>
              <Link to="/" className='hover:text-fuchsia-500'>Home</Link>
              <Link to="/Solução" className='hover:text-fuchsia-500'>Solução</Link>
              <Link to="/Cadastrar" className='hover:text-fuchsia-500'>Cadastrar</Link>
              <Link to="/Sobre" className='hover:text-fuchsia-500'>Sobre</Link>
          </nav>
        </header>
        <hr />
    </>
  )
}

export default Nav