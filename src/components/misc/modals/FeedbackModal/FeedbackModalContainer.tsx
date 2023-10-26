import React, {useState, useEffect}from 'react'

// Components
import {IoMdInformationCircleOutline} from 'react-icons/io'
import FeedbackModal from './FeedbackModal';

import './FeedbackModal.css';

interface IModalContainer{
  active : boolean,
  message : string,
  type: string,
  close: Function,
  modalOpacity: string
}

function FeedbackModalContainer(props: IModalContainer) {

  return (
    <div id={'feedback-modal-container'}>
      {props.active ? 
      <FeedbackModal closeFunction={props.close} opacity={props.modalOpacity} message={props.message} type={props.type}/> 
      : ''}
    </div>
  )
}

export default FeedbackModalContainer
