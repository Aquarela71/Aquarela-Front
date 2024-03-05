import 'reactjs-popup/dist/index.css';
import './Contato.css'
import Popup from 'reactjs-popup';
import ContatoCard from '../contato/Contato';

function ModalContato() {
  return (
    <>
      <Popup 
      trigger={<button className=' hover:underline'>Contato</button>} modal>
        <div>
          <ContatoCard/>
        </div>
      </Popup>
    </>
  );
}

export default ModalContato;