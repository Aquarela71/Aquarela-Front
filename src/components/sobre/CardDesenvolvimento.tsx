import img9 from '../../assets/Images/OnuCOISO.jpg'

const Desenvolvimento: React.FC = () => {
    return (
        <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg bg-white">
          <div className="px-6 py-4">
            <div className="text-center font-bold text-xl mb-2"> Desenvolvimento Sustentavel </div>
            <ul className="list-disc ml-6">
              <li>Nossa atuação está alinhada com os objetivos da ONU para o alcance do desenvolvimento sustentável.</li>
              <li>Reduzir a desigualdade dentro dos países e entre eles.</li>
              <img src={img9} alt="Imagem de cerâmica" className='rounded-2xl mb-4' />
        
            </ul>
          </div>
        </div>
      );
    }
    
    export default Desenvolvimento;