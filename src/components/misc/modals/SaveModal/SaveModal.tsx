import React, {useState, useEffect, useContext} from 'react'

// Components
import NormalButton from '../../buttons/NormalButton';
import Color from './subComponents/Color'

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
  function updateColor(e: any) {
    setState(prevState => ({
      ...prevState,
      color: e.target.style.backgroundColor
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
            <Color active={true} function={updateColor} color={'#a1a1a1'}/>
            <Color active={false} function={updateColor} color={'#ab5757'}/>
            <Color active={false} function={updateColor} color={'#ab8557'}/>
            <Color active={false} function={updateColor} color={'#61ab57'}/>
            <Color active={false} function={updateColor} color={'#57ab96'}/>
            <Color active={false} function={updateColor} color={'#576bab'}/>
            <Color active={false} function={updateColor} color={'#9657ab'}/>
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
