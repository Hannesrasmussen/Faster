import React, {useState, useRef} from 'react'

// Components
import {GoCopy} from 'react-icons/go';

interface ICopyButton {
    function: Function
    data: any
}

function CopyButton(props: ICopyButton) {
    const copyButton = useRef<HTMLButtonElement | null>(null);
    
    return (
        <button ref={copyButton} className='copy-button' onClick={function(){
            props.function()
        }
            }>
            <GoCopy/>
        </button>
    )
}

export default CopyButton
