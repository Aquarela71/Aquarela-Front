import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../model/Produto";
import { buscar, deletar } from "../../../services/Service";
import { toastAlerta } from "../../../util/toastAlerta";

function DeletarProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("Seu login expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado para ter acesso", "info");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/produtos");
  }

  async function deletarProduto() {
    try {
      await deletar(`/produtos/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      toastAlerta("Produto apagado com sucesso", "sucesso");
    } catch (error) {
      toastAlerta("Erro ao apagar o Produto", "erro");
    }

    retornar();
  }
  return (
    <div className="container w-1/3 mx-auto my-10">
      <h1 className="text-4xl text-center my-4 font-dm text-ver">
        Deletar Produto
      </h1>

      <p className="text-center text-xl font-barlow text-lar font-semibold mb-4">
        Você tem certeza de que deseja apagar o produto a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-ver text-eggnog font-dm font-bold text-2xl">
          {produto.nome}
        </header>
        <div className="p-4">
          <p className="text-2xl h-full font-barlow text-noturno mb-2">
            {produto.descricao}
          </p>
          <p className="text-2xl h-full font-barlow text-noturno mb-2">
            R${produto.preco}
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
            onClick={deletarProduto}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;
