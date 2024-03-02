import React from 'react';
import FormularioProduto from '../formularioProduto/FormularioProduto';

import 'reactjs-popup/dist/index.css';


import './ModalProduto.css'
import Popup from 'reactjs-popup';

function ModalProduto() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 hover:bg-lar hover:text-white'>Novo Produto</button>} modal>
        <div>
          <FormularioProduto />
        </div>
      </Popup>
    </>
  );
}

export default ModalProduto;