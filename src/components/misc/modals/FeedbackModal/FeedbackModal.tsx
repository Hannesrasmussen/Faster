import React from 'react'

// Components
import CloseButton from '../../buttons/CloseButton'

import './FeedbackModal.css';

interface IModal{
    message: string,
    type: string,
    closeFunction: Function,
    opacity: string
}

function FeedbackModal(props: IModal) {

    return (
        <div className={'feedback-modal fade'} style = {{opacity : props.opacity}} id={'feedback-modal'}>
            <div className={`feedback-modal-card-${props.type}`}></div>
            <div className={'feedback-modal-text'}>
                <span>{props.message}</span>
            </div>
            <CloseButton text='OK' function={props.closeFunction}/>
        </div>
    )
}

export default FeedbackModal
