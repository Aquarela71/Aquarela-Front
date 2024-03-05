import { Link } from "react-router-dom";
import Categoria from "../../../model/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <div className="border bg-gray-200 flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-ver text-eggnog font-dm font-bold text-2xl">
        Categoria
      </header>
      <div>
        <p className="p-8 text-4xl text-center uppercase text-noturno font-bold font-barlow h-full">{categoria.tipo}</p>
      </div>
      <div>
        <h4 className="ml-4 font-barlow font-bold text-xl uppercase">Descrição:</h4>
        <p className="ml-6 mb-6 text-2xl text-ver text-archivo h-full truncate">
          {categoria.descricaocat}
        </p>
      </div>
      <div className="flex">
        <Link
          to={`/editarCategoria/${categoria.id}`}
          className="w-full text-eggnog bg-ver hover:bg-blue-950 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarCategoria/${categoria.id}`}
          className="text-eggnog bg-lar hover:bg-ros w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;
