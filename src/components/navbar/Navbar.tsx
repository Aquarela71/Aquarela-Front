import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
      <div className="container flex justify-between text-lg">
        <div className='text-2xl font-bold uppercase'>Blog Pessoal</div>

        {/* Botão do menu para telas menores */}
        <button onClick={toggleMenu} className="lg:hidden hover:underline">
          Menu
        </button>

        {/* Itens principais para telas normais */}
        <div className='hidden lg:flex gap-4'>
          <Link to='/login' className='hover:underline'>Login</Link>
          <Link to='/home' className='hover:underline'>Home</Link>
          <Link to='/produtos' className='hover:underline'>Produtos</Link>
          <Link to='/sobre-nos' className='hover:underline'>Sobre nós</Link>
        </div>

        {/* Menu Dropdown para telas menores */}
        {isOpen && (
          <div className="lg:hidden absolute right-0 mt-16 w-48 bg-white rounded-md overflow-hidden z-10">
            <Link to="/postagens" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Postagens</Link>
            <Link to="/temas" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Temas</Link>
            <Link to="/cadastrar-tema" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Cadastrar tema</Link>
            <Link to="/perfil" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Perfil</Link>
            <Link to="/sair" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sair</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;