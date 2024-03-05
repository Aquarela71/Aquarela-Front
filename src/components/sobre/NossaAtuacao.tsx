import'./Sobre.css'
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import AtuacaoOng from "../sobre/CardAtuacaoOngs";

function ModalAtuacao() {
  return (
    <>
      <Popup 
      trigger={<button className='border border-ver border-2 rounded-lg p-2'>Atuação das ONGs</button>} modal>
        <div>
          < AtuacaoOng/>
        </div>
      </Popup>
    </>
  );
}

export default ModalAtuacao;