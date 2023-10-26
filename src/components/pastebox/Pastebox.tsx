import React, {useContext} from 'react'

import '../main/Main.css'
import './Pastebox.css'

//Components 
import ToolbarButton from '../misc/buttons/ToolbarButton'

// Context 
import {Context} from '../../context/Context'

function Pastebox() {

  // Context
  const context = useContext(Context);
  if (!context) {
    // In case context is undefined. It never is though.
    return null;
  }

  let placeholder = `#include <iostream>
  int main() {
      std::cout << "This is an example!" << std::endl;
      return 0;
  }`;


  return (
    <div id='pastebox-container'>
      <textarea id='pastebox' placeholder={placeholder}></textarea>
      <div id='pastebox-toolbar'>
        <ToolbarButton text={'Save'} function={function(){context.displaySaveModal()}}/>
        <ToolbarButton text={'Copy'} function={function(){}}></ToolbarButton>
        <ToolbarButton text={'Paste'} function={function(){}}></ToolbarButton>
      </div>
      
    </div>
  )
}

export default Pastebox
