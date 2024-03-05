import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Categoria from '../../../model/Categoria';
import { atualizar, buscar, cadastrar, tipo } from '../../../services/Service';
import { toastAlerta } from '../../../util/toastAlerta';
//import CardCategorias from '../cardCategoria/CardCategoria';

function FormularioCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })

    console.log(JSON.stringify(categoria))
    
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await atualizar('/categorias/atualizar', categoria, setCategoria, {
          headers: {
            'Authorization': token
          }
        })

        toastAlerta('Categoria atualizada com sucesso', 'sucesso')
        retornar()

      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao atualizar a Categoria', 'erro')
        }

      }

    } else {
      try {
        await cadastrar('/categorias/cadastrar', categoria, setCategoria, {
          headers: {
            'Authorization': token
          }
        })

        toastAlerta('Categoria cadastrada com sucesso', 'sucesso')

      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao cadastrado a Categoria', 'erro')
        }
      }
    }

    retornar()
  }

  function retornar() {
    navigate("/categorias/cadastrar")
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/login');
    }
  }, [token]);

 


  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8 font-dm text-ver">
        {id === undefined ? 'Cadastre uma nova Categoria' : 'Editar categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">


  <label htmlFor="tipo" className='ml-2 mt-6 font-barlow text-xl text-lar font-semibold'>Nome da Categoria</label>
          <input
            type="text"
            placeholder="Nome"
            className="border-4 border-ver rounded-xl p-1 pl-2 font-barlow text-lg
            focus:border-ver focus:outline-none focus:text-ver"
            name='tipo'
            value={categoria.tipo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <label htmlFor="descricao" className='ml-2 font-barlow text-xl text-lar font-semibold'>Descrição da Categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name='descricaocat'
            className="border-4 border-ver rounded-xl p-1 pl-2 font-barlow text-lg
            focus:border-ver focus:outline-none focus:text-ver"
            value={categoria.descricaocat}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        
        <div className='flex justify-center'>
        <button
          className='rounded-xl text-xl font-barlow text-white bg-lar hover:bg-ros w-1/2 py-2 cursor-pointer'
          type="submit" >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
        </div>

      </form>
    </div>
  );
}

export default FormularioCategoria;