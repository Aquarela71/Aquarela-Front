import im1 from '../../assets/img/prato.jpg';
import img2 from '../../assets/img/costura.jpg'
import img3 from '../../assets/img/carimbo.jpg'
import img4 from '../../assets/img/ceramica3.jpg'
import './Home.css'

import Carrossel from '../../components/carrossel/Carrossel';

function Home() {
  return (
    <>
      {/*Imagem com título */}
      <div className="justify-center items-center imgTitulo flex pyy df text-white font-dm text-5xl">
        <h1 >AQUARELA</h1>
      </div>

      {/*div com texto */}
      <div className="justify-center items-center flex pyy text-center text-ver text-4xl font-archivo">
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laudantium vel dolor esse reiciendis, nesciunt sapiente, nihil labore deserunt, quis in? Amet facilis porro, blanditiis culpa sed dignissimos doloribus ipsam?</h2>
      </div>

      {/*barrinha sobre nós */}
      <div className='flex justify-center items-center border-b-2 border-t-2 border-noturno font-barlow font-bold uppercase text-ros text-3xl p-2'>
        <p>
          Serviços
        </p>
      </div>

      {/*Três imagens com  descrição*/}
      <div className='container-cols-3 flex-wrap flex justify-evenly px-4 pyy text-center text-ver font-archivo'>
        <div className='flex flex-col items-center gap-2 max-w-300'>
          <img src={im1} alt="Imagem de prato" className='imgdef rounded-2xl mb-4' />
          <h2 className='font-bold uppercase text-ros'>Lorem Ipsum</h2>
          <p className='max-w-xs '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div className='border border-ver border-2 rounded-lg p-2 mb-4 font-bold'>Saiba mais</div>
        </div>

        <div className='flex flex-col items-center gap-2 max-w-200'>
          <img src={img2} alt="Imagem de costura" className='imgdef rounded-2xl mb-4' />
          <h2 className='font-bold uppercase text-ros'>Lorem Ipsum</h2>
          <p className='max-w-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div className='border border-ver border-2 rounded-lg p-2 font-bold'>Saiba mais</div>
        </div>

        <div className='flex flex-col items-center gap-2 max-w-200'>
          <img src={img3} alt="Imagem de cerâmica" className='imgdef rounded-2xl mb-4' />
          <h2 className='font-bold uppercase text-ros'>Lorem Ipsum</h2>
          <p className='max-w-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <div className='border border-ver border-2 rounded-lg p-2 font-bold'>Saiba mais</div>
        </div>
      </div>

      {/*Imagem à esquerda e texto à direita */}
      <div className="flex flex-wrap items-stretch justify-around items-center font-archivo h-full w-full">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src={img4} alt="imagem de artesanato" className="object-cover" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center bg-ros font-archivo text-white p-2">
          <h4 className="max-w-xl text-xl p-4 break-words uppercase">Lorem ipsum, dolor sit amet</h4>
          <h3 className="max-w-xl text-3xl p-4 break-words uppercase leading-10">Lorem ipsum, dolor sit amet consectetur adipisicing</h3>
          <p className="max-w-xl text-lg p-4 break-words leading-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quas aut atque quod maxime iure natus quam sapiente unde temporibus eligendi, consequuntur esse culpa perferendis ratione, corporis hic minus harum!</p>
          <div className='border border-white border-2 rounded-lg p-2 font-bold w-32 text-center ml-3'>Saiba mais</div>
        </div>
      </div>

    {/*Produtos mais vendidos*/}
      <div className='flex justify-center mt-20 mb-20 items-center border-b-2 border-t-2 border-noturno font-barlow font-bold uppercase text-ros text-3xl p-2'>
        <p>
          Mais Vendidos
        </p>
      </div>
      <div className='flex flex-row justify-center items-center bg-ros'>
        
      </div>
    </>
  );
}

export default Home;