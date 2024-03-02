import { Link } from 'react-router-dom'
import Produto from '../../../model/Produto'
//import Categoria from '../../../model/Categoria'
//import ListaCategoria from '../../Categoria/listaCategoria'

interface CardProdutoProps {
  post: Produto;
}



function CardProduto({post}: CardProdutoProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
    <div>
      <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
        <h3 className='text-lg font-bold text-center uppercase '>{post.usuario?.nome}</h3>
      </div>
      <div className='p-4 '>
        <h4 className='text-lg font-semibold uppercase'>{post.nome}</h4>
        <p>Foto: {post.foto}</p>
        <p>Descrição: {post.descricao}</p>
        <p>Material: {post.material}</p>
        <p>Categoria: {post.categoria?.tipo}</p>
        <p>Preco: {post.preco}</p>
        </div>
      </div>
      <div className="flex">
      <Link to={`/editarProduto/${post.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${post.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardProduto