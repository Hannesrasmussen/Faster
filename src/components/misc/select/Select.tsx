import React from 'react'

import './Select.css'

interface ISelect {
    className?: string
    defaultValue?: any
    function: Function
    children: any
}

function Select(props: ISelect) {
    let className: string;
    if (props.className) {
        className = props.className;
    } else {
        className = 'default-select'
    }

  return (
    <select defaultValue={props.defaultValue} onChange={function(e){props.function(e)}} className={className}>
        {props.children}
    </select>
  )
}

export default Select
