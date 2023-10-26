import React, {useContext, useState } from 'react';
import './Snippets.css';

// Components
import ExpandButton from '../misc/buttons/ExpandButton';
import CopyButton from '../misc/buttons/CopyButton';
import { Context } from '../../context/Context';

// Interfaces 
import ISnippet from '../../data/interfaces' ;

function Snippet(props: ISnippet) {

  const [snippetCodeElement, setSnippetCodeElement] = useState<HTMLElement | null>(null);

  // Context
  const context = useContext(Context);
  if (!context) {
    // In case context is undefined. It never is though.
    return null;
  }

  function expand(active: boolean) {
    if (snippetCodeElement) {
      let x = active ? 'block' : 'none';
      snippetCodeElement.style.display = x;
    }
  }

  function copy(e: any) {
    navigator.clipboard.writeText(props.code).then(() => {}).catch(err => {
      context?.displayFeedbackModal('error','failed to copy code')
    });
    //context?.displayModal('info','successfully copied code')
    context?.displayFeedbackModal('info',"Copied '" + props.name + "' to the clipboard")
  }

  return (
    <div id={'snippet' + props.id} className='snippet' style={{ backgroundColor: props.color }}>
      <div className='snippet-header'>
        <ExpandButton id={props.id} function={expand}></ExpandButton>
        <p className='snippet-text'>{props.name}</p>
        <CopyButton function={copy} data={props.code}></CopyButton>
      </div>
      <code
        ref={(element) => {
          if (element) {
            setSnippetCodeElement(element);
          }
        }}
        id={'snippet-code' + props.id}
        className='snippet-code'
      >
        {props.code}
      </code>
    </div>
  );
}

export default Snippet;
