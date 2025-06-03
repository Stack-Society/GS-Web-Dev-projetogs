import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Solução">Solução</Link>
                <Link to="/Cadastrar">Cadastrar</Link>
                <Link to="/Sobre">Sobre</Link>
            </nav>
        </header>
    </>
  )
}

export default Nav