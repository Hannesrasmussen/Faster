import React, {useEffect, useContext} from 'react'

// Components
import NormalButton from '../misc/buttons/NormalButton'
import Section from './subComponents/Section';

// Context
import { Context } from '../../context/Context';

import './Settings.css'
import Select from '../misc/select/Select';
import ToggleButton from '../misc/buttons/ToggleButton';

interface ISettings {
  active: boolean;
}

function Settings(props: ISettings ) {
  
  const context = useContext(Context);

  useEffect(() => {
  }, [context]);

  if (!context) {
    // In case context is undefined. It never is... but.. y'know.. typescript
    return null;
  }

  function containerClick(e: any) {
    if (e.target.id === 'settings-container') {
      context?.closeSettings();
    }
  }

  function changeDefaultLanguage(e: any) {
    context?.saveSettingsToLocalStorage('defaultLanguage', e.target.value)
  }

  function toggleFeedbackModal() {
    context?.toggleModals(!context.State.settings.modalsActive)
  }

  return (
    <div id='settings-container' onClick={function(e){containerClick(e)}}>
      <div id='settings'>
        <div id='settings-header'>
          <NormalButton text={'close'} function={function(){
            context.closeSettings();
          }}></NormalButton>
        </div>
        <div id='settings-content'>

          <Section header={'General Settings'}>
            <div className='settings-content-subsection'>
              <Select defaultValue={context.State.settings.defaultLanguage} function={changeDefaultLanguage}>
                <option>Javascript</option>
                <option>Typescript</option>
                <option>CSS</option>
                <option>HTML</option>
                <option>C#</option>
                <option>C++</option>
              </Select>
              <p>Select default programming language</p>
            </div>
          </Section>
          <Section header={'Other Settings'}>
            <div className='settings-content-subsection'>
              <ToggleButton active={context.State.settings.modalsActive} function={toggleFeedbackModal}></ToggleButton>
              <p>Turn {context.State.settings.modalsActive ? 'off ' : 'on '} feedback?</p>
            </div>
          </Section>

          <div id={'settings-name-card'}>
            <p>This app was created by <a href='https://hannesrasmussen.com' target={'_'}>Hannesrasmussen.com</a> (2023)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
