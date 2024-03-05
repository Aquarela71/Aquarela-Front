import { FacebookLogo, GithubLogo, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react';
import React from 'react';

const ContatoCard: React.FC = () => {
  return (
    <div className="max-w-96 mx-auto rounded overflow-hidden shadow-lg bg-gray-200 border border-ver border-2 rounded-lg p-2 ">
      <div className="px-6 py-4">
        <div className="font-bold text-ver text-xl mb-2">Contato</div>
        <p className="text-ver text-base font-semibold">
          Telefone: (11) 1234-5678
        </p>
        <p className="text-ver text-base font-semibold">
          Email: contato@aquarela.com
        </p>
        <p className="text-ver text-base font-semibold">
          Endereço: Rua Projeto Integrador, 123 - São Paulo, SP
        </p>
        <div className='flex gap-2 mt-4 text-ver'>
            <InstagramLogo size={48} weight='bold' className=' hover:scale-75 ease-in duration-500 cursor-pointer ' />
              <GithubLogo size={48} weight='bold'className=' hover:scale-75 ease-in duration-500 cursor-pointer' />
              <FacebookLogo size={48} weight='bold' className=' hover:scale-75 ease-in duration-500 cursor-pointer'/>
              <WhatsappLogo size={48} weight='bold'className=' hover:scale-75 ease-in duration-500 cursor-pointer' />

            </div>
      </div>
    </div>
  );
}

export default ContatoCard;