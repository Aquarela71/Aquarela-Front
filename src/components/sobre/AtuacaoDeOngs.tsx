import'./Sobre.css'
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import AtuacaoCard from "../sobre/CardAtuacao";

function ModalAtuacaDeOng() {
  return (
    <>
      <Popup 
      trigger={<button className='border border-ver border-2 rounded-lg p-2'>Nossa Atuação</button>} modal>
        <div>
          < AtuacaoCard/>
        </div>
      </Popup>
    </>
  );
}

export default ModalAtuacaDeOng;