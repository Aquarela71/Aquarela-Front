import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../model/Categoria";
import { buscar, deletar, tipo } from "../../../services/Service";
import { toastAlerta } from "../../../util/toastAlerta";

function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  // async function buscarPorTipo(tipo: string) {
  //     try {
  //         await tipo(`/categorias/${tipo}`, setCategoria, {
  //             headers: {
  //                 'Authorization': token
  //             }
  //         })
  //     } catch (error: any) {
  //         if (error.toString().includes('403')) {
  //             toastAlerta('O token expirou, favor logar novamente', 'info')
  //             handleLogout()
  //         }
  //     }
  // }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/categorias");
  }

  async function deletarCategoria() {
    try {
      await deletar(`/categorias/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      toastAlerta("Categoria apagada com sucesso", "sucesso");
    } catch (error) {
      toastAlerta("Erro ao apagar a Categoria", "erro");
    }

    retornar();
  }
  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4 font-dm text-ver">
        Deletar Categoria
      </h1>

      <p className="text-center text-xl font-barlow text-lar font-semibold mb-4">
        Você tem certeza de que deseja apagar a Categoria a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-ver text-eggnog font-dm font-bold text-2xl">
          Categoria
        </header>
        <div className="p-4">
          <p className="text-2xl h-full font-barlow text-noturno mb-2">
            {categoria.tipo}
          </p>
          <p className="text-2xl h-full font-barlow text-noturno mb-2">
            {categoria.descricaocat}
          </p>
        </div>

        <div className="flex">
          <button
             className="w-full font-barlow text-xl text-white bg-ver hover:bg-blue-950 flex items-center justify-center py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="font-barlow text-xl text-white bg-lar hover:bg-ros w-full flex items-center justify-center"
            onClick={deletarCategoria}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
