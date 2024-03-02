import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import CardProduto from '../cardProduto/CardProduto';
import { toastAlerta } from '../../../util/toastAlerta';
import Produto from '../../../model/Produto';
import Categoria from '../../../model/Categoria';


function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [buscaPorNome, setBuscaPorNome] = useState('');
  const [listaBusca, setListaBusca] = useState <Produto[]>([]);
  const [buscaPorPreco, setBuscaPorPreco] = useState('');
  
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/');
    }
  }, [token]);

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar('/categorias/${id}', setCategorias, {
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

  async function buscarProdutos() {
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

  return (
    <>
    <div className="flex  gap-4">
        <input type="text"
        placeholder='Pesquise por Nome'
        value = {buscaPorNome}
        onChange={monitorNome}
            />

<input type="text"
        placeholder='Pesquise por Preco'
        value = {buscaPorPreco}
        onChange={monitorPreco}
            />
</div>

<div className="flex flex-col gap-2 font-bold text-transparent bg-clip-text bg-gradient-to-r text-transparent from-rosalaranja to-laranja font-serif">
          <p>Categoria do produto</p>
          <select name="categoria" id="tcategoria" className='text-rosanuvem shadow-2xl shadow-borgonha/50 border-4 border-rosanuvem border-x-rosanuvem bg-rosa-100 border flex flex-col rounded-2xl overflow-hidden justify-between rounded p-2 ' onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
            <option value="" selected disabled>Selecione uma Categoria</option>
            {categorias.map((categoria) => (
              <>
                <option value={categoria.id} key={categoria.id}>{categoria.tipo}</option>
              </>
            ))}
          </select>
        </div>

      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {listaBusca.map((produto) => (
          <CardProduto key={produto.id} post={produto} />
        
        ))}
      </div>

       
      
    </>
  );
}

export default ListaProdutos;

