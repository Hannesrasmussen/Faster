import React from 'react'

import './Buttons.css'

interface ICloseButton {
  text: string
  function: Function
  class?: string
}

function NormalButton(props: ICloseButton) {
  return (
      <button className={'normal-button ' + props.class} onClick={() => {props.function()}}>
        {props.text}
      </button>
  )
}

export default NormalButton
