import { ChangeEvent, useContext, useEffect, useState } from "react";
import "./Login.css";

import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import UsuarioLogin from "../../model/UsuarioLogin";
import { RotatingLines } from "react-loader-spinner";

function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center font-bold m-4">
        <form
          className="flex justify-center items-center flex-col w-full lg:w-1/2 gap-4 p-8 rounded-xl shadow-lg bg-gray-100 w-1/2 gap-4 border-4 border-ver border-2"
          onSubmit={login}
        >
          <h2 className="text-ver text-5xl font-dm">Entrar</h2>
          <div className="flex flex-col w-full">
            <label
              htmlFor="usuario"
              className="ml-2 font-barlow text-lar text-xl"
            >
              Email
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Email"
              className="border-4 border-ver rounded-xl p-2 font-barlow text-lg
              focus:border-ver focus:outline-none"
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="senha"
              className="ml-2 font-barlow text-lar text-xl"
            >
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-4 border-ver rounded-xl p-2 font-barlow text-lg
              focus:border-ver focus:outline-none"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <button
            type="submit"
            className="rounded-xl font-barlow text-lg bg-lar hover:bg-ros text-white w-1/2 py-2 flex justify-center cursor-pointer"
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Entrar</span>
            )}
          </button>

          <hr className="border-noturno w-full" />

          <p className="text-noturno font-archivo">
            Ainda não tem uma conta?{" "}
            <Link
              to="/cadastro"
              className="text-ros font-barlow text-xl font=semibold hover:text-lar flex justify-center"
            >
              Cadastre-se
            </Link>
          </p>
        </form>
        <div className="fundoLogin hidden lg:block border-l-2 border-ver"></div>
      </div>
    </>
  );
}

export default Login;
