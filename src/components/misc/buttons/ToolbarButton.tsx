import React from 'react'

import './Buttons.css'

interface IToolbarButton {
    text: string,
    function: Function
}

function ToolbarButton(props: IToolbarButton) {
  return (
    <button className={'toolbar-button'} onClick={function(){props.function()}}>
        {props.text}
    </button>
  )
}

export default ToolbarButton
