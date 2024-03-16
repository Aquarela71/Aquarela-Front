import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { toastAlerta } from "../../../util/toastAlerta";
import Categoria from "../../../model/Categoria";
import CardCategoria from "../cardCategoria/CardCategoria";
import Masonry from "react-masonry-css";

function ListaCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [buscaPorTipo, setBuscaPorTipo] = useState("");
  const [listaBusca, setListaBusca] = useState<Categoria[]>([]);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarTemas() {
    try {
      await buscar("/categorias", setCategorias, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  async function buscarPorTipo() {
    try {
      await buscar("/categoria", setCategorias, {
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

  useEffect(() => {
    const resultado = categorias.filter((categoria) =>
      categoria.tipo.toLowerCase().includes(buscaPorTipo.toLowerCase())
    );
    setListaBusca(resultado);
  }, [buscaPorTipo, categorias]);

  const monitorTipo = (e: ChangeEvent<HTMLInputElement>) => {
    setBuscaPorTipo(e.target.value);
  };

  useEffect(() => {
    buscarTemas();
    buscarPorTipo();
  }, [categorias.length]);

  const filteredCategorias = categorias.filter(
    (categoria) =>
      categoria.tipo.toLowerCase().includes(buscaPorTipo.toLowerCase())
  );


  return (
    <div>
      <div className="my-6 mx-60 grid">
        <input
          type="text"
          placeholder="Pesquisar por nome"
          value={buscaPorTipo}
          onChange={monitorTipo}
          className="font-archivo border-2 border-gray-300 px-4 py-2 rounded-xl focus:outline-none 
       focus:border-noturno focus:text-ver focus:font-bold"
        />
      </div>
      {usuario.tipo === "vendedor" ? (
        <div className="flex justify-end mx-14 my-4">
          <Link
            to="/cadastroCategoria"
            className="block px-4 py-2 bg-lar rounded-xl font-barlow text-xl text-eggnog hover:bg-ros uppercase"
          >
            Nova Categoria
          </Link>
        </div>
      ) : (
        <div></div>
      )}

      <Masonry
        breakpointCols={{ default: 4, 1100: 2, 700: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filteredCategorias.map((categoria) => (
          <CardCategoria key={categoria.tipo} categoria={categoria} />
        ))}
      </Masonry>
    </div>
  );
}

export default ListaCategoria;
