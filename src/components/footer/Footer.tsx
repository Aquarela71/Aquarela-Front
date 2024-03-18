import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react'
import img1 from '../../assets/Images/maos.png'
import { Link } from 'react-router-dom'
import ModalContato from '../contato/ModalContato'

function Footer() {



  return (
    <>
      <div className="md:flex justify-around bg-noturno items-center text-eggnog text-center p-4">
        <div>
          <Link to="/home" className="md:text-6xl font-bold font-dm uppercase xs: text-5xl">
            Aquarela
          </Link>
        </div>
        <div>
          <div className="container flex flex-col items-center py-4 ">
            <p className='text-lg'>Acesse nossas redes sociais:</p>
            <div className='flex gap-2 p-2'>
              <InstagramLogo size={48} weight='bold' className='hover:scale-75 ease-in duration-500 cursor-pointer ' />
              <GithubLogo size={48} weight='bold' className='hover:scale-75 ease-in duration-500 cursor-pointer ' />
              <FacebookLogo size={48} weight='bold' className='hover:scale-75 ease-in duration-500 cursor-pointer ' />
              <WhatsappLogo size={48} weight='bold' className='hover:scale-75 ease-in duration-500 cursor-pointer ' />
            </div>
            <p > <Link to='/sobreNos' className='hover:underline'>Sobre Nós</Link> | <ModalContato /> </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
