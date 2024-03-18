import'./Sobre.css'
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import Desenvolvimento from "./CardDesenvolvimento";


function ModalDesenvolvimento() {
    return (
      <>
        <Popup 
        trigger={<button className='border border-ver border-2 rounded-lg p-2 mb-6'> Desenvolvimento Sustentavel</button>} modal>
          <div>
            <Desenvolvimento />
          </div>
        </Popup>
      </>
    );
  }
  
  export default ModalDesenvolvimento;