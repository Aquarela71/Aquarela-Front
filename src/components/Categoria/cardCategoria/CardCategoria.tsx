import React from 'react'
import { Link } from 'react-router-dom'
import Categoria from '../../../model/Categoria'

interface CardCategoriaProps {
  categoria: Categoria
}


function CardCategorias({categoria}: CardCategoriaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-ros text-white font-bold text-2xl'>Categoria</header>
    <p className='p-8 text-3xl bg-lar h-full'>{categoria.descricaocat}</p> 
      <p className='p-8 text-3xl bg-lar h-full'>{categoria.tipo}</p> 
      <div className="flex">
        <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-slate-100 bg-ros hover:bg-ros flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='text-slate-100 bg-ros hover:bg-ros w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategorias