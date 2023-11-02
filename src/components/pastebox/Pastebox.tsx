import React, {useState, useEffect, useContext} from 'react'

import '../main/Main.css'
import './Pastebox.css'

//Components 
import ToolbarButton from '../misc/buttons/ToolbarButton'

// Context 
import {Context} from '../../context/Context'

function Pastebox() {

  const [Code, setCode] = useState<string>('');

  useEffect(() => {
  }, [Code]);

    // Context
  const context = useContext(Context);

  function updateCode(e:any) {
    setCode(e.target.value)
  }

  function onSave() {
    if (!context) {
      // In case context is undefined. It never is though.
      return null;
    }
    if (Code === '') {
      context.displayFeedbackModal('warning', "You have not entered any code!")
    } else {
      context.displaySaveModal(Code)
    }
    
  }
  
  let placeholder = 'console.log("hello world")';

  return (
    <div id='pastebox-container'>
      <p className='pastebox-container-heading'>Paste or write some code</p>
      <textarea spellCheck={false} id='pastebox' placeholder={placeholder} onChange={updateCode}></textarea>
      <div id='pastebox-toolbar'>
        <ToolbarButton text={'Save'} function={onSave}/>
        <ToolbarButton text={'Copy'} function={function(){context?.displayFeedbackModal('error', 'This function has not been added yet')}}></ToolbarButton>
        <ToolbarButton text={'Paste'} function={function(){context?.displayFeedbackModal('error', 'This function has not been added yet')}}></ToolbarButton>
      </div>
      
    </div>
  )
}

export default Pastebox
