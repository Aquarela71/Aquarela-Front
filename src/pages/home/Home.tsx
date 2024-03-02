
import ModalProduto from '../../components/produto/modalProduto/ModalProduto';
import im1 from '../../assets/Images/prato.jpg';
import img2 from '../../assets/Images/costura.jpg'
import img3 from '../../assets/Images/carimbo.jpg'
import img4 from '../../assets/Images/composicao.jpg'
import './Home.css'

function Home() {
  return (
      <>
      {/*Imagem com título */}
      <div className="justify-center items-center flex pyy df text-white font-dm text-5xl">
        <h1>AQUARELA</h1>
      </div>
      
      {/*div com texto */}
      <div className="justify-center items-center flex pyy text-center text-ver text-4xl font-archivo">
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laudantium vel dolor esse reiciendis, nesciunt sapiente, nihil labore deserunt, quis in? Amet facilis porro, blanditiis culpa sed dignissimos doloribus ipsam?</h2>
      </div>

      {/*barrinha sobre nós */}
      <div className='flex justify-center items-center border-b-2 border-t-2 border-noturno font-barlow font-bold uppercase text-ros text-xl p-2'>
        <p>
          Sobre nós
        </p>
      </div>

        {/*Três imagens com  descrição*/}
      <div className='container-cols-3 flex justify-around justify-between px-4 pyy text-center text-ver font-bold font-archivo'>
        <div className='justify-center items-center'>
          <img src={im1} alt="Imagem de prato" className='imgdef rounded-2xl mb-4'/>
          <div className='border border-ver border-2 rounded-lg p-2'>Lorem ipsum dolor sit</div>
        </div>

        <div>
        <img src={img2} alt="Imagem de costura" className='imgdef rounded-2xl mb-4' />
          <div className='border border-ver border-2 rounded-lg p-2'>Lorem ipsum dolor sit</div>
        </div>

        <div>
        <img src={img3} alt="Imagem de cerâmica" className='imgdef rounded-2xl mb-4' />
          <div className='border border-ver border-2 rounded-lg p-2'>Lorem ipsum dolor sit</div>
        </div>
      </div>

        {/*Imagem à esquerda e texto à direita */}
      <div className='container-cols-2 flex font-archivo border-b-4'>
        <div className='flex-1'>
          <img src={img4} alt="Imagem composição" className='w-full object-cover'/>
        </div>
        <div className='flex-1 items-center text-3xl text-bege text-center bg-noturno'>
          <h1 className='mx-14 py-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorem velit perferendis magni libero consequuntur nam animi nesciunt inventore saepe, perspiciatis, sed beatae soluta dicta odit debitis voluptatem sunt labore.</h1>
        </div>
      </div>

      <div className="flex justify-around gap-4 pyy">
              <ModalProduto />
              <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
            </div>
    
    </>
  ); 
}

export default Home;