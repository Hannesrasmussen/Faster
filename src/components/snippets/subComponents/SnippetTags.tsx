import React, {useState, useContext} from 'react'



// Components
import NormalButton from '../../misc/buttons/NormalButton'
import {RxCross2} from 'react-icons/rx'

import './SnippetTags.css'
import { Context } from '../../../context/Context'

function SnippetTags() {
    const context = useContext(Context)

    const [Tags, setTags] = useState<string[]>(context!.getFromLocalStorage('tags'));

    function renderTags() {
        console.log(Tags)
        let x = 0;
        return Tags.map((tags) => {
            return (
                <div key={x++}className={'snippet-tag'}>{tags}<div className={'remove-snippet-tag'}><RxCross2/></div></div>
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
