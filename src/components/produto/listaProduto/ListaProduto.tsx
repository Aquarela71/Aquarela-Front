import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import CardProduto from '../cardProduto/CardProduto';
import { toastAlerta } from '../../../util/toastAlerta';
import Produto from '../../../model/Produto';
import Categoria from '../../../model/Categoria';
import Masonry from 'react-masonry-css';

 function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [buscaPorNome, setBuscaPorNome] = useState('');
  const [listaBusca, setListaBusca] = useState <Produto[]>([]);
  const [buscaPorPreco, setBuscaPorPreco] = useState('');
  
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);



  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }


  async function buscarProdutos() {
    try {
      await buscar('/produtos', setProdutos, {
      });

      
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  async function buscaPorNomes() {
    try {
      await buscar('/produtos', setProdutos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }


useEffect (() => {
  const resultado = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(buscaPorNome.toLowerCase())
     );
     setListaBusca(resultado);
  }, [buscaPorNome,produtos] );
  
     const monitorNome = (e: ChangeEvent <HTMLInputElement>)=> {
      setBuscaPorNome (e.target.value);

       } ;

       useEffect (() => {
        const resultado = produtos.filter(produto =>
          produto.preco.toLowerCase().includes(buscaPorPreco.toLowerCase())
           );
           setListaBusca(resultado);
        }, [buscaPorPreco,produtos] );
        
           const monitorPreco = (e: ChangeEvent <HTMLInputElement>)=> {
            setBuscaPorPreco (e.target.value);
           } ;
    

  useEffect(() => {
    buscarProdutos(); buscaPorNomes();
  }, [produtos.length]);

  const filteredProdutos = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(buscaPorNome.toLowerCase()) &&
    produto.preco.toLowerCase().includes(buscaPorPreco.toLowerCase())
  );

  return (
    <>
 <div className="container mx-auto my-4">
  <div className="flex grid grid-cols-2 gap-4 mb-4">
    <input
      type="text"
      placeholder="Pesquisar por Nome"
      value={buscaPorNome}
      onChange={monitorNome}
      className="font-archivo border border-gray-300 px-4 py-2 rounded-xl focus:outline-none 
      focus:ring-2 focus:ring-noturno focus:border-transparent focus:text-ver"
    />
    <input
      type="text"
      placeholder="Pesquisar por Preço"
      value={buscaPorPreco}
      onChange={monitorPreco}
      className="font-archivo border border-gray-300 px-4 py-2 rounded-xl focus:outline-none 
      focus:ring-2 focus:ring-noturno focus:border-transparent focus:text-ver"
    />
  </div>

  <Masonry
        breakpointCols={{ default: 4, 1100: 2, 700: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filteredProdutos.map((produto) => (
          <CardProduto key={produto.id} post={produto} />
        ))}
      </Masonry>
</div>

     
      
    </>
  );
}

export default ListaProdutos;