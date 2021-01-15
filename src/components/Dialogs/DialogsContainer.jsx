import React from 'react';
import Dialogs from './Dialogs'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialog-reducer';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (<Dialogs 
        updateNewMessageBody={onNewMessageChange} 
        sendMessage={onMessageClick}
        dialogsPage={state} 
        />)
}

export default DialogsContainer;