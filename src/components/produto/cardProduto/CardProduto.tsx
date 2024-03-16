import { Link } from "react-router-dom";
import Produto from "../../../model/Produto";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { CarrinhoContext } from "../../../contexts/CarrinhoContext";
import { toastAlerta } from "../../../util/toastAlerta";
import placeholder from "../../../assets/Images/placeholder.png";

interface CardProdutoProps {
  post: Produto;
}

function CardProduto({ post }: CardProdutoProps) {
  const { usuario } = useContext(AuthContext);
  const { adicionarProdutoAoCarrinho } = useContext(CarrinhoContext);

  const handleAdicionarAoCarrinho = () => {
    adicionarProdutoAoCarrinho(post); 
    toastAlerta('Produto adicionado ao carrinho', 'info');
  };

  return (
    <div className="border-noturno border flex flex-col rounded-xl overflow-hidden my-4 mb-6 shadow-lg">
      <div>
        <div className="flex w-full bg-ver py-4 px-4 items-center gap-4 ">
          <h4 className="text-2xl text-eggnog font-dm font-semibold uppercase mx-2 truncate">
            {post.nome}
          </h4>
        </div>
        <div className="p-4 bg-gray-200">
          <div className="rounded-2xl">
            <img
              src={post.foto || placeholder}
              className="mx-auto rounded-3xl max-h-80 object-contain py-3"
            />
          </div>

          <div className="text-ver text-xl font-barlow py-2">
            <p className="py-2">
              <span className="font-bold uppercase text-noturno">CATEGORIA: </span>
              <span className="font-archivo text-lg">
                {" "}
                {post.categoria?.tipo}
              </span>
            </p>
            <p className="py-2">
              <span className="font-bold uppercase text-noturno">MATERIAL: </span>
              <span className="font-archivo text-lg">
                {" "}
                {post.material}
              </span>
            </p>
            <p className="py-2">
              <span className="font-bold uppercase text-noturno">DESCRIÇÃO: </span>
              <span className="text-2xl text-ver text-archivo h-full break-words">
                {" "}
                {post.descricao}
              </span>
            </p>
            <p className="py-2">
              <span className="font-bold uppercase text-noturno">PREÇO: </span>
              <span className="font-archivo text-xl">
                {" "}
                R${post.preco}
              </span>
            </p>
          </div>
        </div>
      </div>
      {usuario.tipo === "vendedor" ?
        <div className="flex">
          <Link
            to={`/editarProduto/${post.id}`}
            className="w-full font-barlow text-xl text-white bg-ver hover:bg-blue-950 flex items-center justify-center py-2"
          >
            <button>Editar</button>
          </Link>
          <Link
            to={`/deletarProduto/${post.id}`}
            className="font-barlow text-xl text-white bg-lar hover:bg-ros w-full flex items-center justify-center"
          >
            <button>Deletar</button>
          </Link>
        </div>
        :
        <div>
          <button onClick={handleAdicionarAoCarrinho} className="w-full font-barlow text-xl text-white bg-ver hover:bg-blue-950 flex items-center justify-center py-2">Adicionar ao carrinho</button>
        </div>
      }
    </div>
  );
}

export default CardProduto;
