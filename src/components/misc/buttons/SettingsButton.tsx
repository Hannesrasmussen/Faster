import React, {useState, useEffect} from 'react'

import './Buttons.css'

// Components
import {GiHamburgerMenu} from 'react-icons/gi';

//Interface

interface ISettingsButton {
    function: Function
}

function SettingsButton(props: ISettingsButton) {

    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
    }, [isActive]);

    const handleClick = () => {
      setIsActive(!isActive);
      props.function(isActive);
    };

    return (
    <button
      id={`settings-button${isActive ? '' : '-active'}`}
      onClick={function(){handleClick()}}
    >
      <GiHamburgerMenu/>
    </button>
  );
}

export default SettingsButton
