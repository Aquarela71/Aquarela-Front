import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-ver font-dm text-eggnog py-4 flex justify-center">
      <div className="container flex justify-between items-center text-lg">
        <div className="relative lg:block">
          <div onClick={toggleMenu} className="hover:underline cursor-pointer">
            M
          </div>
          {isOpen && (
            <div className="absolute left-0 mt-4 w-48 bg-ver rounded-md overflow-hidden z-10">
              <Link
                to="/home"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Home
              </Link>
              <Link
                to="/produtos"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Produtos
              </Link>
              <Link
                to="/categoria"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Categorias
              </Link>
              <Link
                to="/cadastroCategoria"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Cadastro Categoria
              </Link>
              <Link
                to="/cadastroProdutos"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Cadastro Produto
              </Link>
              <Link
                to="/login"
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Login
              </Link>
            </div>
          )}
        </div>

        <div className="text-4xl font-dm font-bold uppercase">Aquarela</div>

        <div className="hidden lg:flex">
          <Link
            to="/sair"
            className="block px-4 py-2 hover:bg-gray-200"
          >
            Sair
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
