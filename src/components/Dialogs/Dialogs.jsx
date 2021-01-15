import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialog-reducer';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id} />
    });

    let messagesElements = state.messages.map((message) => {
        return <Message message={message.message} />
    });

    let newMessageBody = state.newMessageBody;

    let onMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);   
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <textarea value={newMessageBody}
                    onChange={onNewMessageChange} 
                    placeholder="Enter your message"></textarea>
                </div>
                <div>
                    <button onClick={onMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;