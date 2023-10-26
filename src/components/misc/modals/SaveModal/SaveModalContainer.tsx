import React, {useState, useEffect}from 'react'

// Components
import SaveModal from './SaveModal';

import './SaveModal.css';

interface ISaveModalContainer{
  close(): void
}

function SaveModalContainer(props: ISaveModalContainer) {

  return (
    <div id={'save-modal-container'}>
      <SaveModal close={props.close}/>
    </div> 
  )
}

export default SaveModalContainer
