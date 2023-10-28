import React from 'react'

interface IColor {
    active: boolean
    function: Function
    color: string
}

function Color(props: IColor) {
  return (
    <div id={props.active ? 'save-modal-color-active' : ''} className={'save-modal-color'} onClick={function(e){props.function(e)}} style={{backgroundColor: props.color}}></div>
  )
}

export default Color
