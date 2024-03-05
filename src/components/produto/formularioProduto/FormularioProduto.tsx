import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../model/Produto";
import Categoria from "../../../model/Categoria";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { toastAlerta } from "../../../util/toastAlerta";

function FormularioProduto() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    tipo: "",
    descricaocat: "",
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    descricao: "",
    preco: "",
    material: "",
    foto: "",
    categoria: null,
    usuario: null,
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategorias() {
    await buscar("/categorias", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
      console.log(categoria);
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate("/produtos");
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ produto });

    if (id != undefined) {
      try {
        await atualizar(`/produtos/atualizar`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta("Produto atualizada com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          toastAlerta("Erro ao atualizar a Produto", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/produtos/cadastrar`, produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta("Produto cadastrado com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          toastAlerta("Erro ao cadastrar o Produto", "erro");
        }
      }
    }
  }

  const carregandoCategoria = categoria.descricaocat === "";

  return (
    <div className="container flex flex-col mx-auto items-center my-10">
      <h1 className="text-5xl text-center my-4 font-dm text-ver">
        {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
      </h1>

      <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className='ml-2 font-barlow text-xl text-lar font-semibold'>Nome do produto</label>
          <input
            value={produto.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-4 border-ver rounded-xl p-1 pl-2 font-barlow text-lg
            focus:border-ver focus:outline-none focus:text-ver"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="descricao" className='ml-2 font-barlow text-xl text-lar font-semibold'>Descrição produto</label>
          <input
            value={produto.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Descrição"
            name="descricao"
            className="border-4 border-ver rounded-xl p-1 pl-2 font-barlow text-lg
            focus:border-ver focus:outline-none focus:text-ver"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="preco" className='ml-2 font-barlow text-xl text-lar font-semibold'>Preco do Produto</label>
          <input
            value={produto.preco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Preço"
            name="preco"
            required
            className="border-4 border-ver rounded-xl p-1 pl-2 font-barlow text-lg
            focus:border-ver focus:outline-none focus:text-ver"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="material" className='ml-2 font-barlow text-xl text-lar font-semibold'>Material</label>
          <input
            value={produto.material}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Material"
            name="material"
            className="border-4 border-ver rounded-xl p-1 pl-2 font-barlow text-lg
            focus:border-ver focus:outline-none focus:text-ver"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="foto" className='ml-2 font-barlow text-xl text-lar font-semibold'>Foto do Produto</label>
          <input
            value={produto.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Foto"
            name="foto"
            className="border-4 border-ver rounded-xl p-1 pl-2 font-barlow text-lg
            focus:border-ver focus:outline-none focus:text-ver"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p  className='ml-2 font-barlow text-xl text-lar font-semibold'>Categoria da produto</p>
          <select
            name="categoria"
            id="categoria"
            className="border-4 border-ver rounded-xl p-1 py-2 pl-2 mb-2 font-barlow text-lg
            focus:border-ver focus:outline-none focus:text-ver"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value={0} selected disabled>
              Selecione uma categoria
            </option>
            {categorias.map((categoria) => (
              <>
                <option value={categoria.id}>{categoria.tipo}</option>
              </>
            ))}
          </select>
        </div>
        <div className="flex justify-center">
        <button
          disabled={carregandoCategoria}
          type="submit"
          className='rounded-xl text-xl font-barlow text-white bg-lar hover:bg-ros w-1/2 py-2 cursor-pointer'
        >
          {carregandoCategoria ? (
            <span>Carregando</span>
          ) : id !== undefined ? (
            "Editar"
          ) : (
            "Cadastrar"
          )}
        </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioProduto;
