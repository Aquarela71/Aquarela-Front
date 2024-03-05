import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="w-full bg-noturno text-diurno uppercase flex items-center justify-between py-4 px-8">
        <Link to="/home" className="text-xl font-bold">Aquarela</Link>
        <button
          onClick={toggleDropdown}
          className="text-gray-600 focus:outline-none focus:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-diurno"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
          <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            <Link to="/login" className="hover:underline block">Login</Link>
          </div>
          <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            <Link to="/produtos" className="hover:underline block">Produtos</Link>
          </div>
          <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            <Link to="/categoria" className="hover:underline block">Categoria</Link>
          </div>
          <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            <Link to="/cadastroCategoria" className="hover:underline block">Categoria Nova</Link>
          </div>
          <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            <Link to="/cadastroProdutos" className="hover:underline block">Produto Novo</Link>
          </div>
          <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            <Link to="/perfil" className="hover:underline block">Perfil</Link>
          </div>
          <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
            <Link to="/sair" className="hover:underline block">Sair</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
