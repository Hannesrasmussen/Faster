import React, { Children, useContext } from 'react'

import '../Settings.css'

interface ISection {
    header: string,
    children: any
}

function Section(props: ISection) {

    return (
        <div className='settings-content-section'>
            <div className={'settings-content-section-header'}>{props.header}</div>
            {props.children}
        </div>
    )
}

export default Section
