import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { toastAlerta } from "../../../util/toastAlerta";
import Categoria from "../../../model/Categoria";
import CardCategoria from "../cardCategoria/CardCategoria";

function ListaCategoria() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

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

  useEffect(() => {
    buscarTemas();
  }, [categorias.length]);

  return (
    <div>
      
      {usuario.tipo === "vendedor"?
      <div className="flex justify-end mx-14 my-4">
        <Link
          to="/cadastroCategoria"
          className="block px-4 py-2 bg-lar rounded-xl font-barlow text-xl text-eggnog hover:bg-ros uppercase"
        >
          Nova Categoria
        </Link>
      </div>
      :
      <div></div>
      }

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListaCategoria;
