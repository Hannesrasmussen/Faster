import React, {useState, useEffect, useContext} from 'react'

// Components
import Snippet from './Snippet'
import SearchBar from '../misc/widgets/SearchBar/SearchBar';

// Interface
import ISnippet from '../../data/interfaces';

// Context
import { Context } from '../../context/Context';

import '../main/Main.css'
import './Snippets.css';
import NormalButton from '../misc/buttons/NormalButton';

interface IState {
  active : boolean,
  language : string,
  name: string
}

function SnippetContainer() {

  const [State, setState] = useState<IState>({
    active: true,
    language : '',
    name: ''
  });

  useEffect(() => {
  }, [State]);

  const context = useContext(Context);

  function renderSnippets() {
    const snippets = context?.State.snippets || [];
    if (snippets.length === 0) {
      return (
        <div>
          <div className='no-snippets-found'>
            Don't want to start from scratch?  
            <NormalButton class={'import-button'} text={'Import codes'} function={importSnippets}/>
          </div>
          
        </div>
      )
    } else {
      return snippets.map((snippet) => {
        // Render logic here (for example, rendering to a UI component)
        if (!snippet) {
            context?.displayFeedbackModal('error', 'Something went terribly wrong..');
            return null;
        } else {
            return (
                <Snippet
                    key={snippet.id}
                    id={snippet.id}
                    name={snippet.name}
                    language={snippet.language}
                    code={snippet.code}
                    color={snippet.color}
                />
            );
        }
    });
    }
  }

  function updateSnippets(search: string) {
    if (search == '' || search == undefined) {
    }
  }

  function importSnippets() {
    context?.displayFeedbackModal('error', 'This function has not been added yet')
  }


  return (
    <div id='snippet-container'>
      <p className='snippet-container-heading'>Search for code</p>
      {State.active ?
      <SearchBar function={updateSnippets}/>
      : ''}
      <div id='snippets'>
        {renderSnippets()}
      </div>
    </div>
  )
}

export default SnippetContainer
