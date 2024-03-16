import { Link } from "react-router-dom";
import Categoria from "../../../model/Categoria";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  const { usuario } = useContext(AuthContext);

  return (
    <div className="border-2 border-ver bg-gray-200 flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-ver text-eggnog font-dm font-bold text-2xl break-words truncate">
        Categoria
      </header>
      <div>
        <p className="p-8 text-4xl text-center uppercase text-teal-950 font-bold font-barlow h-full break-words">
          {categoria.tipo}
        </p>
      </div>
      <div>
        <h4 className="ml-4 text-lar font-barlow font-bold text-xl uppercase">
          Descrição:
        </h4>
        <p className="mx-6 mb-6 text-2xl text-ver text-archivo h-full break-words">
          {categoria.descricaocat}
        </p>
      </div>
      {usuario.tipo === "vendedor" ? (
        <div className="flex">
          <Link
            to={`/editarCategoria/${categoria.id}`}
            className="w-full text-xl font-barlow text-eggnog bg-ver hover:bg-blue-950 flex items-center justify-center py-2"
          >
            <button>Editar</button>
          </Link>
          <Link
            to={`/deletarCategoria/${categoria.id}`}
            className="text-eggnog text-xl font-barlow bg-lar hover:bg-ros w-full flex items-center justify-center"
          >
            <button>Deletar</button>
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default CardCategorias;
