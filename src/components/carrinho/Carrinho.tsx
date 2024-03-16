import React, { useContext } from "react";
import { CarrinhoContext } from "../../contexts/CarrinhoContext";
import { toastAlerta } from "../../util/toastAlerta";
import Produto from "../../model/Produto";
import { useNavigate } from "react-router-dom";

const Carrinho: React.FC = () => {
  const { carrinho, limparCarrinho } = useContext(CarrinhoContext);

  const total = carrinho.reduce((acc, curr) => acc + parseFloat(curr.preco), 0);

  const handleCheckout = () => {
    limparCarrinho();
    toastAlerta("Compras finalizadas", "sucesso");
    retornar();
  };

  function retornar() {
    navigate("/produtos");
  }

  let navigate = useNavigate();

  return (
    <div>
      <div className="max-w-3xl mx-auto mt-5 mb-10 border-2 border-ver bg-gray-200 rounded-lg shadow-md overflow-hidden">
        <div className="py-4 bg-ver">
          <h2 className="text-4xl font-semibold text-eggnog font-dm">
            Carrinho
          </h2>
        </div>
        <div>
          <div className=" grid-cols-3 w-full gap-4 flex justify-around font-playfair font-bold text-lar text-xl my-4 mt-4 pb-2">
            <div className="col-span-2">Produto</div>
            <div>Preço</div>
          </div>
          <div className="pb-4 px-5  mx-auto text-center">
            <div className="border-b-2 border-ver"></div>
          </div>

          <ul>
            {carrinho.map((produto: Produto) => (
              <li
                key={produto.id}
                className="px-4 py-2 border-b border-gray-200 flex items-center"
              >
                <div className="grid grid-cols-3 gap-4 items-center text-center w-full font-archivo font-semibold text-ver my-4">
                  <div className="ml-4 col-span-2 truncate">
                    <div className="max-w-80">{produto.nome}</div>
                  </div>
                  <div className="text-lg mr-24">
                    R$ {parseFloat(produto.preco).toFixed(2)}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-4 px-5  mx-auto text-center">
            <div className="border-b-2 border-ver"></div>
          </div>

        <div className="flex justify-between mx-12">
          <div className="px-4 py-2 border-t border-gray-200">
            <p className="text-lg font-semibold text-teal-950 my-6">
              Total: R$ {total.toFixed(2)}
            </p>
          </div>
          <div className="px-4 py-2">
            <button
              onClick={handleCheckout}
              className="px-4 py-2 bg-ver text-eggnog font-barlow text-xl rounded-md hover:bg-ros my-4"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
