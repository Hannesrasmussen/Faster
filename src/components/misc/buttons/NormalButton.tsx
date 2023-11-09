import React from 'react'

import './Buttons.css'

import { IconType } from 'react-icons'

interface INormalButton {
  text?: string
  function: Function
  class?: string
}

function NormalButton(props: INormalButton) {
  return (
      <button className={'normal-button ' + props.class} onClick={() => {props.function()}}>
        {props.text}
      </button>
  )
}

export default NormalButton
