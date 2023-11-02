import React, {useState, useEffect, useContext} from 'react'

// Components
import Snippet from './Snippet'
import SearchBar from '../misc/widgets/SearchBar/SearchBar';
import NormalButton from '../misc/buttons/NormalButton';

// Interfaces
import ISnippet from '../../data/interfaces';

// Context
import { Context } from '../../context/Context';

import '../main/Main.css'
import './Snippets.css';

function SnippetContainer() {
  const context = useContext(Context);

  const [Snippets, setSnippets] = useState<ISnippet[] | null>(initSnippets());

  useEffect(() => {
  }, [Snippets, context]);

  if (!context) {
    return null;
  }
  const allSnippets = context.getSnippetsFromLocalStorage();
  

  function initSnippets() {
    if (!context) {
      return null;
    }
    return context.getSnippetsFromLocalStorage();
  }

  function renderSnippets() {
    const snippets = Snippets;
    if (allSnippets.length === 0) {
      return (
        <div>
          <div className='no-snippets-found'>
            Don't want to start from scratch?  
            <NormalButton class={'import-button'} text={'Import codes'} function={importSnippets}/>
          </div>
          
        </div>
      )
    } else {
      if (!snippets) {
        return
      }
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

  function filterSnippets(keyword: string) {
    if (!context) {
        return [];
    }

    const filteredSnippets: ISnippet[] = [];
    
    (context.State.snippets as ISnippet[]).forEach((snippet: ISnippet) => {
        const snippetNameLower = snippet.name.toLowerCase();
        const snippetCodeLower = snippet.code.toLowerCase();
        const keywordLower = keyword.toLowerCase();

        if (snippetNameLower.includes(keywordLower) || snippetCodeLower.includes(keywordLower)) {
            filteredSnippets.push(snippet);
        }
    });
    return filteredSnippets;
  }

  function updateSnippets(search: string) {

    switch (search) {
      case '':
        setSnippets(allSnippets);
        break;
      case undefined:
        // 'No snippets found' or something
        break;
      default:
        var x = filterSnippets(search);
        setSnippets(x);
        break;
    }

  }

  function importSnippets() {
    context?.displayFeedbackModal('error', 'This function has not been added yet')
  }

  return (
    <div id='snippet-container'>
      <p className='snippet-container-heading'>Search for code</p>
      <SearchBar function={updateSnippets} />
      <div id='snippets'>
        {renderSnippets()}
      </div>
    </div>
  );
}

export default SnippetContainer
