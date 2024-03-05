import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import img1 from '../../assets/Images/maos.png'
import { Link } from 'react-router-dom';

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center w-full bg-noturno text-white ">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Aquarela | Copyright: </p>
            <div className="flex justify-center">
              <Link to="/sobre" className="text-lg mr-2">Sobre nós</Link>
              <p className="text-lg">|</p>
              <Link to="/contato" className="text-lg ml-2">Contato</Link>
            </div>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} weight='bold' />
              <InstagramLogo size={48} weight='bold' />
              <GithubLogo size={48} weight='bold' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer