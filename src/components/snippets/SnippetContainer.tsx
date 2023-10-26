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

interface IState {
  language : string,
  name: string
}

function SnippetContainer() {

  const [State, setState] = useState<IState>({
    language : '',
    name: ''
  });

  useEffect(() => {
  }, [State]);

  const context = useContext(Context);

  function renderSnippets() {
    const snippets = context?.State.snippets || []; // Default to an empty array if context or snippets is falsy
    return snippets.map((snippet) => {
        // Render logic here (for example, rendering to a UI component)
        if (!snippet) {
            context?.displayFeedbackModal('error', 'Something went terribly wrong..');
            return null;
        } else {
            return (
                <Snippet
                    key={snippet.id} // Don't forget to provide a unique key for React components in an array
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

  function updateSnippets(search: string) {
    if (search == '' || search == undefined) {
    }
  }


  return (
    <div id='snippet-container'>
      <SearchBar function={updateSnippets}/>
      <div id='snippets'>
        {renderSnippets()}
      </div>
    </div>
  )
}

export default SnippetContainer
