import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../util/toastAlerta";
import { Article } from "@phosphor-icons/react";
import logo from "../../assets/Logo2.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { usuario, handleLogout } = useContext(AuthContext);

  const logout = () => {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso", "info");
    // Navigate("/home");
  };

  return (
    <div className="w-full bg-ver font-dm text-eggnog py-4 flex justify-center m-auto">
      <div className="container flex justify-between items-center text-lg">
        
      <div className="">
          <Link to="/home" className="block  hover:cursor-pointer">
            <img src={logo} className="h-20 w" />
          </Link>
        </div>
       

        <div className="hidden lg:flex uppercase text-center" style={{ marginLeft: '-64px' }}>
          <Link
            to="/home"
            className="text-4xl font-dm font-bold uppercase"
          >
            Aquarela
          </Link>
        </div>

        <div className="relative lg:block" ref={menuRef}>
          <div onClick={toggleMenu} className="hover:text-bege cursor-pointer">
            <Article size={32} />
          </div>
          {isOpen && (
            <div className="absolute right-0 mt-10 w-48 bg-ver rounded-b-md overflow-hidden z-10">
              <Link
                to="/home"
                className="block px-4 py-2 hover:bg-eggnog hover:text-ver"
              >
                Home
              </Link>
              <Link
                to="/produtos"
                className="block px-4 py-2 hover:bg-eggnog hover:text-ver"
              >
                Produtos
              </Link>
              <Link
                to="/categoria"
                className="block px-4 py-2 hover:bg-eggnog hover:text-ver"
              >
                Categorias
              </Link>

              <Link
                to="/login"
                className="block px-4 py-2 hover:bg-eggnog hover:text-ver"
              >
                Login
              </Link>
              <Link
                to=""
                onClick={logout}
                className="block px-4 py-2 hover:bg-eggnog hover:text-ver"
              >
                Sair
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
