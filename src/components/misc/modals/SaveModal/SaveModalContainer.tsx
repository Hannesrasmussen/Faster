import React from 'react'

// Components
import SaveModal from './SaveModal';

import './SaveModal.css';

interface ISaveModalContainer{
  code: string,
  close(): void
}

function SaveModalContainer(props: ISaveModalContainer) {

  return (
    <div id={'save-modal-container'}>
      <SaveModal code={props.code} close={props.close}/>
    </div> 
  )
}

export default SaveModalContainer
