import React from 'react'

// Components
import TagsModal from './TagsModal'

import './TagsModal.css'

interface ITagsModalContainer {
    function(bool: boolean): void
}

function TagsModalContainer(props: ITagsModalContainer) {
  return (
    <div id={'tags-modal-container'}>
      <TagsModal/>
    </div> 
  )
}

export default TagsModalContainer
