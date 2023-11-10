import React, {useState, useContext} from 'react'

// Components
import NormalButton from '../../misc/buttons/NormalButton'
import {RxCross2} from 'react-icons/rx'

// Interface
import { ITag } from '../../../data/interfaces'

// Context
import { Context } from '../../../context/Context'

import './SnippetTags.css'

interface ISnippetTags {
    tags: ITag[]
    function: Function
}

function SnippetTags(props: ISnippetTags) {
    const context = useContext(Context)

    function renderTags() {
        console.log(props.tags)
        return props.tags.map((tags) => {
            return (
                <div id={'tag-' + tags.id} className={'snippet-tag'}>{tags.name}<div className={'remove-snippet-tag'}><RxCross2/></div></div>
            );
        });
    }
    
    return (
        <div id='snippet-tags-container'>
            <ul id='snippet-tags'>
                {renderTags()}
            </ul>
            <NormalButton class={'add-tag-button'} text={'Add tags'} function={()=>{}}/>
        </div>
    )
}

export default SnippetTags
