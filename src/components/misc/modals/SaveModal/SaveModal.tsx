import React, {useState, useEffect, useContext} from 'react'

// Components
import NormalButton from '../../buttons/NormalButton';
import ColorContainer from './subComponents/ColorContainer';
import Select from '../../select/Select';

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
    color: '#a1a1a1'
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
  function updateColor(color: any) {
    setState(prevState => ({
      ...prevState,
      color: color
    }));
  }

  const context = useContext(Context);
  if (!context) {
    // In case context is undefined. It never is... but.. y'know.. typescript
    return null;
  }
  
  return (
    <div id={'save-modal'} className='fade'>

      <div id={'save-modal-header'}>
        <NormalButton text='close' function={props.close}/>
      </div>
      
        <div className='save-modal-section'>
          <p className={'save-modal-heading'}>Name</p>
          <input id={'save-modal-name'} maxLength={100} onChange={function(e){updateName(e)}} className={'save-modal-input'}></input>

          <p className={'save-modal-heading'}>Programming Language</p>
          <Select defaultValue={context.State.settings.defaultLanguage} className={'save-modal-select'}function={function(e:any){updateLanguage(e)}}>
                <option>Javascript</option>
                <option>Typescript</option>
                <option>CSS</option>
                <option>HTML</option>
                <option>C#</option>
                <option>C++</option>
          </Select>
        </div>

        
        <div className='save-modal-section'>
          <p className={'save-modal-heading'}>Color</p>
          <ColorContainer updateColor={updateColor}/>
        </div>

        <div className='save-modal-section'>
          <p className={'save-modal-heading'}>Code</p>
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
              } else if (State.name.length > 100) {
                context?.displayFeedbackModal('warning','The name is too long!')
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
