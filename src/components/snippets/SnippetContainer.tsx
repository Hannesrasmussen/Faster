import React, {useState, useEffect, useContext} from 'react'

// Components
import Snippet from './Snippet'
import SearchBar from '../misc/widgets/SearchBar/SearchBar';
import NormalButton from '../misc/buttons/NormalButton';
import SnippetTags from './subComponents/SnippetTags';

// Interfaces
import {ISnippet, ITag} from '../../data/interfaces';

// Context
import { Context } from '../../context/Context';

import '../main/Main.css'
import './Snippets.css';

function SnippetContainer() {
  const context = useContext(Context);

  // All Snippets, visible or not.
  const [AllSnippets, setAllSnippets] = useState<ISnippet[]>(context!.getFromLocalStorage('snippets'));
  // Search term. Updates when the search bar's value is changed. Starts off empty.
  const [Search, setSearch] = useState<string>('');
  // All tags currently enabled.
  const [Tags, setTags] = useState<ITag[]>(context!.getFromLocalStorage('tags'));

  useEffect(() => {
    setAllSnippets(context!.getFromLocalStorage('snippets'))
    setTags(context!.getFromLocalStorage('tags'))
  }, [context])
  useEffect(() => {
  }, [AllSnippets, Search]);
  

  function renderSnippets() {

    var tempSnippets: ISnippet[] = [];

    if (AllSnippets!.length === 0) {
      return (
        <div>
          <div className='no-snippets-found'>
            Don't want to start from scratch?  
            <NormalButton class={'import-button'} text={'Import codes'} function={importSnippets}/>
          </div>
        </div>
      )
    };

    if (Search !== '' || undefined) {
        (AllSnippets as ISnippet[]).forEach((snippet: ISnippet) => {
          if (context!.State.settings.includeCodeInSearch === true) {
            const snippetCodeLower = snippet.code.toLowerCase();
            const snippetNameLower = snippet.name.toLowerCase();
            const keywordLower = Search.toLowerCase();
    
            if (snippetNameLower.includes(keywordLower) || snippetCodeLower.includes(keywordLower)) {
              tempSnippets.push(snippet);
            }
          } else {
            const snippetNameLower = snippet.name.toLowerCase();
            const keywordLower = Search.toLowerCase();
    
            if (snippetNameLower.includes(keywordLower)) {
                tempSnippets.push(snippet);
            }
          } 
        });
    } else {
      tempSnippets = AllSnippets
    }

    if(tempSnippets.length === 0) {
      return (
        <div className='no-snippets-found'>
            No code matched search: '{Search}'
        </div>
      )
    } else {
      return tempSnippets!.map((snippet) => {
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
      });
    }
  }

  function importSnippets(){
    context!.displayFeedbackModal('error','This function has not been added yet!')
  }

  let displayClearButton = false;
  if (Tags.length !== 0) {
    displayClearButton = true;
  }

  return (
    <div id='snippet-container'>
      <p className='snippet-container-heading'>Search for code</p>
      <SearchBar 
        function={setSearch} 
      />
      <p className='snippet-container-heading'>Filter with tags</p>
      <SnippetTags tags={Tags} function={()=>{}}/>
      {displayClearButton ? 
      <div id='clear-tags-button' onClick={()=>{
        setTags([])
        context!.clearAllTags();
      }}>Clear all</div>
      : ''}
      <div className='snippet-container-whitespace'></div>
      <p className='snippet-container-heading'>Code snippets</p>
      <div id='snippets'>
        {renderSnippets()}
      </div>
    </div>
  );
}

export default SnippetContainer
