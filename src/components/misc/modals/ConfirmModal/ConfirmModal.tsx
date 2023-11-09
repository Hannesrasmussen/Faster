import React, {useContext} from 'react'

// Components
import NormalButton from '../../buttons/NormalButton';

import './ConfirmModal.css'

interface IConfirmModal{
  message: string,
  function: Function,
  close(): void
}

function ConfirmModal(props: IConfirmModal) {

  return (
    <div id={'confirm-modal'}>
      <p>{props.message}</p>
      <div id={'confirm-modal-buttons'}>
        <NormalButton function={props.close} text={'Cancel'}/>
        <NormalButton function={function(){
          props.close()
          props.function();
        }} text={'Confirm'}/>
      </div>
    </div>
  )
}

export default ConfirmModal
