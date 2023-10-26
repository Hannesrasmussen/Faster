import React from 'react'

interface ICloseButton {
  text: string
  function: Function
}

function CloseButton(props: ICloseButton) {
  return (
      <button className='close-button' onClick={() => {props.function()}}>
        {props.text}
      </button>
  )
}

export default CloseButton
