import React, { useContext } from 'react';

// Context
import { Context } from '../../context/Context';

// Components
import SnippetContainer from '../snippets/SnippetContainer'
import Pastebox from '../pastebox/Pastebox';
import SettingsButton from '.././misc/buttons/SettingsButton'
import FeedbackModalContainer from '../misc/modals/FeedbackModal/FeedbackModalContainer';

import './Main.css';
import SaveModalContainer from '../misc/modals/SaveModal/SaveModalContainer';

function Main() {
  const context = useContext(Context);
  if (!context) {
    // In case context is undefined. It never is... but.. y'know.. typescript
    return null;
  }

  /* Main should not have functions! put them in Context instead! */

  return (
    <div>
      {context.State.saveModal.modalActive ? 
      <SaveModalContainer
          close={context.closeSaveModal}
          code={context.State.saveModal.code}/>
      : ''}
      {context.State.feedbackModal.modalActive ? 
      <FeedbackModalContainer 
        close={context.closeFeedbackModal}
        active={context.State.feedbackModal.modalActive}
        type={context.State.feedbackModal.modalType}
        message={context.State.feedbackModal.modalMessage}
        modalOpacity={context.State.feedbackModal.modalOpacity}/> 
      : ''}

      <header id='site-header'>
        <div></div>
        <p id='header-title'>FASTER</p>
        {/* <img id='site-logo' alt='site logo' src={logo}/> */}
        <SettingsButton 
          function={context.openSettings}
        />
      </header>
      <div id='content'>
        <SnippetContainer/>
        <Pastebox/>
      </div>
    </div>
  )
}

export default Main;
