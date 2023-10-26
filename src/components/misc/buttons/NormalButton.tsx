import React from 'react'

import './Buttons.css'

interface ICloseButton {
  text: string
  function: Function
}

function NormalButton(props: ICloseButton) {
  return (
      <button className='normal-button' onClick={() => {props.function()}}>
        {props.text}
      </button>
  )
}

export default NormalButton
