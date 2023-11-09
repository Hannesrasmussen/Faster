import React from 'react'



// Components
import NormalButton from '../../misc/buttons/NormalButton'
import {RxCross2,RxPlus} from 'react-icons/rx'

import './SnippetTags.css'

function SnippetTags() {
    
    return (
        <div id='snippet-tags-container'>
            <ul id='snippet-tags'>
            <div className={'snippet-tag'}>Javascript<div className={'remove-snippet-tag'}><RxCross2/></div></div>
            <div className={'snippet-tag'}>Typescript<div className={'remove-snippet-tag'}><RxCross2/></div></div>
            <div className={'snippet-tag'}>C++<div className={'remove-snippet-tag'}><RxCross2/></div></div>
            </ul>
            <NormalButton class={'add-tag-button'} text={'+'} function={()=>{}}/>
        </div>
    )
}

export default SnippetTags
