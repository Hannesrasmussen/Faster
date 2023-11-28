import React, { useState, useEffect, useContext } from 'react'

// Components
import NormalButton from '../../buttons/NormalButton'

// Context
import { Context } from '../../../../context/Context'

// Interfaces 
import { ITag } from '../../../../data/interfaces'

import './TagsModal.css'

function TagsModal() {

  const [Tag, setTag] = useState<ITag>({
    id: 0,
    name: ''
  });

    useEffect(() => {
    }, [Tag]);

  const context = useContext(Context);

  function save() {
    context!.saveTagsToLocalStorage(Tag);
    close();
  }

  function close() {
    context!.toggleTagsModal(false)
  }

  function updateName(e: any) {
    setTag(prevState => ({
      ...prevState,
      name: e.target.value
  }));
  }

  return (
    <div id={'save-modal'} className='fade'>
        <div className='tags-modal-section'>   
            <p className={'save-modal-heading'}>New Tag NOT FINAL</p>
            <input className='tags-modal-input' maxLength={50} onChange={function(e){updateName(e)}} ></input>
        </div>
        {/* <div className='tags-modal-section'>
             <ul id='tags-modal-tags-list'></ul>
        </div> */}
        <NormalButton text={'Test'} function={save}/>
        <NormalButton text={'Cancel'} function={close}/>
    </div>
  )
}

export default TagsModal
