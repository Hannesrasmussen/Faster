import React, {useState, useEffect, useContext} from 'react'

// Components
import NormalButton from '../../buttons/NormalButton';

// Context
import { Context } from '../../../../context/Context'

// Interface
import ISnippet from '../../../../data/interfaces'

import './SaveModal.css'

interface ISaveModal{
  code: string,
  close(): void
}

function SaveModal(props: ISaveModal) {

  const [State, setState] = useState<ISnippet>({
    id: 0,
    name: '',
    code: props.code,
    language: '',
    color: 'grey'
  })

  function saveSnippet(){
    if (!context) {
      // In case context is undefined. It never is though.
      return null;
    }
    context.saveSnippetsToLocalStorage(State);
  }

  function updateName(e: any) {
    setState(prevState => ({
      ...prevState,
      name: e.target.value
    }));
  }
  function updateLanguage(e: any) {
    setState(prevState => ({
      ...prevState,
      language: e.target.value
    }));
  }

  const context = useContext(Context);
  
  return (
    <div id={'save-modal'} className='fade'>

      <div id={'save-modal-header'}>
        <NormalButton text='close' function={props.close}/>
      </div>
      
        <div className='save-modal-section'>
          <p className={'save-modal-heading'}>Name</p>
          <input id={'save-modal-name'} onChange={function(e){updateName(e)}} className={'save-modal-input'}></input>

          <p className={'save-modal-heading'}>Programming Language</p>
          <select onChange={function(e){updateLanguage(e)}} id={'save-modal-language'} className={'save-modal-select'}>
            <option>Javascript</option>
            <option>Typescript</option>
            <option>CSS</option>
            <option>HTML</option>
            <option>C#</option>
            <option>C++</option>
          </select>
        </div>

        
        <div className='save-modal-section'>
          <p className={'save-modal-heading'}>Pick a color</p>
          <div id={'save-modal-color-container'}>
            <div id={'save-modal-color-active'} className={'save-modal-color'} style={{backgroundColor: 'rgb(91, 50, 50)'}}></div>
            <div id={''} className={'save-modal-color'} style={{backgroundColor: 'rgb(56, 39, 50)'}}></div>
            <div id={''} className={'save-modal-color'} style={{backgroundColor: 'rgb(120, 60, 50)'}}></div>
            <div id={''} className={'save-modal-color'} style={{backgroundColor: 'rgb(145, 39, 50)'}}></div>
            <div id={''} className={'save-modal-color'} style={{backgroundColor: 'rgb(91, 50, 50)'}}></div>
            <div id={''} className={'save-modal-color'} style={{backgroundColor: 'rgb(91, 50, 50)'}}></div>
            <div id={''} className={'save-modal-color'} style={{backgroundColor: 'rgb(91, 50, 50)'}}></div>
          </div>
        </div>

        <div className='save-modal-section'>
          <p className={'save-modal-heading'}>Preview your code</p>
          <code id={'save-modal-code'}>{props.code}</code>
        </div>

        <div id={'save-modal-footer'}>
          <NormalButton 
            class={'save-button'} 
            text='Save' 
            function={function(){
              if (State.name === ''){
                context?.displayFeedbackModal('warning','The name field is empty!')
                return;
              } else {
                context?.closeSaveModal()
                saveSnippet();
              }
              
            }}
          />
        </div>
    </div>
  )
}

export default SaveModal
