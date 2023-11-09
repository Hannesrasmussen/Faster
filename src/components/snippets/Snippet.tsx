import React, {useContext, useState } from 'react';
import './Snippets.css';

// Components
import ExpandButton from '../misc/buttons/ExpandButton';
import CopyButton from '../misc/buttons/CopyButton';
import { Context } from '../../context/Context';

import { IoMdTrash } from 'react-icons/io'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

// Interfaces 
import {ISnippet} from '../../data/interfaces' ;

function Snippet(props: ISnippet) {

  const [snippetContent, setSnippetContent] = useState<HTMLElement | null>(null);

  // Context
  const context = useContext(Context);
  if (!context) {
    // In case context is undefined. It never is though.
    return null;
  }

  function expand(active: boolean) {
    if (snippetContent) {
      let x = active ? 'flex' : 'none';
      snippetContent.style.display = x;
    }
  }

  function copy(e: any) {
    navigator.clipboard.writeText(props.code).then(() => {}).catch(err => {
      context?.displayFeedbackModal('error','failed to copy code')
    });
    //context?.displayModal('info','successfully copied code')
    context?.displayFeedbackModal('info',"Copied '" + props.name + "' to the clipboard")
  }

  function remove(){
    context?.displayConfirmModal(
        'Do you want to remove code snippet "' + props.name + '"?',
        onConfirmed
    )
    function onConfirmed() {
      context?.removeSnippet(props.id);
    }
  }

  return (
    <div id={'snippet' + props.id} className='snippet' style={{ backgroundColor: props.color }}>
      <div className='snippet-header'>
        <ExpandButton id={props.id} function={expand}></ExpandButton>
        <p className='snippet-text'>{props.name}</p>
        <CopyButton function={copy} data={props.code}></CopyButton>
      </div>
      <div className='snippet-content'
        ref={(element) => {
        if (element) {
          setSnippetContent(element);
        }
      }}>
        <code id={'snippet-code' + props.id} className='snippet-code'>
          {props.code}
        </code>
        <div className={'snippet-toolbar'}>
            <div className='favorite-button'>
              <MdFavoriteBorder/>
            </div>
            <div className='remove-snippet-button' onClick={remove}>
              <IoMdTrash/>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Snippet;
