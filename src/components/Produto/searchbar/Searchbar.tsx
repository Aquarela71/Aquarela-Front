import react, { ChangeEvent, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import CardProduto from '../cardProduto/CardProduto';
import { toastAlerta } from '../../../util/toastAlerta';
import Produto from '../../../model/Produto';
import Categoria from '../../../model/Categoria';
import CardCategorias from '../../Categoria/cardCategoria/CardCategoria';

function SearchBar () {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [buscaPorNome, setBuscaPorNome] = useState('');
    const [listaBusca, setListaBusca] = useState <Produto[]>([]);
    const [buscaPorPreco, setBuscaPorPreco] = useState('');
    const [buscaPorTipo, setBuscaPortipo] = useState('');
    const [listaBuscaCategoria, setListaBuscaCategoria] = useState <Categoria[]>([]);
    
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


           useEffect (() => {
            const resultado = categorias.filter(categoria =>
              categoria.tipo.toLowerCase().includes(buscaPorPreco.toLowerCase())
               );
               setListaBuscaCategoria(resultado);
            }, [buscaPorTipo,categorias] );
            
               const monitorTipo = (e: ChangeEvent <HTMLInputElement>)=> {
                setBuscaPortipo (e.target.value);
               } ;
   

 return (
    <>
    <div className="flex  gap-4">
      <input
        type="text"
        placeholder="Pesquise"
        value={buscaPorNome}
        onChange={(ev) => setBuscaPorNome (ev.target.value)}
        className="border-2 border-slate-700 rounded p-2 text-pink-900"
      />

      <input
        type="number"
        placeholder="Preco"
        value={buscaPorPreco}
        onChange={monitorPreco}
        className="border-2 border-slate-700 rounded p-2 text-pink-900"
      />

      <input
        type="type"
        placeholder="Tipo"
        value={buscaPorTipo}
        onChange={monitorTipo}
        className="border-2 border-slate-700 rounded p-2 text-pink-900"
      />
    </div>

    <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {listaBusca.map((produto) => (
        <CardProduto key={produto.id} post={produto} />
      ))}
    </div>

    <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {listaBuscaCategoria.map((categoria) => (
        <CardCategorias key={categoria.id} categoria={categoria} />
      ))}
    </div>
<button  type='submit' className="rounded bg-indigo-400 hover:bg-indigo-900 text-white w-1/2 py-2 flex justify-center"> Pesquisar </button>
  </>
);
}

export default SearchBar;