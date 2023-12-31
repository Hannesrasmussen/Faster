import React, {useState, useEffect, useContext} from 'react'

import '../main/Main.css'
import './Pastebox.css'

// Components 
import ToolbarButton from '../misc/buttons/ToolbarButton'

// Context 
import {Context} from '../../context/Context'

// Other
import placeholders from './placeholders/Placeholder'

function Pastebox() {

  const [Code, setCode] = useState<string>('');

  const [Placeholder, setPlaceholder] = useState<string>(placeholders[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let x = document.getElementById('pastebox')!;
      x.classList.remove('fade-out');
      x.classList.add('fade-in');
      let number;
      do {
        number = Math.floor(Math.random() * placeholders.length);
      } while (placeholders[number] === Placeholder);

      setPlaceholder(placeholders[number]);
      setTimeout(function(){
          x.classList.add('fade-out');
          x.classList.remove('fade-in');
      },3000)
    }, 3500);

    return () => {
      clearInterval(intervalId);
    };
  }, [Placeholder]);

  useEffect(() => {
  }, [Code, Placeholder]);

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

  return (
    <div id='pastebox-container'>
      <p className='pastebox-container-heading'>Paste or write some code</p>
      <textarea spellCheck={false} className={'fade-out'}id='pastebox' placeholder={Placeholder} onChange={updateCode}></textarea>
      <div id='pastebox-toolbar'>
        <ToolbarButton text={'Save'} function={onSave}/>
        <ToolbarButton text={'Copy'} function={function(){context?.displayFeedbackModal('error', 'This function has not been added yet')}}></ToolbarButton>
        <ToolbarButton text={'Paste'} function={function(){context?.displayFeedbackModal('error', 'This function has not been added yet')}}></ToolbarButton>
      </div>
    </div>
  )
}

export default Pastebox

