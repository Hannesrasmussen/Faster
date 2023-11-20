import React from 'react'

import './TagsModal.css'

function TagsModal() {
  return (
    <div id={'save-modal'} className='fade'>
        <div className='tags-modal-section'>   
            <input></input>
        </div>
        <div className='tags-modal-section'>
             <ul id='tags-modal-tags-list'></ul>
        </div>
    </div>
  )
}

export default TagsModal
