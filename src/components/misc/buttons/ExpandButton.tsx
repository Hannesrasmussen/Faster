import React, {useState, useEffect} from 'react'

import './Buttons.css'

// Components
import {MdExpandMore} from 'react-icons/md';

//Interface

interface IExpandButton {
    id: number,
    function: Function
}

function ExpandButton(props: IExpandButton) {

    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
    }, [isActive]);

    const expand = () => {
        // Toggle the active state when the button is clicked
        setIsActive(!isActive);
        props.function(isActive);
    };

    return (
    <button
      id={`expand-button${props.id}`}
      className={`expand-button${isActive ? '' : '-active'}`}
      onClick={() => expand()}
    >
      <MdExpandMore/>
    </button>
  );
}

export default ExpandButton
