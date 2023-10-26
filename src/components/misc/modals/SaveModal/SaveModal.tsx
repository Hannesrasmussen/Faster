import React, {useState, useEffect, useContext} from 'react'

// Components
import CloseButton from '../../buttons/NormalButton';

import './SaveModal.css'

interface ISaveModal{
  close(): void
}

function SaveModal(props: ISaveModal) {

  return (
    <div id={'save-modal'}>
      <CloseButton text='close' function={props.close}/>
      <input id={'save-modal-name'}></input>
      <select id={'save-modal-language'}>
        <option>Javascript</option>
        <option>Typescript</option>
        <option>C#</option>
        <option>C++</option>
      </select>
      <input id={'save-modal-code'}></input>
    </div>
  )
}

export default SaveModal
