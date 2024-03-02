import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Navbar() {
 
  

  return (
    <div className='w-full bg-noturno text-diurno flex justify-between py-4 px-8'>
      <Link to="/home" className="text-2xl font-bold uppercase">
        Aquarela
      </Link> 
      <div className='flex gap-4'>
        <Link to='/login' className='hover:underline'>Login</Link>
        <Link to='/home' className='hover:underline'>Home</Link>
        <Link to='/produtos' className='hover:underline'>Produtos</Link>
        <Link to='/categoria' className='hover:underline'>Categoria</Link>
        <Link to='/cadastroCategoria' className='hover:underline'>Categoria Nova</Link>
        <Link to='/cadastroProdutos' className='hover:underline'>Produto Novo</Link>
        <div className='hover:underline'>Perfil</div>
        <div className='hover:underline'>Sair</div>
      </div>
    </div>
  );
}

export default Navbar;