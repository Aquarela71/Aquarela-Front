import React, { createContext, useState, ReactNode } from 'react';
import Produto from '../model/Produto';

interface CarrinhoContextType {
  carrinho: Produto[];
  adicionarProdutoAoCarrinho: (produto: Produto) => void;
  limparCarrinho: () => void;
}

interface CarrinhoProviderProps {
  children: ReactNode;
}

export const CarrinhoContext = createContext<CarrinhoContextType>({
  carrinho: [],
  adicionarProdutoAoCarrinho: () => {},
  limparCarrinho: () => {}
});

export const CarrinhoProvider: React.FC<CarrinhoProviderProps> = ({ children }) => {
  const [carrinho, setCart] = useState<Produto[]>([]);

  const adicionarProdutoAoCarrinho = (produto: Produto) => {
    setCart(prevCart => [...prevCart, produto]);
  };

  const limparCarrinho = () => {
    setCart([]);
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarProdutoAoCarrinho, limparCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
};
