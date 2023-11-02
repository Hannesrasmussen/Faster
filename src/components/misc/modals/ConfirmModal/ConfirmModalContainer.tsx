// Components
import ConfirmModal from './ConfirmModal';

import './ConfirmModal.css';

interface IConfirmModalContainer{
  message: string
  function: Function
  close():void
}

function ConfirmModalContainer(props: IConfirmModalContainer) {

  return (
    <div id={'confirm-modal-container'}>
      <ConfirmModal message={props.message} function={props.function} close={props.close}/>
    </div> 
  )
}

export default ConfirmModalContainer
