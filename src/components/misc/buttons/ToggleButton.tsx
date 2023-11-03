import React, { useState, useEffect, useContext } from 'react'

import './Buttons.css'
import { Context } from '../../../context/Context'

interface IToolbarButton {
    active: boolean
    function: Function
}

function ToggleButton(props: IToolbarButton) {
    const [active, setActive] = useState<boolean>(props.active);

    useEffect(() => {
    }, [active]);

    function toggle(){
        setActive(!active)
        props.function();
    }

    return (
        <div className={'toggle-button toggle-button-' + (active ? 'active' : 'inactive')}
            onClick={toggle}
        >
            <div className={'toggle-button-ball'}/>
        </div>
    )
}

export default ToggleButton
